const cartItems = [
    {
        item : "wrist watch",
        price : 5000,
        category : "accessories"
    },
    {
        item : "lip gloss",
        price : 1500,
        category : "makeup"
    },
    {
        item : "mascaraw",
        price : 1500,
        category : "makeup"
    },
    {
        item : "earing set",
        price : 2000,
        category : "accessories"
    },
    {
        item : "tot bag",
        price : 3000,
        category : "women bag"
    },

]
// reduce 
const total = cartItems.reduce((acc , items) => acc + items.price , 0)
console.log(`Total price of your cart is ${total}`);

// filter
const makeupItems = cartItems.filter(item => item.category === "makeup");

console.log(makeupItems);

//filter 2 
const brushItems = cartItems.filter(item => item.category === "brushes");

console.log(brushItems);



