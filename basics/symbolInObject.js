const password = Symbol("")

const user = {
    name: "John",
    age: 30,
    city: "New York",
     [password]: "secret"
}
console.log(user["name"])

console.log(user["age"])
console.log(user["city"])
console.log(user[password])