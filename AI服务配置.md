# Finloop AI 服务配置

## 本地开发

1. 在项目根目录 `.env.local` 填入 `FINLOOP_AI_API_KEY=你的Key`（不要加 VITE_ 前缀）。
2. 运行 `npx vercel dev`，首次按提示登录并关联当前 Vercel 项目。
3. 使用终端显示的本地地址访问网站。普通 `npm run dev` 仅启动前端，不能处理 `/api/chat`。
4. 环境变量修改后重启开发服务。若所用 Vercel CLI 版本没有加载本地文件，可在终端执行 `set -a; source .env.local; set +a` 后再运行 `npx vercel dev`，勿把 Key 写进命令参数。

## Vercel

在项目 Settings → Environment Variables 添加 `FINLOOP_AI_API_KEY`，选择 Production 及需要的 Preview 环境，然后重新部署。

接口文件：`api/chat.ts`。使用 Node.js 22 或更新版本。模型固定为 `gpt-5.5`，请求地址固定为 Finloop 网关。系统提示词在服务端添加，客户端只能传 user/assistant 历史消息及当前页面。浏览器不再保存或传递 Key，旧版 localStorage Key 会在页面加载后清除。

`vercel.json` 优先匹配静态资源和函数，仅普通页面回退至 index.html。服务端直接返回上游 SSE 流，不等待完整回答。

## 验证

在浏览器发送一个问题，网络面板应显示 POST /api/chat，响应 Content-Type 为 text/event-stream，请求中没有 Authorization 或 Key。验证逐步显示回答及完成后的推荐链接。

503 表示缺少服务端配置；502 鉴权提示表示上游拒绝服务端凭据或模型权限；429 表示上游限流或额度不足；504 表示连接失败或超时。接口不会把上游原始错误正文或 Key 返回给用户。

目前限制最多 21 条消息、单条 8000 字、总请求正文 64000 字符；前端保留最近 10 轮成功对话。尚未接入跨实例限流或用户鉴权，公开使用时需在 Vercel Firewall / 网关配置限流及额度控制。输入长度限制不等于调用次数限制。

本次没有配置真实 Key、执行部署或进行真实服务端联调。
