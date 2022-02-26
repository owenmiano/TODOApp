const express =require("express");
const router=express.Router();
const db = require("../models");

// ADD NEW TASK
router.post("/addNewTask",(req,res) =>{
    db.Tasks.create({
        TaskName: req.body.TaskName,
       
 }).then(submittedDetails=> res.send("Task has been added successfully!!"));

});

// GET ALL TASKS
router.get("/getAllTasks",(req,res) =>{
    db.Tasks.findAll({
   
       
 }).then(allTasks=> res.send(allTasks));

});





module.exports= router