import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'
export const productApp=exp.Router()
let products=[]

//create products
productApp.post('/products',async(req,res)=>{
    let newProduct=req.body
    let newProductDoc=new ProductModel(newProduct)
    await newProductDoc.save()
    res.status(201).json({message:"product created"})
})


//read products
productApp.get('/products',async(req,res)=>{
    let products=await ProductModel.find()
    res.status(200).json({message:"products",payload:products})
})


//read products by ObjectID
productApp.get('/products/:id',async(req,res)=>{
    let objId=req.params.id
    let productObj=await ProductModel.findById(objId)
    res.status(200).json({message:"product",payload:productObj})
})

//update products by ObjectID
productApp.put('/products/:id',async(req,res)=>{
    let objId=req.params.id
    let modifiedProduct=req.body
    let latestProduct=await ProductModel.findByIdAndUpdate(objId,
        {$set:{ ...modifiedProduct }},
        { new:true,runValidators:true});
    res.status(200).json({message:"product modified",payload:latestProduct})
})