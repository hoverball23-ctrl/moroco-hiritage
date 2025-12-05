import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = 'USD', locale: string = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(price);
}

export const generatePlaceholder = (width: number, height: number, text?: string) => {
  // Using picsum.photos for consistent, nice placeholders
  // Adding random query param to ensure uniqueness if needed, but keeping static for stability here
  return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 100)}`;
};