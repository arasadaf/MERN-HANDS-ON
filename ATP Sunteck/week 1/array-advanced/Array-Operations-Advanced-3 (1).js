//ASSIGNMENT 3:
//-------------
//Employee Payroll Processor

//You are building a salary processing module in a company HR app.

//Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//Tasks:
    //1. filter() employees from IT department
let result1 = employees.filter(emp=>emp.department==="IT")
console.log(result1)
    //2. map() to add:
let result2 =  employees.map(emp=>{
    return {
        ...emp,
        netSalary: emp.salary * 1.10
    }
})
            //netSalary = salary + 10% bonus
console.log(result2)
    //3. reduce() to calculate total salary payout
let result3 = employees.reduce((acc, emp)=> acc + emp.salary, 0)
console.log(result3)
    //4. find() employee with salary 30000
let result4 =  employees.find(emp=>emp.salary == 30000)
console.log(result4)
    //5. findIndex() of employee "Neha"
let result5 = employees.findIndex(emp=> emp.name === "Neha")
console.log(result5)