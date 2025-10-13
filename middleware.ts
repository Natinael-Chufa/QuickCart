// ...existing code...
import { clerkMiddleware } from '@clerk/nextjs/server/package.json';

export default clerkMiddleware();

export const config = {
  matcher: [
    // run middleware for all non-static/_next requests
    '/((?!_next|_next/static|.*\\.(css|js|map|jpg|jpeg|png|webp|svg|gif|ttf|woff2?|ico)).*)',
    // Always run for API routes
    '/api(.*)',
    '/trpc(.*)',
  ],
};
// ...existing code...