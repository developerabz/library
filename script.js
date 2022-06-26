let myLibrary = []

function Book() {
    let book = new Object({
        title: 'Test Book',
        author: 'Test Author'
    })
    return book
}



function addBookToLibrary() {
    
    const add = document.querySelector('.add')
    add.addEventListener('click', () => {
        myLibrary.push({
            title: prompt('What is the Book?',''),
            author: prompt('Who is the author?','')
        })
        console.log(myLibrary)
        
        
    })
    myLibrary.push(Book())
    // addBookToScreen()
    
    
    
}

function addBookToScreen() {
    const loopy = myLibrary.forEach(libraryBook => {
        const cards = document.querySelector('.cards')
        const card = document.createElement('div')
        card.classList.add('card')
        card.textContent = `${libraryBook.title} by ${libraryBook.author}`
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.setAttribute('data-index-number', `${libraryBook.title}`)
        btn.textContent = 'Delete'
        card.appendChild(btn)
        cards.appendChild(card)
        console.log(cards)
    })

    
}

addBookToLibrary()