class Book {
    constructor(title, author, latestEdition){
 
        this.title = title;
        this.author = author;
        this.latestEdition = latestEdition;
    }

    newEdition(){
        if (this.latestEdition > 0){
            this.latestEdition++
        } else {
            console.log("BOOK DOES NOT EXIST YET!!!")
        }

    }
}

module.exports = Book;