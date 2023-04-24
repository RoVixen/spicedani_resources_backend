// import { SampleModel } from "@@/db";
import { UsersInvs } from "@@/db"
import { Router } from "express"
const set_inv = Router()

set_inv.get("/", async (req, res) => {
  const uuid = req.body?.uuid
  const inventory = req.body?.inventory

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

  if (!inventory) {
    res.send("body entry inventory not setted")
    res.status(400)
    return
  }

  ////////////////////////////////
  ///Actual update
  ////////////////////////////////

  const result = await UsersInvs.upsert({
    uuid,
    inventory:
      typeof inventory == "string" ? inventory : JSON.stringify(inventory),
  })

  if (result) {
    res.send("inventory setted sucessfully for " + uuid + " !")
    res.status(201)
    return
  } else {
    res.send("insert failed")
    res.status(400)
    return
  }
})

export default set_inv
