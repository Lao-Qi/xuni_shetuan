import { initTRPC } from "@trpc/server"
import type { inferAsyncReturnType } from "@trpc/server"
import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import superjson from "superjson"

export const createContext = (_options: CreateExpressContextOptions) => ({})
export type Context = inferAsyncReturnType<typeof createContext>

export const t = initTRPC.context<Context>().create({
    transformer: superjson
})