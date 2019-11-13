//OLD JAVASCRIPT

function Person(name, age, hairColor){
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;

}

Person.prototype.sayName = function(){
    console.log('My name is ' + this.name);
}

function Berk(ocupation, hobbys, name, age, hairColor){
    Person.call(this, name, age, hairColor);
        this.ocupation = ocupation;
        this.hobbys = hobbys;
}

Berk.prototype = Object.create(Person.prototype);

const person = new Berk("Dev", "Gaming", "Berk", 23," Brown");

console.log(person);
person.sayName();

//ES6

class ShoppingList{
    constructor(items, nr){
        this.items = items;
        this.nr = nr;
    }
    sayList(){
        console.log(this.items);
    }
}

const myList = new ShoppingList(['Milk, Choco, Redbull'], 3);
myList.sayList();

class Product extends ShoppingList{
    constructor(items, nr, amount, cost){
        super(items, nr);
        this.amount = amount;
        this.cost = cost;
    }
    sayAmount(){
        console.log(this.amount);
    }
}

const product = new Product(['Redbull, Chocolate, Candy'], 3, 2, 20);
console.log(product);

product.sayList();
product.sayAmount();