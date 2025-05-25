// src/server.ts
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  // isMainModule, // No longer needed for Netlify export pattern
  writeResponseToNodeResponse, // Still useful if you manage response directly
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Context } from 'node:vm';


const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// Serve static files from /browser
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

// Handle all other requests by rendering the Angular application.
// This is your core Angular Universal rendering logic
const universalHandler = createNodeRequestHandler(app);

// Remove the `if (isMainModule(import.meta.url))` block
// and the app.listen() call, as Netlify manages the server.

// NEW: Export a Netlify-compatible handler function
// This handler will receive Node.js Request/Response objects,
// and optionally the Netlify Context for serverless functions.
// If using Edge Functions, the signature might differ slightly,
// but the principle of exporting a callable function remains.
export default async function handler(req: any, res: any, context?: Context) {
  // Pass the Node.js request and response objects to your Angular handler
  await universalHandler(req, res);

  // Optional: If you want to access Netlify context within your Angular app (e.g., in @Inject('netlify.context')),
  // you might need to ensure your Netlify build process correctly injects these.
  // The provided snippet in your earlier question suggests Netlify handles this.
  // You might also need to explicitly pass context if you want it *within* the Node.js handler
  // that createNodeRequestHandler sets up, but generally, the Angular Universal adapter
  // is designed to make those platform-specific injections happen deeper.
}

// Ensure you export the default handler.
// The `reqHandler` export is primarily for Angular CLI's dev server/build process,
// not typically the final serverless function export.