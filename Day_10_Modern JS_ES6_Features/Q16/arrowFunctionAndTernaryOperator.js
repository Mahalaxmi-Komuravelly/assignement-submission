const isEven = (n)=>{
    if(n%2 === 0){
        return true
    }
    else{
        return false
    }
}
console.log(isEven(5));
console.log(isEven(18));

const result = (marks) => marks >= 35? "Pass" : "Fail";
console.log(result(20));
console.log(result(85));

const greet = (name) => name? `Hello, ${name}` : `Hello, Guest`;
console.log(greet());
console.log(greet("Krishna"));