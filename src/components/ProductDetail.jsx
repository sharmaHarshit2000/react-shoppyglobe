import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner"; 

function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }
                const data = await response.json();
                setProduct(data);
                setSelectedImage(data.thumbnail);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); 
            }
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
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

    if (loading) {
        return <LoadingSpinner />; 
    }

    if (error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-center mt-6 max-w-md mx-auto">
                <p className="flex items-center justify-center space-x-2 text-lg font-semibold">
                    <span>⚠</span> 
                    <span>Error: {error}</span>
                </p>
            </div>
        );
    }

    // Calculate Discounted Price
    const discountPercentage = product.discountPercentage || 0;
    const originalPrice = (product.price / (1 - discountPercentage / 100)).toFixed(2);

    return (
        <div className="container mx-auto py-10 px-6">
            <div className="bg-white shadow-lg rounded-xl p-6 md:flex md:items-start gap-8">
                
                {/* Product Image Gallery */}
                <div className="md:w-1/2">
                    <div className="relative">
                        <img 
                            className="w-full h-96 object-cover rounded-lg transition-transform transform hover:scale-105 duration-300"
                            src={selectedImage} 
                            alt={product.title} 
                        />
                        {discountPercentage > 0 && (
                            <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-lg shadow-md">
                                -{discountPercentage}% OFF
                            </span>
                        )}
                    </div>

                    {/* Thumbnail Images */}
                    <div className="flex gap-2 mt-3">
                        {product.images?.slice(0, 4).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Product thumbnail"
                                className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500 transition duration-300"
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
                    <p className="text-gray-600 text-lg mt-2">{product.description}</p>

                    {/* Category Label */}
                    <span className="inline-block mt-3 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {product.category}
                    </span>

                    {/* Price Section */}
                    <div className="flex items-center mt-4 space-x-4">
                        {discountPercentage > 0 && (
                            <p className="text-gray-400 text-lg line-through">${originalPrice}</p>
                        )}
                        <p className="text-green-600 text-2xl font-bold">${product.price}</p>
                    </div>

                    {/* Stock Status */}
                    <p className={`mt-2 text-lg font-semibold ${product.stock > 10 ? 'text-green-600' : 'text-red-500'}`}>
                        {product.stock > 10 ? "✔ In Stock" : "⚠ Limited Stock"}
                    </p>

                    {/* Rating Stars */}
                    <div className="flex items-center mt-3">
                        <span className="text-yellow-500 text-lg font-bold">{product.rating}</span>
                        <span className="ml-1 text-gray-600">⭐</span>
                        <p className="ml-2 text-gray-500 text-sm">(Based on 120 reviews)</p>
                    </div>

                    {/* Product Specifications */}
                    <div className="mt-4 border-t pt-4">
                        <h3 className="text-lg font-semibold mb-2">Product Specifications:</h3>
                        <ul className="text-gray-700">
                            <li>✔ Brand: {product.brand}</li>
                            <li>✔ Weight: 1.2kg</li>
                            <li>✔ Warranty: 1 Year</li>
                            <li>✔ Fast Delivery Available</li>
                        </ul>
                    </div>

                    {/* Buy Now & Add to Cart Buttons */}
                    <div className="mt-6 flex space-x-4">
                        <button className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-300">
                            Buy Now
                        </button>
                        <button 
                            onClick={handleAddToCart} 
                            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300">
                            Add to Cart 🛒
                        </button>
                    </div>
                </div>
            </div>

            {/* Customer Reviews */}
            <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                    <div className="border-b pb-4">
                        <p className="font-semibold">⭐ 5.0 - John Doe</p>
                        <p className="text-gray-700">"Amazing product! Great quality and fast delivery."</p>
                    </div>
                    <div className="border-b pb-4">
                        <p className="font-semibold">⭐ 4.5 - Sarah Lee</p>
                        <p className="text-gray-700">"Good value for the price. Will buy again!"</p>
                    </div>
                    <div className="pb-4">
                        <p className="font-semibold">⭐ 4.0 - Alex Smith</p>
                        <p className="text-gray-700">"Nice design but delivery took a bit longer than expected."</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
