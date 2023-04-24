import { Router } from "express"
import sample from "./sample"
import set_inv from "./set_inv"
import get_inv from "./get_inv"

const routes = Router()

routes.use("/sample", sample)
routes.use("/set_inv", set_inv)
routes.use("/get_inv", get_inv)

export default routes
