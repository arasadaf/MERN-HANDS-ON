import { Schema,model } from "mongoose"

//create user schema(username,password,age)
const userSchema=new Schema({
    
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Min length should be 4"],
        maxLength:[6,"Max length exceeded"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[18,"Age should be above 18"],
        max:[25,"Age should be less than 25"]
    }
},{
    strict:"throw",
    timestamps:true
});



const productSchema=new Schema({
    pid:{
        type:Number,
        required:[true,"pid is required"],
    },
    productName:{
        type:String,
        required:[true,"productName is required"],
        minLength:[4,"Min length should be 4"],
        maxLength:[6,"Max length exceeded"]
    },
    price:{
        type:Number,
        required:[true,"price is required"],
    },
},{
    strict:"throw",
    timestamps:true
})

//create user model with that schema
export const UserModel=model("user",userSchema)
