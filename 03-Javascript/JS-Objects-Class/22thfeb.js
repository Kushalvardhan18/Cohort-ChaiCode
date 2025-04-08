let name = "Kushal"
// const pi = 3.14

let number = 10 // Number
let str = "Kushal" // String
let bool = true // Boolean
let pi = 3.14 // Number
let n = null // Null // Object
let x = undefined //Undefined

let arr = [1, 2, 3, 4, 5] // Object Array
let obj = {
    name: "Kushal",
    age: 23
} // Object

let symbolVar = Symbol()  // Symbol

// console.log(typeof (n));

let num = "a42a"
// let convertedNum = +num
// let convertedNum = parseInt(num)
let convertedNum = Number(num)

// console.log(convertedNum);
// console.log(typeof (convertedNum));


let str1 = 123
let convertedString = String(str1)

// console.log(typeof (convertedString));


let a = 10
let b = 3
let sum = a + b
let difference = a - b
let product = a * b
let quotient = a / b
let remainder = a % b
let power = a ** b


let s = 5
let y = 10
// console.log(s == y);
// console.log(s != y);
// console.log(s < y);
// console.log(s > y);
// console.log(s >= y);
// console.log(s >= y);

// console.log(Math.min(s,y))
// console.log(Math.max(s,y))
// console.log(Math.random())

let firstName = "Aman"
let lastName = "Vardhan"
// let fullName = firstName+lastName
let fullName = `${firstName} ${lastName}`
console.log(fullName);

 function checkTruthyValue(value){
    if(value){
        console.log("Truthy");
    }
    else{
        console.log("Falsy");
    }
 }
checkTruthyValue(1)
checkTruthyValue(0)
checkTruthyValue([])
checkTruthyValue("Kushal")
checkTruthyValue("")

