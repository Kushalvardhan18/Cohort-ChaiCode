let phy 
let chem 
let maths 
let calcGrade;

function decide( phy ,chem ,maths){
marks = (phy+chem+maths )/3
}
decide(90,80,30)

if(marks>=90){
    calcGrade = 'A'
}
else if(marks>=80){
    calcGrade = 'B'
}
else if(marks>=70){
    calcGrade = 'C'
}
else if(marks>=60){
    calcGrade = 'D'
}
else{
    calcGrade = 'F'
}
console.log(calcGrade);
