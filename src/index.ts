import "module-alias/register"
import express from "express"
import { SERVER_PORT } from "./config"
import routes from "./routes"
import { SampleModel, connectionPromise, sequelize } from "./db"
// import { connectionPromise } from "./db"

const app = express()

app.use(routes)

//removible
app.get("/", (req, res) => {
  res.send("template server running")
})

//Connect database

connectionPromise.then(()=>{
    
  app.listen(SERVER_PORT, () => {
    console.log(`||||||||||  Template app listening on port http://localhost:${SERVER_PORT}`)
  })
  
})
