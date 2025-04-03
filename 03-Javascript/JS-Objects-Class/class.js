class person {
    constructor(fname, lname) {
        this.fname = fname
        this.lname = lname
    }
    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}

const p1 = new person("Kushal","vardhan")
const p2 = new person("Aman","vardhan")
console.log(p1);
console.log(p2);

console.log(p1.getFullName());
console.log(p2.getFullName());
