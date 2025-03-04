class person  {
    constructor(fname,lname){
       this.fname = fname;
       this.lname = lname;
    }
    getFullName(){
        return `${this.fname}  ${this.lname}`;
    }

}
const p1 = new person("Kushal","Vardhan");
const p2 = new person("Anirudh","Jawala");
const p3 = new person("Piyush","garg");
console.log(p1.getFullName());
console.log(p2.getFullName());
console.log(p3.getFullName());

