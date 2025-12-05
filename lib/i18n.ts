import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      common: {
        home: "Home",
        shop: "Shop",
        about: "Our Story",
        cart: "Cart",
        search: "Search products...",
        addToCart: "Add to Cart",
        outOfStock: "Sold Out",
        discover: "Discover Collection",
        featured: "Editor's Selection",
        footerText: "Crafted with centuries-old tradition, perfected for modern life.",
        rights: "All rights reserved.",
        checkout: "Proceed to Checkout",
        total: "Total",
        subtotal: "Subtotal",
        shipping: "Shipping",
        free: "Free",
      },
      categories: {
        argan: "Argan Oil",
        saffron: "Saffron",
        honey: "Artisan Honey",
        ceramics: "Ceramics",
        cosmetics: "Natural Cosmetics",
        crafts: "Artisan Crafts"
      }
    }
  },
  fr: {
    translation: {
      common: {
        home: "Accueil",
        shop: "Boutique",
        about: "Notre Histoire",
        cart: "Panier",
        search: "Rechercher...",
        addToCart: "Ajouter au panier",
        outOfStock: "Épuisé",
        discover: "Découvrir la Collection",
        featured: "Sélection de l'éditeur",
        footerText: "Fabriqué avec des traditions séculaires, perfectionné pour la vie moderne.",
        rights: "Tous droits réservés.",
        checkout: "Passer à la caisse",
        total: "Total",
        subtotal: "Sous-total",
        shipping: "Livraison",
        free: "Gratuit",
      },
      categories: {
        argan: "Huile d'Argan",
        saffron: "Safran",
        honey: "Miel Artisanal",
        ceramics: "Céramique",
        cosmetics: "Cosmétiques Naturels",
        crafts: "Artisanat"
      }
    }
  },
  ar: {
    translation: {
      common: {
        home: "الرئيسية",
        shop: "المتجر",
        about: "قصتنا",
        cart: "عربة التسوق",
        search: "بحث...",
        addToCart: "أضف إلى السلة",
        outOfStock: "نفذت الكمية",
        discover: "اكتشف المجموعة",
        featured: "مختارات المحرر",
        footerText: "مصنوع بتقاليد عمرها قرون، مكتمل للحياة الحديثة.",
        rights: "جميع الحقوق محفوظة.",
        checkout: "إتمام الشراء",
        total: "المجموع",
        subtotal: "المجموع الفرعي",
        shipping: "الشحن",
        free: "مجاني",
      },
      categories: {
        argan: "زيت الأركان",
        saffron: "الزعفران",
        honey: "عسل حرفي",
        ceramics: "السيراميك",
        cosmetics: "مستحضرات تجميل",
        crafts: "الحرف اليدوية"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;