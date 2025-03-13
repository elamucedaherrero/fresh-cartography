import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import { useCart, Product } from '@/context/CartContext';
import { Leaf, Truck, Shield, ArrowRight } from 'lucide-react';

const Index = () => {
  // Sample featured products
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Organic Broccoli',
      description: 'Fresh organic broccoli from local farms',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=2831&auto=format&fit=crop',
      category: 'Vegetables'
    },
    {
      id: 2,
      name: 'Red Bell Peppers',
      description: 'Sweet and crunchy red bell peppers',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?q=80&w=2940&auto=format&fit=crop',
      category: 'Vegetables'
    },
    {
      id: 3,
      name: 'Fresh Spinach',
      description: 'Nutrient-rich spinach leaves',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2940&auto=format&fit=crop',
      category: 'Greens'
    },
    {
      id: 4,
      name: 'Organic Tomatoes',
      description: 'Ripe, organic tomatoes',
      price: 2.75,
      image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=2940&auto=format&fit=crop',
      category: 'Vegetables'
    },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose FrescoVerde?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to bringing you the best quality produce while supporting sustainable farming practices.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Organic</h3>
              <p className="text-gray-600">
                All our produce is certified organic, grown without harmful pesticides or chemicals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Farm to Door</h3>
              <p className="text-gray-600">
                We deliver directly from farms to your doorstep, ensuring maximum freshness.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We stand behind the quality of our products with a 100% satisfaction guarantee.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">Explore our handpicked selection of seasonal favorites</p>
            </div>
            
            <Link 
              to="/products" 
              className="text-green-600 hover:text-green-700 font-medium flex items-center"
            >
              View All
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredProducts.map(product => (
              <motion.div 
                key={product.id} 
                variants={itemVariants}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 text-center"
          >
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map(star => (
                <svg 
                  key={star}
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-yellow-400" 
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path 
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
                  />
                </svg>
              ))}
            </div>
            
            <p className="text-lg text-gray-600 italic mb-6">
              "FrescoVerde delivers the freshest vegetables I've ever had. Their commitment to quality is exceptional, and the convenience of doorstep delivery makes healthy eating so much easier!"
            </p>
            
            <div>
              <p className="font-medium text-gray-900">María García</p>
              <p className="text-sm text-gray-500">Loyal customer since 2022</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center py-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to taste the difference?</h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              Start your journey to fresher, healthier eating today. Browse our selection of premium organic produce.
            </p>
            
            <Link to="/products">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 hover:bg-green-50 font-medium px-8 py-3 rounded-lg transition-colors"
              >
                Shop Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
