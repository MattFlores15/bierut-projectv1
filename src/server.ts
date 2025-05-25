// src/server.ts
import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs'; // Netlify-specific import

const angularAppEngine = new AngularAppEngine();

// This is the core handler that Netlify's runtime will call.
// It receives a standard Web Request object and is expected to return a Web Response object.
export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext(); // Retrieve Netlify-specific context (e.g., geo, deploy ID)

  // --- Optional: Example API endpoints (uncomment and define as necessary) ---
  // If you need serverless API routes that *don't* render Angular, define them here.
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from the API' });
  // }
  // --- End Optional API endpoints ---

  // Handle the request by rendering the Angular application.
  // The 'context' object here is provided by Netlify's runtime.
  const result = await angularAppEngine.handle(request, context);

  // If Angular doesn't render a response (e.g., for a non-existent route), return a 404.
  return result || new Response('Not found', { status: 404 });
}

/**
 * The request handler used by the Angular CLI (dev-server and during build) or Firebase Cloud Functions.
 * This ensures your local `ng serve` still works for SSR.
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);