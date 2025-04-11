// app/router.tsx
import { createRouteMask, createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const mask = createRouteMask({
  routeTree,
  from: "/masking",
  to: "/masking",
  search: {
    sus: undefined,
    sas: undefined,
  },
  params: false,
})

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    routeMasks: [mask],
    context: {
      user: "SANDROX"
    }
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
