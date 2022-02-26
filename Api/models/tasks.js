module.exports =(Sequelize, DataTypes)=>{
    
    const Tasks=Sequelize.define("Tasks",{
        TaskName:{
           type: DataTypes.STRING,
           allowNull: false,
         
       } 
    })

    return Tasks;
    
    
};