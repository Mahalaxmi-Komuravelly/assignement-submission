// 1. Template Literals + Expressions
// a) Print: "5 + 7 = 12" using a template literal where the result is calculated inside ${ }.

console.log(`${5+7}`);
console.log("--------------------------")
//b) Create a multi-line string using template literals (3 lines).
let name="Mahalaxmi",age1=29,Qualification="Graduate"
console.log(`My name is ${name},\nMy age is ${age1}, \nI am a ${Qualification} `);
console.log("--------------------------")

//c) Given firstName = "John" and lastName = "Doe", print the full name using a template literal.
let firstName = "John",lastName = "Doe";
console.log(`FullName is ${firstName} ${lastName}`);
console.log("--------------------------")

// 2. Arrow Functions & this
// a) Convert given function into an arrow function:
const square = n => n*n;
console.log(square(15));
console.log("--------------------------")

//b) Explain why the following logs undefined:

// const obj = {
//   value: 50,
//   test: () => console.log(this.value)
// };
// obj.test();
console.log("arrow functions don't bind their own this,they take it from the lexical scope not the object");
console.log("--------------------------")

//c) Rewrite it using a normal function so that printing works.
const obj1 = {
  value: 50,
  test(){
    console.log(this.value)
  }
};
obj1.test(); 

console.log("--------------------------")
//3. Rest, Spread & Copying Objects
// a) Use spread to make a shallow copy of this object:
const product = { name: "Pen", price: 10 };
let product_copy={...product};
console.log(product_copy);

//b) Merge these two objects using spread:

const a = { x: 1 };
const b = { y: 2 };
const c = {...a,...b};
console.log(c)
console.log("--------------------------")

// c) Write a function maxValue(...nums) (rest operator) that returns the largest number.

function maxValue(...nums){
    return nums.reduce((a,b)=>a>b?a:b,-Infinity);
}
console.log(maxValue(5653,7687678,26,25658));
console.log("--------------------------");

//4. Destructuring & Optional Chaining
// a) Destructure to extract a and b:
const arr = [10, 20, 30];
const [a2,b2,c2] =arr;
console.log(a2,b2);
console.log("--------------------------");
// b) Destructure the object to extract brand:
const laptop = { brand: "Dell", ram: "8GB" };
const {brand,ram}=laptop;
console.log(brand);
console.log("--------------------------");
// c) Safely access the following using optional chaining:
const info = {};
console.log(info?.name);
console.log("--------------------------");
// a) What will this print?
for (var i = 0; i < 3; i++) {}
console.log(i);
for (let j = 0; j < 3; j++) {}
console.log(j);
//c) Why is const used for values that should not be reassigned?
console.log("Prevents accidental reassignements making code safe and easier,and tells the developer that this value needs to be constant.");
console.log("--------------------------");
//6. Ternary Operator – Practice
let kmph = 80
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);
console.log("--------------------------");
//b) Write a ternary that prints "Adult" if age ≥ 18, else "Minor".

let age = 20;
let res = age >= 18 ? "Adult" : "Minor";
console.log(res);
console.log("--------------------------");
//c) Write a ternary to check: Positive → "Positive" Zero → "Zero" Negative → "Negative" (Hint: use nested ternary)

let num = -10;
let checkPNZ = num == 0 ? "Zero" : num > 0 ? "Positive" : "Negative";
console.log(checkPNZ);
console.log("--------------------------");
//7. Spread, Rest & Arrays
//a) Add elements 4, 5 to this array using spread:
const nums = [1,2,3];
const nums1=[...nums,4,5];
console.log(nums1);
console.log("--------------------------");
//b) Combine these arrays using spread:
let a1 = ["x","y"];
let b1 = ["z"];
let c1 = [...a1,...b1];
console.log(c);
console.log("--------------------------");
//c) Write a function using rest: printNames("A","B","C") → returns ["A","B","C"].

function printNames(...names){
    return names
}
console.log(printNames("A","B","C"));
console.log("--------------------------");
//8. Object Destructuring & Shorthand

const user = { id: 101, status: "active" };
const {id,status}=user;
console.log(id,status);
console.log("--------------------------");
const id1 = 101;
const role = "admin";
const user2 = {
  id,
  role
};
console.log(user2);
console.log("--------------------------");
//c) Create an object using shorthand and add a method using shorthand syntax.
let course="JavaScript",module=2;
const student={
    course,
    module,
    job(){
        return "You can become a developer"
    }
}
console.log(student.course);
console.log(student.job());
//9. Template Literals (More Practice)
//a) Use a template literal to print today’s date using: new Date().toDateString()
console.log(`Today's date is ${new Date().toDateString()}`);
//Create a template literal that prints: "Hello NAME, your score is SCORE/100"
let sName="Hari",score1=90;
console.log(`Hello ${sName}, your score is ${score1}/100`);

//10. Arrow Function Shorthands
//a) Convert a normal function to a one-line arrow function for addition.
const addition=(a,b)=>a+b;
console.log(addition(2,4));
//b) Write an arrow function isAdult(age) that returns true/false.
const isAdult=age=>age>=18?true:false;
console.log(isAdult(5));
//c) Create an arrow function double that doubles a number.
// 11. Spread Operator (Arrays & Objects)
// a) Clone an array using spread.
 let sArr=[88,23,38,45];
let sArrCopy = [...sArr];
console.log(sArrCopy);
// b) Add element 100 to the beginning of an array using spread.

let sArr_new=[100,...sArr];
console.log(sArr_new);

//c) Merge two objects and override one property using spread.
let object1={name:"ravi",age:90,Gender:"Male"};
let object2={name:"Ravindra",age:90,Gender:"Male"};
let new_obj={...object1,...object2};
console.log(new_obj);

//12. Optional Chaining (More Practice)
// a) Access user.address.city safely:
const user1 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user1?.address?.city);
//b) Access user.job.title safely (should print undefined).
console.log(user1?.job?.title);
//c) Write an example where optional chaining prevents a runtime error.
console.log(user1?.course?.module);
