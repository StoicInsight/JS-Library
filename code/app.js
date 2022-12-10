class book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.read = read;
  }
}

// Show form
document.getElementById('show-form').addEventListener('click', () => {
  document.getElementById('book-form').classList.toggle('show')
})