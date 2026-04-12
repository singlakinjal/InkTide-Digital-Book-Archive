const previousBtn = document.getElementById("previous");
previousBtn.disabled = true;
const nextBtn = document.getElementById("next");
let pageNo = document.getElementById("page-no");
const searchInput = document.getElementById("searchInput");

// Dark mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

const filterSelect = document.getElementById("filterSelect");
const sortSelect   = document.getElementById("sortSelect");
const resultsInfo  = document.getElementById("resultsInfo");

const bookContainer  = document.querySelector(".books-container");
const loadingElement = document.getElementById("loading");

let currentBooks = [];    
let activeGenre  = "all"; 


function updateUrl(pagenumber) {
  const topic = activeGenre !== "all" ? `&topic=${activeGenre}` : "";
  return `https://gutendex.com/books/?page=${pagenumber}${topic}`;
}

let url = updateUrl(pageNo.innerText);

function createCard(imgUrl, title, author) {
  return `<div class="book-card">
            <img class="book-image" src=${imgUrl} alt="book of ${author}">
            <div class="book-title">${title}</div>
            <div class="book-author">${author}</div>
        </div>`;
}

function renderBooks() {
  if (currentBooks.length === 0) return;

  const sort = sortSelect.value;
  const sorted = currentBooks.slice().sort((a, b) => {
    if (sort === "title_asc")      return a.title.localeCompare(b.title);
    if (sort === "title_desc")     return b.title.localeCompare(a.title);
    if (sort === "author_asc") {
      const aName = a.authors[0]?.name ?? "";
      const bName = b.authors[0]?.name ?? "";
      return aName.localeCompare(bName);
    }
    if (sort === "downloads_desc") return b.download_count - a.download_count;
    return 0;
  });

  resultsInfo.textContent = `Showing ${sorted.length} book${sorted.length !== 1 ? "s" : ""}`;
  bookContainer.innerHTML = sorted
    .map(book => {
      const imgUrl = book.formats["image/jpeg"];
      const title  = book.title;
      const author = book.authors[0] ? book.authors[0].name : "Unknown Author";
      return createCard(imgUrl, title, author);
    })
    .join("");
}

async function fetchapi(url) {
  if (loading) loading.style.display = "flex";
  bookContainer.innerHTML = "";
  try {
    const response      = await fetch(url);
    const data          = await response.json();
    currentBooks        = data.results;
    const base_next     = data.next;
    const base_previous = data.previous;

    nextBtn.disabled     = !base_next;
    previousBtn.disabled = !base_previous;

    sortSelect.value = "default";
    renderBooks();
  } catch (error) {
    bookContainer.innerHTML = `<p>Error loading the archive.</p>`;
  } finally {
    if (loadingElement) loadingElement.style.display = "none";
  }
}
fetchapi(url);


function nextBtnAction() {
  const x = Number(pageNo.innerText) + 1;
  pageNo.innerText = x;
  if (pageNo.innerText > 1) previousBtn.disabled = false;
  url = updateUrl(pageNo.innerText);
  fetchapi(url);
}

function prevBtnAction() {
  const x = Number(pageNo.innerText) - 1;
  pageNo.innerText = x;
  if (pageNo.innerText == 1) previousBtn.disabled = true;
  url = updateUrl(pageNo.innerText);
  fetchapi(url);
}

nextBtn.addEventListener("click", nextBtnAction);
previousBtn.addEventListener("click", prevBtnAction);

filterSelect.addEventListener("change", () => {
  activeGenre          = filterSelect.value;
  pageNo.innerText     = 1;
  previousBtn.disabled = true;
  currentBooks         = [];   
  url = updateUrl(1);
  fetchapi(url);
});

sortSelect.addEventListener("change", renderBooks);

searchInput.addEventListener("change", (e) => {
  const query     = e.target.value;
  const searchApi = "https://gutendex.com/books/?search=" + query;
  fetchapi(searchApi);
});