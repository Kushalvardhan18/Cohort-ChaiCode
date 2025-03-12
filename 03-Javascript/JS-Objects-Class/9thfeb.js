// Problem 1 : Create an object representing a type of tea with properties for name, type,and caffeine content.
const teas = {
    name:"Green Tea",
    type: "Non - Caffenited",
    caffeine_Content :"low",
}
// Problem 2 : Access and print the name and type properties of the tea Object.
console.log(teas.name ,teas.type);


// Problem 3 : Add a new property origin to the tea Object.
teas.origin = "plant"
console.log(teas);

// Problem 4 : Change the caffeine level of the tea object to "Medium".
teas.caffeine_Content ="Med"
console.log(teas.caffeine_Content);

// Problem 5 : Remove the type property from the tea object.

delete teas.type

// const {type, ...rest} = teas
// console.log(rest);

console.log(teas);

// Problem 6 : Check if the tea Object has a property origin.

// Object.hasOwn() is recommended over Object.hasOwnProperty() because it works for objects created using Object.create(null) and with objects that have overridden the inherited hasOwnProperty() method. 

// console.log(teas.hasOwnProperty("origin")  )

console.log(Object.hasOwn(teas, "origin"));

console.log("origin" in teas);


// Problem 7 : Use a for... in loop to print all properties of the tea object.

for(const property in teas){
    console.log(property);
    
    console.log(`${property} : ${teas[property]}`);
}


// Problem 8 : Ceate a nested object representing different types of teas and their properties.
const advanceTeas = {
    greenTea:{
        type:"Caffeinated",
        caffeine_Content:"Low"
    },
    lemonTea:{
        type:"Caffeinated",
        caffeine_Content:"Low"
    }
}
console.log(advanceTeas);


// Problem : Create a copy of the tea Object.


//shallow copy
const newTeas = {
    ...advanceTeas
}


console.log(newTeas);
newTeas.greenTea.type ="china"
console.log(newTeas);
console.log(advanceTeas);


// delete newTeas.name
// console.log(newTeas);
// console.log(teas);

// const newTeas = Object.assign({},teas)
// console.log(newTeas);
// delete newTeas.name
// console.log(newTeas);
// console.log(teas);


//Deep Copy
// const newTeas = JSON.parse(JSON.stringify(advanceTeas))
// console.log(newTeas);

// // delete newTeas.name
// newTeas.greenTea.type = "china"
// console.log(newTeas);
// console.log(advanceTeas);



