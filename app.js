const express=require('express');
const app=express();
app.use(express.json())
const port=8080;
var userCtrl=require('./controller/userController');
require('./models/index');
app.get('/',(req,res)=>{res.send('home page');})
app.post('/add',userCtrl.addUser);
app.post('/update',userCtrl.updateUser);
app.get('/crud',userCtrl.crudOperation);
app.get('/query',userCtrl.queryData);
app.get('/findAll',userCtrl.findAllOperation);
app.listen(port,()=>{

    console.log(`app is listening at ${port}`);
})
