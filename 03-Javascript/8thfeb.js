//Problem :Create am array Containing  different types of teas.
let teas = ["Green tea", "Black tea", "oolong tea", "ginger tea", "herbal tea"]
let teas2 = new Array("Green tea", "Black tea", "oolong tea", "ginger tea")
console.log(teas);
console.log(teas2);


//Problem : Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea")
console.log(teas);

//Problem : Remove "Oolong Tea" from the list of teas.
let index = teas.indexOf("oolong tea")
if (index > -1) {
    teas.splice(index, 1)
}
console.log(teas);

//Problem : Filter the list to only include teas that are caffenited.
let caffeniatedTeas = []
teas.forEach(tea => {
    if (tea !== "herbal tea") {
        caffeniatedTeas.push(tea)
    }
});
console.log(caffeniatedTeas);


let cTeas =teas.filter((tea) =>tea !== "herbal tea")
console.log(cTeas);


//Problem : Sort the list of teas in alphabetical order.
console.log(teas.sort())
//Problem : Use a for loop to print each type of tea in the array.
for (let i = 0; i < teas.length; i++) {
    console.log(teas[i]);

}
//Problem : Use a for loop to count how many teas are caffeniated (excluding "herbal tea")
let count = 0
for (let i = 0; i < teas.length; i++) {
    if (teas[i] !== "herbal tea") {
        count++;
    }
}
console.log(count)
//Problem : use a for loop to create a new array with all tea names in uppercase.
let upperCaseTeas = []
for (let i = 0; i < teas.length; i++) {
    upperCaseTeas.push(teas[i].toUpperCase())
}
console.log(upperCaseTeas);

//Problem : Use a for loop to find the tea name with the most characters.
let max = 0
let maximumCharacterTea =""
for (let i = 0; i < teas.length; i++) {
    if (max < teas[i].length) {
        max = teas[i].length
        maximumCharacterTea = teas[i]
    }
}

console.log(max)
console.log(maximumCharacterTea);


