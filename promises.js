//OLD JAVASCRIPT

console.log('Start');

function getData(data, callback){
    setTimeout(() =>{
        console.log('reading from the database');
        callback({data: data});
    }, 2000);
}

getData(5, function(data) {
    console.log(data);
})

console.log('Finish');

//ES6

const prom = new Promise((resolve, reject) =>{
    //Here is asynchronous
    setTimeout(() =>{
        //resolve({user: "Berk", pass: "1234"});
        reject(new Error('something went wrong'));
    }, 2000);
});

prom
    .then(data => {
        console.log(data);
    })
    .catch(err=> console.log(err));