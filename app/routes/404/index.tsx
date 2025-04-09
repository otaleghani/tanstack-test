import { createFileRoute, notFound, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

const throwNotFound = createServerFn({ method: "GET" }).handler(() => {
  if (Math.random() < 0.5) {
    throw notFound();
  }

  return "Gennario"
})

export const Route = createFileRoute('/404/')({
  component: RouteComponent,
  loader: async () => {
    const stuff = await throwNotFound();
    return stuff
  },
  notFoundComponent: () => (<>OOPS</>)
})

function RouteComponent() {
  const router = useRouter();
  const state = Route.useLoaderData();
  return <div>Hello "/404/, {state}"!</div>
}
