import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

function ProductItem({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));

        // Show Toast Notification
        toast.success(`✅ ${product.title} added to cart!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    };

    // Calculate Discount
    const discountPercentage = product.discountPercentage || 0;
    const originalPrice = (product.price / (1 - discountPercentage / 100)).toFixed(2);

    return (
        <div className="bg-white shadow-md rounded-xl p-5 transition-transform transform hover:scale-[1.05] hover:shadow-2xl duration-300 border border-gray-200">
            <Link to={`/product/${product.id}`} className="block">
                <div className="relative">
                    <img 
                        className="w-full h-64 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
                        src={product.thumbnail} 
                        alt={product.title} 
                    />
                    {/* Discount Badge - Top Right */}
                    {discountPercentage > 0 && (
                        <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded-lg shadow-md">
                            {discountPercentage}% OFF
                        </span>
                    )}
                </div>

                {/* Product Title & Category */}
                <h2 className="text-lg font-bold text-gray-900 truncate">{product.title}</h2>
                <p className="text-gray-500 text-sm mt-1 font-medium">{product.category}</p>

                {/* Price & Discount Section */}
                <div className="flex justify-between items-center mt-3">
                    <div>
                        {discountPercentage > 0 && (
                            <p className="text-gray-400 text-sm line-through">${originalPrice}</p>
                        )}
                        <p className="text-green-600 text-xl font-bold">${product.price}</p>
                    </div>
                </div>

                {/* Stock Status */}
                <p className={`mt-2 text-sm font-medium ${product.stock > 10 ? 'text-green-600' : 'text-red-500'}`}>
                    {product.stock > 10 ? "✔ In Stock" : "⚠ Limited Stock"}
                </p>
            </Link>

            {/* Add to Cart Button */}
            <button 
                onClick={handleAddToCart} 
                className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md">
                Add to Cart <FiShoppingCart size={22} />
            </button>
        </div>
    );
}

export default ProductItem;
