let bookIds = 1;
let bookArr = [];
function addBook(){  
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;

    let singleBook = {
        "title": title,
        "author": author,
        "id": bookIds,
    };
    bookArr.push(singleBook);
    bookContainer = document.getElementById("booksList");
    bookContainer.innerHTML='';
    addBooks(bookArr);
    bookIds+=1;
}

function removeBook(divid){
    document.getElementById(divid).remove();
}

function addBooks(arr){
    const bookContainer = document.getElementById("booksList");    
    arr.filter((book) => book.id > 0).forEach((book)=>{
        let html = "<p id='"+book.id+"'>"+book.title+"<br>"+book.author+"</p>";
        bookContainer.insertAdjacentHTML("beforebegin", html);
    });    
    
}
