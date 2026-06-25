import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CalendarDays, Compass } from 'lucide-react';
import { slides } from '../data';

interface HeroSliderProps {
  onBookClick: () => void;
  onExploreMenuClick: () => void;
}

export default function HeroSlider({ onBookClick, onExploreMenuClick }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.8, ease: 'easeOut' },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    }),
  };

  return (
    <div id="hero-slider-container" className="relative h-[85vh] min-h-[500px] md:h-[90vh] bg-stone-950 overflow-hidden w-full">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          id={`hero-slide-wrapper-${current}`}
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with elegant overlay */}
          <div className="absolute inset-0">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-[8000ms] ease-out-quad"
              referrerPolicy="no-referrer"
            />
            {/* Dark sophisticated vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/20" />
          </div>

          {/* Slide Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl text-left space-y-4 md:space-y-6">
                
                {/* Badge Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  {slides[current].badge}
                </motion.div>

                {/* Animated Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-stone-50 leading-[1.1] tracking-tight"
                >
                  {slides[current].title}
                </motion.h1>

                {/* Animated Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base sm:text-lg md:text-xl text-stone-300 leading-relaxed font-sans font-light"
                >
                  {slides[current].subtitle}
                </motion.p>

                {/* Animated CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  {slides[current].ctaSection === 'book-table-trigger' ? (
                    <button
                      id="hero-book-btn"
                      onClick={onBookClick}
                      className="px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full text-sm shadow-xl hover:shadow-amber-900/30 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                    >
                      <CalendarDays className="w-4.5 h-4.5 group-hover:rotate-12 transition-transform" />
                      <span>{slides[current].ctaText}</span>
                    </button>
                  ) : (
                    <button
                      id="hero-explore-btn"
                      onClick={onExploreMenuClick}
                      className="px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full text-sm shadow-xl hover:shadow-amber-900/30 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                    >
                      <Compass className="w-4.5 h-4.5 group-hover:spin transition-all" />
                      <span>{slides[current].ctaText}</span>
                    </button>
                  )}
                  
                  <button
                    id="hero-secondary-contact-btn"
                    onClick={() => {
                      const el = document.getElementById('contact-section-footer');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        // fallback - triggers call modal
                        onBookClick();
                      }
                    }}
                    className="px-8 py-3.5 border border-stone-400 hover:border-amber-400 text-stone-200 hover:text-amber-400 font-bold rounded-full text-sm transition-all duration-300 backdrop-blur-sm cursor-pointer"
                  >
                    Locate Us
                  </button>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev Navigation Button */}
      <button
        id="slider-prev-btn"
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/40 hover:bg-amber-600 text-white border border-stone-800/50 hover:border-amber-500 transition-all duration-300 backdrop-blur-sm z-30 cursor-pointer hidden md:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation Button */}
      <button
        id="slider-next-btn"
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/40 hover:bg-amber-600 text-white border border-stone-800/50 hover:border-amber-500 transition-all duration-300 backdrop-blur-sm z-30 cursor-pointer hidden md:block"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Manual Navigation Dots */}
      <div id="slider-dots-container" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        {slides.map((slide, idx) => (
          <button
            id={`slider-dot-${idx}`}
            key={slide.id}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              current === idx
                ? 'w-10 h-2 bg-amber-500'
                : 'w-2 h-2 bg-stone-500 hover:bg-stone-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Decorative Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#FAF7F2] rounded-t-[32px] z-20" />
    </div>
  );
}
