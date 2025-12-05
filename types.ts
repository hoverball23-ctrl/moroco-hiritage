export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  price: number;
  originalPrice?: number;
  currency: string;
  images: string[];
  category: string;
  tags: string[];
  sku: string;
  weight: string;
  origin: string;
  ingredients?: string[];
  benefits?: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  featured: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = {
  id: string;
  name: string;
  image: string;
  description: string;
  count: number;
};