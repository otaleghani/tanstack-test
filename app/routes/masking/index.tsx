import { createFileRoute, createRouteMask, Link, useSearch } from '@tanstack/react-router'
import { fallback, zodValidator } from '@tanstack/zod-adapter'
import { z } from 'zod'

const searchSchema = z.object({
  sus: z.string().optional(),
  sas: z.string().optional(),
})

export const Route = createFileRoute('/masking/')({
  validateSearch: zodValidator(searchSchema),
  component: RouteComponent,
})

function RouteComponent() {
  const { sus, sas } = Route.useSearch();

  return (
    <div>
      Hello "/masking/"! - {sus} {sas}

      <Link
        to="/masking"
        search={{
          sus: "sandro",
          sas: "sandro",
        }}
      >Sandro?</Link>
      <Link
        to="/masking"
        search={{}}
      >Togli sandro</Link>
    </div>
  )
}
