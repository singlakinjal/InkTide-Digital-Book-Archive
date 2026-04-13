# 🌊 InkTide: Digital Book Archive

**InkTide** is a high-performance web application designed for searching, tracking, and accessing digital literature. The platform integrates metadata from the **Gutendex API** (Project Gutenberg) to create a seamless reading ecosystem.

> 🚀 **Live Demo:** [https://inktide.netlify.app/](https://inktide.netlify.app/)

---

### 🎯 Project Purpose
The objective of this project is to provide a unified interface for the discovery of books and the immediate retrieval of public-domain digital assets. It functions as both a personal cataloging tool and a gateway to free reading materials, streamlining the transition from book discovery to digital consumption.

---

### 🔗 API Integration
The application orchestrates data from the following endpoints:
* **Gutendex API:** `https://gutendex.com/books/` — For fetching primary book metadata, authors, cover images, and download counts.
* **Gutendex Topic Filter:** `https://gutendex.com/books/?topic={genre}` — For server-side genre filtering across the full 70,000+ book catalogue.
* **Gutendex Search:** `https://gutendex.com/books/?search={query}` — For full-text search across titles, authors, and subjects.
* **Covers:** Direct mapping of `image/jpeg` formats from the Gutendex results to book cards.

---

### ✨ Milestone 1 — Project Foundation
* **🏗️ Project Structure:** Established a clean separation of concerns across `index.html`, `style.css`, and `script.js`.
* **🎨 Design System:** Defined a CSS custom properties system (`--bg`, `--accent`, `--surface`, etc.) enabling consistent theming across the entire UI.
* **📐 Base Layout:** Built the core page skeleton — sticky header, hero section, and book grid container.

---

### ✨ Milestone 2 — API Integration & Core UI
* **📡 Dynamic Fetching:** Real-time retrieval of book archives using the Fetch API with `async/await`.
* **📱 Responsive Grid:** A fully fluid layout using CSS Grid (`auto-fill`) that adapts to mobile, tablet, and desktop screens.
* **⏳ Loading States:** Visual feedback during data retrieval with an animated spinner.
* **📄 Pagination:** Previous / Next controls that navigate across API pages while preserving the active genre and search context.
* **🃏 Book Cards:** Each card displays cover image, title, and author extracted from the API response using `Array.map`.

---

### ✨ Milestone 3 — Interactivity & Dynamic Behaviour
All searching, filtering, and sorting operations are implemented exclusively using **Array Higher-Order Functions** (`filter`, `map`, `sort`, `slice`, `some`, `join`). No traditional `for` or `while` loops are used.

* **🔍 Search:** Live keyword search via the Gutendex `?search=` endpoint. Matches against titles, authors, and subjects.
* **🗂️ Genre Filter:** Dropdown filters by Fiction, Science, History, Philosophy, Poetry, Adventure, Romance, and Drama using the Gutendex `?topic=` parameter — queries the full API catalogue, not just the current page. Pagination resets to page 1 on every genre change and remains scoped to the active genre while navigating.
* **↕️ Sort:** Client-side sorting of the current page's results without a new API call, supporting Title A→Z, Title Z→A, Author A→Z, and Most Downloaded. Implemented with `Array.slice().sort()` to avoid mutating the source array.
* **🌙 Dark / Light Mode:** Theme toggle that switches between a warm parchment light theme and a deep dark theme via a `dark-mode` class on `<body>`. Preference is persisted to `localStorage` and restored on reload.

---

### ✨ Milestone 4 — Documentation, Deployment & Final Submission
* **📝 Documentation:** README fully updated to reflect all milestones, features, file structure, and deployment details.
* **🧹 Code Refactor:** Codebase cleaned for consistency — unused variables removed, functions clearly commented, and state management consolidated into `currentBooks` and `activeGenre`.
* **🚀 Deployment:** Project deployed as a static site via **GitHub Pages** with zero build steps required.

---

### 📁 File Structure
```
inktide/
├── index.html       # App shell — markup, controls, and script reference
├── style.css        # Design system, layout, components, dark mode
├── script.js        # Data fetching, HOF pipeline, event listeners
└── README.md        # Project documentation
```

---

### 🛠️ Technical Stack
| Component | Technology |
| :--- | :--- |
| **Frontend** | HTML5 / CSS3 (Flexbox & Grid) |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Data Source** | Gutendex REST API (Project Gutenberg) |
| **Deployment** | GitHub Pages |
| **Constraint** | 100% Zero-Loop Policy — Array HOFs exclusively |

---

### 🚀 Setup & Execution
The project runs natively in any modern browser with no dependencies or build tools required.
1. **Clone the repository:** `git clone https://github.com/your-username/inktide.git`
2. **Launch the application:** Open `index.html` in a standard web browser.

Or visit the live deployment directly: [https://inktide.netlify.app/](https://inktide.netlify.app/)

---
