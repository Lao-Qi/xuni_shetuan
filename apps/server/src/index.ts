import express from "express"
import { database } from "@xuni-shetuan/database"
import { join } from "path"

async function startExpressServer() {
    await database.initialize()

    const app = express()
    app.use(express.static(join(__dirname, "./web")))

    app.get("/", (_, res) => {
        res.send("aa")
    })

    app.listen(3001, () => {
        console.log("http://127.0.0.1:3001");
    })
}

startExpressServer()