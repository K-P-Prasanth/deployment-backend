const express = require("express");
const app = express();
const studentRoute = require("./controller/studentRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

//database
const mongoose = require("mongoose");
mongoose.set('strictQuery',true);
mongoose.connect("mongodb+srv://test:test@cluster0.azrv7hg.mongodb.net/schooldb");
var db=mongoose.connection;
db.on("open",()=>console.log("connected to DB"));
db.on("error",()=>console.log("error occured"));


//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/studentRoute",studentRoute);



app.listen(4000,()=>{
    console.log("listening on port 4000");
});