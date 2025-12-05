import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { cn } from '../lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { cartCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/shop', label: t('common.shop') },
    { path: '/about', label: t('common.about') },
    { path: '/journal', label: "Journal" },
  ];

  const isHome = location.pathname === '/';
  
  // Dynamic color logic based on scroll and page
  const headerStyle = isScrolled || !isHome
    ? "bg-tadelakt/90 backdrop-blur-md border-neutral-200 text-primary py-4"
    : "bg-transparent border-transparent text-white py-6";

  const logoColor = isScrolled || !isHome ? "text-primary" : "text-white";
  const iconColor = isScrolled || !isHome ? "text-primary hover:text-secondary" : "text-white hover:text-secondary";

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b", headerStyle)}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Left: Mobile Menu Trigger & Search */}
          <div className="flex items-center flex-1 gap-6">
             <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} className={iconColor} />
            </button>
            <button className={cn("hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors", iconColor)}>
               <Search size={18} />
               <span>Search</span>
            </button>
          </div>

          {/* Center: Brand */}
          <Link to="/" className="flex flex-col items-center justify-center group flex-1">
            <span className={cn("text-2xl lg:text-3xl font-display font-medium tracking-tight transition-colors", logoColor)}>
              Atlas Heritage
            </span>
          </Link>

          {/* Right: Nav & Cart */}
          <div className="flex items-center justify-end flex-1 gap-8">
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn("text-xs font-bold uppercase tracking-widest transition-colors", iconColor)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <Link to="/account" className={cn("hidden md:block transition-colors", iconColor)}>
                <User size={20} />
              </Link>
              <button 
                onClick={openCart}
                className={cn("relative transition-colors flex items-center gap-2", iconColor)}
              >
                <ShoppingBag size={20} />
                {cartCount() > 0 && (
                  <span className="absolute -top-1 -right-2 bg-secondary text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-tadelakt z-40 flex flex-col pt-32 px-8"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-2 text-primary"
            >
              <X size={32} />
            </button>
            
            <nav className="flex flex-col items-center space-y-8">
              <Link to="/" className="text-4xl font-display font-medium text-primary">Home</Link>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-display font-medium text-primary hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px w-24 bg-neutral-300 my-8" />
              <div className="flex gap-8">
                 <Link to="/account" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Account</Link>
                 <Link to="/search" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Search</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;