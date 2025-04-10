import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    Hello "/layout/_layout"!
    <Outlet />
  </div>
}
