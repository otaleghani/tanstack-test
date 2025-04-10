import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'

export const APIRoute = createAPIFileRoute('/api/sandro/$')({
  GET: ({ request, params }) => {
    const { _splat } = params;
    return json({
      message: 'Hello "/api/sandro/$"!',
      splat: _splat
    })
  },
})
