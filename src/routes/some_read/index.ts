import { SampleModel } from "@@/db"
import { Router } from "express"
const some_read = Router()

some_read.get("/", async (req, res) => {
  if (typeof req.query?.firstName != "string") {
    res.send("query firstName not setted")
    res.status(400)
    return
  }

  const firstName = req.query.firstName

  const result = await SampleModel.findAll({
    where: {
      firstName,
    },
  })

  if (result.length > 0) {
    res.send(`<ul>
      ${result.reduce((prev, current, ind) => {
        console.log()
        return (
          prev +
          `<li>
            ${current.dataValues.id} ${current.dataValues.firstName} ${current.dataValues.lastName}
          </li>`
        )
      }, "")}
      </ul>`)

    res.status(201)
    return
  } else {
    res.send("nothing found!")
    res.status(404)
    return
  }
})

export default some_read
