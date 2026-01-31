//Assignment 1: Daily Temperature Analyzer
//----------------------------------------
//Scenario : You are analyzing daily temperatures recorded by a weather app.

//Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

//Tasks:
//1. filter() temperatures above 35
let result1 = temperatures.filter(tempObj=>tempObj>35)
console.log("above 35", result1)
   // 2. map() to convert all temperatures from Celsius → Fahrenheit
let result2 = temperatures.map(tempObj=>(tempObj*9/5)+32)
console.log("Fahrenheit:", result2)
  //  3. reduce() to calculate average temperature
let result3 = temperatures.reduce((accumulator,tempObj)=>accumulator+tempObj)/temperatures.length
console.log("average:", result3)
   // 4. find() first temperature above 40
let result4=temperatures.find(element => element > 40)
console.log("above 40:", result4)
    //5. findIndex() of temperature 28
let result5=temperatures.findIndex(element => element == 28)
console.log("index of 28:", result5)