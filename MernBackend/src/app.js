const express=require('express');
const bodyParser = require('body-Parser');
const path = require('path');
const app=express();
require("./db/connection");
const port = process.env.PORT || 3000;
const doten=require("dotenv');
doten.configuration({path: "./configuration.env"});
const DB=process.env.DATABASE;

app.get("/", (req,res)=>
{
  res.send("connected")
});
app.get("/Home", (req,res)=>
{
  res.send("login")
});

app.post('/' , async (req,res)=>
{  
    res.send(`${req.body.fname}`); 
    const registrEmpolye=new register (
        {
            name: req.body.name ,
          number: req.body.number,
          password: req.body.{password}
        }
    )
    const resti= await registrEmpolye.save();
    res.status(201).render(index);

app.listen(port,()=>{
  console.log('successful  '); })
