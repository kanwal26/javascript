function Course(name,lessons,tutor){
    this.name = name
    this.lessons = lessons
    this.tutor = tutor
    this.greeting = function(){
        console.log(`Welcome to the series of ${this.name}`);
        
    }
}


const courseOne = new Course('js',51,'hitesh')
const courseTwo = new Course('react',7,'hitesh')
console.log(courseOne.greeting());

console.log(courseOne);
console.log(courseTwo.greeting());
console.log(courseTwo);

