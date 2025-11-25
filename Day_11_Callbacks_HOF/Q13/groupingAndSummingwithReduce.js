let productCategories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
let categoryCount = productCategories.reduce(
    (acc,curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    },{}
)

console.log(categoryCount);