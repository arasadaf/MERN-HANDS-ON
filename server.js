import exp from 'express'
import {userApp} from './APIs/UserAPI.js'
import { connect } from 'mongoose'
import { productApp } from './APIs/ProductAPI.js';
//create server
const app=exp();
 const port=4000;

//connect to db server
async function connectDB(){
    try{
        connect('mongodb://localhost:27017/anuragdb2')
        console.log("DB connection success")
        //assign port
        app.listen(port,()=>console.log("server listening on port 4000..."))
    }catch(err){
        console.log("error in DB connection :",err)
    }

}
connectDB()


//body patser middleware
app.use(exp.json())
//if path starts with /user-api/, forward req to userApp
app.use('/user-api',userApp)
app.use('/product-api',productApp)


//error handling middleware(placed at end of this file always)
app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",reason:err.message})
})
