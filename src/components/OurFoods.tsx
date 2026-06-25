import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MessageSquare, Flame, Filter, HelpCircle, AlertCircle, Heart } from 'lucide-react';
import { foodItems, PHONE_NUMBER } from '../data';
import { FoodItem } from '../types';

export default function OurFoods() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'starters' | 'mains' | 'desserts' | 'beverages'>('all');
  const [spiceFilter, setSpiceFilter] = useState<number | 'all'>('all');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'beverages', label: 'Beverages' },
  ];

  const handleOrderWhatsApp = (dish: FoodItem) => {
    const text = `Hi Cravings! I want to order the following from your "Our Foods" menu:\n- ${dish.name} (₹${dish.price})\n\nPlease confirm availability and delivery terms. Thank you!`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=${encodedText}`, '_blank');
  };

  const filteredFoods = useMemo(() => {
    return foodItems.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
      
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSpice = spiceFilter === 'all' || item.spicyLevel === spiceFilter;

      return matchesSearch && matchesCategory && matchesSpice;
    });
  }, [searchTerm, activeCategory, spiceFilter]);

  return (
    <section id="our-foods-section" className="py-12 md:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
            The Royal Recipe Vault
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            Explore Our Curated Menu
          </h2>
          <div className="mt-3 h-1 w-20 bg-amber-600 mx-auto rounded-full" />
          <p className="mt-4 text-stone-600 text-sm md:text-base font-light">
            Indulge in our exquisite assortment of authentic and global gastronomy, prepared fresh with artisanal techniques and high-quality spices.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="bg-white rounded-2xl border border-[#E9E1D3] p-4 md:p-6 shadow-sm mb-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-stone-400" />
              <input
                id="food-search-input"
                type="text"
                placeholder="Search Biryani, Tandoori, Korma, Desserts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3.5 pl-11 pr-4 bg-stone-50 border border-[#E9E1D3] rounded-xl text-stone-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
              />
            </div>

            {/* Spice Filter Select */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-stone-600 flex items-center gap-1.5 whitespace-nowrap">
                <Filter className="w-4 h-4 text-amber-700" />
                Spice Level:
              </span>
              <div className="flex bg-stone-100 rounded-lg p-1 border border-stone-200">
                {(['all', 0, 1, 2] as const).map((level) => (
                  <button
                    id={`spice-level-btn-${level}`}
                    key={level}
                    onClick={() => setSpiceFilter(level === 'all' ? 'all' : Number(level))}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                      spiceFilter === level
                        ? 'bg-amber-600 text-white shadow'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {level === 'all' ? 'All' : level === 0 ? 'Mild' : level === 1 ? 'Medium' : 'Spicy'}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-stone-100 pt-5">
            {categories.map((cat) => (
              <button
                id={`category-tab-btn-${cat.id}`}
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-stone-950 text-amber-400 shadow-md'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="popLayout">
          {filteredFoods.length > 0 ? (
            <motion.div
              id="foods-grid-container"
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
            >
              {filteredFoods.map((dish) => (
                <motion.div
                  id={`food-card-${dish.id}`}
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E9E1D3] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  {/* Card Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    {dish.isTodaySpecial && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-amber-600 text-white text-[9px] font-bold tracking-widest uppercase rounded-full shadow-sm">
                        Today's Special
                      </span>
                    )}

                    {/* Tags */}
                    {dish.tags && dish.tags.length > 0 && (
                      <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                        {dish.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-stone-900/70 text-amber-300 text-[8px] font-semibold uppercase tracking-wider rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold tracking-widest text-amber-700 uppercase">
                          {dish.category}
                        </span>
                        
                        {/* Spice indicator */}
                        {dish.spicyLevel !== undefined && dish.spicyLevel > 0 && (
                          <div className="flex items-center gap-0.5" title={`Spice Level: ${dish.spicyLevel}`}>
                            {[...Array(dish.spicyLevel)].map((_, i) => (
                              <Flame key={i} className="w-3.5 h-3.5 text-red-500 fill-current" />
                            ))}
                          </div>
                        )}
                      </div>

                      <h3 className="mt-1.5 font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                        {dish.name}
                      </h3>

                      <p className="mt-2 text-stone-600 text-xs leading-relaxed font-light line-clamp-2">
                        {dish.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-400 block font-semibold uppercase tracking-wider leading-none">Price</span>
                        <span className="text-xl font-serif font-black text-stone-900 mt-1 block">
                          ₹{dish.price}
                        </span>
                      </div>

                      <button
                        id={`order-wa-${dish.id}`}
                        onClick={() => handleOrderWhatsApp(dish)}
                        className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 fill-current" />
                        <span>Order Now</span>
                      </button>
                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              id="empty-search-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 px-4 max-w-md mx-auto bg-white rounded-2xl border border-[#E9E1D3]"
            >
              <AlertCircle className="w-12 h-12 text-stone-400 mx-auto" />
              <h3 className="mt-4 font-serif text-xl font-bold text-stone-900">No Food Items Found</h3>
              <p className="mt-2 text-stone-500 text-sm">
                We couldn't find any dishes matching "{searchTerm}" or selected spice filters. Try exploring other delicious categories!
              </p>
              <button
                id="reset-search-btn"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                  setSpiceFilter('all');
                }}
                className="mt-5 py-2 px-5 bg-amber-600 hover:bg-amber-700 text-white rounded-full text-xs font-bold tracking-wide transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Note Banner */}
        <div className="mt-16 text-center text-xs text-stone-500 max-w-xl mx-auto border-t border-[#E9E1D3] pt-6">
          <p>
            * All ingredients are sourced organic from farmers in the Deccan region. Price is exclusive of GST. Dine-in reserves high quality customized plates. Contact our desk for ingredient-level allergies.
          </p>
        </div>

      </div>
    </section>
  );
}
