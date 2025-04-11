import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { fallback, zodValidator } from '@tanstack/zod-adapter'
import { randomInt } from 'crypto'
import { z } from 'zod'

const searchSchema = z.object({
  salmone: fallback(z.number(), 1).default(1),
  carciofo: fallback(z.number(), 1).default(1),
})

const requestSchema = z.object({
  num: z.number()
})

const getData = createServerFn({ method: "GET" })
  .validator(zodValidator(requestSchema))
  .handler(async ({ data }) => {
    const num = data.num + randomInt(0, 100);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
      .then((response) => response.json())
      .then((json) => {
        return json
      })
    return res;
  })

export const Route = createFileRoute('/cache/')({
  beforeLoad: () => {
    sus: () => console.info("susa")
  },
  validateSearch: zodValidator(searchSchema),
  component: RouteComponent,
  loaderDeps: ({ search: { salmone, carciofo } }) => ({ salmone, carciofo }),
  loader: async ({ deps: { salmone, carciofo } }) => {
    const data = await getData({ data: { num: carciofo } });
    return data
  },
  staleTime: 10_000
})

function RouteComponent() {
  const data = Route.useLoaderData();

  return (
    <>
      <div>Hello "/cache/"!</div>
      <div>Right now the id is {data.id}</div>
      <div>{data.title}</div>
      <Link to='/'>Vai home</Link>
    </>
  )
}
