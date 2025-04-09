const obj = {
    personName:"Mukul",
    greet:function(){
        console.log(`Hello , ${this.personName}`);
        
    }
}
setTimeout(obj.greet.bind(obj),2000)


console.log("hello from JS");


setTimeout(()=>console.log("I am delayed"),0)

console.log("bye bye");
