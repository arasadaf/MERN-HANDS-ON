//ASSIGNMENT 1:
//-------------
//You are building a shopping cart summary for an e-commerce website.

//Test Data : 
const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
  ];
  
  //Tasks:
     // 1. Use filter() to get only inStock products
  let result1 = cart.filter(cart=>cart.inStock)
  console.log("Instock Products:", result1)
     // 2. Use map() to create a new array with:  { name, totalPrice }
  let result2= cart.map(cart=>{
      return{
          name: cart.name,
          totalPrice: cart.price
      }
  })
  console.log("New Array:", result2)
     // 3. Use reduce() to calculate grand total cart value
  let result3 = cart.reduce((accumulator,element)=>accumulator+element.price,0)
  console.log("Grand Total:", result3)
     // 4. Use find() to get details of "Mouse"
  let result4 = cart.find(cart=> cart.name === "Mouse")
  console.log("Details of Mouse:", result4)
     // 5. Use findIndex() to find the position of "Keyboard"
  let result5 = cart.findIndex(cart => cart.name == "Keyboard")
  console.log("Position of Keyboard:", result5)