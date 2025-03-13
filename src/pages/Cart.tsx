
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CartItem from '@/components/CartItem';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from "sonner";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  
  const handleCheckout = () => {
    toast.success("Thank you for your order! This is a demo, so no actual purchase was made.");
    clearCart();
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/products" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            Continue Shopping
          </Link>
        </motion.div>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Cart</h1>
          <p className="text-gray-500">
            {totalItems === 0 
              ? "Your cart is empty" 
              : `You have ${totalItems} item${totalItems !== 1 ? 's' : ''} in your cart`
            }
          </p>
        </div>
        
        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="flex justify-center mb-6">
              <ShoppingCart size={64} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-medium text-gray-600 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Browse Products
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flow-root">
                  <ul className="-my-6 divide-y divide-gray-100">
                    <AnimatePresence>
                      {items.map((item) => (
                        <li key={item.product.id} className="py-6">
                          <CartItem 
                            item={item} 
                            updateQuantity={updateQuantity}
                            removeFromCart={removeFromCart}
                          />
                        </li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-32 self-start"
            >
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="font-medium text-gray-900">${totalPrice.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <p className="text-gray-600">Shipping</p>
                    <p className="font-medium text-gray-900">$5.00</p>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <p className="text-gray-600">Tax</p>
                    <p className="font-medium text-gray-900">${(totalPrice * 0.1).toFixed(2)}</p>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="flex justify-between text-base font-semibold">
                      <p className="text-gray-900">Total</p>
                      <p className="text-gray-900">
                        ${(totalPrice + 5 + totalPrice * 0.1).toFixed(2)}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Including VAT
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    className="w-full bg-green-600 text-white font-medium rounded-lg py-3 px-4 hover:bg-green-700 transition-colors"
                  >
                    Checkout
                  </motion.button>
                </div>
                
                <div className="mt-4">
                  <button
                    onClick={clearCart}
                    className="w-full text-gray-500 text-sm hover:text-gray-700 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
