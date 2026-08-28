import React, { useState } from 'react';
import { Search, Phone, ShoppingCart, Heart, ChevronDown, Facebook, Instagram, ArrowUp, X } from 'lucide-react';

// Product Catalog matched with realistic images
const PRODUCTS = [
  // Top Items
  { id: 1, section: "Top Items", title: "HALKO industrial overlock...", category: "Sewing Machines", price: 395000, badge: "HALKO SEWING MACHINE", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80" },
  { id: 2, section: "Top Items", title: "Halko direct-drive indu...", category: "Sewing Machines", price: 380000, badge: "HALKO SEWING MACHINE", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80" },
  { id: 3, section: "Top Items", title: "Halko cast-iron Butterfly...", category: "Sewing Machines", price: 190000, badge: "", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80" },
  { id: 4, section: "Top Items", title: "Jack A4 industrial sewing...", category: "Sewing Machines", price: 340000, badge: "JACK A4 INDUSTRIAL SEWING MACHINE", hasBuyNow: true, img: "https://images.unsplash.com/photo-1528575910061-227c34d7431c?auto=format&fit=crop&w=600&q=80" },

  // Latest Items
  { id: 5, section: "Latest Items", title: "Juki sewing machine NEW", category: "Sewing Machines", price: 380000, badge: "JUKI SEWING MACHINE", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80" },
  { id: 6, section: "Latest Items", title: "EMEL over lock stiches se...", category: "Sewing Machines", price: 450000, badge: "EMEL SEWING MACHINE", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80" },
  { id: 7, section: "Latest Items", title: "Butter fly sewing machine...", category: "Sewing Machines", price: 200000, badge: "BUTTERFLY SEWING MACHINE", oldPrice: "170,000", newPrice: "165,000", hasBuyNow: true, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80" },
  { id: 8, section: "Latest Items", title: "Jack servo motor", category: "Tools", price: 70000, badge: "JACK", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" },

  // Sewing Machines
  { id: 9, section: "Sewing Machines", title: "Juki sewing machine NEW", category: "Sewing Machines", price: 380000, badge: "JUKI SEWING MACHINE", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80" },
  { id: 10, section: "Sewing Machines", title: "EMEL over lock stiches se...", category: "Sewing Machines", price: 450000, badge: "EMEL SEWING MACHINE", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80" },
  { id: 11, section: "Sewing Machines", title: "Butter fly sewing machine...", category: "Sewing Machines", price: 200000, badge: "BUTTERFLY SEWING MACHINE", oldPrice: "170,000", newPrice: "165,000", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80" },
  { id: 12, section: "Sewing Machines", title: "singer over lock stiches...", category: "Sewing Machines", price: 200000, badge: "SINGER SEWING MACHINE", img: "https://images.unsplash.com/photo-1528575910061-227c34d7431c?auto=format&fit=crop&w=600&q=80" },

  // Tool Items
  { id: 13, section: "Tool Items", title: "Jack servo motor", category: "Tools", price: 70000, badge: "JACK", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" },
  { id: 14, section: "Tool Items", title: "Dogon Faleti | Slide plat...", category: "Tools", price: 1000, badge: "", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80" },
  { id: 15, section: "Tool Items", title: "Famfo | Oil pump assembly...", category: "Tools", price: 3000, badge: "OIL PUMP ASSEMBLY", hasBuyNow: true, img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80" },
  { id: 16, section: "Tool Items", title: "Hinge set", category: "Tools", price: 1900, badge: "HINGE SET", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80" }
];

export default function LiveAmosStore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [activeModal, setActiveModal] = useState(null);

  // Live filter logic
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getSectionItems = (sectionName) => filteredProducts.filter(p => p.section === sectionName);

  const handleBuyNow = (product) => {
    setCartCount(prev => prev + 1);
    setActiveModal({ type: 'cart', title: product.title, price: product.price });
  };

  const handleContactUs = (product) => {
    setActiveModal({ type: 'contact', title: product.title });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans relative">
      
      {/* Live Modal Notification */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-2xl relative">
            <button onClick={() => setActiveModal(null)} className="absolute top-3 right-3 text-gray-400 hover:text-black">
              <X className="w-5 h-5" />
            </button>
            {activeModal.type === 'cart' ? (
              <div>
                <h3 className="text-lg font-bold text-green-600 mb-2">Item Added to Cart!</h3>
                <p className="text-sm text-gray-600">{activeModal.title}</p>
                <p className="text-blue-600 font-bold mt-1">₦{activeModal.price.toLocaleString()}.00</p>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Contact Support</h3>
                <p className="text-xs text-gray-500 mb-3">Inquiring about: <span className="font-semibold">{activeModal.title}</span></p>
                <p className="text-sm font-semibold">Call: +234 (0)803 363 7697</p>
                <p className="text-sm text-green-600 font-semibold mt-1">WhatsApp: +234 803 363 7697</p>
              </div>
            )}
            <button onClick={() => setActiveModal(null)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded text-sm font-semibold">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
            <span className="text-3xl font-bold text-blue-900 tracking-tight">AMOS</span>
            <div className="bg-yellow-400 p-2 rounded">
              <ShoppingCart className="w-6 h-6 text-blue-900" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:border-blue-600">
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 bg-gray-100 text-sm border-r text-gray-600 focus:outline-none cursor-pointer"
            >
              <option value="All">All</option>
              <option value="Sewing Machines">Sewing Machines</option>
              <option value="Tools">Tools</option>
              <option value="Irons">Irons</option>
            </select>
            <input 
              type="text" 
              placeholder="Search products live..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 text-sm focus:outline-none" 
            />
            <button className="bg-blue-600 px-5 py-2 text-white">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hidden md:flex">
              <Phone className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-xs text-gray-500">Hotline:</p>
                <p className="text-sm font-semibold text-gray-800">(+234) 803 363 7697</p>
              </div>
            </div>
            
            <div className="relative cursor-pointer" onClick={() => setWishlistCount(prev => prev + 1)}>
              <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{wishlistCount}</span>
            </div>

            <div className="relative cursor-pointer">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{cartCount}</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-8 py-3 text-sm font-medium">
            <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded text-gray-700 font-semibold">
              ☰ All Categories
            </button>
            <button onClick={() => setSelectedCategory('All')} className="text-blue-600 font-semibold">Home</button>
            <a href="#top-items" className="text-gray-600 hover:text-blue-600">Top Items</a>
            <a href="#latest-items" className="text-gray-600 hover:text-blue-600">Latest Items</a>
            <a href="#sewing-machines" className="text-gray-600 hover:text-blue-600">Sewing Machines</a>
            <a href="#tool-items" className="text-gray-600 hover:text-blue-600">Tools</a>
          </div>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-8 relative overflow-hidden flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-blue-900">AMOS</span>
              <div className="bg-yellow-400 p-1 rounded">
                <ShoppingCart className="w-5 h-5 text-blue-900" />
              </div>
            </div>
            <h1 className="text-4xl font-extrabold text-blue-900 uppercase leading-tight mb-2">Welcome to Amos</h1>
            <p className="text-gray-600">Online marketplace to find qualitative and affordable items</p>
          </div>
          <a href="#latest-items" className="bg-blue-600 text-white px-6 py-2.5 rounded text-sm font-medium w-fit mt-6 hover:bg-blue-700 transition">
            Shop Now
          </a>
        </div>

        <div className="bg-slate-950 text-white rounded-lg p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-3">Special Products</h2>
            <p className="text-gray-400 text-sm mb-6">Get Our Top Products that are pre-selected by our sales rep</p>
          </div>
          <a href="#top-items" className="border border-white text-white px-6 py-2.5 rounded text-sm font-medium text-center hover:bg-white hover:text-slate-950 transition">
            Browse The Top Items
          </a>
        </div>
      </section>

      {/* Dynamic Sections */}
      <div id="top-items">
        <LiveProductGrid title="Top Items" items={getSectionItems("Top Items")} onBuyNow={handleBuyNow} onContact={handleContactUs} />
      </div>

      <div id="latest-items">
        <LiveProductGrid title="Latest Items" items={getSectionItems("Latest Items")} onBuyNow={handleBuyNow} onContact={handleContactUs} hasViewMore />
      </div>

      <div id="sewing-machines">
        <LiveProductGrid title="Sewing Machines" items={getSectionItems("Sewing Machines")} onBuyNow={handleBuyNow} onContact={handleContactUs} />
      </div>

      {/* Irons Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Irons</h2>
        <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-2 mb-4"></div>
        <p className="text-gray-500 text-sm">No Top Products from us today</p>
      </section>

      <div id="tool-items">
        <LiveProductGrid title="Tool Items" items={getSectionItems("Tool Items")} onBuyNow={handleBuyNow} onContact={handleContactUs} />
      </div>

      {/* Help Section */}
      <section className="bg-blue-600 text-white py-14 px-4 text-center mt-12">
        <h2 className="text-3xl font-bold mb-3">Need Help Choosing the Right Product?</h2>
        <p className="text-blue-100 text-sm mb-6 max-w-xl mx-auto">Our support team is here to guide you. Contact us now for inquiries, recommendations, or product assistance.</p>
        <div className="flex justify-center gap-4">
          <a href="tel:+2348033637697" className="bg-white text-blue-600 font-semibold px-6 py-2.5 rounded text-sm hover:bg-gray-100">Call Us</a>
          <a href="https://wa.me/2348033637697" target="_blank" rel="noreferrer" className="bg-white text-blue-600 font-semibold px-6 py-2.5 rounded text-sm hover:bg-gray-100">Chat On WhatsApp</a>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-white border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="p-4">
            <div className="w-10 h-10 border border-blue-600 text-blue-600 rounded flex items-center justify-center mx-auto mb-3">🚚</div>
            <h3 className="font-bold text-gray-900 text-sm">Fast Shipping</h3>
            <p className="text-xs text-gray-500 mt-1">Reliable and Speedy Delivery</p>
          </div>
          <div className="p-4">
            <div className="w-10 h-10 border border-blue-600 text-blue-600 rounded flex items-center justify-center mx-auto mb-3">💬</div>
            <h3 className="font-bold text-gray-900 text-sm">24/7 Support.</h3>
            <p className="text-xs text-gray-500 mt-1">Live Chat Or Call.</p>
          </div>
          <div className="p-4">
            <div className="w-10 h-10 border border-blue-600 text-blue-600 rounded flex items-center justify-center mx-auto mb-3">💳</div>
            <h3 className="font-bold text-gray-900 text-sm">Quality Products.</h3>
            <p className="text-xs text-gray-500 mt-1">Proven Qualitative Items</p>
          </div>
          <div className="p-4">
            <div className="w-10 h-10 border border-blue-600 text-blue-600 rounded flex items-center justify-center mx-auto mb-3">🔄</div>
            <h3 className="font-bold text-gray-900 text-sm">Guaranteed Items.</h3>
            <p className="text-xs text-gray-500 mt-1">Ensuring Qualitative Items.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">AMOS</span>
              <div className="bg-yellow-400 p-1 rounded">
                <ShoppingCart className="w-4 h-4 text-slate-950" />
              </div>
            </div>
            <h4 className="font-bold text-sm mb-2">Auco Online Marketing Shop</h4>
            <p className="text-xs text-gray-400">Your getaway to getting affordable, qualitative and relaible sewing machines and related tools</p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-600 after:mt-1">Get In Touch With Us</h3>
            <p className="text-xs text-gray-400 mb-2">Phone: +234 (0)803 363 7697</p>
            <p className="text-xs text-gray-400">Monday-Friday:<br />10.00 am - 5.00 pm</p>
            <p className="text-xs text-gray-400 mt-2">Saturday:<br />12.00 am - 4.00 pm</p>
            <p className="text-xs text-gray-400 mt-2">info@amos.com.ng</p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-600 after:mt-1">Main Pages</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#top-items" className="hover:text-white">Top Items</a></li>
              <li><a href="#latest-items" className="hover:text-white">Latest Items</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-600 after:mt-1">Brands</h3>
            <ul className="space-y-2 text-xs text-gray-400 mb-6">
              <li>Juki</li>
              <li>Jack</li>
              <li>Two Lion</li>
              <li>Brothers</li>
              <li>Singer</li>
              <li>Nambang</li>
            </ul>

            <h3 className="font-bold mb-4 text-sm relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-600 after:mt-1">Category</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>Sewing Machines</li>
              <li>Tools</li>
              <li>Irons</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 border-t border-slate-900 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026</p>
          <p>Designed and Developed by SGR</p>
          <div className="flex items-center gap-4">
            <span>Follow Us On:</span>
            <Facebook className="w-4 h-4 cursor-pointer hover:text-white" />
            <span className="cursor-pointer hover:text-white">🎵</span>
            <Instagram className="w-4 h-4 cursor-pointer hover:text-white" />
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </div>
  );
}

// Sub-component rendering matched images and live actions
function LiveProductGrid({ title, items, onBuyNow, onContact, hasViewMore }) {
  if (items.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-slate-900">{title}</h2>
      <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-2 mb-8"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-md border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition">
            
            {/* Image Box */}
            <div className="bg-slate-950 h-52 relative overflow-hidden group">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-slate-950/40"></div>

              {/* Shopping Icon */}
              <div className="absolute top-3 left-3 flex items-center gap-1 text-yellow-400 text-xs">
                <ShoppingCart className="w-4 h-4" />
              </div>
              
              {/* Badge text over picture */}
              {item.badge && (
                <span className="absolute inset-x-0 top-12 text-white text-xs font-bold uppercase text-center px-2 drop-shadow-md">
                  {item.badge}
                </span>
              )}

              {/* Buy Now live button */}
              {item.hasBuyNow && (
                <button 
                  onClick={() => onBuyNow(item)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs px-4 py-2 rounded flex items-center gap-1.5 shadow-md hover:bg-blue-700 transition"
                >
                  <ShoppingCart className="w-3.5 h-3.5" /> Buy Now
                </button>
              )}

              {/* Discount price overlay */}
              {item.oldPrice && (
                <div className="absolute bottom-10 right-2 flex gap-2 text-[10px] bg-slate-900/90 backdrop-blur px-2 py-1 rounded border border-gray-700">
                  <span className="text-gray-400 line-through">OLD PRICE {item.oldPrice}</span>
                  <span className="text-white font-bold">NEW PRICE {item.newPrice}</span>
                </div>
              )}

              {/* Contact Us button */}
              <button 
                onClick={() => onContact(item)}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded text-black uppercase hover:bg-gray-100 transition shadow"
              >
                Contact Us
              </button>
            </div>

            {/* Details */}
            <div className="p-4">
              <span className="text-xs text-gray-400">{item.category}</span>
              <h3 className="font-medium text-sm text-gray-800 line-clamp-1 mt-0.5">{item.title}</h3>
              <p className="text-blue-600 font-bold mt-2 text-sm">₦{item.price.toLocaleString()}.00</p>
            </div>
          </div>
        ))}
      </div>

      {hasViewMore && (
        <div className="text-center mt-8">
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded text-xs font-medium hover:bg-blue-50 transition">
            View More
          </button>
        </div>
      )}
    </section>
  );
}