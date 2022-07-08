module.exports =(Sequelize, DataTypes)=>{
    
    const Tasks=Sequelize.define("Tasks",{
        TaskName:{
           type: DataTypes.STRING,
           required:true,
        },
     
    })

    return Tasks;
    
    
};