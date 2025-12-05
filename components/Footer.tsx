import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-display font-bold text-secondary mb-4">Atlas Heritage</h2>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              {t('common.footerText')}
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-neutral-400 hover:text-secondary transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/90">Shop</h3>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li><Link to="/shop" className="hover:text-secondary transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=argan" className="hover:text-secondary transition-colors">Argan Oil</Link></li>
              <li><Link to="/shop?category=ceramics" className="hover:text-secondary transition-colors">Ceramics</Link></li>
              <li><Link to="/shop?category=rugs" className="hover:text-secondary transition-colors">Berber Rugs</Link></li>
            </ul>
          </div>

          <div>
             <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/90">Company</h3>
             <ul className="space-y-3 text-sm text-neutral-300">
              <li><Link to="/about" className="hover:text-secondary transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="hover:text-secondary transition-colors">Sustainability</Link></li>
              <li><Link to="/journal" className="hover:text-secondary transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/90">Newsletter</h3>
            <p className="text-xs text-neutral-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-primary-dark border border-primary-light text-white px-4 py-2 rounded focus:outline-none focus:border-secondary transition-colors text-sm"
              />
              <button className="bg-secondary text-primary-dark font-bold py-2 rounded hover:bg-secondary-light transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Atlas Heritage. {t('common.rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;