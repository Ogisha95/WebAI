let titleBook = prompt("What is the title of your book?");
let bookAuthor = prompt("Who is the author of your book?");
let readingInput = prompt("Have you read this book? (Yes/No)");

let bookInfo = {
    title: titleBook,
    author: bookAuthor,
    readingStatus: readingInput,
    status: function() {
        if (readingInput === "yes" || readingInput === "YES") {
    console.log("Already read '" + this.title + "' by " + this.author + ".");
    }   else if (readingInput === "no" || readingInput === "NO") {
    console.log("You still need to read '" + this.title + "' by " + this.author + ".");
}
    }
};

bookInfo.status();