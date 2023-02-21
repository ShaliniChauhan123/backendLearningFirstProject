const {Sequelize, DataTypes}=require('sequelize');
const sequelize=new Sequelize('backendLearning','postgres','postgres',{
    host:'localhost',
    port:5432,
    dialect:'postgres',
    pool:{max:5,min:0,idle:10000}
})
sequelize.authenticate()
.then(()=>{
    console.log('connected');
})
.catch(err=>{
    console.log("Error"+err);
})
const db={}
db.sequelize=Sequelize;
db.Sequelize=sequelize;

db.users=require('./users')(sequelize,DataTypes);
sequelize.sync({force:false})
.then(()=>{
    console.log('re sync');
})
module.exports=db;
