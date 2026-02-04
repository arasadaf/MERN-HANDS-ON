//ASSIGNMENT 2:
//-------------
//Student Performance Dashboard

//You are working on a college result analysis system.

//Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//Tasks:
    //1. filter() students who passed (marks ≥ 40)
let result1 = students.filter(m=>m.marks>=40)
console.log(result1)
    //2. map() to add a grade field
let result2 = students.map(grade=>{
    let grades = "D"
    if (grade.marks >= 90) {
        grades = "A"
    } else if (grade.marks >= 75) {
        grades = "B"
    } else if (grade.marks >= 60){
        grades = "C"
    }
    return{
        id: grade.id,
        name: grade.name,
        marks: grade.marks,
        grade: grades
    }
})
              //≥90 → A , ≥75 → B, ≥60 → C, else → D
console.log(result2)
   //3. reduce() to calculate average marks
let result3 = students.reduce((acc,m)=> acc + m.marks / students.length, 0)
console.log("Average:", result3)
   //4. find() the student who scored 92
let result4 = students.find(student=>student.marks === 92)
console.log(result4)
   //5. findIndex() of student "Kiran"
let result5 = students.findIndex(student=>student.name == "Kiran")
console.log("Index:", result5)