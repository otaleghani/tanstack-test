import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'

export const APIRoute = createAPIFileRoute('/api/users/$id/posts/$postId')({
  GET: ({ request, params }) => {
    return json({
      message: 'Hello "/api/users/$id/posts/$postId"!',
      id: params.id,
      postId: params.postId
    })
  },
})
