function displayBooks(books){
    const booksListHtml = books.map((book, index) => {
    // return '<p>'+index+'-'+book.title+'('+book.year+')'+'</p>';

    return `<p> ${index+1} - ${book.title}  (${book.year}) </p>`;
    });
const finalHtml = booksListHtml.join('-------------------------------');
document.getElementById('books-list').innerHTML = finalHtml;
}
const getBooks = () => {
    
    const req = fetch('http://localhost:4200/data/books');
    req.then(
        (data) => {
            console.log('data - ', data)
            return data.json()}
    ).then(
        (data) => {
            console.log('data - ', data )

            displayBooks(data)
        }
    );
}