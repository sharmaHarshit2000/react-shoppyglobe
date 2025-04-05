import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "./components/LoadingSpinner";

// Import Toastify styles
import "react-toastify/dist/ReactToastify.css";

// Lazy load components and code splitting
const Header = lazy(() => import("./components/Header"));
const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <BrowserRouter>
      {/* Toast Notifications Container */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      {/*Suspense for lazy loading fallback */}
      <Suspense fallback={<LoadingSpinner />}>
        {/* Header */}
        <Header />

        <main className="mt-8 mb-20 px-4 sm:px-6 md:px-8">
          <Routes>
            {/* Home Page - Product List */}
            <Route path="/" element={<ProductList />} />

            {/* Product Detail Page */}
            <Route path="product/:id" element={<ProductDetail />} />

            {/* Shopping Cart */}
            <Route path="/cart" element={<Cart />} />

            {/* Checkout Page */}
            <Route path="/checkout" element={<Checkout />} />

            {/* 404 Not Found Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
