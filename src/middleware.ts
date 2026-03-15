import { defineMiddleware } from 'astro:middleware';

const protectedRoutes = ['/dashboard', '/connecting', '/playbook', '/developers', '/task-log'];
const publicRoutes = ['/clients', '/login', '/api/auth'];

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  
  // Check if route is protected
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route));
  const isPublic = publicRoutes.some(route => pathname.startsWith(route));

  // Allow API routes and public pages
  if (pathname.startsWith('/api') || isPublic) {
    return next();
  }

  // Check for protected routes
  if (isProtected) {
    const authCookie = context.cookies.get('portal_auth');

    if (!authCookie || authCookie.value !== 'pin_030126') {
      return context.redirect('/login');
    }
  }

  return next();
});
