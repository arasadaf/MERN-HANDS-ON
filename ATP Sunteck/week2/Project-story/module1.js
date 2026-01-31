/* MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably */
import {users, courses, cart, roles} from './engine.js'

// Get only active users
let a=users.filter(ele=>ele.active===true)
console.log("a=",a)

//Extract names of active users
let b=a.map(ele=>[ele.name])
console.log("b=",b)

//Check if any admin exists
let c=users.find(ele=>ele.role==='admin')
console.log(c)

//Find user by id
let d=users.find(ele=>ele.id===3)
console.log(d)