import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/layout/1/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/layout/1/"!</div>
}
