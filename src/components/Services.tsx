import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { services, PHONE_NUMBER } from '../data';
import { ServiceItem } from '../types';

export default function Services() {
  const handleServiceWhatsApp = (service: ServiceItem) => {
    const encodedText = encodeURIComponent(service.whatsappMessage);
    window.open(`https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="services-section" className="py-12 md:py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(217,119,6,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(180,83,9,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase">
            Exquisite Offerings
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-50 leading-tight">
            Our Bespoke Services
          </h2>
          <div className="mt-3 h-1 w-20 bg-amber-500 mx-auto rounded-full" />
          <p className="mt-4 text-stone-400 text-sm md:text-base font-light">
            Whether dining in our majestic Jubilee Hills hall, hosting an elite corporate event, or savoring hot gourmet food at home, our standards of royal hospitality remain immaculate.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((srv, index) => {
            // Dynamically select the icon from lucide-react
            const IconComponent = (Icons as any)[srv.icon] || Icons.Sparkles;

            return (
              <motion.div
                id={`service-card-${srv.id}`}
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-stone-950/80 rounded-2xl p-6 md:p-8 border border-stone-800 flex flex-col justify-between space-y-6 hover:border-amber-600/50 hover:bg-stone-950 transition-all duration-300 group shadow-md"
              >
                <div className="space-y-4">
                  {/* Icon Frame */}
                  <div className="p-3.5 rounded-xl bg-amber-600/10 text-amber-500 w-fit group-hover:bg-amber-600 group-hover:text-stone-950 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                    {srv.description}
                  </p>
                </div>

                {/* WhatsApp Button for Service */}
                <div className="pt-2">
                  <button
                    id={`service-wa-btn-${srv.id}`}
                    onClick={() => handleServiceWhatsApp(srv)}
                    className="w-full sm:w-auto py-2.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl tracking-wide transition-all shadow flex items-center justify-center gap-2 cursor-pointer group-hover:scale-[1.02]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.588 2.016 14.135 1 11.53 1c-5.438 0-9.863 4.37-9.868 9.8a9.693 9.693 0 0 0 1.492 5.127L2.17 21.09l5.226-1.353c1.514.86 3.011 1.31 4.5 1.31h.01a.01.01 0 0 0 .011-.001zm11.512-10.748c-.288-.144-1.7-.84-1.964-.936-.264-.096-.456-.144-.648.144-.192.288-.744.936-.912 1.128-.168.192-.336.216-.624.072-1.359-.684-2.25-1.128-3.156-2.688-.24-.414.24-.384.688-1.284.078-.156.039-.294-.018-.408-.057-.114-.456-1.104-.624-1.512-.164-.396-.348-.342-.48-.342h-.408c-.144 0-.384.054-.582.27-.198.216-.756.738-.756 1.8s.774 2.088.882 2.232c.108.144 1.524 2.328 3.696 3.264 1.25.538 2.016.708 2.736.612.44-.06 1.35-.552 1.542-1.08.192-.528.192-.984.132-1.08-.06-.096-.216-.144-.504-.288z" />
                    </svg>
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
