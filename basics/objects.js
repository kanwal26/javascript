const user = {
  name: "Kanwal",
  favoriteNumber: 8,
  isLearningJavaScript: true,
  greet: function () {
    console.log("Hello, " + this.name + "!");
  },
};

console.log(user.greet()); // Output: Hello, Kanwal!
console.log(user["favoriteNumber"]);

// Freezing Objects
Object.freeze(user);
user.name = "John"; // This will not change the name property
console.log(user.name); // Output: Kanwal

//Objects within Objects
const person = {
  name: "Kanwal",
  address: {
    street: "123 Main St",
    city: "Mansehra",
    country: "Pakistan",
  },
};      
 console.log(person.address.city); // Output: Mansehra


 //merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); 

//OR
const mergedObj2 = { ...obj1, ...obj2 };
console.log(mergedObj2);  

//GETTING ALL KEYS AND VALUES
const keys = Object.keys(user);
console.log(keys); 


const values = Object.values(user);
console.log(values); 