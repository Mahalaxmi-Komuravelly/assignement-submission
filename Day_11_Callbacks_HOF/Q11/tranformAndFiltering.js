let arr = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];

function processProducts(products){
    let  productNames = products.map(ele => ele.name);
    products.forEach(element => {
        if(element.price > 50){
            console.log(`${element.name} is above $50`)
        }
        else{
            console.log(`${element.name} is below $50`)

        }
    });
}
processProducts(arr);