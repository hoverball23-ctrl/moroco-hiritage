import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../lib/utils';
import { useTranslation } from 'react-i18next';
import { Trash2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();
  const { t } = useTranslation();
  const total = subtotal();
  const shipping = total > 100 ? 0 : 15;

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-neutral-50 px-4">
        <h2 className="text-3xl font-display font-bold text-primary mb-4">Your Cart is Empty</h2>
        <p className="text-neutral-500 mb-8">Looks like you haven't added any premium goods yet.</p>
        <Link to="/shop" className="btn-primary bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-display font-bold text-primary mb-8">{t('common.cart')}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-center"
              >
                <div className="w-24 h-24 flex-shrink-0 bg-neutral-100 rounded-lg overflow-hidden">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-primary">{item.name}</h3>
                    <p className="font-bold">{formatPrice(item.price * item.quantity, item.currency)}</p>
                  </div>
                  <p className="text-sm text-neutral-500 mb-4">{item.category}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border border-neutral-200 rounded px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 text-neutral-400 hover:text-primary"
                      >-</button>
                      <span className="mx-2 text-sm font-bold min-w-[1.5rem] text-center">{item.quantity}</span>
                      <button 
                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
                         className="px-2 text-neutral-400 hover:text-primary"
                      >+</button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
              <h2 className="text-xl font-display font-bold text-primary mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm text-neutral-600">
                  <span>{t('common.subtotal')}</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm text-neutral-600">
                  <span>{t('common.shipping')}</span>
                  <span>{shipping === 0 ? t('common.free') : formatPrice(shipping)}</span>
                </div>
                <div className="border-t border-neutral-100 pt-4 flex justify-between font-bold text-lg text-primary">
                  <span>{t('common.total')}</span>
                  <span>{formatPrice(total + shipping)}</span>
                </div>
              </div>

              <button className="w-full bg-secondary text-white font-bold py-4 rounded-lg hover:bg-secondary-dark transition-colors shadow-lg flex items-center justify-center group">
                {t('common.checkout')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-6 text-xs text-center text-neutral-400">
                Secure Checkout powered by Stripe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;