import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageSquare, Clock, Send, CheckCircle2, Star, Award, Map, Copy, Check } from 'lucide-react';
import { PHONE_NUMBER, DISPLAY_PHONE, LOCATION_ADDRESS, LOCATION_GOOGLE_MAP_LINK } from '../data';

export default function ContactUs() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PHONE_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact-us-section" className="py-12 md:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
            Let's Stay Connected
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            Contact & Location Details
          </h2>
          <div className="mt-3 h-1 w-20 bg-amber-600 mx-auto rounded-full" />
          <p className="mt-4 text-stone-600 text-sm md:text-base font-light">
            Have an inquiry, booking request, or event plan? Drop by or message our team. Located in Hyderabad’s prime design quarter.
          </p>
        </div>

        {/* Info Grid: Form / Coordinates / Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          
          {/* Column 1: Contact Coordinates & Experience Badge (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Experience / Anniversary Milestone Card */}
            <div className="bg-gradient-to-br from-stone-950 to-stone-900 text-white rounded-2xl p-6 border border-stone-800 shadow-lg relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10">
                <Award className="w-40 h-40 text-amber-400" />
              </div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] text-amber-400 font-bold tracking-widest uppercase">
                    Our Milestone
                  </span>
                  <h3 className="font-serif text-xl font-bold mt-1 text-stone-100">
                    1+ Years of Culinary Perfection
                  </h3>
                  <p className="text-stone-400 text-xs mt-2 leading-relaxed font-light">
                    Since opening our doors in early 2025 on Road No. 12, Jubilee Hills, Cravings has redefined upscale dining by combining rich local spices with modern culinary artistry. Thank you for making us a neighborhood favorite!
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info List */}
            <div className="bg-white rounded-2xl p-6 border border-[#E9E1D3] shadow-sm space-y-5">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-stone-100 text-stone-800 rounded-lg">
                  <MapPin className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-stone-500 uppercase">Our Location</h4>
                  <p className="mt-1 text-stone-900 font-semibold text-sm">
                    Road No. 12, Jubilee Hills,
                  </p>
                  <p className="text-stone-600 text-xs font-medium">
                    Hyderabad, Telangana - 500033
                  </p>
                  <a
                    id="address-map-link"
                    href={LOCATION_GOOGLE_MAP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-800 hover:text-amber-900 font-bold mt-2 hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Phone Line */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-stone-100 text-stone-800 rounded-lg">
                  <Phone className="w-5 h-5 text-amber-700" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold tracking-wider text-stone-500 uppercase">Reservation Hotline</h4>
                  <div className="mt-1 flex items-center gap-2">
                    <a href={`tel:${PHONE_NUMBER}`} className="text-stone-900 font-bold text-base hover:text-amber-800 transition-colors">
                      {DISPLAY_PHONE}
                    </a>
                    
                    <button
                      id="copy-phone-btn"
                      onClick={handleCopyPhone}
                      className="p-1 rounded bg-stone-50 hover:bg-stone-200 border border-stone-200 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
                    </button>
                  </div>
                  <p className="text-stone-500 text-xs font-medium leading-none mt-1">Available 11:00 AM - 11:30 PM daily</p>
                </div>
              </div>

              {/* Direct WhatsApp link */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-stone-100 text-stone-800 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-stone-500 uppercase">Instant WhatsApp</h4>
                  <p className="mt-1 text-stone-600 text-xs font-medium leading-relaxed">
                    Message us directly on WhatsApp for catering or table inquiries.
                  </p>
                  <a
                    id="whatsapp-direct-link"
                    href={`https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=Hi%20Cravings!%20I%20visited%20your%20website%20and%20would%20love%20to%20reserve%20a%20table.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#25D366] hover:bg-[#20ba56] text-white text-xs font-bold rounded-full mt-3 shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Message Concierge</span>
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4 pt-2 border-t border-stone-100">
                <div className="p-2.5 bg-stone-100 text-stone-800 rounded-lg">
                  <Clock className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-stone-500 uppercase">Dine-in Timings</h4>
                  <p className="mt-1 text-stone-800 text-xs font-semibold">
                    Lunch: 12:00 PM - 3:30 PM
                  </p>
                  <p className="text-stone-800 text-xs font-semibold">
                    Dinner: 7:00 PM - 11:30 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Column 2: Interactive In-Page Contact / Feedback Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E9E1D3] shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">Send Us A Message</h3>
              <p className="text-xs text-stone-600 mb-6">Our guest relations manager will respond within 2 hours of submission.</p>

              {!isSubmitted ? (
                <form id="contact-feedback-form" onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full py-2.5 px-4 bg-stone-50 border rounded-lg text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white ${
                          errors.name ? 'border-red-500' : 'border-[#E9E1D3]'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone-input"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full py-2.5 px-4 bg-stone-50 border rounded-lg text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white ${
                          errors.phone ? 'border-red-500' : 'border-[#E9E1D3]'
                        }`}
                        placeholder="+91 89194 49475"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full py-2.5 px-4 bg-stone-50 border border-[#E9E1D3] rounded-lg text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Message / Special Query *
                    </label>
                    <textarea
                      id="contact-message-input"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full py-2.5 px-4 bg-stone-50 border rounded-lg text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white ${
                        errors.message ? 'border-red-500' : 'border-[#E9E1D3]'
                      }`}
                      placeholder="Tell us about your catering requirement, party headcount, or customized menu preferences..."
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      id="submit-contact-form-btn"
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold rounded-lg text-xs tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Message</span>
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  id="contact-success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Message Delivered!</h3>
                  <p className="text-stone-600 text-sm px-6">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Your message has been logged in our reservation directory. A coordinator will call or SMS you at <span className="font-semibold">{formData.phone}</span> shortly.
                  </p>
                  <button
                    id="contact-send-another-btn"
                    onClick={handleResetForm}
                    className="px-6 py-2 border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </div>

            {/* Embedded Responsive Real Google Map Iframe pointing to Jubilee Hills Road No 12 Hyderabad */}
            <div className="rounded-2xl overflow-hidden border border-[#E9E1D3] shadow-sm h-64 md:h-80 bg-stone-200 relative">
              <iframe
                id="google-maps-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.827236592209!2d78.4069811!3d17.4200772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9135a51c9aff%3A0xe5a3c202bb9c2b4c!2sRoad%20No%2012%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1782361000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cravings Location Map"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
