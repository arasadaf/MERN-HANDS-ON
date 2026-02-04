import exp from 'express'

import { ProductModel } from '../Models/ProductModel.js'
export const productApp = exp.Router()

//read product
productApp.get('/products',async(req,res)=>{
    //read product from db
    let products= await ProductModel.find()
    res.status(200).json({message:"products",payload:products})
})

//route to create new product
productApp.post("/products",async(req,res)=>{


//get product from req
let productObj=req.body
let productDoc=new ProductModel(productObj)
await productDoc.save()
 res.status(201).json({message:"product created"})
})
