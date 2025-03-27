import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./components/LoadingSpinner";

// ✅ Lazy Loading Components
const Header = lazy(() => import("./components/Header"));
const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));

// ✅ Spinner Component (Custom or use react-spinners)


function App() {
    return (
        <Router>
            {/* ✅ Toast Notification */}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />

            <Suspense fallback={<LoadingSpinner />}>
                <Header />

                <main className="mt-8 mb-16 px-4">
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </Suspense>
        </Router>
    );
}

export default App;
