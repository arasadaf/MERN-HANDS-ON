import exp from "express"//fun exported by express module
import { connect } from "mongoose"
import { config } from "dotenv"
import { userRoute } from "./APIs/UserAPI.js"
import { authorRoute } from "./APIs/AuthorAPI.js"
import { adminRoute } from "./APIs/AdminAPI.js"
import { commonRouter } from "./APIs/CommonAPI.js"
import cookieParser from "cookie-parser"
config()  //process.env

const app=exp()  //func call is called
//add body parser middleware
app.use(exp.json())           //req.body
//add cookie parser middleware
app.use(cookieParser())
//connect APIs
app.use('/user-api',userRoute)
app.use('/author-api',authorRoute)
app.use('/admin-api',adminRoute)
app.use('/common-api',commonRouter)

//connect to db
const connectDB=async()=>{
    try{
    await connect(process.env.DB_URL)
    console.log("DB connection success")
    //start http server
    app.listen(process.env.PORT,()=>console.log("server started"))
    }catch(err){
        console.log("Err in DB connection",err)
    }
}
connectDB()

//dealing with invalid path
//it will execute after all valid path and method checks,if no match found,then it will execute
app.use((req,res)=>{
    console.log(req.url)
    res.json({message:`${req.url} is invalid path`})
})

//error handling middleware
app.use((err,req,res,next)=>{      
    console.log("err:",err)     
    res.json({message:"error",reason:err.message})
})