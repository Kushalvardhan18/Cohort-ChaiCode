const person ={
    firstName: 'Kushal',
    lastName: 'Vardhan',
    hobby: ['Coding',"Riding Sports Bike"],
    getFullName:function(){
        return `${this.firstName} ${this.lastName}`;
    },
    address:{
        city: 'Mandi',
        state: 'Himachal Pradesh'
    }

}
console.log(person.hobby);

console.log(person.address.city);

console.log(person.address);

