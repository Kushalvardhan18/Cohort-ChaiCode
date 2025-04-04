const obj1={
    fname:"Kushal",
    lname:"Vardhan",
    getFullName:function(){
        if(this.lname === undefined) return `${this.fname}`
        return `${this.fname } ${this.lname} `
    }
}
console.log(obj1.getFullName());

const obj2={
    fname:"Aman",
    lname:"Vardhan",
    
}

// obj2.__proto__ = obj1
console.log(obj2.getFullName());

