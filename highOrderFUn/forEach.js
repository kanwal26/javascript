const arr = [1,2,3,4,5]
arr.forEach((num) => {
    let power = Math.pow(num , 2)
    console.log(num , 'power 2 is ' ,power);
})

// for objects
const course = [{
    name : 'js',
    tutor : 'Hitesh',
    youtube: 'chai and code'
}]
course.forEach((key) => {
    console.log(key , " => ", key.name);
    
})
