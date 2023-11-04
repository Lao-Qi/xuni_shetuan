import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { ApiRouter } from "@xuni-shetuan/api"
import superjson from "superjson"

export const trpc = createTRPCProxyClient<ApiRouter>({
    links: [httpBatchLink({
        url: import.meta.env.DEV ? "http://localhost:8080/trpc" : "/trpc",
    })],
    transformer: superjson
})

trpc.greeting.query()