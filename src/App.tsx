import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChefHat, Sparkles, Star, MapPin, Award, Phone, ShieldCheck, HeartHandshake } from 'lucide-react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import TodaySpecial from './components/TodaySpecial';
import OurFoods from './components/OurFoods';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import PopupForm from './components/PopupForm';
import Footer from './components/Footer';
import { PHONE_NUMBER, DISPLAY_PHONE } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  // Quick navigation handler from child components
  const handleExploreMenu = () => {
    setActiveTab('our-foods');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="cravings-app-root" className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans antialiased selection:bg-amber-600/20 selection:text-amber-900">
      
      {/* Sticky frosted-glass Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onCallNowClick={() => setIsPopupOpen(true)}
      />

      {/* Main Content Area with dynamic active page render */}
      <main className="pt-[72px] md:pt-[84px]">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              id="home-page-container"
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* 2-Slide Hero Slider */}
              <HeroSlider
                onBookClick={() => setIsPopupOpen(true)}
                onExploreMenuClick={handleExploreMenu}
              />

              {/* Welcoming fine-dining editorial section detailing 1+ Years of Experience */}
              <section id="about-intro-section" className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Visual Collage of our premium space */}
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
                        <img
                          src="/src/assets/images/hero_slide_2_1782360926598.jpg"
                          alt="Luxury Ambiance"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      {/* Floating Experience Badge */}
                      <div className="absolute -bottom-6 -right-6 md:right-6 bg-stone-950 text-white rounded-2xl p-5 border border-stone-800 shadow-2xl flex items-center gap-4 max-w-xs">
                        <div className="p-3 bg-amber-600 text-stone-950 rounded-xl font-bold font-serif text-3xl">
                          1+
                        </div>
                        <div>
                          <h4 className="font-serif text-base font-bold text-amber-400">Culinary Year</h4>
                          <p className="text-[11px] text-stone-400 leading-tight mt-0.5">Of pure gourmet leadership & satisfying cravings in Jubilee Hills.</p>
                        </div>
                      </div>
                    </div>

                    {/* About Content */}
                    <div className="space-y-6 lg:pl-6">
                      <div className="space-y-2">
                        <span className="text-xs font-semibold tracking-widest text-amber-700 uppercase flex items-center gap-1.5">
                          <Star className="w-4 h-4 text-amber-600 fill-current" />
                          Premium Fine Dining
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 leading-tight">
                          Where Gastronomy Meets Nizam Heritage
                        </h2>
                      </div>
                      
                      <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                        Located at <span className="font-semibold text-stone-900">Road No. 12, Jubilee Hills</span>, Cravings is a sanctuary for epicureans. Since early 2025, our mission has been simple: to create an immersive fine-dining setting where traditional spices are honored and elevated with modern gastronomic techniques.
                      </p>

                      <p className="text-stone-600 text-sm leading-relaxed font-light">
                        From the majestic fragrance of our slow-dum signature biryanis to the sensory delight of our signature desserts, every dish is a handcrafted love letter to gastronomy.
                      </p>

                      {/* Feature Checklist */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {[
                          { title: 'Five-Star Guest Concierge', desc: 'Personalized course adjustments' },
                          { title: 'Impeccable Sourcing', desc: '100% organic farm spices' },
                          { title: 'Valet Parking Available', desc: 'Secure space on Road No. 12' },
                          { title: 'Bespoke Private Events', desc: 'Luxury lounges for bookings' },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div className="p-1 rounded-full bg-amber-100 text-amber-800 mt-0.5">
                              <ShieldCheck className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-stone-900">{item.title}</h4>
                              <p className="text-[11px] text-stone-500">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 flex flex-wrap gap-4">
                        <button
                          id="about-reserve-btn"
                          onClick={() => setIsPopupOpen(true)}
                          className="px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold rounded-full text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
                        >
                          Book Experience
                        </button>
                        <button
                          id="about-view-menu-btn"
                          onClick={handleExploreMenu}
                          className="px-8 py-3.5 border border-stone-300 hover:border-amber-600 text-stone-800 hover:text-amber-700 font-bold rounded-full text-xs tracking-wider uppercase transition-all cursor-pointer"
                        >
                          View Full Menu
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Quick teaser section for Today's Specials */}
              <div className="bg-[#FAF7F2] py-8 border-y border-[#E9E1D3]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <span className="text-[10px] font-bold tracking-widest text-amber-700 uppercase">Limited Daily Batches</span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">Taste Today's Hand-Picked Special Culinary Masterpieces</h3>
                  </div>
                  <button
                    id="teaser-view-specials-btn"
                    onClick={() => {
                      setActiveTab('today-special');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs tracking-wider uppercase transition-colors shadow-md cursor-pointer whitespace-nowrap"
                  >
                    View Today's Specials
                  </button>
                </div>
              </div>

              {/* Bespoke Services Bento Section */}
              <Services />

              {/* Heartwarming Customer Review highlight */}
              <section id="testimonials-section" className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <span className="text-xs font-semibold tracking-widest text-amber-700 uppercase block">Patron Stories</span>
                  <h3 className="font-serif text-3xl font-black text-stone-900 mt-2">What Our Guests Savor</h3>
                  <div className="mt-3 h-0.5 w-16 bg-amber-600 mx-auto rounded-full mb-12" />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                      {
                        quote: "The Pathar ka Gosht is simply outstanding, cooking slow on stone is a lost art they've mastered. And having instant WhatsApp inquiry for their catering was so helpful for my husband's birthday banquet!",
                        author: "Sneha Reddy",
                        role: "Jubilee Hills Resident",
                        stars: 5,
                      },
                      {
                        quote: "Absolutely premium! The Cravings Signature Chicken Biryani lived up to its fame. Saffron aroma was perfect. Their reservation callback is extremely prompt - they called back within five minutes of requesting.",
                        author: "Rahul Verma",
                        role: "Tech Executive & Gourmet Diner",
                        stars: 5,
                      },
                      {
                        quote: "We hosted an anniversary family dinner for 20 guests. The bespoke tasting courses, clotted-cream Qubani dessert, and excellent valet coordination on Road 12 made it flawless.",
                        author: "Dr. Anirudh Sastry",
                        role: "Renowned Surgeon",
                        stars: 5,
                      },
                    ].map((tst, idx) => (
                      <div key={idx} className="bg-[#FAF7F2] p-6 md:p-8 rounded-2xl border border-[#E9E1D3] space-y-4 flex flex-col justify-between text-left relative">
                        <div className="space-y-3">
                          {/* Stars */}
                          <div className="flex items-center gap-0.5">
                            {[...Array(tst.stars)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                            ))}
                          </div>
                          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed italic font-light">
                            "{tst.quote}"
                          </p>
                        </div>
                        <div className="pt-4 border-t border-stone-200">
                          <h4 className="font-bold text-stone-900 text-sm">{tst.author}</h4>
                          <span className="text-[10px] text-stone-400 uppercase font-semibold tracking-wide">{tst.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Simple Bottom Trust Banner */}
              <section className="py-12 bg-stone-950 text-stone-300 border-t border-stone-900 text-center">
                <div className="max-w-3xl mx-auto px-4 space-y-4">
                  <HeartHandshake className="w-10 h-10 text-amber-500 mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-stone-100">Reserve Your Jubilee Hills Seat</h3>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                    Due to our high standard of ingredient sourcing, key signature courses have limited daily batches. Secure your table or place your request directly today.
                  </p>
                  <div className="pt-2">
                    <button
                      id="home-bottom-booking-btn"
                      onClick={() => setIsPopupOpen(true)}
                      className="px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full text-xs tracking-wider uppercase transition-all shadow-lg cursor-pointer"
                    >
                      Instant Table Booking
                    </button>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'today-special' && (
            <motion.div
              key="today-special"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <TodaySpecial onBookClick={() => setIsPopupOpen(true)} />
            </motion.div>
          )}

          {activeTab === 'our-foods' && (
            <motion.div
              key="our-foods"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <OurFoods />
            </motion.div>
          )}

          {activeTab === 'contact-us' && (
            <motion.div
              key="contact-us"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <ContactUs />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Persistent global styled Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Interactive Reservation Popup Form Modal */}
      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

    </div>
  );
}
