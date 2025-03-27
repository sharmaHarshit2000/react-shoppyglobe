import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaCreditCard, FaPaypal, FaMoneyBillWave } from "react-icons/fa";

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        paymentMethod: "Credit Card",
    });

    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).some((field) => field.trim() === "")) {
            alert("Please fill all fields before placing the order.");
            return;
        }
        setOrderPlaced(true);
    };

    return (
        <div className="container mx-auto p-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">🛒 Checkout</h2>

            {orderPlaced ? (
                <div className="text-center bg-green-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700">🎉 Order Successfully Placed!</h3>
                    <p className="text-gray-700 mt-2">Thank you for shopping with us. Your order will be delivered soon.</p>
                    <div className="text-green-600 text-6xl mt-4 animate-bounce">✅</div>
                </div>
            ) : (
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">📍 Shipping Information</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Street Address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <div className="flex gap-4">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-1/2 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                name="zip"
                                placeholder="ZIP Code"
                                value={formData.zip}
                                onChange={handleChange}
                                className="w-1/2 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <h3 className="text-xl font-semibold mt-6 text-gray-700">💳 Payment Method</h3>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center cursor-pointer border p-3 rounded-lg w-1/3 bg-gray-100 hover:bg-gray-200">
                                <FaCreditCard className="text-blue-600 text-xl mr-2" />
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Credit Card"
                                    checked={formData.paymentMethod === "Credit Card"}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                Credit Card
                            </label>
                            <label className="flex items-center cursor-pointer border p-3 rounded-lg w-1/3 bg-gray-100 hover:bg-gray-200">
                                <FaPaypal className="text-blue-600 text-xl mr-2" />
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="PayPal"
                                    checked={formData.paymentMethod === "PayPal"}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                PayPal
                            </label>
                            <label className="flex items-center cursor-pointer border p-3 rounded-lg w-1/3 bg-gray-100 hover:bg-gray-200">
                                <FaMoneyBillWave className="text-green-600 text-xl mr-2" />
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Cash on Delivery"
                                    checked={formData.paymentMethod === "Cash on Delivery"}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                Cash
                            </label>
                        </div>

                        <h3 className="text-xl font-semibold mt-6 text-gray-700">🛍 Order Summary</h3>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between border-b p-3 text-gray-600">
                                <span>{item.title} (x{item.quantity})</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}

                        <div className="flex justify-between font-bold text-lg mt-4 text-gray-800">
                            <span>Total:</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>

                        <button
                            type="submit"
                            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
                        >
                            🛒 Place Order
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Checkout;
