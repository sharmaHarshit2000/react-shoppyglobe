import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-6 min-h-screen flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🛒 Your Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4 bg-gray-100 p-8 rounded-lg shadow-md">
                    <p className="text-gray-500 text-lg font-semibold">Your cart is empty. Start shopping now! 🛍️</p>
                    <Link to="/">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105">
                            Start Shopping
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="space-y-6 w-full max-w-2xl">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}

                    {/* Cart Summary Section */}
                    <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md w-full">
                        <h3 className="text-xl font-bold text-gray-800">
                            Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
                        </h3>
                        <button
                            onClick={() => dispatch(clearCart())}
                            className="mt-4 w-full bg-red-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300 transform hover:scale-105"
                        >
                            Clear Cart
                        </button>
                        <Link to="/checkout">
                            <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
