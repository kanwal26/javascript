// Global Scope
let course1 = "JavaScript";
function sayCourse1() {
  console.log(course1);
}
sayCourse1(); 

//Block Scope
function sayCourse2() {
  let course = "JavaScript";
  if (true) {
    console.log(course);
  }
}
sayCourse2();

//Nested Scope
function sayCourse3() {
  let course = "JavaScript";
  if (true) {
    let course = "Python";
    console.log(course);
  }
  console.log(course);
}
sayCourse3();