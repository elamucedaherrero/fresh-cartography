
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { MainNav } from './MainNav';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
  }`;
  
  return (
    <header className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-gray-900"
            >
              FrescoVerde
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <MainNav />
          </div>
          
          {/* Mobile Menu Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden"
          >
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-100 shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-col space-y-4 py-3">
              <Link 
                to="/" 
                className={`text-base py-2 ${location.pathname === '/' ? 'text-green-600 font-medium' : 'text-gray-700'}`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`text-base py-2 ${location.pathname === '/products' ? 'text-green-600 font-medium' : 'text-gray-700'}`}
              >
                Products
              </Link>
              <Link 
                to="/cart" 
                className={`text-base py-2 ${location.pathname === '/cart' ? 'text-green-600 font-medium' : 'text-gray-700'}`}
              >
                Cart
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
