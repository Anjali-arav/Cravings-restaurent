import { FoodItem, ServiceItem, SlideItem } from './types';

export const PHONE_NUMBER = '+918919449475';
export const DISPLAY_PHONE = '+91 89194 49475';
export const LOCATION_ADDRESS = 'Road No. 12, Jubilee Hills, Hyderabad, Telangana, India';
export const LOCATION_GOOGLE_MAP_LINK = 'https://maps.google.com/?q=Road+No.+12,+Jubilee+Hills,+Hyderabad';

export const slides: SlideItem[] = [
  {
    id: 'slide-1',
    title: 'Savor the Craft of Fine Dining',
    subtitle: 'Embark on a culinary journey where centuries-old Nizami traditions blend with modern gourmet styling, curated by our master chefs.',
    image: '/src/assets/images/hero_slide_1_1782360906510.jpg',
    badge: 'CULINARY EXCELLENCE',
    ctaText: 'Explore Menu',
    ctaSection: 'our-foods',
  },
  {
    id: 'slide-2',
    title: 'Where Ambiance Meets Exquisite Taste',
    subtitle: 'Experience dining crafted for memorable moments. Nestled in the heart of Jubilee Hills, offering an atmosphere as enchanting as our dishes.',
    image: '/src/assets/images/hero_slide_2_1782360926598.jpg',
    badge: 'LUXURY AMBIANCE',
    ctaText: 'Book A Table',
    ctaSection: 'book-table-trigger', // triggers popup
  },
];

export const services: ServiceItem[] = [
  {
    id: 'service-dine-in',
    title: 'Imperial Dine-In',
    description: 'Experience true luxury table service. Enjoy custom wine pairings, beautiful plate presentations, and a cozy contemporary ambiance curated for discerning guests.',
    icon: 'Utensils',
    whatsappMessage: 'Hi Cravings! I would like to book an Imperial Dine-In table at your Jubilee Hills restaurant.',
  },
  {
    id: 'service-catering',
    title: 'Gourmet Catering',
    description: 'Bring the signature Cravings culinary art to your wedding, anniversary, corporate dinner, or private gala. Fully customized live-counter menus.',
    icon: 'Sparkles',
    whatsappMessage: 'Hi Cravings! I am interested in inquiring about Gourmet Catering services for an upcoming event.',
  },
  {
    id: 'service-private-events',
    title: 'Private Celebrations',
    description: 'Host private birthdays, cocktail parties, or corporate discussions in our exclusive lounge, featuring curated tasting courses.',
    icon: 'GlassWater',
    whatsappMessage: 'Hi Cravings! I would love to get details on hosting a private celebration/event at your Jubilee Hills branch.',
  },
  {
    id: 'service-home-delivery',
    title: 'Express Doorstep Delivery',
    description: 'Bring the five-star restaurant experience directly to your dining table with premium heat-sealed packaging, retaining optimal heat and aroma.',
    icon: 'Truck',
    whatsappMessage: 'Hi Cravings! I would like to order signature food for express delivery to my home.',
  },
];

