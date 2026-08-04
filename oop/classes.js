class User{
    constructor(username, email, pass){
        this.username = username,
        this.email = email,
        this.pass = pass
    }

    encryptPassword(){
        return `xyz${this.pass}abc`
    }
}

const user1 = new User('kanwal','kk@gmail.com','1123')
console.log(user1);

console.log(user1.encryptPassword());
