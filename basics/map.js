const map = new Map ()
map.set( '1' , "js")
map.set( '2' , "c++")
map.set( '3' , "c#")
map.set( '4' , "java")

console.log(map) //Map(4) { '1' => 'js', '2' => 'c++', '3' => 'c#', '4' => 'java' }

//for of
for (const key of map) {
    console.log(key);  // whole map // [ '1', 'js' ]
                                    // [ '2', 'c++' ]
                                    // [ '3', 'c#' ]
                                    // [ '4', 'java' ]
 
}

for (const [key,element] of map) {
    console.log(key , '=>' , element);  // keys and value
}

// not for obje it gives error