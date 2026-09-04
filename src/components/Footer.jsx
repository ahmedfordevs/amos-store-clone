import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="text-xl font-black text-white">AMOS<span className="text-indigo-500">STORE</span></div>
          <p className="text-xs text-gray-400">Your trusted destination for modern lifestyle and tech products.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Shop</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white">All Products</a></li>
            <li><a href="#" className="hover:text-white">Trending</a></li>
            <li><a href="#" className="hover:text-white">Categories</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Newsletter</h4>
          <p className="text-xs text-gray-400 mb-2">Subscribe for modern product updates.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email address" className="bg-gray-800 border border-gray-700 px-3 py-1.5 rounded text-xs text-white w-full focus:outline-none" />
            <button className="bg-indigo-600 text-white text-xs px-3 py-1.5 rounded font-medium">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center text-xs text-gray-600 pt-8 mt-8 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Amos Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;