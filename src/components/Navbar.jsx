import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="text-2xl font-black text-gray-900 tracking-tight">
          AMOS<span className="text-indigo-600">STORE</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-indigo-600 transition">Home</a>
          <a href="#top-items" className="hover:text-indigo-600 transition">Trending</a>
          <a href="#categories" className="hover:text-indigo-600 transition">Categories</a>
          <a href="#products" className="hover:text-indigo-600 transition">All Products</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-indigo-600 font-medium text-sm">
            Sign In
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm">
            Cart (0)
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;