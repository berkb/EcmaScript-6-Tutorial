//OLD JAVASCRIPT

function multiply(x, y){
    var a = x || 1 ;
    var b = y || 1;
    console.log(a*b);
}

multiply(5,10);
multiply();

//ES6

const add = (c=1, d=1) => {
    console.log(c + d);
};

add(3,5);
add();