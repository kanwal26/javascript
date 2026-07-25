async function getAllUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typecode.com/users')
        const data  = await res.json()  //takes time
        console.log(data);
        
        
    } catch (error) {
        console.log("Error:",error);
        
        
    }
    
}
getAllUsers()