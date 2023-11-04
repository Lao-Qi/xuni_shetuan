import { t } from "./trpc"

export const router = t.router({
    greeting: t.procedure.input({}).query(() => { })
})

export { t, createContext } from "./trpc"
export type ApiRouter = typeof router