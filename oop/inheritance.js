//Old way 
const user = {
    studentname: 'kanwal',
    course: 'js'
}

const teacher = {
    nameOfTeacher: 'Hitesh',
    makeVideo: true
}

teacher.__proto__ = user
console.log(teacher.studentname);

//MOdern way
Object.setPrototypeOf(teacher, user)
console.log(teacher.studentname);
