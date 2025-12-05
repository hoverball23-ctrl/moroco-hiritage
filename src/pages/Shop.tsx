
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Filter, ChevronDown } from 'lucide-react';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState<number>(200);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory || product.category.includes(selectedCategory);
      const matchesPrice = product.price <= priceRange;
      return matchesCategory && matchesPrice;
    });
  }, [selectedCategory, priceRange]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* Header */}
      <div className="bg-neutral-50 py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
           <h1 className="text-5xl md:text-6xl font-display font-medium text-primary mb-6">The Collection</h1>
           <p className="text-neutral-500 max-w-2xl mx-auto text-lg font-light">
             Discover our range of ethically sourced, premium Moroccan goods, crafted to elevate your daily rituals.
           </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Minimalist Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-12">
              
              {/* Categories */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6 border-b border-neutral-200 pb-2">Category</h3>
                <ul className="space-y-4">
                  <li>
                    <button 
                      onClick={() => handleCategoryChange('all')}
                      className={`text-sm transition-colors ${selectedCategory === 'all' ? 'text-primary font-bold underline decoration-secondary underline-offset-4' : 'text-neutral-500 hover:text-primary'}`}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button 
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`text-sm transition-colors ${selectedCategory === cat.id ? 'text-primary font-bold underline decoration-secondary underline-offset-4' : 'text-neutral-500 hover:text-primary'}`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div>
                 <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-6 border-b border-neutral-200 pb-2">Price</h3>
                 <div className="flex justify-between text-sm text-neutral-500 mb-4">
                   <span>$0</span>
                   <span>${priceRange}</span>
                 </div>
                 <input 
                  type="range" 
                  min="0" 
                  max="200" 
                  value={priceRange} 
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                 />
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-neutral-100">
              <span className="text-sm font-medium text-neutral-400">{filteredProducts.length} items</span>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-900 cursor-pointer hover:text-primary">
                Sort <ChevronDown size={14} />
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {filteredProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} index={idx} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32">
                <p className="text-neutral-400 text-xl font-light mb-4">No products found.</p>
                <button 
                  onClick={() => {setSelectedCategory('all'); setPriceRange(200);}}
                  className="text-secondary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
