const promise = new Promise (function (resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
        resolve(`{username: 'kanwal'}`)
        }
        else{
            reject('Error happened')
        }
        
    }, 1000)
})

async function consumePromise(){
    try{
        const response = await promise
        console.log(response);
        
    }
    catch(error){
        console.log(error);
        
    }
}
consumePromise()