//OLD JAVASCRIPT

var user = {
    name: 'Berk',
    age: 23
}

var myName = user.name;
console.log(myName);
console.log(user);
//ES6

const list = {
    name: 'Shopping List',
    items: ['Milk', 'Cow']
}

const {name, items} = list;

console.log(name, items);
