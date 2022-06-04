let myLibrary = [];

const cards = document.querySelector(".cards");


function ultimate() {

}

ultimate.prototype.addBook = function() {
    myLibrary.push(`${this.title} by ${this.author}`)
}

function Book(title, author) {
    //the constructor
    this.title = title
    this.author = author
}

Book.prototype = Object.create(ultimate.prototype)



const button = document.querySelector(".add");

function addedBook() {
    let work = new Book(prompt("Title: ", ""), prompt("Author: ", ""));
    return work.addBook();
}

button.addEventListener("click", function() {
    addedBook();

    myLibrary = [...new Set(myLibrary)];
    array();
    
    
});



/*console.log(addBookToLibrary());

function addBookToLibrary() {
    //do stuff here adds book to library using button
    myLibrary.push(`${Book.title} by ${Book.author}`)
}




addBookToLibrary();
*/


function array() {
    //for (let i = 0; i < myLibrary.length; i++) {
        
        const card = document.createElement('div');
        card.classList.add("card");
        card.textContent = `${myLibrary[myLibrary.length - 1]}`;
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.setAttribute("id", `${myLibrary[myLibrary.length - 1]}`);
        btn.textContent = `Delete`;
        card.appendChild(btn);
        cards.appendChild(card);
    //}
    
}

if (button.classList.contains("btn")) {
    const btns = document.querySelector(".btn");
    btns.addEventListener("click", function() {
        console.log("sfds");
    //need to make clear button
    //then all that is left is to style and
    //format the page to look nicer
});
}

