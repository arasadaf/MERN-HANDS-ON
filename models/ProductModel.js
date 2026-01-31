import { Schema,model } from "mongoose"


const productSchema=new Schema({
    
    pid:{
        type:Number,
        required:[true,"pid is required"]
    },
    productName:{
        type:String,
        required:[true,"productName is required"]  
    },
    price:{
        type:Number,
        required:[true,"price is required"]
    },
},{
    strict:"throw",
    timestamps:true
})

//create product model with that schema
export const ProductModel=model("product",productSchema)
