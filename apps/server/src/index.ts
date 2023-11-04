import express from "express"
import { database } from "@xuni-shetuan/database"
import { router, createContext } from "@xuni-shetuan/api"
import * as trpcExpress from "@trpc/server/adapters/express"
import { join } from "path"
import cors from "cors"

async function startExpressServer() {
    await database.initialize()

    const app = express()

    if (process.env.NODE_ENV === "production") {
        app.use(express.static(join(__dirname, "../web")))
    } else {
        app.use(cors())
    }

    app.use("/trpc", trpcExpress.createExpressMiddleware<any>({
        router,
        createContext
    }))

    app.listen(8080, () => {
        console.log("http://127.0.0.1:8080");
    })
}

startExpressServer()