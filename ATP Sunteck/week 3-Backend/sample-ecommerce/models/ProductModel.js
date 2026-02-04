import {Schema,model} from 'mongoose';


//product Schema
const productSchema=new Schema({
    productName:{
        type:String,
        required:[true,"product name required"]
    },
    price:{
        type:Number,
        required:[true,"product price required"]
    },
    brand:{
        type:String,
        required:[true,"product Brand is required"]
    }
},{
    strict:"throw",
    timestamps:true,
    versionKey:false
})
//create model
export const ProductModel=model("product",productSchema)