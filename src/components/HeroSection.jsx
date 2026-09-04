import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
      
        <div className="lg:col-span-7 space-y-6">
          <span className="bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-indigo-500/30">
            Exclusive Collection 2026
          </span>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
            Find Everything You Need in One Place
          </h1>
          <p className="text-indigo-200 text-base sm:text-lg max-w-xl">
            Explore top-rated products, exclusive deals, and fast delivery built around your everyday needs.
          </p>

          {/* Search Bar Relocated to Hero */}
          <div className="flex items-center bg-white rounded-xl p-1.5 shadow-2xl max-w-lg mt-4">
            <input
              type="text"
              placeholder="Search products, brands, categories..."
              className="w-full px-4 py-2.5 text-gray-800 focus:outline-none text-sm placeholder-gray-400"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition">
              Search
            </button>
          </div>
        </div>

        {/* Embedded Featured Highlight (Replaces Standalone Special Products) */}
        <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-2xl shadow-xl space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              🔥 Deal of the Day
            </span>
            <span className="text-xs text-indigo-200 bg-white/10 px-2.5 py-1 rounded">Limited Offer</span>
          </div>
          <div className="h-44 bg-indigo-900/40 rounded-xl flex items-center justify-center text-5xl">
            🎧
          </div>
          <div>
            <h3 className="text-xl font-bold">Pro Noise-Canceling Headphones</h3>
            <p className="text-xs text-indigo-200 mt-1">High-fidelity audio with spatial sound capability.</p>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div>
              <span className="text-2xl font-black text-amber-400">$180.00</span>
              <span className="text-xs line-through text-indigo-300 ml-2">$250.00</span>
            </div>
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-xs px-4 py-2.5 rounded-lg transition">
              Grab Deal
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;