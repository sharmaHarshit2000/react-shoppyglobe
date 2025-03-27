import React from "react";
import { useDispatch } from "react-redux";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { addToCart, removeFromCart, decreaseQuantity } from "../redux/cartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-between bg-white p-4 shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]">
            <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded border border-gray-300" />
            <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 font-medium">${item.price}</p>
            </div>
            <div className="flex items-center">
                <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="bg-gray-500 text-white px-3 py-2 rounded-l hover:bg-gray-600 transition duration-300"
                >
                    <FaMinus />
                </button>
                <span className="text-lg mx-3 font-bold">{item.quantity}</span>
                <button
                    onClick={() => dispatch(addToCart(item))}
                    className="bg-green-500 text-white px-3 py-2 rounded-r hover:bg-green-600 transition duration-300 transform hover:scale-110"
                >
                    <FaPlus />
                </button>
            </div>
            {/* Added mx-4 for space between the + button and delete button */}
            <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 transform hover:scale-105 mx-4"
            >
                <FaTrash />
            </button>
        </div>
    );
};

export default CartItem;
