import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { isCartOpen, closeCart, items, updateQuantity, removeFromCart, subtotal } = useCart();
  const total = subtotal();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-neutral-100">
              <h2 className="text-2xl font-display font-bold text-primary">Your Bag</h2>
              <button onClick={closeCart} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <ShoppingBag size={48} className="text-neutral-300" />
                  <p className="text-neutral-500 font-light">Your shopping bag is empty.</p>
                  <button onClick={closeCart} className="text-secondary font-medium hover:underline">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4"
                  >
                    <div className="w-24 h-32 flex-shrink-0 bg-neutral-100 overflow-hidden">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-display font-medium text-lg leading-tight">{item.name}</h3>
                          <p className="font-medium text-sm">{formatPrice(item.price * item.quantity)}</p>
                        </div>
                        <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">{item.category}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-neutral-200">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-neutral-50"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-neutral-50"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-400 hover:text-red-500 transition-colors text-xs uppercase tracking-wider underline decoration-transparent hover:decoration-red-500 underline-offset-4"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-neutral-100 p-6 bg-neutral-50 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold font-display">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <p className="text-xs text-neutral-500 text-center">Shipping & taxes calculated at checkout</p>
                <Link 
                  to="/cart" 
                  onClick={closeCart}
                  className="w-full bg-primary text-white py-4 flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold hover:bg-primary-dark transition-colors"
                >
                  Checkout <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
