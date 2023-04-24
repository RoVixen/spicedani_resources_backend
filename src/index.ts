import "module-alias/register"
import express, { json } from "express"
import { SECRET_KEY, SERVER_PORT } from "./config"
import routes from "./routes"
import { connectionPromise } from "./db"
import bodyParser from "body-parser"
// import multer from "multer"

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(multer);

//middleware that always checks for the secret key
app.use((req,res,next)=>{
  
  if(req.body?.secret!=SECRET_KEY){
    res.status(403);
    res.send("access denied");
    return;
  }
  
  next();
});

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
