//OLD JAVASCRIPT



//ES6

const shoppingList = ['Milk', 'Cow', 'Bananas', 'Choco', "Eggs"];

//forEach

shoppingList.forEach((product, index) => {
    console.log(`The index is ${index}, and the product is ${product}`);
});

//Map

const newList = shoppingList.map(item => item + " new");

console.log(newList);

//filter

const filterList = shoppingList.filter(item => item ==="Eggs");

console.log(filterList);