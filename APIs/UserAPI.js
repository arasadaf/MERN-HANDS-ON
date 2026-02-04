import exp from 'express'
import { UserModel} from '../models/UserModel.js'  
import { hash } from "bcryptjs";
import { ProductModel } from '../Models/ProductModel.js';
export const userApp=exp.Router()
let users=[]


//read product
userApp.get('/users',async(req,res)=>{
    //read product from db
    let users= await UserModel.find()
    res.status(200).json({message:"users",payload:users})
})
//create user
userApp.post('/users',async(req,res)=>{
    //get newuser from  req
    let newUser=req.body;
    //run validator to check password
    await new UserModel(newUser).validate()//invoke all mongodb validators before pass hash
    

    //hash the password
    let hashedPassword=await hash(newUser.password,12)
    newUser.password=hashedPassword;
    //create new user document
    let newUserDoc=new UserModel(newUser)
    //save in db
    await newUserDoc.save({validateBeforeSave:false});//if you dont  want to run validaator again thensupply({validatebeforeSave:false})
    //send res 
    res.status(201).json({message:"user created"})
})

userApp.put('/user-cart/user-id/:uid/product-id/:pid',async(req,res)=>{
    //read uid and pid from url parameters
    let {uid,pid}=req.params;//{uid:"",pid:""}


    console.log("uid",uid)
    console.log("pid",pid)
    //check user
    let user=await UserModel.findById(uid)
    if(!user){
        return res.status(401).json({message:"User not found"})

    }
    //check product
     let product=await ProductModel.findById(pid)
    if(!product){
        return res.status(401).json({message:"product not found"})

    }
    //perform the update
    let modifiedUser=await UserModel.findByIdAndUpdate(
        uid,
        {$push: {cart:{product:pid}}},
        {new:true}).populate("cart.product")
    
    //res
    res.status(200).json({message:"connected"})
})
//read user by id
/*userApp.get("/users/:uid",async(req,res)=>{
    //
    let{uid}=req.params
    //find user
    let userObj=await UserModel.findById(uid).populate("cart.product","productName price")
    //res
    res.status(200).json({message:"user",payload:userObj})
}
)

userApp.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res) => {
  const { uid, pid } = req.params;

  const user = await UserModel.findById(uid);
  if (!user){
     return res.status(404).json({ message: "User not found" });
    }

  const product = await ProductModel.findById(pid);
  if (!product){
     return res.status(404).json({ message: "Product not found" });
    }
let checkProduct=user.cart.find(pro=>pro.product.toString()===pid)
    if (checkProduct)
    {
        checkProduct.quantity+=1
    }
    else
    {
        user.cart.push({product:pid})
    }
        

  await user.save();

  res.status(200).json({message: "Cart updated successfully",payload: user.cart});
});
*/