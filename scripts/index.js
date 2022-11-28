let bookIds = 1;
let bookArr = [];
function addBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;

    let singleBook = {
        "title": title,
        "author": author,
        "id": bookIds,
    };
    bookArr.push(singleBook);
    addBooks(bookArr);
    bookIds += 1;

    localStorage.setItem('Books', JSON.stringify(bookArr));
}

function removeBook(div_id) {
    document.getElementById(div_id).remove();
    bookArr.filter((book) => book.id > 0).forEach((book) => {
        if (book.id == div_id) {
            bookArr = bookArr.filter(book => book.id != div_id);
        }
    });
}

function addBooks(arr) {
    let bookContainer = document.getElementById("booksList");
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.remove();
    });
    let html = '';
    arr.filter((book) => book.id > 0).forEach((book) => {
        html += "<p id='" + book.id + "'>" + book.title +
            "<br>" + book.author +
            "<br><button onclick='removeBook(" + book.id + ")'>Remove Book</button><br>________________"
        "</p>";

    });
    bookContainer.insertAdjacentHTML("beforebegin", html);
}

