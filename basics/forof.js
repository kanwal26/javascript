const courses = ['js','AI','ML','React']
for (const element of courses) {
    console.log(element);
}

// element with index
// //j s
// A I
// M L
// R e
// for (const [element,index] of courses) {
//     console.log(element , index);
// }

// whole array
// j s undefined
// A I undefined
// M L undefined
// R e a
// for (const [index, element, array] of courses) {
//     console.log(index, element, array);
// }


//for of not for objects


// strings
const str = "kanwal"
for (const element of str) {
    console.log(element);
}
