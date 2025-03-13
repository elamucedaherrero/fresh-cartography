
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartDrawer from '@/components/CartDrawer';

const Navbar = () => {
  const location = useLocation();
  const { totalItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
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
    isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
  }`;
  
  const linkClasses = 'text-sm font-medium transition-colors hover:text-green-600';
  const activeLinkClasses = 'text-green-600 font-semibold';
  
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
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-10"
          >
            <Link 
              to="/" 
              className={location.pathname === '/' ? activeLinkClasses : linkClasses}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={location.pathname === '/products' ? activeLinkClasses : linkClasses}
            >
              Products
            </Link>
          </motion.div>
          
          {/* Desktop Right Navigation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-5"
          >
            {isAuthenticated ? (
              <div className="flex items-center space-x-5">
                <div className="text-sm font-medium text-gray-600">
                  Hi, {user?.name}
                </div>
                <button 
                  onClick={logout}
                  className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/auth" 
                className="flex items-center text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
              >
                <User size={18} className="mr-1" />
                Sign In
              </Link>
            )}
            
            <Sheet>
              <SheetTrigger asChild>
                <button className="relative">
                  <ShoppingCart size={22} className="text-gray-700 hover:text-green-600 transition-colors" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <CartDrawer />
              </SheetContent>
            </Sheet>
            
            <Link to="/cart" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
              Ver carrito
            </Link>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex md:hidden items-center space-x-4"
          >
            <Sheet>
              <SheetTrigger asChild>
                <button className="relative">
                  <ShoppingCart size={22} className="text-gray-700" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent className="w-full">
                <CartDrawer />
              </SheetContent>
            </Sheet>
            
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
      <AnimatePresence>
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
                
                <div className="border-t border-gray-100 pt-2">
                  {isAuthenticated ? (
                    <>
                      <div className="text-base text-gray-600 py-2">
                        Hi, {user?.name}
                      </div>
                      <button 
                        onClick={logout}
                        className="text-base text-gray-600 py-2"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link 
                      to="/auth" 
                      className="flex items-center text-base text-gray-700 py-2"
                    >
                      <User size={18} className="mr-2" />
                      Sign In
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
