import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold tracking-wide text-accent">
            AMOS<span className="text-white">.NG</span>
          </div>

          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#home" className="hover:text-accent transition">Home</a>
            <a href="#about" className="hover:text-accent transition">About</a>
            <a href="#services" className="hover:text-accent transition">Services</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2">
          <a href="#home" className="block py-2 text-gray-200">Home</a>
          <a href="#about" className="block py-2 text-gray-200">About</a>
          <a href="#services" className="block py-2 text-gray-200">Services</a>
          <a href="#contact" className="block py-2 text-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
}