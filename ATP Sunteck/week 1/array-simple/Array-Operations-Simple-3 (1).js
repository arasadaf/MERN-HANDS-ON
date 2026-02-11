//Assignment 3: Student Marks List
///--------------------------------
//Scenario : You receive marks from an exam system.

//Test data:
const marks = [78, 92, 35, 88, 40, 67];

//Tasks:
    //1. filter() marks ≥ 40 (pass marks)
let result1 = marks.filter(element => element >= 40)
console.log(result1)
    //2. map() to add 5 grace marks to each student
let result2 = marks.map(element=> element+5)
console.log(result2)
   // 3. reduce() to find highest mark
let result3 = marks.reduce((acc,mark)=>(acc>mark ? acc:mark))
console.log(result3)
    //4. find() first mark below 40
let result4 = marks.find(marks=>marks<40)
console.log(result4)
   // 5. findIndex() of mark 92
let result5 = marks.findIndex(marks=>marks === 92)
console.log(result5)