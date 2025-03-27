import React from "react";
import { useDispatch } from "react-redux";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { addToCart, removeFromCart, decreaseQuantity } from "../redux/cartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between bg-white p-4 shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]">
            <img src={item.thumbnail} alt={item.title} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded border border-gray-300" />
            
            <div className="flex-1 ml-2 sm:ml-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate max-w-[150px] sm:max-w-none">
                    {item.title}
                </h3>
                <p className="text-gray-600 font-medium">${item.price}</p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="bg-gray-500 text-white px-2 sm:px-3 py-2 rounded-l hover:bg-gray-600 transition duration-300">
                    <FaMinus />
                </button>
                <span className="text-lg mx-2 font-bold">{item.quantity}</span>
                <button onClick={() => dispatch(addToCart(item))}
                    className="bg-green-500 text-white px-2 sm:px-3 py-2 rounded-r hover:bg-green-600 transition duration-300 transform hover:scale-110">
                    <FaPlus />
                </button>
            </div>

            <button onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-3 sm:px-4 py-2 rounded hover:bg-red-600 transition duration-300 transform hover:scale-105 mx-2">
                <FaTrash />
            </button>
        </div>
    );
};

export default CartItem;
