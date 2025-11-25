let productCategories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
let categoryCount = productCategories.reduce(
    (acc,curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    },{}
)

console.log(categoryCount);

//Extra challenge

let sortedCategories = Object.entries(categoryCount).sort((a,b) => b[1]-a[1]);
console.log(sortedCategories)