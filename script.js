// Dark mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// api fetch
const url = "https://gutendex.com/books/";
const bookContainer = document.querySelector(".books-container")
const loadingElement = document.getElementById("loading")

function createCard(imgUrl, title, author) {

    return  `<div class="book-card">
            <img class="book-image" src=${imgUrl} alt="book of ${author}">
            <div class="book-title">${title}</div>
            <div class="book-author">${author}</div>
        </div>`
}
async function fetchapi(url) {
    if (loading) loading.style.display = "flex";
    bookContainer.innerHTML = "";
    try {

        const response = await fetch(url)
        const data = await response.json()
        const base = data.results

        bookContainer.innerHTML = base.map((result) => {
            const imgUrl = result.formats["image/jpeg"];
            const title = result.title;
            const author = result.authors[0] ? result.authors[0].name : "Unknown Author"
            // console.log(imgUrl, title, author);
            // createCard(imgUrl, title, author)
            return createCard(imgUrl, title, author);
        }).join("");

    
    } catch (error) {
bookContainer.innerHTML = `<p>Error loading the archive.</p>`;
    } finally {
        if (loadingElement) loadingElement.style.display = "none"; // Hide loading
    }

}
fetchapi(url)



