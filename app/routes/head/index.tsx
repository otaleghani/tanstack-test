import { createFileRoute } from '@tanstack/react-router'
import { title } from 'node:process'

export const Route = createFileRoute('/head/')({
  head: () => ({
    meta: [
      {
        name: "SANDRO PERTINI",
        content: "SUS SAS"
      },
      {
        title: "ANVEDI"
      }
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/head/"!</div>
}
