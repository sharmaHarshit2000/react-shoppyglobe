import { useDispatch } from "react-redux";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa6";
import { addToCart, removeFromCart, decreaseQuantity } from "../redux/cartSlice";

function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between bg-white p-4 shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]">

            {/* Product Image */}
            <img
                src={item.thumbnail}
                alt={item.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded border border-r-gray-300"
            />

            {/* Product Info: Title & Price */}
            <div className="flex-1 ml-2 sm:ml-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate max-w-[150px] sm:max-w-none">
                    {item.title}
                </h3>
                <p className="text-gray-600 font-medium">
                    ${item.price}
                </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
                {/* Decrease quantity (calls decreaseQuantity with item id) */}
                <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="bg-gray-500 text-white px-2 sm:px-3 py-2 rounded-l hover:bg-gray-600 transition duration-300"
                >
                    <FaMinus />
                </button>

                {/* Quantity display */}
                <span className="text-lg mx-2 font-bold">{item.quantity}</span>

                {/* Increase quantity (calls addToCart with item data) */}
                <button
                    onClick={() => dispatch(addToCart(item))}
                    className="bg-green-500 text-white px-2 sm:px-3 py-2 rounded-r hover:bg-green-600 transition duration-300 transform hover:scale-110"
                >
                    <FaPlus />
                </button>
            </div>

            {/* Remove item from cart (calls removeFromCart with item id) */}
            <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-3 sm:px-4 py-2 rounded hover:bg-red-600 transition duration-300 transform hover:scale-105 mx-2"
            >
                <FaTrash />
            </button>
        </div>
    );
}

export default CartItem;
