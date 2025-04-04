class person {
    constructor(fname, lname) {
        this.fname = fname
        this.lname = lname
    }
    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}
class student extends person{
    
}
const p1 = new person("Kushal","vardhan")
const p2 = new person("Aman","vardhan")
const s1 = new student("kk","vv")
console.log(s1.getFullName());

console.log(p1);
console.log(p2);

console.log(p1.getFullName());
console.log(p2.getFullName());
