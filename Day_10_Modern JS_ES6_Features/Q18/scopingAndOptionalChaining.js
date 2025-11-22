// a) What is the output?

if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);

console.log("we get Refernce error as x is not defined because x is declared by using let in a block, so we can not access it outside the block");
console.log("---------------------------")

// b) Access the following safely using optional chaining:

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);

console.log("---------------------------")


// c) Create an example where optional chaining prevents a runtime error when accessing a missing nested property.

const product={
    name:"Laptop",
    specification:{
        cpu:{
            model:"i5",
        }
    }
}

console.log(product?.specification?.gpu?.model);

console.log("---------------------------");
console.log(product.specification.gpu.model);
