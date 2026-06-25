import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Flame, Star, Sparkles, UtensilsCrossed } from 'lucide-react';
import { foodItems, PHONE_NUMBER } from '../data';

interface TodaySpecialProps {
  onBookClick: () => void;
}

export default function TodaySpecial({ onBookClick }: TodaySpecialProps) {
  // Filter for today's specials
  const specials = foodItems.filter(item => item.isTodaySpecial);

  const handleOrderWhatsApp = (itemName: string, price: number) => {
    const text = `Hi Cravings! I noticed your "Today's Special" on the website and would love to order/inquire about:\n- ${itemName} (₹${price})\n\nPlease let me know availability. Thank you!`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="today-specials-section" className="py-12 md:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with premium alignment */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-700 uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
            Curated Culinary Art
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            Today’s Handcrafted Specials
          </h2>
          <div className="mt-3 h-1 w-20 bg-amber-600 mx-auto rounded-full" />
          <p className="mt-4 text-stone-600 text-sm md:text-base font-light leading-relaxed">
            Every day, our master culinary artists select the finest seasonal ingredients to craft signature dishes that push the boundaries of texture and flavor. Discover today's masterpieces.
          </p>
        </div>

        {/* Specials Spotlight Layout */}
        <div id="specials-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {specials.map((dish, index) => (
            <motion.div
              id={`special-card-${dish.id}`}
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-[#E9E1D3] transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[250px] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-stone-900/10" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3 py-1 bg-amber-600 text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-sm flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Today's Star
                  </span>
                  {dish.tags?.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 bg-stone-900/85 text-[#F59E0B] text-[9px] font-bold tracking-wider uppercase rounded-md shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text Information Section */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold tracking-widest text-amber-700 uppercase">
                      {dish.category}
                    </span>
                    
                    {/* Spicy Level Indicator */}
                    {dish.spicyLevel !== undefined && dish.spicyLevel > 0 && (
                      <div className="flex items-center gap-0.5" title={`Spiciness: ${dish.spicyLevel}/3`}>
                        {[...Array(dish.spicyLevel)].map((_, i) => (
                          <Flame key={i} className="w-4.5 h-4.5 text-red-600 fill-current" />
                        ))}
                      </div>
                    )}
                  </div>

                  <h3 className="mt-2 font-serif text-2xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {dish.name}
                  </h3>

                  <p className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                    {dish.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Price Block */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-stone-500 text-xs font-medium">Special Price:</span>
                    <span className="text-2xl font-serif font-black text-stone-900">
                      ₹{dish.price}
                    </span>
                    <span className="text-stone-400 text-xs line-through">
                      ₹{Math.round(dish.price * 1.25)}
                    </span>
                  </div>

                  {/* Actions (WhatsApp & Table Booking) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      id={`order-special-wa-${dish.id}`}
                      onClick={() => handleOrderWhatsApp(dish.name, dish.price)}
                      className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Order on WhatsApp</span>
                    </button>

                    <button
                      id={`book-special-table-${dish.id}`}
                      onClick={onBookClick}
                      className="w-full py-2.5 px-4 border border-stone-300 hover:border-amber-600 text-stone-800 hover:text-amber-700 hover:bg-amber-500/5 rounded-xl text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <UtensilsCrossed className="w-3.5 h-3.5" />
                      <span>Reserve Table</span>
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Elegant Bottom CTA Block */}
        <motion.div
          id="specials-banner"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 p-8 md:p-12 rounded-3xl bg-stone-950 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-stone-800 shadow-2xl"
        >
          {/* Subtle gold sparks background layer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(180,83,9,0.15),transparent_60%)]" />
          
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              1+ Years of Royal Hospitality
            </span>
            <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-stone-50 leading-tight">
              Enjoying an Anniversary Celebration?
            </h3>
            <p className="mt-3 text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
              We started our culinary journey with a passion to bring true taste to Road No. 12, Jubilee Hills. Ask our culinary concierge for curated tasting courses and custom off-menu drinks.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              id="specials-promo-callback-btn"
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full text-xs tracking-wider uppercase transition-all duration-300 shadow-lg text-center cursor-pointer"
            >
              Request Imperial Table
            </button>
            <a
              id="specials-promo-wa-btn"
              href={`https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=Hi%20Cravings!%20I'm%20planning%20a%20special%20dinner%20and%20would%20love%20to%20know%20your%20specials.`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-stone-700 hover:border-amber-500 text-stone-300 hover:text-amber-400 font-bold rounded-full text-xs tracking-wider uppercase transition-all text-center flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4.5 h-4.5 text-emerald-500" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
