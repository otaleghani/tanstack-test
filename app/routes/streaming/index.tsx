import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start';

export const Route = createFileRoute('/streaming/')({
  component: RouteComponent,
  loader: async () => await streamEvent()
})

const streamEvent = createServerFn({ method: "GET", response: "raw" }).handler(async ({ signal }) => {
  const stream = new ReadableStream({
    async start(controller) {
      controller.enqueue(new TextEncoder().encode("Connection established"))

      let count = 0;
      const interval = setInterval(() => {
        if (signal.aborted) {
          clearInterval(interval);
          controller.close();
          return;
        };

        controller.enqueue(
          new TextEncoder().encode(`Event ${++count}: ${new Date().toISOString()}\n`)
        );

        if (count >= 10) {
          clearInterval(interval);
          controller.close();
        }
      }, 1000)

      signal.addEventListener("abort", () => {
        clearInterval(interval);
        controller.close();
      })
    }
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    }
  })
})

function RouteComponent() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <div>{}</div>
  )
}
