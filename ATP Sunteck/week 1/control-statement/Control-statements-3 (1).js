//HANDS-ON 3: Enrollment Eligibility Checker
//------------------------------------------
//Initial data:
    let hasPaid = true;
    let hasCompletedBasics = false;

//Tasks:
    //1. If both conditions are true → "Enroll Now"
   //2. Otherwise → "Complete Requirements"
   //3. Use ternary operator
function checkEnroll(){
    let result = (hasPaid && hasCompletedBasics) ? "Enroll Now" : "Complete Requirements"
    return result
}
   //4. Store result in enrollMessage
let enrollMessage = checkEnroll()
   //5. Print message
console.log(enrollMessage)