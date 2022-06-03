let myLibrary = ["Hobbit by Tolkien", "Don Quixote by Cervantes"];

const cards = document.querySelector(".cards");


function Book(title, author) {
    //the constructor
    this.title = title
    this.author = author
}
const work = new Book("Work", "Me");

console.log(addBookToLibrary());

function addBookToLibrary() {
    //do stuff here adds book to library using button
    myLibrary.push(`${Book.title} by ${Book.author}`)
}




addBookToLibrary();

function array() {

   // let result = "";
    for (const piece of myLibrary) {
        const card = document.createElement('div');
        card.textContent = `${piece}`;
        cards.appendChild(card);
    }
}

array();