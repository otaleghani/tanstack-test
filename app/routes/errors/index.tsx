import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

export const Route = createFileRoute('/errors/')({
  component: RouteComponent,
})



const throwError = createServerFn({ method: 'GET' })
  .handler(async () => {
    throw new Error("ANVEDI NANDO")
  })

function RouteComponent() {
  return (
    <button
      onClick={async () => {
        try {
          await throwError()
        } catch (error) {
          console.log(error)
        }
      }}
    >Throw error</button>
  )
}
