import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/layout/posts')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/layout/posts"!
      <Link
        // activeOptions={{ exact: true }}
        to='/layout/posts/$postId'
        params={{
          postId: "1"
        }}
        search={{
          sus: "sas",
          ses: "sus"
        }}
        hash="section"
        activeProps={{
          style: {
            fontWeight: "bold",
          },
        }}
      >
        Vai al post 1
      </Link>
      <Outlet />
    </div>
  )
}
