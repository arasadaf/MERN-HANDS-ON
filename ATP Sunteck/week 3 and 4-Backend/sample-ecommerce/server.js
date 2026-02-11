import exp from 'express'
import {connect} from 'mongoose'
import { productApp } from './APIs/productAPI.js';
import {userApp} from './APIs/UserAPI.js';

//create HTTP SERVER
const app=exp();
const port=4000;



//connect to mongodb Database
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/ecomdb')
        console.log("DB connection success")
        app.listen(port,()=>console.log("server listening"))
    } catch(err){
        console.log("error",err)
    }
}
connectDB()
//use body parser middleware
app.use(exp.json())

app.use('/user-api',userApp)
app.use('/product-api',productApp)

function errorHandler(err,req,res,next)
{res.json({message:"error",reason:err.message}
    
)}
app.use(errorHandler)