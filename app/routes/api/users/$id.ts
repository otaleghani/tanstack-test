import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'

export const APIRoute = createAPIFileRoute('/api/users/$id')({
  GET: ({ request, params }) => {
    return json({
      message: 'Hello "/api/users/$id"!',
      id: params.id
    })
  },
})
