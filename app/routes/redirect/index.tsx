import { createFileRoute, redirect } from '@tanstack/react-router'
import { createServerFn, useServerFn } from '@tanstack/react-start'

const redirection = createServerFn({ method: "GET" })
  .handler(async () => {
    throw redirect({
      to: "/",
      statusCode: 301
    })
  })

export const Route = createFileRoute('/redirect/')({
  component: RouteComponent,
})

function RouteComponent() {
  const redirectToHome = useServerFn(redirection)
  return (
    <div>
      Hello "/redirect/"!
      <button
        onClick={async () => {
          redirectToHome()
        }}
      >Redirect me!</button>
    </div>
  )
}
