let randomNum1 = Math.random() ;  // generates a random number between 0 and 1
console.log(randomNum1)

let randomNum2 = Math.random() * 10; // generates a random number between 0 and 10
console.log(randomNum2)

let randomNum3 = Math.floor(Math.random() * 10); // generates a random integer between 0 and 9
console.log(randomNum3)

let randomNum4 = Math.floor(Math.random() * 10) + 1; // generates a random integer between 1 and 10
console.log(randomNum4)



// Range between min and max 
const min = 5;
const max = 15;

let randomNum5 = Math.floor(Math.random() * (max - min + 1)) + min; // generates a random integer between min and max
console.log(randomNum5) 

