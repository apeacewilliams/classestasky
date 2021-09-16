const authors = require("./author");
const bookies = require("./books");



let author1 = new authors("Jesus", 0)
let book1 = new bookies ("Cherub", author1 , 1, )


console.log(book1, author1)
book1.newEdition();
console.log(book1, author1)
