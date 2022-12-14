class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
  }
}

// window.addEventListener('onload', showForm())

// Show form
document.getElementById('show-form').addEventListener('click', showForm)

function showForm() {
  const form = document.getElementById('book-form');
  if (form.classList.contains('show')) {
    form.classList.remove('show')
  } else {
    form.classList.add('show')
  }
}


class UI {
  static addBook(book) {
    const list = document.getElementById('book-list')
      const div = document.createElement('div');
      div.classList.add('book-items');
      div.innerHTML = `
       <h3>Title: ${book.title}</h3> 
       <h3>Author: ${book.author}</h3> 
       <h3>Pages: ${book.title}</h3> 
       <h3>Read? ${book.read}</h3> 
       <button class="cancel">X</button>
      `
      list.appendChild(div)
  }

  static showAlert() {
    
  }

  static removeBook() {
    document.querySelector('book-items').addEventListener('click', (e) => {
      console.log("III", e)
    })
  }
}


document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value; 
  const author = document.getElementById('author').value; 
  const pages = document.getElementById('pages').value; 
  const read = document.getElementById('read').checked; 

  const book = new Book (title, author, pages, read);
  console.log(book)

  if(title === '' || author === '' || pages === '') {
    alert('Must complete form')
  } else {
      UI.addBook(book)
      showForm()
  } 
})
