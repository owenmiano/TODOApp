const express =require("express");
const router=express.Router();
const controllers=require('../controllers/tasksControllers')
// ADD NEW TASK
router.post("/addNewTask",controllers.createTask)
// Fetch all Tasks
router.get("/getAllTasks",controllers.fetchAllTasks)
// delete Task
router.delete("/deleteTask/:id",controllers.deleteTask)




module.exports= router