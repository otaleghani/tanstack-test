import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type Person = {
  name: string;
  surname: string;
}

const personSchema = z.object({
  name: z.string(),
  surname: z.string()
})

export const greet = createServerFn({ method: "GET" })
  .validator((person: unknown): Person => {
    return person as Person
  })
  .handler(async ({ data }) => {
    return `Hello, ${data.name} ${data.surname}`
  })

export const greetWithZod = createServerFn({ method: "GET" })
  .validator(personSchema)
  .handler(async ({ data }) => {
    return `Hello from Zod validation, ${data.name} ${data.surname}`
  })
