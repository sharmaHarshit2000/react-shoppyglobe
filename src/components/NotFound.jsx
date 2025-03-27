import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-800 w-full">
            {/* 404 Error Code */}
            <h1 className="text-9xl font-extrabold text-blue-600 drop-shadow-lg">
                404
            </h1>

            {/* Error Message */}
            <p className="text-2xl font-semibold mt-4 text-gray-700">
                Oops! Page Not Found
            </p>
            <p className="text-lg mt-2 text-gray-500 max-w-md">
                The page you're looking for might have been moved or deleted.
            </p>

            {/* Back Home Button */}
            <Link 
                to="/" 
                className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg border border-blue-700 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
                🔙 Go Back Home
            </Link>
        </div>
    );
}

export default NotFound;
