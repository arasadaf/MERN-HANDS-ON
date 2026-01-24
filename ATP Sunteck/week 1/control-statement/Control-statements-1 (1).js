
//HANDS-ON 1: Smart Login Status Engine
//----------------------------------------

//Initial data:
function login(){
    let isLoggedIn = true;
    let isProfileComplete = false;
//Tasks:
   //1. If user is not logged in → show "Please login"
    if (isLoggedIn == false){
    message = "Please Login"
    }
   //2. If logged in but profile incomplete → show "Complete your profile"
   if (isLoggedIn == true && isProfileComplete == false){
    message = "Complete your profile"
    }
   //3. If logged in and profile complete → show "Welcome back!"
   if (isLoggedIn == true && isProfileComplete == true){
    message = "Welcome back!"
    }
    return message
}
   //4. Store the result in message
let statusMessage = login()
   //5. Print the message
console.log(statusMessage)