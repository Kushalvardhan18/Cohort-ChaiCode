const arr = [1,2,3,4,5,6]

 // Error : .forEach function does not exist on arr variable.
// Real Signature - No return , function input, value, index
// Calls my fn for every value
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
    const originalArr = this   // Dynamic Context
    for(let i =0;i<originalArr.length;i++){
        userFn(originalArr[i],i)
    }
    }
}

arr.myForEach(function(value,index){
    console.log(`Value at Index ${index} is ${value}`);
    
})



// Signature .map
// return - new Array, each element iterate,userFn


if(!Array.prototype.myMap){

    Array.prototype.myMap = function(userFn){
        const result =[]
        const originalArr = this
        for(let i=0;i<originalArr.length;i++){
           const value =  userFn(originalArr[i],i)
            result.push(value)
        }
        return result
    }
}



const n = arr.myMap((e)=> e*2)
console.log(n);


// Filter 
// Signature : return new Arr , input:userFn ,
// agar user ka fn true return krta h tooo current value ko new array mai include krta h 

// const arr = [1,2,3,4,5,6]

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const result =[]

        for(let i =0;i<this.length;i++){
            if(userFn(this[i])){
                result.push(this[i])
            }
        }
        return result
    }
}
const n3 = arr.myFilter((e)=>e%3 ==0)
console.log(n3);
