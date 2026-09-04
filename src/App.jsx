import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopItemsSection from "./components/TopItemsSection";
import CategoriesSection from "./components/CategoriesSection";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      
      <Navbar />


      <HeroSection />

    
      <TopItemsSection />


      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8 w-full flex-1">
        <CategoriesSection />
        <ProductsSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;