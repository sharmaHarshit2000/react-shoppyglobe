# ShoppyGlobe - E-commerce Application

## 📌 Project Overview
ShoppyGlobe is a modern e-commerce web application built using **React, Redux, React Router, and Tailwind CSS**. The application allows users to browse products, view detailed product descriptions, manage a shopping cart, and experience a seamless shopping journey.

## 🚀 Features
- 📦 **Product Listing**: Browse a variety of products fetched dynamically.
- 🔎 **Product Detail Page**: View detailed information, pricing, and images of each product.
- 🛒 **Cart Management**: Add or remove products from the shopping cart with Redux state management.
- 🔄 **Dynamic Routing**: Navigate through product pages using React Router.
- 🌍 **API Integration**: Fetch product data from `https://dummyjson.com/products/{id}`.
- 🎨 **Responsive UI**: Styled with Tailwind CSS for a modern and mobile-friendly experience.
- 🔔 **Toasts for Feedback**: Notify users about successful actions (e.g., adding to cart).

## 🏗️ Tech Stack
- **Frontend**: React, Redux, React Router
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Notifications**: React Toastify
- **Data Fetching**: Custom `useFetch` hook

## 📂 Project Structure
```
ShoppyGlobe/
│-- public/
│-- src/
│   │-- components/
│   │   │-- ProductDetail.jsx
│   │   │-- LoadingSpinner.jsx
│   │-- hooks/
│   │   │-- useFetch.js
│   │-- redux/
│   │   │-- cartSlice.js
│   │-- pages/
│   │   │-- Home.jsx
│   │   │-- Cart.jsx
│   │-- App.js
│-- package.json
│-- tailwind.config.js
│-- README.md
```

## 🛠️ Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/sharmaHarshit2000/ShoppyGlobe.git
   cd ShoppyGlobe
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 Usage
- Click on a product to view its details.
- Add products to the cart using the **Add to Cart** button.
- View the cart page to manage selected items.
- Enjoy seamless navigation across the platform!



