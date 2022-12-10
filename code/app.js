class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages; 
  }
}

// window.addEventListener('onload', showForm())

// Show form
document.getElementById('show-form').addEventListener('click', showForm())

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
      div.innerHTML = `
       <h3>Title: ${book.title}</h3> 
       <h3>Author: ${book.author}</h3> 
       <h3>Pages: ${book.title}</h3> 
      `
      list.appendChild(div)
  }
}


document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value; 
  const author = document.getElementById('author').value; 
  const pages = document.getElementById('pages').value; 

  const book = new Book (title, author, pages);
  console.log(book)
  UI.addBook(book)
  showForm()
})

