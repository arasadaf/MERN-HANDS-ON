//Assignment 1: User Profile Manager
//----------------------------------
//Scenario : You are managing a logged-in user’s profile in a web application.

//Test data:
const user = {
    id: 101,
    name: "Ravi",
    email: "ravi@gmail.com",
    role: "student",
    isActive: true
  };
  
  //Tasks:
     // 1. Read and print the user’s name and email
  console.log("name:", user.name)
  console.log("email:", user.email)
     // 2. Add a new property lastLogin: "2026-01-01"
  user.lastLogin = "2026-01-01"
  console.log("Adding new Property:", Object.keys(user))
      //3. Update role from "student" to "admin"
  console.log("Before Update:", user.role)
  user.role = "admin"
  console.log("After Update:" , user.role)
      //4. Delete the isActive property
  delete user.isActive
     // 5. Use Object.keys() to list all remaining fields
  console.log(Object.keys(user))