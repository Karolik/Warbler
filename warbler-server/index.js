import express from "express";
const app = express();
import cors from "cors";
import { json } from "body-parser";

const PORT = 8081;

app.use(cors());
app.use(json());

app.use(function(req, res, next){
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
})

app.listen(PORT, function(){
  console.log(`Server is starting on port ${PORT}`);
})
