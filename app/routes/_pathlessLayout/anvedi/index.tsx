import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathlessLayout/anvedi/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_pathlessLayout/anvedi/"!</div>
}