export const foodItems: FoodItem[] = [
  // STARTERS
  {
    id: 'starter-paneer-tikka',
    name: 'Zafrani Paneer Tikka',
    description: 'Creamy cottage cheese cubes marinated in organic saffron, greek yogurt, and fresh yellow spices, charred elegantly in our signature clay tandoor.',
    price: 380,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=600',
    tags: ['Best Seller', 'Vegetarian'],
    spicyLevel: 1,
  },
  {
    id: 'starter-pathar-gosht',
    name: 'Royal Pathar ka Gosht',
    description: 'A legendary Hyderabadi heritage specialty: ultra-tender mutton medallions marinated overnight with spices, cooked slow-seared on a hot granite stone.',
    price: 520,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=600',
    tags: ['Must Try', 'Chef Special'],
    spicyLevel: 2,
  },
  {
    id: 'starter-malai-broccoli',
    name: 'Tandoori Malai Broccoli',
    description: 'Fresh crisp broccoli florets smothered in our secret royal cardamom cream cheese marinade, roasted lightly with a gentle smokiness.',
    price: 340,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600',
    tags: ['Healthy', 'Vegetarian'],
    spicyLevel: 0,
  },
  // MAINS
  {
    id: 'main-chicken-biryani',
    name: 'Cravings Signature Chicken Biryani',
    description: 'The crowning jewel of our menu. Fragrant long-grain basmati rice layered with juicy tender chicken, saffron, mint leaves, and pure ghee, slow-cooked in traditional clay Handi dum.',
    price: 490,
    category: 'mains',
    image: '/src/assets/images/food_special_biryani_1782360943284.jpg',
    isTodaySpecial: true,
    tags: ['Award Winner', 'Signature'],
    spicyLevel: 2,
  },
  {
    id: 'main-dum-ka-murgh',
    name: 'Nizami Dum ka Murgh',
    description: 'A luscious chicken curry simmered slowly in an extremely rich paste of roasted cashews, almonds, poppy seeds, and golden fried onions, finished with rose water.',
    price: 460,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600',
    tags: ['Rich Classic'],
    spicyLevel: 1,
  },
  {
    id: 'main-paneer-korma',
    name: 'Shahi Paneer Korma',
    description: 'Silky cubes of cottage cheese simmered in a mild velvet-smooth white gravy flavored with cardamom, mace, and pure organic saffron.',
    price: 420,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian', 'Royal Favor'],
    spicyLevel: 1,
  },
  // DESSERTS
  {
    id: 'dessert-lava-melt',
    name: 'Double Chocolate Lava Melt',
    description: 'Warm artisanal dark chocolate cake with a rich molten chocolate center, served with a scoop of high-end Madagascar vanilla bean gelato and seasonal sugar-glazed berries.',
    price: 320,
    category: 'desserts',
    image: '/src/assets/images/food_dessert_1782360964144.jpg',
    isTodaySpecial: true,
    tags: ['Gourmet', 'Indulgent'],
    spicyLevel: 0,
  },
  {
    id: 'dessert-qubani-meetha',
    name: 'Qubani ka Meetha with Malai',
    description: 'The ultimate Hyderabadi dessert: rich, slow-simmered dried Turkish apricots infused with rose syrup, served with fresh clotted cream and crushed apricot kernels.',
    price: 290,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?auto=format&fit=crop&q=80&w=600',
    tags: ['Traditional Special'],
    spicyLevel: 0,
  },
  {
    id: 'dessert-shahi-tukda',
    name: 'Saffron Shahi Tukda',
    description: 'Golden crispy pan-fried bread slices soaked in a cardamom-infused organic syrup, dressed in ultra-thick saffron-reduced rabri and pure silver vark.',
    price: 280,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600',
    tags: ['Sweet Heritage'],
    spicyLevel: 0,
  },
  // BEVERAGES
  {
    id: 'bev-kesar-lassi',
    name: 'Royal Kesar Lassi',
    description: 'Thick churned creamy sweet yogurt infused with hand-picked Kashmiri saffron threads, served chilled in a traditional clay Kulhad, topped with almond flakes.',
    price: 180,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600',
    tags: ['Refreshing'],
    spicyLevel: 0,
  },
  {
    id: 'bev-irani-chai',
    name: 'Jubilee Special Irani Chai',
    description: 'Strong, intensely brewed rich black tea layered slowly with creamy condensed milk, slow-simmered on a traditional coal deck.',
    price: 90,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600',
    tags: ['Legendary Local'],
    spicyLevel: 0,
  },
  {
    id: 'bev-mint-cooler',
    name: 'Fresh Mint & Cucumber Cooler',
    description: 'Muddled garden-fresh mint, cooling cucumber slices, fresh-squeezed Key lime juice, a hint of black salt, and sparkling soda over crushed ice.',
    price: 160,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    tags: ['Detox', 'Chilled'],
    spicyLevel: 0,
  }
];
