// Vercel Edge Middleware: 用浏览器自带的 Basic Auth 弹窗做整站密码保护。
// 用户名/密码通过 Vercel 项目的环境变量 BASIC_AUTH_USER / BASIC_AUTH_PASSWORD 配置，
// 不要把真实账号密码写死在代码里。

export const config = {
  matcher: '/:path*',
};

export default function middleware(request: Request) {
  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASSWORD;

  // 未配置环境变量时不拦截，避免漏配导致网站无法访问。
  if (!user || !pass) {
    return;
  }

  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    const base64Credentials = authHeader.split(' ')[1] || '';
    const [inputUser, inputPass] = atob(base64Credentials).split(':');

    if (inputUser === user && inputPass === pass) {
      return;
    }
  }

  return new Response('需要登录才能访问', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Finloop"',
    },
  });
}