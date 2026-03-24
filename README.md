# 🌊 InkTide: Digital Book Archive

**InkTide** is a high-performance web application designed for searching, tracking, and accessing digital literature. The platform integrates metadata from the **Open Library API** with the direct-access capabilities of the **Internet Archive** to create a seamless reading ecosystem.

---

### 🎯 Project Purpose
The objective of this project is to provide a unified interface for the discovery of books and the immediate retrieval of public-domain digital assets. It functions as both a personal cataloging tool and a gateway to free reading materials, streamlining the transition from book discovery to digital consumption.

---

### 🔗 API Integration
The application orchestrates data from the following **Open Library API** endpoints:
* **Search API:** `https://openlibrary.org/search.json` — For fetching primary book metadata and identifiers.
* **Works API:** `https://openlibrary.org/works/{id}.json` — For retrieving detailed descriptions and subject matter.
* **Covers API:** `https://covers.openlibrary.org/b/id/{id}-L.jpg` — For high-resolution visual assets.
* **Availability Logic:** Integration of `ia` (Internet Archive) identifiers to provide direct EPUB/PDF reading portals.

---

### ✨ Planned Features
* **🔍 Optimized Search:** Efficient book discovery utilizing debounced input handling to reduce API overhead.
* **📥 Instant Access:** Automated identification of available digital downloads for public-domain works.
* **📖 Library Management:** Tools to categorize titles by status (*Want to Read*, *Currently Reading*, or *Read*).
* **💾 Data Persistence:** Client-side storage of user preferences and library data using the **Web Storage API**.
* **🌙 Night Mode:** A mobile-first, system-aware dark theme designed for enhanced reading comfort.

---

### 🛠️ Technical Stack
| Component | Technology |
| :--- | :--- |
| **Frontend** | HTML5 / CSS3 (Flexbox & Grid) |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Data Source** | Open Library REST API |
| **Constraint** | 100% Zero-Loop Policy (Utilizing Array HOFs exclusively) |

---

### 🚀 Setup & Execution
The project is built to run natively in modern web browsers without the need for external dependencies or build tools.
1. **Clone the repository:** `git clone https://github.com/your-username/inktide.git`
2. **Launch the application:** Open `index.html` in a standard web browser.

---

### 📅 Project Roadmap
| Milestone | Focus | Status |
| :--- | :--- | :--- |
| **M1** | Project Identity & Documentation | ✅ Completed |
| **M2** | API Integration & UI Skeleton | ⏳ April 1 |
| **M3** | Core Search & Tracking Logic | ⏳ April 8 |
| **M4** | Final Deployment & PWA Polish | ⏳ April 10 |
