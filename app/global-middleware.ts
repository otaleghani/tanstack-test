import { createMiddleware, registerGlobalMiddleware } from "@tanstack/react-start";

export const authMiddleware = createMiddleware().server(async ({ next }) => {
  console.log("Authorizing...")
  const result = await next({ context: { apikey: "susususu" } });
  return result;
})

registerGlobalMiddleware({
  middleware: [authMiddleware]
})
