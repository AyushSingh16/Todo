const express = require('express');

const router = express.Router();

//importing controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//defining API routes

router.post("/createTodo",createTodo);  //mapped path to controller

router.get("/getTodos",getTodo);

router.get("/getTodos/:id",getTodoById);

router.put("/updateTodo/:id",updateTodo);

router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;