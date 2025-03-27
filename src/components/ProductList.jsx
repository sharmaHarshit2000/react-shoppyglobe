import ProductItem from "./ProductItem";
import useFetch from "../hooks/useFetch";
import LoadingSpinner from "./LoadingSpinner";

function ProductList() {
    const { loading, error, data } = useFetch("https://dummyjson.com/products");

    if (loading) {
        return <LoadingSpinner />; 
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg text-center font-semibold text-lg">
                    ❌ Oops! Something went wrong.
                </div>
                <p className="text-gray-700 mt-3 text-center text-base bg-red-100 px-4 py-2 rounded-md">
                    <span className="font-semibold">Error:</span> {error}
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10 px-4">
            {/* Welcome Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-900">🛍 Welcome to ShoppyGlobe</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Discover high-quality products at the best prices. Shop now and enjoy amazing deals! ✨
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
