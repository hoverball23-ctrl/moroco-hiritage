import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MapPin, Play } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  
  const heroParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textParallax = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div ref={scrollRef} className="w-full overflow-hidden bg-tadelakt">
      
      {/* SECTION 1: CINEMATIC HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroParallax }} className="absolute inset-0 z-0">
          {/* Using a high-quality macro video/image replacement */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1547619292-240402b5ae5d?auto=format&fit=crop&w=2000&q=80" 
            alt="Moroccan Texture" 
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>

        <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <span className="block text-secondary uppercase tracking-[0.4em] text-xs md:text-sm mb-8 font-bold animate-fade-in">
              The Moroccan Essence, Reimagined
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-white mb-10 leading-[0.9] tracking-tight">
              Crafted by <span className="italic font-light">Nature.</span> <br />
              Perfected by <span className="italic font-light">Morocco.</span>
            </h1>
            <div className="flex flex-col items-center gap-8">
               <Link 
                to="/shop" 
                className="group relative inline-flex items-center px-12 py-5 overflow-hidden text-sm font-bold text-white uppercase tracking-widest border border-white/30 hover:bg-white hover:text-primary transition-all duration-500"
              >
                <span className="relative z-10">Shop the Collection</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
          <span className="text-[9px] uppercase tracking-widest text-white/70">Scroll</span>
        </motion.div>
      </section>

      {/* SECTION 2: OUR SIGNATURE WORLDS (CATEGORIES) */}
      <section className="py-32 bg-tadelakt">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="mb-20 text-center">
            <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-4 block">Collections</span>
            <h2 className="text-5xl md:text-6xl font-display font-medium text-primary">Our Signature Worlds</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[80vh] md:h-[60vh]">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="group relative h-full overflow-hidden cursor-pointer bg-neutral-200"
              >
                <Link to={`/shop?category=${cat.id}`} className="block w-full h-full">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  />
                  
                  {/* Mask Reveal Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                     <div className="overflow-hidden">
                        <span className="block text-secondary text-xs font-bold uppercase tracking-widest mb-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          {cat.description}
                        </span>
                     </div>
                     <div className="overflow-hidden">
                        <h3 className="text-4xl font-display text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          {cat.name}
                        </h3>
                     </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE MOROCCAN CRAFT (STORY) */}
      <section className="relative py-40 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
           >
              <div className="aspect-[4/5] relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1590490533423-356c944116d4?auto=format&fit=crop&w=1200&q=80" alt="Hands" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                 <div className="absolute bottom-8 left-8">
                    <p className="font-display text-3xl italic">"Hands that shape history."</p>
                 </div>
              </div>
           </motion.div>
           
           <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-6 block">The Craft</span>
                <h2 className="text-5xl md:text-7xl font-display mb-10 leading-none">
                  Harvested by <br /> Tradition.
                </h2>
                <div className="space-y-8 text-lg font-light text-neutral-300 leading-relaxed max-w-lg">
                  <p>
                    From the sun-baked clay of Fez to the Argan groves of Essaouira, our collection is a curation of Morocco's living heritage.
                  </p>
                  <p>
                    We don't just source products; we preserve rituals. Every jar, every thread, every tile tells a story of patience, skill, and the relentless pursuit of perfection.
                  </p>
                </div>
                <div className="mt-12">
                   <Link to="/about" className="text-white border-b border-secondary pb-1 hover:text-secondary transition-colors uppercase tracking-widest text-xs font-bold">Read the Full Story</Link>
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PRODUCTS */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-4 block">Curated Selection</span>
              <h2 className="text-4xl md:text-5xl font-display text-primary">Featured Artifacts</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:text-secondary transition-colors">
               View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {featuredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: BEHIND EVERY DROP (ORIGIN) */}
      <section className="py-32 bg-tadelakt">
         <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white overflow-hidden shadow-2xl">
               <div className="lg:col-span-7 relative min-h-[500px]">
                  <img src="https://images.unsplash.com/photo-1547402800-94d380f78c43?auto=format&fit=crop&w=1500&q=80" alt="Landscape" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
               </div>
               <div className="lg:col-span-5 p-12 lg:p-20 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-secondary mb-6">
                     <MapPin size={16} />
                     <span className="text-xs font-bold uppercase tracking-widest">Souss Valley, Morocco</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display text-primary mb-8">Behind Every Drop</h2>
                  <p className="text-neutral-600 font-light leading-relaxed mb-8">
                    Our Argan oil is traceable to the exact cooperative where the nuts were gathered. 
                    We believe in radical transparency and honoring the land that provides these treasures.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 border-t border-neutral-100 pt-8">
                     <div>
                        <span className="block text-3xl font-display text-primary mb-1">100%</span>
                        <span className="text-xs uppercase tracking-widest text-neutral-400">Pure Organic</span>
                     </div>
                     <div>
                        <span className="block text-3xl font-display text-primary mb-1">12</span>
                        <span className="text-xs uppercase tracking-widest text-neutral-400">Cooperatives</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-32 bg-primary text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12">
               <span className="text-secondary text-5xl font-display">"</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display leading-tight mb-12">
               "Atlas Heritage is not just a brand; it's a sensory journey. The saffron transforms my cooking, and the ceramics are pure art."
            </h2>
            <div className="flex flex-col items-center gap-2">
               <span className="font-bold uppercase tracking-widest text-sm">Isabella Rossi</span>
               <span className="text-secondary text-xs uppercase tracking-widest">Verified Buyer</span>
            </div>
         </div>
      </section>

      {/* SECTION 7: NEWSLETTER */}
      <section className="py-32 bg-tadelakt">
         <div className="max-w-xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-display text-primary mb-6">Join the Circle</h2>
            <p className="text-neutral-500 mb-10 font-light">
               Receive exclusive access to limited harvests, new artisan partnerships, and cultural stories.
            </p>
            <div className="relative group">
               <input 
                 type="email" 
                 placeholder="Email Address" 
                 className="w-full bg-transparent border-b border-neutral-300 py-4 text-center text-primary placeholder:text-neutral-400 focus:outline-none focus:border-secondary transition-colors"
               />
               <button className="absolute right-0 top-0 bottom-0 text-primary font-bold uppercase tracking-widest text-xs hover:text-secondary transition-colors">
                  Join
               </button>
               <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-700 group-focus-within:w-full" />
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;