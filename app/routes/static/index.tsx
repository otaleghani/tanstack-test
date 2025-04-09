import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

// here should be createServerFn( { type: "static "}), but it throws an error
const serverFn = createServerFn().handler(async () => {
  return "HELLO"
})

const anotherServerFn = createServerFn().handler(async () => {
  return ", WORLD"
})

export const Route = createFileRoute('/static/')({
  component: RouteComponent,
  loader: async () => {
    const one = await serverFn()
    const two = await anotherServerFn()
    return {
      one: one,
      two: two
    }
  }
})

function RouteComponent() {
  const state = Route.useLoaderData();

  return <div>
    Hello "/static/"!
    <div>{state.one}{state.two}</div>
  </div>
}
