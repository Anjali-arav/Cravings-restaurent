import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChefHat, MessageSquare } from 'lucide-react';
import { DISPLAY_PHONE, PHONE_NUMBER } from '../data';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onCallNowClick: () => void;
}

export default function Header({ activeTab, setActiveTab, onCallNowClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home Page' },
    { id: 'today-special', label: "Today's Special" },
    { id: 'our-foods', label: 'Our Foods' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    // Smooth scroll to top of window when switching pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-md border-b border-[#E9E1D3] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            id="header-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          >
            <div className="p-2 rounded-xl bg-amber-600 text-white group-hover:bg-amber-700 transition-colors">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-2xl font-black tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
                Cravings
              </span>
              <span className="block text-[9px] font-semibold tracking-widest text-amber-700 uppercase leading-none">
                Jubilee Hills
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer ${
                  activeTab === item.id
                    ? 'text-amber-700 font-bold'
                    : 'text-stone-700 hover:text-amber-700'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Call Now / Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              id="header-whatsapp-quick"
              href={`https://wa.me/${PHONE_NUMBER.replace('+', '')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 px-3 py-1.5 rounded-full border border-emerald-200 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>
            
            <button
              id="header-call-now-btn"
              onClick={onCallNowClick}
              className="relative overflow-hidden group py-2 px-5 bg-stone-950 hover:bg-stone-800 text-amber-400 hover:text-amber-300 rounded-full font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600/10 to-transparent scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call Now</span>
            </button>
          </div>

          {/* Mobile menu and CTA button for md screens */}
          <div className="flex items-center gap-3 md:gap-4 lg:hidden">
            <button
              id="mobile-header-call-btn"
              onClick={onCallNowClick}
              className="p-2 bg-stone-900 text-amber-400 hover:text-amber-300 rounded-full shadow-md cursor-pointer flex items-center justify-center"
              title="Call Now / Reserve Table"
            >
              <Phone className="w-4.5 h-4.5" />
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-200/50 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="absolute top-full left-0 right-0 bg-[#FAF7F2] border-b border-[#E9E1D3] shadow-xl md:hidden overflow-hidden py-4 px-6 space-y-4">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                id={`mobile-nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === item.id
                    ? 'bg-amber-100/50 text-amber-800'
                    : 'text-stone-700 hover:bg-stone-100 hover:text-amber-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
            <button
              id="mobile-drawer-call-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onCallNowClick();
              }}
              className="w-full py-3 bg-stone-900 text-amber-400 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Request Callback / Table</span>
            </button>

            <a
              id="mobile-drawer-whatsapp-link"
              href={`https://wa.me/${PHONE_NUMBER.replace('+', '')}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Reservation</span>
            </a>
            
            <div className="text-center text-[11px] text-stone-500 font-medium">
              Concierge Line: <span className="font-semibold text-stone-700">{DISPLAY_PHONE}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
