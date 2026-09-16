import { buildAssistantSystemPrompt } from '../src/data/finloopAssistantKnowledge';

export const maxDuration = 120;

function error(message: string, status: number) {
  return Response.json({ error: message }, { status, headers: { 'Cache-Control': 'no-store' } });
}

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') return error('仅支持 POST 请求。', 405);
    const key = process.env.FINLOOP_AI_API_KEY?.trim();
    if (!key) return error('AI 服务尚未配置，请联系网站管理员。', 503);
    if (!request.headers.get('content-type')?.includes('application/json')) return error('请求格式不正确。', 415);
    let payload;
    try {
      const text = await request.text();
      if (text.length > 64000) return error('对话内容过长，请缩短问题。', 413);
      payload = JSON.parse(text);
    } catch { return error('请求格式不正确。', 400); }
    if (!payload || !Array.isArray(payload.messages) || !payload.messages.length || payload.messages.length > 21) {
      return error('对话内容不正确。', 400);
    }
    const messages: Array<{ role: string; content: string }> = [];
    for (const item of payload.messages) {
      if (!item || !['user', 'assistant'].includes(item.role) || typeof item.content !== 'string' || !item.content.trim() || item.content.length > 8000) {
        return error('消息格式不正确或单条内容超过 8000 字。', 400);
      }
      messages.push({ role: item.role, content: item.content });
    }
    if (messages[messages.length - 1].role !== 'user') return error('最后一条消息必须是用户问题。', 400);
    const path = typeof payload.currentPath === 'string' ? payload.currentPath.slice(0, 500) : '/';
    try {
      const upstream = await fetch('https://aigw.finloopai.ai/v1/chat/completions', {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'gpt-5.5', stream: true, messages: [{ role: 'system', content: buildAssistantSystemPrompt(path) }, ...messages] }),
        signal: AbortSignal.any([request.signal, AbortSignal.timeout(85000)]),
      });
      if (!upstream.ok) {
        await upstream.body?.cancel();
        if (upstream.status === 401 || upstream.status === 403) return error('AI 服务鉴权失败，请管理员检查服务端 Key 和模型权限。', 502);
        if (upstream.status === 429) return error('AI 服务繁忙或额度不足，请稍后重试。', 429);
        return error('AI 服务暂时不可用，请稍后重试。', 502);
      }
      if (!upstream.body || !upstream.headers.get('content-type')?.includes('text/event-stream')) {
        await upstream.body?.cancel();
        return error('AI 服务未返回预期的流式响应。', 502);
      }
      return new Response(upstream.body, { headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, no-transform',
        'X-Content-Type-Options': 'nosniff',
      } });
    } catch {
      return error('AI 服务连接失败或超时，请稍后重试。', 504);
    }
  },
};
