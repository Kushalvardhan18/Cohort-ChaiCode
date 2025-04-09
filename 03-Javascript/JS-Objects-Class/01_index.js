const obj = {
    personName: "Mukul",
    greet: function () {
        console.log(`Hello , ${this.personName}`);

    }
}
setTimeout(obj.greet.bind(obj), 0)


console.log("hello from JS");

// Starvation - When microtask queue doesn't get empty and callback queue is not picked up.
setTimeout(() => console.log("I am delayed"), 0)
Promise.resolve().then(() => {
    console.log("1. Promise resolved")
    Promise.resolve().then(() => {
        console.log("2. Promise resolved")
    }
    )
})
console.log("bye bye");


//  const age = 25
// console.log('Age is', age);

test()
function test() {
    console.log("I am inside test function");
}

// age = 3000


// Hoisting - load variables in memory prior to  the execution of code.
console.log('Age is', age); 
var age = 25
console.log('Age is', age); 