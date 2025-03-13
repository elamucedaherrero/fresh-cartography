
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CartDrawer = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <div className="flex flex-col h-full">
      <div className="px-1 py-4">
        <h2 className="text-xl font-semibold flex items-center">
          <ShoppingCart className="mr-2" size={20} />
          Mi Carrito
          {totalItems > 0 && <span className="ml-2 text-sm font-normal text-gray-500">({totalItems})</span>}
        </h2>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 px-4 py-6">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <ShoppingCart size={40} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Tu carrito está vacío</h3>
          <p className="text-gray-500 text-center mb-6">Agrega productos para comenzar tu compra</p>
          <Link to="/products">
            <Button className="bg-green-600 hover:bg-green-700">
              Ver Productos
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-1">
            <ul className="divide-y divide-gray-100">
              {items.map((item) => (
                <motion.li 
                  key={item.product.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-4"
                >
                  <div className="flex items-start">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium text-gray-900">{item.product.name}</h3>
                        <p className="text-sm font-medium text-gray-900">${(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">{item.product.category}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-100 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-gray-600 hover:text-green-600 transition-colors focus:outline-none"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          
                          <span className="px-2 py-1 text-xs text-gray-700">{item.quantity}</span>
                          
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-gray-600 hover:text-green-600 transition-colors focus:outline-none"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-gray-200 px-1 py-4 space-y-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-medium">${totalPrice.toFixed(2)}</p>
            </div>
            
            <div className="space-y-2">
              <Link to="/cart" className="w-full">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Ver carrito completo
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDrawer;
