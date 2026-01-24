//HANDS-ON 2: Course Price Tag Labeler
//------------------------------------
//Initial data:
     let price = 1299;

//Tasks:
   //1. If price < 500 → "Budget Course"
   function  checkPrice(price){
    if (price < 500){
        label = "Budget Course"
    }
   //2. If price between 500–1000 → "Standard Course"
   else if (price > 500 && price < 1000){
    label = "Standard Course"
    }
   //3. If price > 1000 → "Premium Course"
   else{
    label = "Premium Course"
    }
    return label
}
   //4. Store label in courseTag
let courseTag = checkPrice(price)
   //5. Print the label
console.log(courseTag)