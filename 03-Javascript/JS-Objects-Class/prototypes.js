

// Array.prototype ={}
// arr.__proto__ = Array.prototype
Array.prototype.kushal = function () {
    return "hacked by kushal"
}
let arr = [1, 2, 3]
const k = arr.kushal()
console.log(k);

// if(!Array.prototype.fill){
//     // Fallback - pollyfill
//     Array.prototype.fill = function(){

//     }
// }


const str = "Kushal"
str
console.log(str.length);




const obj = {
    x: 1,
    y: 2
}
obj.x