let numOfguest = 2
let pizzaSize;
// small <=2 , medium <=5 , large >5
if(numOfguest <= 2){
    pizzaSize = "small"
}
else if(numOfguest <= 5){
    pizzaSize = "medium"
} 
else if(numOfguest > 5){
   pizzaSize = "large"
}  

console.log(pizzaSize);
