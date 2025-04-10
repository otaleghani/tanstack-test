// app/routes/index.tsx
import * as fs from 'node:fs'
import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { createServerFn, useServerFn } from '@tanstack/react-start'
import { Person, greet } from '../../server/functions'

const filePath = 'count.txt'

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'),
  )
}

const getCount = createServerFn({
  method: 'GET',
}).handler(() => {
  return readCount()
})


const updateCount = createServerFn({ method: 'POST' })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount()
    await fs.promises.writeFile(filePath, `${count + data}`)
  })

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
})


function Home() {
  const state = Route.useLoaderData()
  const greetDue = useServerFn(greet)
  const router = useRouter()

  // const greetings = greetDue({ data: { name: "Alfonzo", surname: "Signorini" } })

  return (
    <>
      <button
        type="button"
        onClick={() => {
          updateCount({ data: 1 }).then(() => {
            router.invalidate()
          })
        }}
      >
        Add 1 to {state}?
      </button>
      {/* <div>{greetings}</div> */}
      <Link to='/cache'>Vai cache</Link>
    </>
  )
}
