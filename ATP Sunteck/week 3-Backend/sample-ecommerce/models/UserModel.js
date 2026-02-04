import { Schema,model } from "mongoose";
//create cart schema
/*const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product',//name of product model
    }
    
});*/
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product'//name of product model
    },
    quantity:{
        type:Number,
        default:1
    }
})


//create user schema(username,password,emai,cart)
const userSchema=new Schema({
    
    Name:{
        type:String,
        required:[true,"name is required"],

    },
       
    password:{
        type:String,
        required:[true,"Password is required"],

    },
    
    email:{
        type:String,
        required:[true,"email required"],
        unique:true,//add to index
    },

    cart:{
        type:[cartSchema],
        default:[]
    },

    
},{
    strict:"throw",
    timestamps:true,
    versionKey:false
});




//create user model with that schema
export const UserModel=model("user",userSchema)
