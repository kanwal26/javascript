const user = {
    name: 'kanwal',
    study: 'BS',
    lecturesAttended: 45,
    greeting: function(){
        console.log(`welcome ${this.name}`);// welcome kanwal
        console.log(this); // whole obj
        
        
    }
}

console.log(user);  // whole obj
console.log(user.greeting());

console.log(this);   //{}



