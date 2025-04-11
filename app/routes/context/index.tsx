import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getHeaders, getWebRequest, setContext, setHeader, setResponseStatus } from '@tanstack/react-start/server'
import { setHeaders } from 'vinxi/http'

export const Route = createFileRoute('/context/')({
  component: RouteComponent,
  loader: ({ context }) => {
    return {
      user: context.user
    }
  }
})

const readRequest = createServerFn({ method: "GET" })
  .handler(async () => {
    // read the request
    const request = getWebRequest();

    return `From server: ${request?.method} && ${request?.url} && ${request?.credentials}`
  })

const readHeaders = createServerFn({ method: "GET" })
  .handler(async () => {
    // read the headers
    const request = getHeaders()

    return `From server: ${request.connection}`
  })

const writeHeaders = createServerFn({ method: "GET", response: "full" })
  .handler(async () => {
    setResponseStatus(201);
    setHeader("SANDRO", "SAS")
    // setContext("sandro", "pertini");
  })

function RouteComponent() {
  const { user } = Route.useLoaderData();

  return (
    <>
      <div>Hello "/context/"!</div>
      <button onClick={async () => {
        const res = await readRequest();
        console.log(res)
      }}>Get context</button>

      <button onClick={async () => {
        const res = await readHeaders();
        console.log(res)
      }}>Get headers</button>

      <button onClick={async () => {
        const res = await writeHeaders();
        console.log(res.context)
      }}>Write headers</button>

      <div>{user}</div>
    </>
  )
}
