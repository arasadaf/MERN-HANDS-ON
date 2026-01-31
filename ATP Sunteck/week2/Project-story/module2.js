/*MODULE 2: COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably*/
import {users, courses, cart, roles} from './engine.js'

// Get published courses
let a=courses.filter(ele=>ele.published===true)
console.log("a=",a)

//Extract { title, price } only
let b=courses.map(ele=>[ele.title,ele.price])
console.log("b=",b)

//Calculate total value of published courses
let c = a.reduce((acc,ele) => acc+ele.price,0);
console.log("c=", c);

//Add a new course immutably*/
let newCourse = {
  id: 104,
  title: "MongoDB",
  price: 1099,
  published: true
};

let copyCourse = [...courses, newCourse];

console.log("Copy Courses:", copyCourse);
console.log("Courses:", courses);