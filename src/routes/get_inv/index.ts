// import { SampleModel } from "@@/db"
import { UsersInvs } from "@@/db"
import { Router } from "express"
const get_inv = Router()

const EMPTY_INV = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

get_inv.get("/", async (req, res) => {
  const uuid = req.body?.uuid

  if (typeof uuid != "string") {
    res.send("body entry uuid not setted")
    res.status(400)
    return
  }

  const regexUuid =
    /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/

  if (!regexUuid.test(uuid)) {
    res.send("uuid not valid")
    res.status(400)
    return
  }

  const result = await UsersInvs.findOne({
    where: {
      uuid,
    },
  })

  if (result) {
    res.send({
      in_registry: true,
      inventory: result.dataValues?.inventory,
    })

    res.status(201)
    return
  } else {
    res.send({
      in_registry: false,
      inventory: EMPTY_INV,
    })

    res.status(404)
    return
  }
})

export default get_inv
