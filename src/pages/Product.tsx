
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Star, Truck, ShieldCheck, Plus, Minus, Share2, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../lib/utils';
import { useTranslation } from 'react-i18next';

const TabContent = ({ isActive, children }: { isActive: boolean; children?: React.ReactNode }) => (
  <AnimatePresence>
    {isActive && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="overflow-hidden"
      >
        <div className="py-4 text-neutral-600 font-light leading-relaxed">
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'ingr' | 'revi'>('desc');
  const [showStickyBar, setShowStickyBar] = useState(false);
  
  const { addToCart } = useCart();
  const { t } = useTranslation();
  const mainButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainButtonRef.current) {
        const rect = mainButtonRef.current.getBoundingClientRect();
        setShowStickyBar(rect.bottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Product Section */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Gallery (Left) */}
          <div className="space-y-4 lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-square bg-neutral-100 overflow-hidden w-full"
            >
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
               {product.images.slice(1).map((img, i) => (
                 <div key={i} className="aspect-square bg-neutral-100 overflow-hidden">
                   <img src={img} alt="" className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          </div>

          {/* Details (Right) */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">{product.category}</span>
              {product.rating > 4.8 && (
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-secondary text-secondary" />
                  <span className="text-xs font-bold">{product.rating}</span>
                </div>
              )}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-medium text-primary mb-6 leading-[1.1]">{product.name}</h1>
            
            <p className="text-3xl font-light text-neutral-900 mb-8">
              {formatPrice(product.price, product.currency)}
            </p>

            <p className="text-neutral-600 leading-relaxed mb-12 text-lg font-light max-w-lg">
              {product.longDesc}
            </p>

            {/* Selector */}
            <div className="space-y-8 mb-12">
               {/* Quantity & Add */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-neutral-300 px-6 h-14 w-full sm:w-auto justify-between sm:justify-center min-w-[140px]">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-neutral-400 hover:text-primary transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="mx-6 font-bold text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-neutral-400 hover:text-primary transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                
                <button
                  ref={mainButtonRef}
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 h-14 px-8 font-bold uppercase tracking-widest text-xs transition-all duration-300 ${
                    product.inStock 
                    ? 'bg-primary text-white hover:bg-primary-dark' 
                    : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? t('common.addToCart') : t('common.outOfStock')}
                </button>
              </div>
            </div>

            {/* Accordion Info */}
            <div className="border-t border-neutral-200">
              <button 
                onClick={() => setActiveTab(activeTab === 'desc' ? null as any : 'desc')}
                className="w-full flex justify-between items-center py-6 group"
              >
                <span className="font-bold uppercase tracking-widest text-xs">Description</span>
                <ChevronDown className={`transition-transform duration-300 ${activeTab === 'desc' ? 'rotate-180' : ''}`} size={18} />
              </button>
              <TabContent isActive={activeTab === 'desc'}>
                 {product.longDesc}
              </TabContent>

              <div className="border-t border-neutral-200">
                <button 
                  onClick={() => setActiveTab(activeTab === 'ingr' ? null as any : 'ingr')}
                  className="w-full flex justify-between items-center py-6 group"
                >
                  <span className="font-bold uppercase tracking-widest text-xs">Ingredients</span>
                  <ChevronDown className={`transition-transform duration-300 ${activeTab === 'ingr' ? 'rotate-180' : ''}`} size={18} />
                </button>
                <TabContent isActive={activeTab === 'ingr'}>
                   <ul className="space-y-2">
                     {product.ingredients?.map((ing, i) => <li key={i}>{ing}</li>) || <li>100% Pure Moroccan Ingredients</li>}
                   </ul>
                </TabContent>
              </div>
              
              <div className="border-t border-neutral-200 border-b">
                 <button 
                  onClick={() => setActiveTab(activeTab === 'revi' ? null as any : 'revi')}
                  className="w-full flex justify-between items-center py-6 group"
                >
                  <span className="font-bold uppercase tracking-widest text-xs">Reviews ({product.reviewCount})</span>
                  <ChevronDown className={`transition-transform duration-300 ${activeTab === 'revi' ? 'rotate-180' : ''}`} size={18} />
                </button>
                <TabContent isActive={activeTab === 'revi'}>
                   <div className="space-y-4">
                     <div className="flex gap-1 text-secondary"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/></div>
                     <p>"Absolutely magnificent quality. The best I've ever used."</p>
                     <p className="text-xs text-neutral-400">- Sarah M., Verified Buyer</p>
                   </div>
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Action Bar */}
      <AnimatePresence>
        {showStickyBar && product.inStock && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]"
          >
            <div className="max-w-[1440px] mx-auto flex items-center justify-between">
              <div className="hidden md:flex items-center gap-4">
                 <img src={product.images[0]} alt="" className="w-12 h-12 object-cover" />
                 <div>
                    <h4 className="font-display font-bold text-primary">{product.name}</h4>
                    <span className="text-sm">{formatPrice(product.price)}</span>
                 </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full md:w-auto px-12 py-3 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-primary-dark transition-colors"
              >
                Add to Bag
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductPage;
