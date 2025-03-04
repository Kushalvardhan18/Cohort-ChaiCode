const obj1 = {
    fname:"Kushal",
    lname:"Vardhan",
    getFullName:function(){
        return `${this.fname}  ${this.lname}`;
    },
};
console.log(obj1)

const obj2 = {
    fname:"Anirudh",
    lname:"Jawala",
    getFullName:function(){
        return `${this.fname}  ${this.lname}`;
    },
};
console.log(obj2)

console.log(obj1.getFullName());
console.log(obj2.getFullName());


