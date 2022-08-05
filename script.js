let myLibrary = []
let idCounter = 0;

function Book(title, author, pages, readCompleted) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readCompleted = readCompleted;
    this.id = idCounter++;
}



function addBookToLibrary() {
    
    const add = document.querySelector('.add')
    add.addEventListener('click', function(ev) {
        ev.preventDefault();
        let newBookTitle = document.getElementById('title').value;
        let newBookAuthor = document.getElementById('author').value;
        let newBookPages = document.getElementById('pages').value;
        let newBookCompleted = document.getElementById('readstat').checked;
        const newBook = new Book(newBookTitle, newBookAuthor, newBookPages,
            newBookCompleted);
        myLibrary.push(newBook);
        console.log(myLibrary)
        

        const cards = document.querySelector('.cards');
        for (i = 0; i < myLibrary.length; i++) {
            if (i == newBook.id) {
                const card = document.createElement('div')
                card.classList.add('card');

                const cardTitleText = document.createElement('p');
                cardTitleText.textContent = `Title: ${myLibrary[i].title}`;

                const cardAuthorText = document.createElement('p');
                cardAuthorText.textContent = `Author: ${myLibrary[i].author}`;

                const cardPageRange = document.createElement('p');
                cardPageRange.textContent = `Pages: ${myLibrary[i].pages}`;

                const cardDeleteButton = document.createElement('button');
                cardDeleteButton.dataset.idNumber = newBook.id;
                cardDeleteButton.textContent = 'Delete';

                const cardReadButton = document.createElement('button');
                // cardDeleteButton.dataset.idNumber = newBook.id;
                cardReadButton.textContent = newBook.readCompleted ? 'Read' : 'Not Read';

                card.appendChild(cardTitleText);
                card.appendChild(cardAuthorText);
                card.appendChild(cardPageRange);
                card.appendChild(cardDeleteButton);
                card.appendChild(cardReadButton);
                cards.appendChild(card);
            }  
        }
        console.log(newBook.id)
    });
    
    
}

function removeBookFromLibrary() {
    const remove = document.querySelector('.cards')

    remove.addEventListener('click', (ev) => {
        
        myLibrary.forEach(book => {
            if (ev.target.dataset.idNumber == book.id) {
                myLibrary.splice(book.id,1);
                idCounter = idCounter -1;
            } 
        })
        
        if (ev.target.textContent == 'Delete') {
            const card = ev.target.parentElement;
            card.parentElement.removeChild(card);    
        }
    });
}

function readStatus() {
    const read = document.querySelector('.cards');

    read.addEventListener('click', (ev) => {
        myLibrary.forEach(book => {
                book.readCompleted = !book.readCompleted;
                ev.target.textContent = book.readCompleted ? 'Read' : 'Not Read';
        })
    })
}


removeBookFromLibrary();
readStatus();


addBookToLibrary();
