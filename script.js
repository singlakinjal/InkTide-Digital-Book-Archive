// const searchInput = document.getElementById("searchInput");
// const loading = document.getElementById("loading");
// const bookContainer = document.getElementById("book-grid")
const url = "https://gutendex.com/books/";
const bookContainer = document.querySelector(".books-container")

function createCard(imgUrl, title, author) {

    bookContainer.innerHTML += `<div class="book-card">
            <img class="book-image" src=${imgUrl} alt="book of ${author}">
            <div class="book-title">${title}</div>
            <div class="book-author">${author}</div>
        </div>`
}
async function fetchapi(url) {
    try {

        const response = await fetch(url)
        const data = await response.json()
        const base = data.results

        a = base.map((result) => {
            const imgUrl = result.formats["image/jpeg"];
            const title = result.title;
            const author = result.authors[0] ? result.authors[0].name : "Unknown Author"
            console.log(imgUrl, title, author);
            createCard(imgUrl, title, author)

        })
    } catch (error) {
bookContainer.innerHTML = `<p>Error loading the archive.</p>`;
    } 

}
fetchapi(url)



