let names = "John";    
let age = 12;
let grade = 6 ;
let attendanceStatus = true;
let date = "July" + " "  + 22 +  " " + 2024 

console.log (`${names} is ${age} years old. He is currently 
${attendanceStatus ? "present" : "absent"} in ${grade}th grade at West Middle School on ${date}.`);

let num1 = 12;
let num2 = 6;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(`Sum: ${sum}`);
console.log(`Difference:  ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);

num1 = 16;
num2 = 9;

console.log(`Updated num1: ${num1}`)
console.log(`Updated num2: ${num2}`)

let equal = num1 === num2;
let greater = num1 > num2;
let notEqual = num1 != num2;

console.log(`Is num1 equal to num2? ${equal}`);
console.log(`Is num1 greater than num2? ${greater}`);
console.log(`Is num1 not equal to num2? ${notEqual}`);


let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 == 0 || num2 % 2 == 0 ;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);