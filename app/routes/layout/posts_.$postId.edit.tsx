import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/layout/posts_/$postId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/layout/posts_/$postId/edit"!</div>
}
