let myLibrary = []
let idCounter = 0;

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.id = idCounter++;
}



function addBookToLibrary() {
    
    const add = document.querySelector('.add')
    add.addEventListener('click', function() {
        let newBookTitle = prompt('What is the title?', '');
        let newBookAuthor = prompt('What is the author of the book', '');
        const newBook = new Book(newBookTitle, newBookAuthor);
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

                const cardDeleteButton = document.createElement('button');
                cardDeleteButton.dataset.idNumber = newBook.id;
                cardDeleteButton.textContent = 'Delete';

                card.appendChild(cardTitleText);
                card.appendChild(cardAuthorText);
                card.appendChild(cardDeleteButton);
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


removeBookFromLibrary();



addBookToLibrary();
