const arr = [1, 2, 3, 4, 5]

// map -- for every ele run a cb and return a new array.
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (cb) {
        const result = []
        for (let i = 0; i < this.length; i++) {
            result.push(cb(this[i]))
        }
        return result
    }
}
const trippledArray = arr.myMap((e) => e * 3)
console.log(trippledArray);


// forEach -- Array ke harr ele k liye cb ko run krta hai
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (cb) {
        for (let i = 0; i < this.length; i++) {
            cb(this[i], i)
        }
    }
}
arr.myForEach((value, index) => {
    console.log(`At index:${index} Value:${value}`);

})

// Promise

if(!Array.prototype.reduce){
    Array.prototype.reduce = function(){

    }
}