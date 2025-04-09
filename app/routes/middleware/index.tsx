import { createFileRoute } from '@tanstack/react-router'
import { createMiddleware, createServerFn, useServerFn } from '@tanstack/react-start'
import { zodValidator } from '@tanstack/zod-adapter';
import { send } from 'vinxi/dist/types/runtime/http';
import { z } from 'zod';
import { authMiddleware } from '../../global-middleware';

export const Route = createFileRoute('/middleware/')({
  component: RouteComponent,
})

const mySchema = z.object({
  id: z.string(),
})

const first = createMiddleware()
  .server(({ next }) => {
    return next({
      context: {
        first: "sus"
      }
    })
  })

const second = createMiddleware()
  .middleware([first])
  .server(async ({ next, context }) => {
    console.log("Hello, from second. First says: ", context.first)
    const result = await next({
      context: {
        second: "sas"
      },
    });
    return result;
  })

const third = createMiddleware()
  .middleware([authMiddleware, second])
  .validator(zodValidator(mySchema))
  .client(async ({ next, context, data }) => {
    const result = await next({
      context: {
        sandro: "pertiz",
      },
      sendContext: {
        spepix: "Spepix",
      }
    });
    return result;
  })
  .server(async ({ next, context, data }) => {
    console.log("Hello, from thid. Second says: ", context.second)
    console.log("Also request is: ", data.id)
    const spepix = zodValidator(z.string()).parse(context.spepix)
    console.log("Also I think that someone said something... ", spepix)
    const result = await next();
    return result;
  })

const sendContext = createMiddleware()
  .server(async ({ next }) => {
    const result = await next({
      sendContext: {
        sended: "sus"
      }
    });
    return result;
  })

const fourth = createMiddleware()
  .middleware([sendContext, third])
  .client(async ({ next, context, data }) => {
    console.log("Im in the client now. NINJA")
    console.log("Also, I was in the client even before! ", context.sandro)
    console.log("ALSO THE SERVER WTF: ",)
    const result = await next();
    console.log("Also the server gave us AIDS: ", result.context.sended)
    return result;
  })

const serverFn = createServerFn({ method: "GET" })
  .validator(mySchema)
  .middleware([fourth])
  .handler(async ({ data }) => {
    return data
  })


function RouteComponent() {
  const useFn = useServerFn(serverFn)

  return (
    <div>
      <button
        onClick={async () => await useFn({ data: { id: "sus" } })}
      >PUSH</button>
    </div>
  )
}
