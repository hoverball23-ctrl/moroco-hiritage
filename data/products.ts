import { Product } from '../types';

export const products: Product[] = [
  {
    id: "1",
    slug: "premium-argan-oil",
    name: "Pure Argan Elixir",
    shortDesc: "The Liquid Gold of Morocco",
    longDesc: "Sourced directly from the sun-drenched groves of the Souss Valley, our Argan Elixir is cold-pressed by a cooperative of Berber women using centuries-old techniques. Rich in Vitamin E and essential fatty acids, this golden oil restores radiance to skin and hair. Packaged in UV-protective amber glass to preserve its potency.",
    price: 48.00,
    originalPrice: 65.00,
    currency: "USD",
    images: [
      "https://images.unsplash.com/photo-1629198774000-8339b36070a7?auto=format&fit=crop&w=1000&q=80", // Oil bottle macro
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&w=1000&q=80" // Oil texture
    ],
    category: "argan-oil",
    tags: ["organic", "fair-trade", "vegan", "sustainable", "luxury"],
    sku: "AR-001",
    weight: "50ml",
    origin: "Essaouira, Morocco",
    benefits: ["Intense Hydration", "Anti-Aging Properties", "Hair Repair", "Skin Barrier Support"],
    ingredients: ["100% Organic Argania Spinosa Kernel Oil"],
    inStock: true,
    rating: 5.0,
    reviewCount: 128,
    featured: true
  },
  {
    id: "2",
    slug: "saffron-threads-premium",
    name: "Royal Taliouine Saffron",
    shortDesc: "Grade A+ Negin Saffron",
    longDesc: "Harvested at dawn in the high altitudes of Taliouine, each stigma is hand-picked to ensure only the deepest red threads make it to your kitchen. Known as the 'Red Gold', our saffron possesses an intense aroma and a potent coloring power that elevates any culinary creation.",
    price: 32.00,
    currency: "USD",
    images: [
      "https://images.unsplash.com/photo-1608552787680-2646d299497d?auto=format&fit=crop&w=1000&q=80", // Saffron threads macro
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80" // Spices context
    ],
    category: "saffron",
    tags: ["organic", "premium", "hand-picked", "culinary"],
    sku: "SA-001",
    weight: "1g",
    origin: "Taliouine, Morocco",
    inStock: true,
    rating: 4.9,
    reviewCount: 84,
    featured: true
  },
  {
    id: "3",
    slug: "berber-honey-thyme",
    name: "Wild Thyme Honey",
    shortDesc: "Raw Atlas Mountain Honey",
    longDesc: "A rare monofloral honey collected by bees foraging on wild thyme in the pristine Middle Atlas Mountains. Its intense, herbal flavor profile and natural antibacterial properties make it a staple of traditional Berber wellness.",
    price: 28.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1000&q=80"], // Honey texture
    category: "honey",
    tags: ["raw", "organic", "wellness"],
    sku: "HO-001",
    weight: "250g",
    origin: "Middle Atlas, Morocco",
    inStock: true,
    rating: 4.8,
    reviewCount: 45,
    featured: false
  },
  {
    id: "4",
    slug: "zellige-coffee-set",
    name: "Fez Zellige Ceramics",
    shortDesc: "Hand-Painted Espresso Collection",
    longDesc: "Master potters in Fez create these exquisite pieces using clay from the local riverbeds. Each cup is hand-thrown, glazed, and painted with intricate geometric Zellige patterns that represent the infinite nature of the universe.",
    price: 95.00,
    currency: "USD",
    images: [
      "https://images.unsplash.com/photo-1590051978258-29367c336b2f?auto=format&fit=crop&w=1000&q=80", // Ceramics details
      "https://images.unsplash.com/photo-1574621946393-559d19567926?auto=format&fit=crop&w=1000&q=80" // Pottery context
    ],
    category: "ceramics",
    tags: ["handmade", "artisan", "home-decor"],
    sku: "CE-001",
    weight: "1.2kg",
    origin: "Fez, Morocco",
    inStock: true,
    rating: 5.0,
    reviewCount: 12,
    featured: true
  },
  {
    id: "5",
    slug: "rose-water-toner",
    name: "Dades Valley Rose Mist",
    shortDesc: "First Distillation Hydrosol",
    longDesc: "Captured from the Damask roses of the Valley of Roses, this pure hydrosol is a refreshing burst of hydration. Use it to tone skin, set makeup, or simply uplift your spirit with its delicate floral scent.",
    price: 35.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=1000&q=80"], // Rose water bottle
    category: "cosmetics",
    tags: ["organic", "vegan", "skincare"],
    sku: "CO-001",
    weight: "100ml",
    origin: "Kelaat M'Gouna, Morocco",
    inStock: true,
    rating: 4.7,
    reviewCount: 92,
    featured: false
  },
  {
    id: "6",
    slug: "leather-babouche-slippers",
    name: "Royal Leather Babouche",
    shortDesc: "Artisan Crafted Comfort",
    longDesc: "Soft, vegetable-tanned leather, hand-stitched by Marrakesh artisans. These traditional slippers offer modern comfort with a timeless silhouette, perfect for lounging in luxury.",
    price: 70.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=1000&q=80"], // Leather texture/product
    category: "crafts",
    tags: ["handmade", "leather", "fashion"],
    sku: "CR-001",
    weight: "800g",
    origin: "Marrakech, Morocco",
    inStock: true,
    rating: 4.6,
    reviewCount: 30,
    featured: false
  },
   {
    id: "10",
    slug: "prickly-pear-seed-oil",
    name: "Prickly Pear Youth Serum",
    shortDesc: "Nature's Most Powerful Anti-Aging Oil",
    longDesc: "The most precious oil in the world. It takes one ton of prickly pear fruit to produce just one liter of this oil. Unrivaled in Vitamin K and E, it brightens dark circles and restores elasticity overnight.",
    price: 85.00,
    currency: "USD",
    images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80"], // Serum bottle
    category: "cosmetics",
    tags: ["rare", "anti-aging", "luxury", "bestseller"],
    sku: "CO-004",
    weight: "30ml",
    origin: "Sidi Ifni, Morocco",
    inStock: false,
    rating: 4.9,
    reviewCount: 15,
    featured: true
  }
];

export const categories = [
  { 
    id: 'argan-oil', 
    name: 'Argan', 
    image: 'https://images.unsplash.com/photo-1549193231-c06d20385dfd?auto=format&fit=crop&w=800&q=80', // Desert/Argan tree vibe
    count: 8, 
    description: 'Liquid Gold' 
  },
  { 
    id: 'saffron', 
    name: 'Saffron', 
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80', // Spices/Market
    count: 5, 
    description: 'Red Gold' 
  },
  { 
    id: 'ceramics', 
    name: 'Ceramics', 
    image: 'https://images.unsplash.com/photo-1565193566173-0923d5379132?auto=format&fit=crop&w=800&q=80', // Ceramics/Tiles
    count: 12, 
    description: 'Fez Blue' 
  },
  { 
    id: 'cosmetics', 
    name: 'Rituals', 
    image: 'https://images.unsplash.com/photo-1571781565023-40f8d475240d?auto=format&fit=crop&w=800&q=80', // Spa/Ritual
    count: 15, 
    description: 'Hammam' 
  },
];