
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/context/CartContext';
import { motion } from 'framer-motion';

type CartItemProps = {
  item: CartItemType;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
};

const CartItem = ({ item, updateQuantity, removeFromCart }: CartItemProps) => {
  const { product, quantity } = item;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex py-6 border-b border-gray-100"
    >
      {/* Product Image */}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Product Details */}
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{product.name}</h3>
            <p className="ml-4">${(product.price * quantity).toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm">
          {/* Quantity Selector */}
          <div className="flex items-center border border-gray-100 rounded-lg">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="p-2 text-gray-600 hover:text-green-600 transition-colors focus:outline-none"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            
            <span className="px-3 py-1 text-gray-700">{quantity}</span>
            
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="p-2 text-gray-600 hover:text-green-600 transition-colors focus:outline-none"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeFromCart(product.id)}
            type="button"
            className="font-medium text-gray-500 hover:text-red-500 transition-colors flex items-center"
          >
            <Trash2 size={16} className="mr-1" />
            Remove
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
