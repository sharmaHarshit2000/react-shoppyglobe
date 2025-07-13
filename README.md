# ShoppyGlobe - E-commerce Application

[![Live Demo](https://img.shields.io/badge/Demo-Live-green)](https://react-shoppyglobe.netlify.app/)

## 📌 Project Overview
ShoppyGlobe is a modern e-commerce web application built using **React, Redux, React Router, and Tailwind CSS**. The application allows users to browse products, view detailed product descriptions, manage a shopping cart, and experience a seamless shopping journey.

## 🚀 Features
- 📦 **Product Listing**: Browse various products fetched dynamically.
- 🔎 **Product Detail Page**: View detailed information, pricing, and images of each product.
- 🛒 **Cart Management**: Add or remove products from the shopping cart with Redux state management.
- 🔄 **Dynamic Routing**: Navigate through product pages using React Router.
- 🎯 **Filter Functionality**: Filter products based on category, price, or other attributes.
- 🌍 **API Integration**: Fetch product data from `https://dummyjson.com/products/{id}`.
- 🎨 **Responsive UI**: Styled with Tailwind CSS for a modern, mobile-friendly experience.
- 🔔 **Toasts for Feedback**: Notify users about successful actions.

---

## 🏗️ Tech Stack
- **Frontend**: React, Redux, React Router
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Notifications**: React Toastify
- **Data Fetching**: Custom `useFetch` hook

## 📂 Project Structure
```
ShoppyGlobe/
│
├── public/
│   ├── favicon.jpg
│   └── _redirects
│
├── src/               
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── NotFound.jsx
│   │
│   ├── hooks/
│   │   └── useFetch.js
│   │
│   ├── redux/
│   │   ├── store.js
│   │   └── cartSlice.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── README.md
└── .env
```

## 🛠️ Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/sharmaHarshit2000/react-shoppyglobe.git
   cd ShoppyGlobe
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Add environment variable:**
   Create a `.env` file in the root directory and add:
   ```
   VITE_API_URL=https://dummyjson.com/products
   ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 Usage
- Click on a product to view its details.
- Add products to the cart using the **Add to Cart** button.
- View the cart page to manage selected items.
- Enjoy seamless navigation across the platform!

## 🌐 Demo
Check out the live demo: [https://react-shoppyglobe.netlify.app/](https://react-shoppyglobe.netlify.app/)
