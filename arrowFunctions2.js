//OLD JAVASCRIPT

var user = {
    name: 'Berk',
    age: '23',
    sayName: function(){
        console.log('My name is ' + this.name);
        var that = this;
        var fullName = function(){
            console.log("My name is " + that.name + " and my age is " + that.age);
        };
        fullName();
    }
}

user.sayName();

//ES6

const user2 = {
    name: 'Berk',
    age: 23,
    sayName: function(){
        console.log(`My name is ${this.name}`);
        const fullName = () => {
            console.log(`My name is ${this.name} and my age is ${this.age}`);
        };
        fullName();
    }
};

user2.sayName();