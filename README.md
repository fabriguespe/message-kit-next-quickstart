## Message Kit Nextjs Starter

Deploy messagekit in NextJs and Vercel

> Note: This demo logs only the first message. For full message streaming, consider using the JavaScript SDK.

## Problem

When using the `@xmtp/mls-client-bindings-node` module in a Next.js application, you may encounter an error indicating that the module is not supported in the browser. This is because it is a Node.js binary module intended for server-side use only.

The error arises when attempting to use server-side modules in a client-side environment. In Next.js, client-side code runs in the browser, which cannot execute Node.js binary modules.

## Approach

To resolve this issue, the module should be used exclusively in server-side code. Here's how we handle it:

1. **API Route Declaration**:

   - We declare and use the module within an API route (`pages/api/startRunner.js`).
   - This ensures the module is executed on the server side, where Node.js is supported.

2. **Server-Side Logic**:
   - The API route handles requests to start the message runner, utilizing the module without exposing it to the client-side environment.

By confining the use of the `@xmtp/message-kit` module to server-side API routes, we avoid browser-related errors and maintain proper functionality in the Next.js application.
