const { response } = require('express');
var db=require('../models');
const Users=db.users;
var addUser = async(req,res)=>{
 //let data=({name:'Test',email:'test2@gmail.com',gender:'f'});
  //data.save(); 
  //try{

      console.log(req.body);
      
let data=await Users.create({name: req.body.name ,email: req.body.email});
 //update ///
 //data.name='dummy';
//  data.save();
  
 //delete
 //data.destroy();
 console.log(data);
  //}
//   catch{
//       console.log("error");
//   }
    let response={
        data
    }
res.status(200).json(response);
}

var updateUser=async(req,res)=>{
    const project = await Users.findOne({ where: { email:req.body.email } });

    if(project){
         await Users.update({
            name:req.body.name
         },
         { 
            where: { email:req.body.email  } });
    }

    let response={
        data: "ok"
    }
res.status(200).json(response);
}
var crudOperation=async(req,res)=>{
    //insert 
    // let data=await Users.create({name:'demolast',email:'demo14@gmail.com'});
    // console.log("DATA",data.id);
    //update
    // let data= await Users.update({name:'final'},{
    //     where:{
    //         id:2
    //     }
    // })
    //delete
    // let data=await Users.destroy({
    //     where:{
    //         id:2
    //     }
    // })
    //truncate
    // let data =await Users.destroy({
    //     truncate:true
    // })
    //bulk insert
    // let data=await Users.bulkCreate([{
    //     name:'first',email:'first@gmail.com',gender:'female'
    // },
    // {
    //     name:'second',email:'first@gmail.com',gender:'female'
    // },
    // {
    //     name:'third',email:'first@gmail.com',gender:'female'
    // }])
    //find 
    let data=await Users.findAll({

    });
    let response={
        data:'ok'
    }
    res.status(200).json(response);
}
 
var findAllOperation=async(req,res)=>{
    const xyz = await Users.findAll();

    res.status(200).json(xyz)
}

var queryData=async(req,res)=>{
    let response={
        data:'ok query'
    }
    res.status(200).json(response);
}

module.exports={
    addUser,
    updateUser,
    crudOperation,
    queryData,
    findAllOperation
}