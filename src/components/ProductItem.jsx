import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

function ProductItem({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));

        // Show a toast notification when the item is added to cart
        toast.success(`🛒 ${product.title} added to cart!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    };

    // Calculate original price from discounted price 
    const discountPercentage = product.discountPercentage || 0;
    const originalPrice = (product.price / (1 - discountPercentage / 100)).toFixed(2);

    return (
        <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-200 transition-transform hover:scale-[1.03] hover:shadow-xl duration-300 relative">
            <Link to={`/product/${product.id}`} className="block">
                <div className="relative">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-52 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
                    />
                    {/* Show discount badge only if there's a discount */}
                    {discountPercentage > 0 && (
                        <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
                            {discountPercentage}% OFF
                        </span>
                    )}
                </div>

                <h2 className="text-lg font-bold text-gray-900 truncate">{product.title}</h2>

                <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {product.category}
                    </span>
                    {product.brand && (
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                            {product.brand}
                        </span>
                    )}
                </div>

                {/* Display stars by mapping over an array of 5, and conditionally color them based on rating */}
                {product.rating && (
                    <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < Math.round(product.rating) ? "" : "text-gray-300"} />
                        ))}
                        <span className="text-gray-600 ml-2 font-medium">{product.rating.toFixed(1)}</span>
                    </div>
                )}

                <div className="flex justify-between items-start mt-4">
                    <div>
                        {/* Show original price only if there's a discount */}
                        {discountPercentage > 0 && (
                            <p className="text-gray-400 text-sm line-through">${originalPrice}</p>
                        )}
                        <p className="text-green-600 text-xl font-bold">${product.price}</p>
                    </div>
                    {/* Stock status based on quantity */}
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${product.stock > 10 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                        {product.stock > 10 ? "✔️ In Stock" : "⚠️ Limited Stock"}
                    </span>
                </div>
            </Link>

            {/* Add to Cart Button */}
            <button
                onClick={handleAddToCart}
                className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 text-base font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md"
            >
                Add to Cart <FaShoppingCart size={20} />
            </button>
        </div>
    );
}

export default ProductItem;
