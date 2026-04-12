const previousBtn = document.getElementById("previous");
previousBtn.disabled = true;
const nextBtn = document.getElementById("next");
let pageNo = document.getElementById("page-no");
const searchInput =document.getElementById("searchInput")
// Dark mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// api fetch
function updateUrl(pagenumber) {
  return `https://gutendex.com/books/?page=${pagenumber}`;
}

let url = updateUrl(pageNo.innerText);

const bookContainer = document.querySelector(".books-container");
const loadingElement = document.getElementById("loading");

function createCard(imgUrl, title, author) {
  return `<div class="book-card">
            <img class="book-image" src=${imgUrl} alt="book of ${author}">
            <div class="book-title">${title}</div>
            <div class="book-author">${author}</div>
        </div>`;
}
async function fetchapi(url) {
    // console.log(url)
  if (loading) loading.style.display = "flex";
  bookContainer.innerHTML = "";
  try {
    const response = await fetch(url);
    const data = await response.json();
    const base = data.results;
    const base_next=data.next
    const base_previous=data.previous
    if (!base_next){
        nextBtn.disabled=true;
    }
    if (!base_previous){
        previousBtn.disabled=true;
    }


    bookContainer.innerHTML = base
      .map((result) => {
        const imgUrl = result.formats["image/jpeg"];
        const title = result.title;
        const author = result.authors[0]
          ? result.authors[0].name
          : "Unknown Author";
        // console.log(imgUrl, title, author);
        // createCard(imgUrl, title, author)
        return createCard(imgUrl, title, author);
      })
      .join("");
  } catch (error) {
    bookContainer.innerHTML = `<p>Error loading the archive.</p>`;
  } finally {
    if (loadingElement) loadingElement.style.display = "none"; // Hide loading
  }
}
fetchapi(url);


function nextBtnAction() {
  const x = Number(pageNo.innerText) + 1;
  pageNo.innerText = x;
  if (pageNo.innerText > 1) {
    previousBtn.disabled = false;
  }
  url = updateUrl(pageNo.innerText);
  fetchapi(url);
}

function prevBtnAction() {
  const x = Number(pageNo.innerText) - 1;
  pageNo.innerText = x;
  if (pageNo.innerText == 1) {
    previousBtn.disabled = true;
  }
  url = updateUrl(pageNo.innerText);
  fetchapi(url);
}

nextBtn.addEventListener("click", nextBtnAction);
previousBtn.addEventListener("click", prevBtnAction);



// search
searchInput.addEventListener("change",(e) => {
    const query =e.target.value
    const searchApi = "https://gutendex.com/books/?search=" + query;
    fetchapi(searchApi)
})
// console.log(query)
// const searchApi = url + "?search=" + query;