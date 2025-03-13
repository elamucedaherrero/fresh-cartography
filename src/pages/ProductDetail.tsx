import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Minus, Plus } from 'lucide-react';
import { useCart, Product } from '@/context/CartContext';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  
  // Fetch product data
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProduct = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Sample products data
      const sampleProducts: Product[] = [
        {
          id: 1,
          name: 'Organic Broccoli',
          description: 'Fresh organic broccoli from local farms. Rich in vitamins and minerals, our broccoli is harvested at peak ripeness for maximum flavor and nutrition. \n\nNutrition Information: High in vitamin C, vitamin K, and fiber. Low in calories and carbohydrates. \n\nStorage Tips: Store in the refrigerator crisper drawer for up to 5 days. For best results, store unwashed with a damp paper towel.',
          price: 2.99,
          image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=2831&auto=format&fit=crop',
          category: 'vegetables'
        },
        {
          id: 2,
          name: 'Red Bell Peppers',
          description: 'Sweet and crunchy red bell peppers. Perfect for salads, stir-fries, or roasting. Our peppers are grown without harmful pesticides. \n\nNutrition Information: High in vitamin C, vitamin A, and antioxidants. Low in calories. \n\nStorage Tips: Store in the refrigerator crisper drawer for up to 1 week. For maximum freshness, store with the stem intact.',
          price: 3.49,
          image: 'https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?q=80&w=2940&auto=format&fit=crop',
          category: 'vegetables'
        },
        {
          id: 3,
          name: 'Fresh Spinach',
          description: 'Nutrient-rich spinach leaves. Packed with iron, vitamins, and antioxidants. Locally grown and harvested at peak freshness. \n\nNutrition Information: High in iron, vitamin K, and folate. Low in calories. \n\nStorage Tips: Store in the refrigerator in its original packaging for up to 5 days. Wash just before using.',
          price: 1.99,
          image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2940&auto=format&fit=crop',
          category: 'greens'
        },
        {
          id: 4,
          name: 'Organic Tomatoes',
          description: 'Ripe, organic tomatoes. Juicy, flavorful, and perfect for salads, sauces, or simply enjoying fresh. Grown with sustainable farming practices. \n\nNutrition Information: High in vitamin C, potassium, and lycopene. Low in calories. \n\nStorage Tips: Store at room temperature away from direct sunlight for best flavor. Refrigerate only if fully ripe.',
          price: 2.75,
          image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=2940&auto=format&fit=crop',
          category: 'vegetables'
        },
        {
          id: 5,
          name: 'Fresh Strawberries',
          description: 'Sweet and juicy strawberries. Our strawberries are picked at the peak of ripeness for maximum flavor and nutritional value. \n\nNutrition Information: High in vitamin C, manganese, and antioxidants. Low in calories. \n\nStorage Tips: Store in the refrigerator for up to 3 days. Wash just before eating for maximum freshness.',
          price: 4.99,
          image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?q=80&w=2940&auto=format&fit=crop',
          category: 'fruits'
        },
      ];
      
      const foundProduct = sampleProducts.find(p => p.id === Number(id));
      setProduct(foundProduct || null);
      setLoading(false);
    };
    
    fetchProduct();
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  // Format description with paragraphs
  const formatDescription = (description: string) => {
    return description.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    ));
  };
  
  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, the product you're looking for doesn't exist.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Products link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link 
            to="/products" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </Link>
        </motion.div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 self-start"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-2">
              <span className="inline-block bg-green-50 text-green-600 text-xs font-medium px-2.5 py-1 rounded-full">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="text-2xl font-bold text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </div>
            
            <div className="prose prose-green mb-8">
              {formatDescription(product.description)}
            </div>
            
            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg w-32">
                <button
                  onClick={decrementQuantity}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors focus:outline-none"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                
                <span className="flex-1 text-center text-gray-700">{quantity}</span>
                
                <button
                  onClick={incrementQuantity}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors focus:outline-none"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="flex items-center justify-center w-full md:w-auto px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              <ShoppingCart size={18} className="mr-2" />
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
