let bookArr = [];
class Book {
  bookArr = [];

  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  addBookArr() {
    const singleBook = {
      title: this.title,
      author: this.author,
      id: this.id,
    };
    bookArr.push(singleBook);
  }

  returnBooks() {
    return this.bookArr;
  }

  addBooks(arr) {
    this.arr = arr;
    const bookContainer = document.getElementById('booksList');
    const paragraphs = document.querySelectorAll('table');
    paragraphs.forEach((paragraph) => {
      paragraph.remove();
    });
    let html = '';
    bookArr.this = arr;
    bookArr.this.filter((book) => book.id > 0).forEach((book) => {
      html = `${html}<table id='${book.id}'><tr><td>"${book.title
      }" By ${book.author
      }</td><td id='btn'><button id='${book.id}' onclick='remove(${book.id})'>Remove</button></td></tr>`
        + '</table>';
    });
    bookContainer.insertAdjacentHTML('beforebegin', html);
  }

  removeBook(divid) {
    this.divid = divid;
    bookArr.filter((book) => book.id > 0).forEach((book) => {
      if (book.id === divid) {
        document.getElementById(divid).remove();
        bookArr = bookArr.filter((book) => (book.id !== divid));
      }
    });
    localStorage.setItem('Books', JSON.stringify(bookArr));
  }
}

// when there is a book add button clicked it, will initialize the class for storing
document.querySelector('#regbook').addEventListener('click', (e) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = new Date().getMilliseconds();
  const myBooks = new Book(title, author, id);
  myBooks.addBookArr();
  localStorage.setItem('Books', JSON.stringify(bookArr));
  myBooks.addBooks(bookArr);
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

// load data from local storage if it's available
const myBooks = new Book('', '', '');
const loadBooks = localStorage.getItem('Books');
const myobj = JSON.parse(loadBooks);
myBooks.addBooks(myobj);
bookArr = myobj;

function remove(divid) {
  myBooks.removeBook(divid);
}