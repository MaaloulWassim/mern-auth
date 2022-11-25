const express = require("express");
const app = express();
const cors = require("cors");
const mongoose=require("mongoose");

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/jwt",{
  
})
app.use(cors({
  origin:["http://localhost:3000"],
  method:["GET","POST"],
  credentials:true,
}));




app.listen(4000, () => {
  console.log("server started on port 4000...");
});