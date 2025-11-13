let num = 15
function isPrime(num){
    let count=0
    for(let i=1;i<=num;i++){
        if(num % i == 0){
            count++
        }
    }
    if(count === 2){
        return true
    }
    else{
        return false
    }
}
console.log(isPrime(num)) 

function checkEvenOdd(num){
    if(num % 2 === 0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}
checkEvenOdd(num)
