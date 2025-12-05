
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../lib/utils';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useCart();
  
  // Tilt Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      className="group relative perspective-1000"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative aspect-square bg-neutral-100 overflow-hidden mb-6 transition-all duration-300"
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          
          {/* Tags */}
          {product.featured && (
            <div className="absolute top-4 left-4 z-20">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-black/30 backdrop-blur-md px-3 py-1.5 border border-white/10">
                Signature
              </span>
            </div>
          )}

          {/* Hover Actions */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 flex flex-col gap-2">
             <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              disabled={!product.inStock}
              className="w-full bg-white text-primary font-bold py-3 uppercase tracking-widest text-xs hover:bg-secondary hover:text-white transition-colors shadow-lg"
            >
              {product.inStock ? 'Quick Add' : 'Sold Out'}
            </button>
          </div>
        </motion.div>

        <div className="text-center space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary">{product.category}</p>
          <h3 className="font-display text-xl text-primary group-hover:text-secondary transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-neutral-600">
             <span>{formatPrice(product.price, product.currency)}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
