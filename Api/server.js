require("dotenv").config();
const express=require('express');
const app=express();
var cors = require('cors')
const router=express.Router();


const db=require("./models");
const PORT= process.env.PORT ;
app.use(cors())
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());

  const apiRoutes=require("./routes/apiRoutes");
  app.use(apiRoutes);

  db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on http://localhost:${PORT}`);
    });
});
module.exports= router

