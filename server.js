const express = require("express");

const app = express();

app.listen(3000, ()=> console.log("Server is listening at port 3000"));

app.get("/", (req, res)=> {
    res.send("Hello World");
})

app.get("/about", (req, res)=>{
    res.send("About route");
})