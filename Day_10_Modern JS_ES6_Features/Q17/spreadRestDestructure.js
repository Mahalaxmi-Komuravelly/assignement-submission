let arr1 = [1,2,3];
let arr2 = [4, 5];
let result = [...arr1,...arr2];
console.log(result);

function sum(...nums){
    return nums.reduce((a,b)=>a+b,0);
}
console.log(sum(2,3,4,5));


const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

let {name,age,address:{city,pin}}=user;
console.log(name,city,pin);