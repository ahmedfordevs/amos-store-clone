import React from "react";

const topItems = [
  { id: 1, name: "Smart Fitness Watch", price: "$120.00", category: "Electronics", rating: "4.9", emoji: "⌚" },
  { id: 2, name: "Minimalist Backpack", price: "$65.00", category: "Fashion", rating: "4.8", emoji: "🎒" },
  { id: 3, name: "Ergonomic Desk Lamp", price: "$45.00", category: "Home", rating: "4.7", emoji: "💡" },
  { id: 4, name: "Wireless Earbuds Pro", price: "$99.00", category: "Electronics", rating: "4.9", emoji: "🎧" },
];

const TopItemsSection = () => {
  return (
    <section id="top-items" className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-gray-900">Top Rated Items</h2>
          <p className="text-sm text-gray-500 mt-1">The most popular products chosen by our customers</p>
        </div>
        <a href="#products" className="text-sm font-bold text-indigo-600 hover:underline">
          View All &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topItems.map((item) => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition group">
            <div className="h-44 bg-gray-50 rounded-lg flex items-center justify-center text-5xl mb-4 group-hover:scale-105 transition">
              {item.emoji}
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>{item.category}</span>
              <span className="text-amber-500 font-medium">★ {item.rating}</span>
            </div>
            <h3 className="font-bold text-gray-900 text-base">{item.name}</h3>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-black text-gray-900">{item.price}</span>
              <button className="bg-gray-900 hover:bg-indigo-600 text-white text-xs px-3 py-2 rounded-md font-medium transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopItemsSection;