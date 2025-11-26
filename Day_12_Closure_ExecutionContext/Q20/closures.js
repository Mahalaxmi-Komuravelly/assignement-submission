function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Current Count: ${count}`);
    }
    function decrement(){
        count--;
        console.log(`Current Count: ${count}`);
    }
    return {increment,decrement}
}

const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1

// Question 2

function createBankAccount(){
    let balance = 0;
    let transactionHistory = [];
    function deposit(amount){
        balance = balance + amount;
        transactionHistory.push({type:"deposit",amount:amount});
        console.log(`Deposited : ${amount}`);
    }
    function withdraw(amount){
        if(balance >= amount){
            balance = balance - amount;
            transactionHistory.push({type:"withdraw",amount:amount});
            console.log(`Withdrawn : ${amount}`);
        }
        else{
            console.log("Insufficient balance")
        }
    }
    function getTransactionHistory(){
        console.log(transactionHistory);
    }
    return {deposit,withdraw,getTransactionHistory}
}
const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance);
console.log("A closure is created when we return the inner function which have access to variables inside outer function even after the outer function execution is completed,but we can't directly access the variable until we exposed it explicitly") // Output: undefined
account.getTransactionHistory();