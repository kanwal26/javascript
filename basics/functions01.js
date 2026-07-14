function calculateSum (... prices){
    let total = 0;
    for (let i=0; i < prices.length; i++){
        total += prices[i]
    }
    return total    

}

let total = calculateSum(10, 20, 30, 40)
console.log(`Total: ${total}`)



//objects
let person = {
    name: 'John',
    age: 30,
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

function greetPerson(person){
    let greet = person.greet()
    return greet
}

greetPerson(person)
 

//Arrays
let numbers = [1, 2, 3, 4, 5]
function calculateAverage(numbers){
    let total = 0
    for (let i=0; i < numbers.length; i++){
        total += numbers[i]
    }
    return total / numbers.length
}

let average = calculateAverage(numbers)
console.log(`Average: ${average}`)  