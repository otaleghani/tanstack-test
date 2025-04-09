import { createFileRoute } from "@tanstack/react-router"
import { createServerFn, useServerFn } from "@tanstack/react-start"
import { useQuery } from "@tanstack/react-query"

export const Route = createFileRoute('/quering/')({
  component: RouteComponent,
})

const getServerData = createServerFn({ method: "GET" })
  .handler(async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        return json
      })
    return data
  })

const getServerError = createServerFn({ method: "GET" })
  .handler(async () => {
    throw new Error("Kaboom")
  })

function RouteComponent() {
  const getData = useServerFn(getServerData);
  const { status, fetchStatus, data } = useQuery({
    queryKey: ["data"],
    queryFn: () => getData()
  })
  const getError = useServerFn(getServerError);
  const { error } = useQuery({
    queryKey: ["error"],
    queryFn: () => getError()
  })

  if (status === "pending") {
    return (<>Loading...</>)
  }

  if (status === "error") {
    return (<>ERROR!</>)
  }


  return (
    <>
      {data.map((item: any) => (
        <div key={item.id}>{item.id}</div>
      ))}
      {fetchStatus}
      {error?.message}
    </>
  )
}
