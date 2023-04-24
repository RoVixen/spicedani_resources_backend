import { Router } from "express"
import sample from "./sample"
import some_create from "./some_create"
import some_read from "./some_read"

const routes = Router()

routes.use("/sample", sample)
routes.use("/some_create", some_create)
routes.use("/some_read", some_read)

export default routes
