const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;


//middleware to pass json request body

app.use(express.json());


// import routes for Todo api
const todoRoutes = require("./routes/todos");

//mount the todo API routes

app.use("/api/v1",todoRoutes);

//start server

app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT} `);
});


//connecting db
const dbConnect = require("./config/database");
dbConnect();


//default route
app.get("/",(req,res)=>{
    res.send(` <h1> This is HOMEPAGE </h1>`);
});