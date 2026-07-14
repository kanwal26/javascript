const user = {
  name: "John",
  age: 30,
  greet: function () {        
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}
user.greet(); // Output: Hello, my name is undefined and I am undefined years old.


const student = {
  name: "Alice",
  age: 20,
    details: function() {      
    console.log(this)
  
}}
student.details(); // Output: Window { ... } (or global object in Node.js)


//this in functions

function person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);  //long details of the object
  console.log(this.name);    // Bob
}
person("Bob", 25);   

//this in arrow functions

const person2 = () => {
  this.name = "Charlie";
  this.age = 35;
  console.log(this); // object detail
  console.log(this.name);   // charlie
}
person2(); // Output: Window { ... } (or global object in Node.js)

