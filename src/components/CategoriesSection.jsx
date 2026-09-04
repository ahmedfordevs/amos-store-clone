import React from "react";

const categories = ["All Products", "Electronics", "Fashion", "Home & Living", "Gadgets", "Accessories"];

const CategoriesSection = () => {
  return (
    <section id="categories" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Categories</h2>
      </div>

      <div className="flex items-center space-x-3 overflow-x-auto pb-2">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${
              idx === 0
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-white border border-gray-200 text-gray-700 hover:border-indigo-600 hover:text-indigo-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;