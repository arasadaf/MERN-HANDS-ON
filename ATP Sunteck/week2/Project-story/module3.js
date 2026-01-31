/*MODULE 3: SHOPPING CART ENGINE 
  -> Merge cart with courses to get full course info
  -> Calculate total cart amount
  -> Increase quantity of a course (immutably)
  -> Remove a course from cart
  -> Check if all cart items are paid courses*/
import {users, courses, cart, roles} from './engine.js'

//Merge cart with courses to get full course info
let a = cart.map(item => {
  let course = courses.find(c => c.id === item.courseId);

  return {
    courseId: item.courseId,
    title: course.title,
    price: course.price,
    qty: item.qty
  };
});
console.log("Cart Details:", a);


//Calculate total cart amount
let b=courses.map(ele=>[ele.title,ele.price])
console.log("b=",b)

//Increase quantity of a course (immutably)
let c = a.reduce((sum, item) => sum + item.price * item.qty,0);
console.log("Total Amount:", c);

//Remove a course from cart
let d = cart.filter(item => item.courseId !== 103);
console.log("After Remove:", d);

//Check if all cart items are paid courses
let e = a.every(item => item.price > 0);
console.log("All Paid Courses:", e);
