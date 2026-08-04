function menu (name ,price){
    this.name = name,
    this.price = price
}
menu.power = 2

console.log(menu('chai' , 80));  // calling without new so, undefined
console.log(menu.prototype); // {}
console.log(menu.power); //2

const fries = new menu('fries', 600)
const pastery = new menu('Pastery', 300)

console.log(fries);  
console.log(pastery);

menu.prototype.increment = function(){
    this.price += 100
}

menu.prototype.print = function (){
    console.log(`The price of ${this.name} is ${this.price}`);
    
}
fries.increment();
fries.print();

pastery.increment();
pastery.print();

console.log(fries);
console.log(pastery);






