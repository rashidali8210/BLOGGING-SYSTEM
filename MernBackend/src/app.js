const express=require('express');
const bodyParser = require('body-Parser');
const path = require('path');
const app=express();
require("./db/connection");

const port = process.env.PORT || 3000;




// app.use(bodyParser.Urlencoded({extended:true}));
// app.post('./example',(req,res))
app.get("/", (req,res)=>
{
  res.send("connected")
});
app.get("/Home", (req,res)=>
{
  res.send("login")
});
app.listen(port,()=>{
  console.log('successful  '); })
