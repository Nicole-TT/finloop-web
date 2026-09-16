import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { Readable } from 'node:stream';
import chat from './api/chat';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'FINLOOP_');
  if (env.FINLOOP_AI_API_KEY) process.env.FINLOOP_AI_API_KEY = env.FINLOOP_AI_API_KEY;
  return {
    plugins: [tailwindcss(), {
      name: 'local-finloop-api',
      configureServer(server) {
        server.middlewares.use('/api/chat', async (req, res) => {
          const controller = new AbortController();
          res.on('close', () => { if (!res.writableEnded) controller.abort(); });
          try {
            const chunks: Buffer[] = [];
            let size = 0;
            for await (const chunk of req) {
              size += chunk.length;
              if (size > 256000) { res.writeHead(413); res.end(); return; }
              chunks.push(Buffer.from(chunk));
            }
            const headers = new Headers();
            for (const [name, value] of Object.entries(req.headers)) {
              if (value) headers.set(name, Array.isArray(value) ? value.join(', ') : value);
            }
            const request = new Request('http://localhost/api/chat', {
              method: req.method,
              headers,
              body: ['GET', 'HEAD'].includes(req.method || 'GET') ? undefined : Buffer.concat(chunks),
              signal: controller.signal,
            });
            const response = await chat.fetch(request);
            res.writeHead(response.status, Object.fromEntries(response.headers));
            if (response.body) {
              const stream = Readable.fromWeb(response.body as never);
              stream.on('error', () => res.destroy());
              stream.pipe(res);
            } else res.end();
          } catch {
            if (!res.headersSent) res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: '本地 AI 服务请求失败。' }));
          }
        });
      },
    }],
  };
});
