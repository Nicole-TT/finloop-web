// Vercel Edge Middleware: 用浏览器自带的 Basic Auth 弹窗做整站密码保护。
// 密码通过 Vercel 项目的环境变量 password 配置（不校验用户名），
// 不要把真实密码写死在代码里。

export const config = {
  matcher: '/:path*',
};

export default function middleware(request: Request) {
  const sitePassword = process.env.password;

  // 未配置环境变量时不拦截，避免漏配导致网站无法访问。
  if (!sitePassword) {
    return;
  }

  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    const base64Credentials = authHeader.split(' ')[1] || '';
    const [, inputPass] = atob(base64Credentials).split(':');

    if (inputPass === sitePassword) {
      return;
    }
  }

  return new Response('需要密码才能访问', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Finloop"',
    },
  });
}