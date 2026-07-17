// for objects
const course = {
    name : 'js',
    tutor : 'Hitesh',
    youtube: 'chai and code'
}

//for in loop
for (const key in course) {
  console.log(key);  // only key in obj
}

for (const key in course) {
  console.log(course[key]);  // value in obj
}

for (const key in course) {
  console.log(key, '=>', course[key]);  // key value in obj
}