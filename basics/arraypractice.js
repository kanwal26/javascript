const arr=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.push(10) // add at the end
arr.pop() // removes from the end
arr.unshift(9) // adds at the beginning
arr.shift() // removes from the beginning

// Slice
 const slicedArr=arr.slice(1,5)
 console.log(arr)
console.log(slicedArr)


// splice
 const splicedArr=arr.splice(1, 5) // also modify the original array
 console.log(arr) 
console.log(splicedArr) 