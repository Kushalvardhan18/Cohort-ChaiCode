Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}
function greet(){
    console.log("Hii");
    greet.describe()
    
}
greet()
