import React from 'react';
import { ChefHat, MapPin, Phone, MessageSquare, Mail, Award, Clock } from 'lucide-react';
import { PHONE_NUMBER, DISPLAY_PHONE, LOCATION_ADDRESS } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact-section-footer" className="bg-stone-950 text-stone-300 border-t border-stone-800 relative overflow-hidden">
      {/* Decorative Gold Border Line */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-left">
              <div className="p-1.5 rounded-lg bg-amber-600 text-stone-950">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  Cravings
                </span>
                <span className="block text-[8px] font-semibold tracking-widest text-amber-500 uppercase leading-none">
                  Jubilee Hills
                </span>
              </div>
            </div>
            
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              An elite fine-dining venue where culinary passion merges with royal Hyderabadi heritage. Discover authentic spices, signature biryanis, and state-of-the-art visual desserts.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-900 border border-stone-800 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>1+ Year culinary leader</span>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase border-b border-stone-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'today-special', label: "Today's Special" },
                { id: 'our-foods', label: 'Our Foods' },
                { id: 'contact-us', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-amber-400 text-stone-400 transition-colors text-left font-medium cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase border-b border-stone-800 pb-2">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-xs text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Road No. 12, Jubilee Hills, Hyderabad, Telangana - 500033</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-amber-400 transition-colors font-semibold">
                  {DISPLAY_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:concierge@cravingsjubilee.com" className="hover:text-amber-400 transition-colors">
                  concierge@cravingsjubilee.com
                </a>
              </li>
            </ul>
          </div>

          {/* Timings / Operating Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase border-b border-stone-800 pb-2">
              Operating Hours
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-stone-200">Monday - Sunday</span>
                  <span className="block text-[11px] text-stone-400 font-light mt-0.5">
                    Lunch: 12:00 PM - 3:30 PM
                  </span>
                  <span className="block text-[11px] text-stone-400 font-light">
                    Dinner: 7:00 PM - 11:30 PM
                  </span>
                </div>
              </li>
              <li className="text-[10px] text-stone-500 leading-relaxed pt-1.5 border-t border-stone-900">
                Reservations are recommended for weekend dining. Valet parking is available on Road No. 12.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Cravings Restaurant. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={`https://wa.me/${PHONE_NUMBER.replace('+', '')}`} target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>Direct WhatsApp Desk</span>
            </a>
            <span>•</span>
            <span className="text-stone-400">Jubilee Hills, Hyderabad</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
