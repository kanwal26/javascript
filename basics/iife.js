//Named IIFE
( function greet (){
    console.log('Hi this is named IIFE')
}
)();

// Simple IIFE
(() => {
    console.log('This is simple IIFE')
})();


// IIFE with arguments and parameters
((n1, n2) => {
    console.log(n1+n2)
})(5,5)