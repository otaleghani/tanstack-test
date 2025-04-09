import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

export const Route = createFileRoute('/form/')({
  component: RouteComponent,
})

const formSchema = z.object({
  name: z.string(),
  surname: z.string(),
})

const greetSubmission = createServerFn({ method: "POST" })
  .validator((data: FormData) => {
    if (!(data instanceof FormData)) {
      throw new Error("Invalid form type")
    }
    const parsed = formSchema.parse({
      name: data.get("name"),
      surname: data.get("surname"),
    })
    return parsed
  })
  .handler(async (ctx) => {
    return `Hi, ${ctx.data.name} ${ctx.data.surname}`
  })

function RouteComponent() {
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response = await greetSubmission({ data: formData });
        console.log(response)
      }}
    >
      <input name="name" />
      <input name="surname" />
      <button type="submit">DAJE</button>
    </form>
  )
}
