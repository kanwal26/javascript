let courses = ['js', 'react']

let courseSeries = {
    js: "chai aur js",
    react: "react series",

    getJsSeries: function(){
        console.log(`JS series name is ${this.js}`);
        
    }
}

Object.prototype.kanwal = function () {
    console.log(`Kanwal is present in all objects`);
    
    
}
courseSeries.kanwal()

Array.prototype.hiKanwal = function () {
    console.log(`Kanwal Hi`);
}

courses.hiKanwal()
// courseSeries.hiKanwal() // error