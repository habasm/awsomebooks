let bookArr = [];
function removeBook(divid) {
  bookArr.filter((book) => book.id > 0).forEach((book) => {
    if (book.id === divid) {
      document.getElementById(divid).remove();
      bookArr = bookArr.filter((book) => (book.id !== divid));
    }
  });
  localStorage.setItem('Books', JSON.stringify(bookArr));
}

function addBooks(arr) {
  const bookContainer = document.getElementById('booksList');
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach((paragraph) => {
    paragraph.remove();
  });
  let html = '';
  arr.filter((book) => book.id > 0).forEach((book) => {
    html = `${html}<p id='${book.id}'>${book.title
    }<br>${book.author
    }<br><button onclick='removeBook(${book.id})'>Remove Book</button><br>________________`
    + '</p>';
  });
  bookContainer.insertAdjacentHTML('beforebegin', html);
}

function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const singleBook = {
    title,
    author,
    id: new Date().getMilliseconds(),
  };
  bookArr.push(singleBook);
  localStorage.setItem('Books', JSON.stringify(bookArr));
  addBooks(bookArr);
}

const loadBooks = localStorage.getItem('Books');
const myobj = JSON.parse(loadBooks);
addBooks(myobj);
bookArr = myobj;
