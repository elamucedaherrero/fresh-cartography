
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { SlidersHorizontal, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Product } from '@/context/CartContext';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'all';
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = ['all', 'vegetables', 'fruits', 'herbs', 'organic'];
  
  // Load sample products data
  useEffect(() => {
    // In a real app, this would come from an API
    const sampleProducts: Product[] = [
      {
        id: 1,
        name: 'Organic Broccoli',
        description: 'Fresh organic broccoli from local farms. Rich in vitamins and minerals, our broccoli is harvested at peak ripeness for maximum flavor and nutrition.',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1615380217237-2d57a3e4d467?q=80&w=2940&auto=format&fit=crop',
        category: 'vegetables'
      },
      {
        id: 2,
        name: 'Red Bell Peppers',
        description: 'Sweet and crunchy red bell peppers. Perfect for salads, stir-fries, or roasting. Our peppers are grown without harmful pesticides.',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?q=80&w=2940&auto=format&fit=crop',
        category: 'vegetables'
      },
      {
        id: 3,
        name: 'Fresh Spinach',
        description: 'Nutrient-rich spinach leaves. Packed with iron, vitamins, and antioxidants. Locally grown and harvested at peak freshness.',
        price: 1.99,
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2940&auto=format&fit=crop',
        category: 'greens'
      },
      {
        id: 4,
        name: 'Organic Tomatoes',
        description: 'Ripe, organic tomatoes. Juicy, flavorful, and perfect for salads, sauces, or simply enjoying fresh. Grown with sustainable farming practices.',
        price: 2.75,
        image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=2940&auto=format&fit=crop',
        category: 'vegetables'
      },
      {
        id: 5,
        name: 'Fresh Strawberries',
        description: 'Sweet and juicy strawberries. Our strawberries are picked at the peak of ripeness for maximum flavor and nutritional value.',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?q=80&w=2940&auto=format&fit=crop',
        category: 'fruits'
      },
      {
        id: 6,
        name: 'Organic Carrots',
        description: 'Crisp and sweet organic carrots. Perfect for snacking, cooking, or juicing. Our carrots are grown in rich soil without synthetic fertilizers.',
        price: 1.89,
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=2940&auto=format&fit=crop',
        category: 'vegetables'
      },
      {
        id: 7,
        name: 'Fresh Basil',
        description: 'Aromatic fresh basil. Add authentic flavor to your Italian dishes. Our basil is grown hydroponically for maximum flavor intensity.',
        price: 2.29,
        image: 'https://images.unsplash.com/photo-1600692858810-6539c8413452?q=80&w=2960&auto=format&fit=crop',
        category: 'herbs'
      },
      {
        id: 8,
        name: 'Organic Avocados',
        description: 'Creamy organic avocados. Perfect for guacamole, toast, or adding to salads. Sustainably grown with eco-friendly practices.',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=2940&auto=format&fit=crop',
        category: 'fruits'
      },
      {
        id: 9,
        name: 'Fresh Mint',
        description: 'Refreshing mint leaves. Perfect for teas, cocktails, and culinary creations. Grown without harmful pesticides.',
        price: 1.99,
        image: 'https://images.unsplash.com/photo-1628157611582-7431eb5eda6e?q=80&w=2940&auto=format&fit=crop',
        category: 'herbs'
      },
      {
        id: 10,
        name: 'Red Onions',
        description: 'Flavorful red onions. Essential for adding depth to countless recipes. Our onions are grown with traditional farming methods for the best flavor.',
        price: 1.29,
        image: 'https://images.unsplash.com/photo-1618512496248-a07c50a5932d?q=80&w=2787&auto=format&fit=crop',
        category: 'vegetables'
      },
      {
        id: 11,
        name: 'Organic Blueberries',
        description: 'Organic antioxidant-rich blueberries. Our berries are grown without synthetic pesticides and are perfect for snacking, baking, or adding to smoothies.',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=2940&auto=format&fit=crop',
        category: 'fruits'
      },
      {
        id: 12,
        name: 'Fresh Rosemary',
        description: 'Aromatic rosemary sprigs. Perfect for roasts, potatoes, and Mediterranean dishes. Our rosemary is grown with sustainable practices.',
        price: 2.49,
        image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=80&w=2940&auto=format&fit=crop',
        category: 'herbs'
      },
    ];
    
    setProducts(sampleProducts);
  }, []);
  
  // Filter products based on category and search query
  useEffect(() => {
    let filtered = [...products];
    
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        product => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        product => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery]);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Fresh Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our selection of farm-fresh vegetables, fruits, and herbs.
            All products are sourced from local farms and delivered to your doorstep.
          </p>
        </motion.div>
        
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            {/* Search */}
            <div className="relative w-full md:w-auto mb-4 md:mb-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full md:w-80 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>
            
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center text-sm font-medium text-gray-600"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            {/* Desktop Category Filters */}
            <div className="hidden md:flex space-x-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Category Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <p className="text-gray-500 text-lg">
                  No products found matching your criteria. Try adjusting your filters.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
