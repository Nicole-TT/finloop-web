// Extract only the answer string while the surrounding JSON is still arriving.
export function readPartialAnswer(content: string): string {
  const match = /"answer"\s*:\s*"/.exec(content);
  if (!match) return '';
  let result = '';
  const escapes: Record<string, string> = { '"': '"', '\\': '\\', '/': '/', n: '\n', r: '\r', t: '\t', b: '\b', f: '\f' };
  for (let index = match.index + match[0].length; index < content.length; index++) {
    const char = content[index];
    if (char === '"') break;
    if (char !== '\\') { result += char; continue; }
    const escaped = content[++index];
    if (!escaped) break;
    if (escaped === 'u') {
      const hex = content.slice(index + 1, index + 5);
      if (!/^[0-9a-f]{4}$/i.test(hex)) break;
      result += String.fromCharCode(parseInt(hex, 16));
      index += 4;
    } else if (escaped in escapes) result += escapes[escaped];
    else break;
  }
  // Avoid rendering a lone surrogate when a Unicode character spans chunks.
  return result.replace(/[\uD800-\uDBFF]$/, '');
}

export async function readAssistantStream(response: Response, onContent: (content: string) => void): Promise<string> {
  if (!response.body) throw new Error('接口没有返回可读取的回答流，请重试。');
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let dataLines: string[] = [];
  let content = '';
  let done = false;
  let finished = false;
  const startedAt = performance.now();
  let events = 0;
  let firstMs: number | undefined;
  let lastMs: number | undefined;
  let reads = 0;

  function dispatch() {
    const data = dataLines.join('\n');
    dataLines = [];
    if (!data.trim()) return;
    if (data.trim() === '[DONE]') { done = true; return; }
    const event = JSON.parse(data);
    if (event.error) throw new Error('AI 服务返回错误，请稍后重试。');
    const choice = event.choices?.[0];
    const delta = choice?.delta?.content;
    if (typeof delta === 'string') {
      if (delta) {
        events++;
        lastMs = Math.round(performance.now() - startedAt);
        firstMs ??= lastMs;
      }
      content += delta;
      onContent(content);
    }
    if (choice?.finish_reason) {
      if (choice.finish_reason !== 'stop') throw new Error('回答未完整生成，请重试或缩小问题范围。');
      finished = true;
    }
  }

  function consumeLine(line: string) {
    if (!line) dispatch();
    else if (line.startsWith('data:')) dataLines.push(line.slice(5).replace(/^ /, ''));
  }

  try {
    while (!done) {
      const chunk = await reader.read();
      if (!chunk.done) reads++;
      buffer += decoder.decode(chunk.value, { stream: !chunk.done });
      let newline: number;
      while (!done && (newline = buffer.indexOf('\n')) !== -1) {
        consumeLine(buffer.slice(0, newline).replace(/\r$/, ''));
        buffer = buffer.slice(newline + 1);
      }
      if (chunk.done) {
        if (buffer) consumeLine(buffer.replace(/\r$/, ''));
        if (dataLines.length) dispatch();
        break;
      }
    }
    if (!done && !finished) throw new Error('回答连接中断，请重试。');
    return content;
  } finally {
    if (import.meta.env.DEV) console.debug('[Finloop AI stream]', JSON.stringify({
      reads, events, firstMs, lastMs,
    }));
    await reader.cancel().catch(() => undefined);
    reader.releaseLock();
  }
}
