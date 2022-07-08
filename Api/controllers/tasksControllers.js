const db = require("../models");

//Create new Task

exports.createTask=async(req,res)=>{
   const {TaskName}=req.body;
   if(!TaskName) return res.status(400).json({message:"Please fill the field"})
   try {
    const newTask=await db.Tasks.create(req.body);
    res.status(201).json({message:`New task created!`})

   } catch (err) {
    res.status(500).json({'message':err.message})
 }
}

// Retrieve all Todo tasks
exports.fetchAllTasks=async(req,res)=>{
    try {
    const result=await db.Tasks.findAll()
    return  res.status(200).json(result)
 } catch (error) {
    res.status(500).json({'message':error.message})
 
    }
}

// Delete Todo task
exports.deleteTask=async(req,res)=>{
    try {
        const found=await db.Tasks.destroy({where:{id:req.params.id}})
        if(!found) return res.status(400).json({message:`Task of id: ${req.params.id} not found`})
        return res.status(200).json({message:`Task of id: ${req.params.id} has been deleted successfully`}) 

    } catch (error) {
        res.json({'message':error.message})
    }
}