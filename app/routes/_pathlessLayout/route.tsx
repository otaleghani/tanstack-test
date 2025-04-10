import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathlessLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    Hello "/_pathlessLayout"!
    <Outlet />
  </div>
}
