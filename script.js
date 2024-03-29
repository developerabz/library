// initialize items in library and idCounter for
// each unique library book
let myLibrary = []
let idCounter = 0;

// class constructor of book objexts
class Book {
    constructor (title, author, pages, readCompleted) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readCompleted = readCompleted;
        this.id = idCounter++;
    }
}

function addBookToLibrary() {
    // adds book object to library array
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
        
        // adds book as a card to the html display
        const cards = document.querySelector('.cards');
        for (i = 0; i < myLibrary.length; i++) {
            if (i == newBook.id) {
                const card = document.createElement('div')
                card.classList.add('card');

                const cardText = document.createElement('section');


                const cardTitleText = document.createElement('h2');
                cardTitleText.textContent = `${myLibrary[i].title}`;

                const cardAuthorText = document.createElement('p');
                cardAuthorText.textContent = `${myLibrary[i].author}`;

                const cardPageRange = document.createElement('p');
                cardPageRange.classList.add('pages');
                const pagesString = myLibrary[i].pages ? 'pages read' : '';
                cardPageRange.textContent = `${myLibrary[i].pages} ${pagesString}`;

                const buttonDiv = document.createElement('div');

                const cardDeleteButton = document.createElement('button');
                cardDeleteButton.classList.add('deleter');
                cardDeleteButton.dataset.idNumber = newBook.id;
                cardDeleteButton.textContent = '';

                const deleteButtonImg = document.createElement('img');
                deleteButtonImg.dataset.idNumber = newBook.id;
                deleteButtonImg.setAttribute('src', 'images/delete-icon.png')
                deleteButtonImg.setAttribute('alt', 'delete button')

                const cardReadButton = document.createElement('button');
                // cardDeleteButton.dataset.idNumber = newBook.id;
                cardReadButton.textContent = newBook.readCompleted ? 'Read' : 'Not Read';

                cardDeleteButton.appendChild(deleteButtonImg);
                buttonDiv.appendChild(cardDeleteButton);
                buttonDiv.appendChild(cardReadButton);
                cardText.appendChild(cardTitleText);
                cardText.appendChild(cardAuthorText);
                cardText.appendChild(cardPageRange);
                card.appendChild(cardText);
                card.appendChild(buttonDiv);
                cards.appendChild(card);
            }  
        }
        
        // emptys the values of the input in html
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
        document.getElementById('readstat').checked = false;

        if (myLibrary.length === 0) {
            const cards = document.querySelector('.cards');
            cards.style.backgroundImage = 'none';
        } else {
            const cards = document.querySelector('.cards');
            cards.style.backgroundImage = "url(images/dark.png)";
        }
    });
    
    
}

function removeBookFromLibrary() {
    const remove = document.querySelector('.cards')
    // creates remove button for each book
    remove.addEventListener('click', (ev) => {
        
        myLibrary.forEach(book => {
            if (ev.target.dataset.idNumber == book.id) {
                myLibrary.splice(book.id,1);
                idCounter = idCounter -1;
            } 
        })
        
        if (ev.target.class == '.deleter') {
            const buttonDiv = ev.target.parentElement;
            const card = buttonDiv.parentElement;

            card.parentElement.removeChild(card);    
        } else if (ev.target.alt == 'delete button') {
            const cardDeleteButton = ev.target.parentElement;
            const buttonDiv = cardDeleteButton.parentElement;
            const card = buttonDiv.parentElement;

            card.parentElement.removeChild(card); 
        }


        if (myLibrary.length === 0) {
            const cards = document.querySelector('.cards');
            cards.style.backgroundImage = 'none';
        } else {
            const cards = document.querySelector('.cards');
            cards.style.backgroundImage = "url(images/dark.png)";
        }
        
    });
}

// function background() {
    
// }

function readStatus() {
    const read = document.querySelector('.cards');
    // creates read or not read button for each  book
    read.addEventListener('click', (ev) => {
        console.log(ev);
        myLibrary.forEach(book => {
                book.readCompleted = !book.readCompleted;
                if (ev.target.parentElement.parentElement.classList.contains('card')) {
                    ev.target.textContent = book.readCompleted ? 'Read' : 'Not Read';

                }
        })
    })
}

const addBook = document.querySelector('.addbook');


// button to remove form from css
addBook.addEventListener('click', () => {
    
    const form = document.getElementById('bookmaker');
    if (form.style.display === "block") {
        form.style.display = "none"
        addBook.textContent = "Add Book"
    } else {
        form.style.display = "block"
        addBook.textContent = "Hide Book Form"
    }
    
})


removeBookFromLibrary();
readStatus();

addBookToLibrary();

