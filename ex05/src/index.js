let shoppingList = new Map([
    [1, 'Banana'],
    [2, 'Pineapple'],
    [3, 'Pear'],
    [4, 'Carrot'],
    [5, 'Apple'],
]);

var arrKey = [];
var arrValue = [];

for (let product of shoppingList.entries()) {
    arrKey.push(`groceries: ${product[1]}`);
    arrValue.push(`amount: ${product[0]}`);
}


console.log(arrKey);
console.log(arrValue);

for (let [key, value] of shoppingList) {
console.log(key + " = " + value);
}

// for (let i of shoppingList) {
//     console.log(i);
// }

module.exports = { shoppingList, arrKey, arrValue };