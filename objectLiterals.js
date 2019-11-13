//OLD JAVASCRIPT

function getBook(title, author){
    return{
        title: title,
        author: author
    };
}

var book = getBook("Harry Potter", "JK");
console.log(book);

//ES6

function getBook1(title, author){
    return{
        title,
        author
    };
}

var book1 = getBook("LOTR", "Tolkien");
console.log(book1);