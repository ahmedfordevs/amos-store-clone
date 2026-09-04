import React from "react";

const products = [
  { id: 1, name: "Mechanical Gaming Keyboard", price: "$85.00", emoji: "⌨️" },
  { id: 2, name: "Ultra-Wide Monitor 34\"", price: "$420.00", emoji: "🖥️" },
  { id: 3, name: "Wireless Ergonomic Mouse", price: "$45.00", emoji: "🖱️" },
  { id: 4, name: "USB-C Multi-Port Hub", price: "$35.00", emoji: "🔌" },
  { id: 5, name: "Smart Home Speaker", price: "$75.00", emoji: "🔊" },
  { id: 6, name: "HD Webcam 1080p", price: "$55.00", emoji: "📷" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="space-y-6 pt-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Latest Products</h2>
        <span className="text-xs text-gray-500">Showing {products.length} products</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center text-5xl mb-4">
              {product.emoji}
            </div>
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <div className="flex items-center justify-between mt-3">
              <span className="text-base font-bold text-gray-900">{product.price}</span>
              <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white text-xs px-3 py-1.5 rounded-lg transition font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;