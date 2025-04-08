function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Kushal")
greet("Aman")

let globalVar = "I am global"
function modifyGlobal() {
    globalVar = "I am modified"
    let blockScopedVar = "I am Blocked scope"
    console.log(blockScopedVar);

}
modifyGlobal()

//IIFE
let config = function () {
    let settings = {
        theme: "dark"
    }
    return settings
}()
// (()=>{})()

let person1 = {
    name: "ravi",
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}
person1.greet()

let person2 = {
    name: "Kushal"
}
person1.greet.call(person2)
const bindGreet = person1.greet.bind(person2) // Bind returns a new function
bindGreet()
 