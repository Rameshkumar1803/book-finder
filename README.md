# 📚 Book Finder

Book Finder is a React-based web application that allows users to search for books using the [Open Library API](https://openlibrary.org/developers/api).  
It provides multiple filters (title, author, year, language), dark mode support, and a favorites section to save books for later.

---

## 🚀 Features

- 🔍 Search books by **title**, **author**, or **subject**
- 📅 Filter books by **year**
- 🌐 Filter books by **language**
- ⭐ Add/remove books to/from **Favorites**
- 🌓 **Dark mode toggle** (saves preference in local storage)
- 📱 Responsive design with **Tailwind CSS**
- ⚡ Fast client-side routing using **React Router**

---

## 🛠️ Tech Stack

- **React.js** – UI library
- **React Router DOM** – for navigation
- **Tailwind CSS** – for styling
- **Open Library API** – for fetching book data

---

## 📂 Project Structure

```
book-finder/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components (Navbar, BookCard, etc.)
│   ├── pages/          # Page components (Home, BookDetail, Favorites)
│   ├── utils/          # Local Storage, and open libaries.
│   ├── App.js          # Main App component
│   ├── index.js        # Entry point
│   ├── index.css       # Global styles (Tailwind included)
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/book-finder.git
   cd book-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will be available at **http://localhost:3000**

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🎨 Tailwind CSS Setup

This project uses Tailwind CSS for styling.  
Configuration files:
- `tailwind.config.js`
- `postcss.config.js`

Dark mode is enabled via the `class` strategy.  
```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: { extend: {} },
  plugins: [],
};
```

---

## 🌙 Dark Mode

- Toggle button in Navbar (`🌙 / 🌞`)
- Saves theme preference in `localStorage`
- Applied globally via `document.documentElement.classList`

---

## 🖼️ Screenshots

### Home Page
![Book Finder Screenshot](./screenshot-home.png)

### Book Details
![Book Details Screenshot](./screenshot-detail.png)

---

## 🔮 Future Improvements

- Pagination support for large search results
- Book cover thumbnails
- Export/Import favorites
- Offline mode with service workers

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the repo and submit a pull request.
