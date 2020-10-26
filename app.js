var express = require("express");
var todoController=require("./controller/todoController")

var app=express();

//setup templet engine
app.set("view engine", "ejs");

//static files
app.use(express.static("./public"));

//fire controller
todoController(app);

//listen to port

app.listen(3500);
console.log('You are listening to port 3500');