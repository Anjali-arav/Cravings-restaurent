export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'beverages';
  image: string;
  isTodaySpecial?: boolean;
  tags?: string[];
  spicyLevel?: 0 | 1 | 2 | 3;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  whatsappMessage: string;
}

export interface SlideItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  ctaText: string;
  ctaSection: string;
}
