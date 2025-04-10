import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { zodValidator, fallback } from '@tanstack/zod-adapter'

const searchSchema = z.object({
  sus: fallback(z.string(), "").default(""),
  ses: fallback(z.string(), "").default("")
})

export const Route = createFileRoute('/layout/posts/$postId')({
  validateSearch: zodValidator(searchSchema),
  component: RouteComponent,
})

function RouteComponent() {
  const params = Route.useParams()
  const { sus, ses } = Route.useSearch()

  return (
    <div id='section'>
      Hello "/layout/posts/$postId"!
      {sus}, {ses}, {params.postId}
    </div>
  )
}
