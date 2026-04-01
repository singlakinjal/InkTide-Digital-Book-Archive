const searchInput = document.getElementById("searchInput");
const loading = document.getElementById("loading");
const bookContainer = document.getElementById("book-grid")
const url = "https://openlibrary.org/search.json"

async function fetchapi(query = "") {
    loading.style.display = "block"
    const response = await fetch(url + `?q=${query}`)
    const data = await response.json()
    loading.style.display = "none"
    console.log(data)
}

searchInput.addEventListener("input", (e) => {
    bookContainer.innerHTML = ""
    fetchapi(e.target.value)
})
function renderBooks(data) {
    return data.results.map((result) => {
        <div class="book-card">
            <img src="${cover}" />
            <h3>${title}</h3>
            <p>${author}</p>
        </div>
        // finish this
    })
}
