//OLD JAVASCRIPT

function sayName(){
    console.log('Hello I am Berk');
}

var sayAge = function(){
    console.log('My age is, well i dont wanna tell you');
};

sayName();
sayAge();

//ES6

const sayLocation = (location, name) => 
    console.log(`My location is ${location} and my name is ${name}`);

sayLocation("Izmir", "Berk");