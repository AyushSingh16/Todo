const express = require('express');

const router = express.Router();


//importing controller
const {createTodo } = require("../controllers/createTodo");


//defining API routes

router.post("/createTodo",createTodo);  //mapped path to controller

module.exports = router;