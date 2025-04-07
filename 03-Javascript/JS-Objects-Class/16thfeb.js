Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}
function greet(){
    console.log("Hii");
    greet.describe()
    
}
greet()


// Function Declaration
function sum(a,b){
return a+b
}

// Function Expression
const sub = function(a,b){
    return a-b
}

// Arrow Function
const multiply = (a,b)=>{return a*b}

console.log(sum(4,5));
console.log(sub(4,5));
console.log(multiply(4,5));

// First class functions 
function applyOperation(a,b, operation){
    return operation(a,b)
}

const result = applyOperation(4,2, (x,y)=>x-y)
console.log(result);


function createCounter(){
    let count =0
    return function(){
        count++;
        return count
    }
}

const counter = createCounter()
console.log(counter());


// IIFE - Immediately Invoked Function Expression 

(function(){
    console.log("Kushal");
})() 