# 🌊 InkTide: Digital Book Archive

**InkTide** is a high-performance web application designed for searching, tracking, and accessing digital literature. The platform integrates metadata from the **Gutendex API** (Project Gutenberg) to create a seamless reading ecosystem.

---

### 🎯 Project Purpose
The objective of this project is to provide a unified interface for the discovery of books and the immediate retrieval of public-domain digital assets. It functions as both a personal cataloging tool and a gateway to free reading materials, streamlining the transition from book discovery to digital consumption.

---

### 🔗 API Integration
The application currently orchestrates data from the following endpoints:
* **Gutendex API:** `https://gutendex.com/books/` — For fetching primary book metadata, authors, and cover images.
* **Covers:** Direct mapping of `image/jpeg` formats from the Gutendex results to book cards.

---

### ✨ Core Features (Milestone 2)
* **📡 Dynamic Fetching:** Real-time retrieval of book archives using the Fetch API.
* **📱 Responsive Grid:** A fully fluid layout using CSS Grid (`auto-fill`) that adapts to mobile, tablet, and desktop screens..
* **⏳ Loading States:** Visual feedback provided during data retrieval with an animated loading indicator.
---

### 🛠️ Technical Stack
| Component | Technology |
| :--- | :--- |
| **Frontend** | HTML5 / CSS3 (Flexbox & Grid) |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Data Source** | Gutendex REST API |
| **Constraint** | 100% Zero-Loop Policy (Utilizing Array HOFs exclusively) |

---

### 🚀 Setup & Execution
The project is built to run natively in modern web browsers without the need for external dependencies or build tools.
1. **Clone the repository:** `git clone https://github.com/your-username/inktide.git`
2. **Launch the application:** Open `index.html` in a standard web browser.

---


