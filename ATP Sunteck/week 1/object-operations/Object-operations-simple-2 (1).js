//Assignment 2: Exam Result Summary
//---------------------------------
//Scenario : Marks are stored subject-wise for a student.

//Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

//Tasks:
    //1. Calculate total marks
let { maths, physics, chemistry, english} = marks
let total = maths + physics + chemistry + english
console.log(total)
    //2. Calculate average marks
let average = total / Object.keys(marks).length
console.log(average)
    //3. Find the highest scoring subject
let highestSubject = ""
let maxScore = 0
for (let subject in marks) {
    if (marks[subject] > maxScore) {
        maxScore = marks[subject];
        highestSubject = subject;
        }
}
console.log(highestSubject)
//4. Add a new subject computer: 90
marks.computer= 90
console.log(marks)