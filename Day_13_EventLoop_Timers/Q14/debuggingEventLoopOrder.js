console.log("JS executes synchronous code first,so it prints Begin and End,\npromises means the .then() callback's goes into microtask queue and callback's goes into the macrotask queue,\n JS runs all microtasks immediately after the callback is empty so promise Task is executed,\n then JS runs all macrotasks so Timeout Task is executed\n")

console.log("Begin");
setTimeout(() => {
     console.log("Timeout Task"); 
    }, 0); 
Promise.resolve().then(() => { 
    console.log("Promise Task"); 
}); 
console.log("End");

