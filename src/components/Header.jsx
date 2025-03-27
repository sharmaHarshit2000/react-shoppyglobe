import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useState } from "react";

function Header() {
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.length;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-6 py-4 relative">
                
                {/* Logo */}
                <Link 
                    to="/" 
                    className="text-4xl font-extrabold tracking-wide transform transition-transform hover:scale-105"
                >
                    Shoppy<span className="text-yellow-400">Globe</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-lg font-semibold">
                    <Link 
                        to="/" 
                        className="hover:text-yellow-400 transition duration-300 ease-in-out"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/cart" 
                        className="relative flex items-center hover:text-yellow-400 transition duration-300 ease-in-out"
                    >
                        Cart 
                        <FiShoppingCart className="ml-2 text-2xl" />
                        {cartCount > 0 && (
                            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-sm font-bold w-6 h-6 flex items-center justify-center rounded-full animate-bounce shadow-lg">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-3xl focus:outline-none" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute top-16 right-6 bg-white text-gray-800 w-48 shadow-lg rounded-lg p-4 flex flex-col space-y-3 md:hidden transition-all duration-300 ease-in-out">
                        <Link to="/" className="hover:text-blue-600 font-medium text-lg">Home</Link>
                        <Link 
                            to="/cart" 
                            className="flex items-center hover:text-blue-600 font-medium text-lg"
                        >
                            Cart <FiShoppingCart className="ml-2 text-xl" />
                            {cartCount > 0 && (
                                <span className="ml-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
