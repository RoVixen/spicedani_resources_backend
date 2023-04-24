import { SampleModel } from "@@/db";
import { Router } from "express"
const some_create = Router()

some_create.get("/", async (req, res) => {

  if(typeof req.query?.firstName != "string"){
    res.send("query firstName not setted");
    res.status(400);
    return;
  }

  if(typeof req.query?.lastName != "string"){
    res.send("query lastName not setted");
    res.status(400);
    return;
  }
  
  const firstName = req.query.firstName
  const lastName = req.query.lastName
  
  const result = await SampleModel.create({
    firstName,
    lastName
  })

  if(result){
    res.send("insert made sucessfully for "+firstName+" "+lastName+" !");
    res.status(201);
    return;
  }
  else{
    res.send("insert failed");
    res.status(400);
    return;
  }
})

export default some_create