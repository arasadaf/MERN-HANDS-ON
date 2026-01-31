import exp from "express"
export const ProductApp=exp.Router()

let products=[]


ProductApp.get('/products',(req,res)=>{
    //send res to client 
    res.status(200).json({"message":"all products",payload:products})
})

// POST- Create product
ProductApp.post('/products',(req,res)=>{
    //get user resources from req
    let newproduct=req.body
    //console.log("new product",newproduct)
    products.push(newproduct);
    res.status(201).json({message:"product created"})
})

//put request handiling route(update products)
ProductApp.put('/products',(req,res)=>{
    
    let updateproduct=req.body;
    
    let productIndex=products.findIndex((ele)=>ele.pid===updateproduct.pid)
    //if product not found print product not found
    if (productIndex===-1){
        return res.status(404).json({message:"product not found"})
    }
    //if product  found,modify
    products.splice(productIndex,1,updateproduct)
    res.status(200).json({message:"product modified"})
});

//delete request handiling route(delete product)
ProductApp.delete('/products/:id',(req,res)=>{
    let productid = Number(req.params.id)

    let productIndex = products.findIndex(productobj => productobj.pid === productid)
    //if product not found print not found
    if (productIndex === -1) {
        return res.status(404).json({ message: "product not found" })
    }

    products.splice(productIndex, 1)

    res.status(200).json({ message: "product deleted successfully" })
})

//GET product by ID
ProductApp.get('/products-id/:id',(req,res)=>{
    let productid=Number(req.params.id)

    let product=products.find(productobj=>productobj.pid===productid)

    if (!product)
    {
        return res.status(404).json({message:"product not found"})
    }
    res.status(200).json({message:"products",payload:product})
})

// GET products by brand
ProductApp.get('/products-brand/:brand', (req, res) => {
    let productbrand = req.params.brand

    let brands = products.filter(productobj => productobj.brand === productbrand)
    if (brands.length === 0) 
    {
        return res.status(404).json({message: "product not found with this brand name"})
    }

    res.status(200).json({message: "products",payload: brands})
})