function setUser(name) {
    this.name = name
    
}
function createUser(name, pass) {
    // setuser(name) // nothing in console bcz reference not hold to hold this use call and this.
    setUser.call(this.name)
    this.pass = pass 
}

const chai = new createUser("chai", "123")
console.log(chai);
