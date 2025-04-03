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
    getFullName:function(){
        return `${this.fname} ${this.lname}`
    }
}
console.log(obj2.getFullName());

