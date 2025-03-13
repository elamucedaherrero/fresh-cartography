
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, PhoneCall, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-gray-900">FrescoVerde</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              Bringing the freshest, highest quality produce directly from local farms to your table.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-5">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=vegetables" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link to="/products?category=fruits" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Fruits
                </Link>
              </li>
              <li>
                <Link to="/products?category=herbs" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Herbs
                </Link>
              </li>
              <li>
                <Link to="/products?category=organic" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Organic
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-5">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-5">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-gray-500 mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">
                  123 Fresh St, Barcelona, Spain 08001
                </span>
              </li>
              <li className="flex items-center">
                <PhoneCall size={18} className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">+34 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">hello@frescoverde.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} FrescoVerde. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#" className="text-xs text-gray-500 hover:text-green-600 transition-colors mb-2 md:mb-0">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-green-600 transition-colors mb-2 md:mb-0">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-green-600 transition-colors mb-2 md:mb-0">
              Shipping Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-green-600 transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
