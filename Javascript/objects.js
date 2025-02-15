const person ={
    firstName: 'Kushal',
    lastName: 'Vardhan',
    hobby: ['Coding',"Riding Sports Bike"],
    getFullNamd:function(){
        return `${this.firstName} ${this.lastName}`;
    },
    address:{
        city: 'Mandi',
        state: 'Himachal Pradesh'
    }

}
console.log(person.hobby);

