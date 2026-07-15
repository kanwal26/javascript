let value = 10
value = null ?? 50
console.log(value);  // 50

value = undefined ?? 60 
console.log(value);  // 60

value = 70 ?? 80 
console.log(value); // 70 

value = null ?? undefined ?? 100
console.log(value); // 100