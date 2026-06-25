import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Users, Phone, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER, DISPLAY_PHONE } from '../data';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'callback' as 'callback' | 'table',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (formData.type === 'table') {
      if (!formData.date) newErrors.date = 'Reservation date is required';
      if (!formData.time) newErrors.time = 'Reservation time is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = formData.type === 'table' 
      ? `Hi Cravings! I'd like to book a table:\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nNotes: ${formData.notes || 'None'}`
      : `Hi Cravings! Please call me back:\nName: ${formData.name}\nPhone: ${formData.phone}\nNotes/Query: ${formData.notes || 'Interested in menu/dining'}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=${encodedText}`, '_blank');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      type: 'callback',
      date: '',
      time: '',
      guests: '2',
      notes: ''
    });
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              id="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-lg overflow-hidden bg-[#FAF7F2] rounded-2xl border border-[#E9E1D3] shadow-2xl"
            >
              {/* Gold/Amber Accent Header strip */}
              <div className="h-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700" />

              {/* Close Button */}
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 transition-colors rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                {!isSubmitted ? (
                  <>
                    <div className="mb-6 text-center">
                      <span className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                        Instant Connection
                      </span>
                      <h3 className="mt-1 font-serif text-3xl font-bold text-stone-900">
                        Request Table or Callback
                      </h3>
                      <p className="mt-2 text-sm text-stone-600">
                        Enter details below to book your premium culinary experience at Jubilee Hills.
                      </p>
                    </div>

                    {/* Toggle selector */}
                    <div className="grid grid-cols-2 p-1 mb-6 rounded-lg bg-stone-200/60">
                      <button
                        id="select-callback-btn"
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'callback' })}
                        className={`py-2 text-sm font-medium rounded-md transition-all ${
                          formData.type === 'callback'
                            ? 'bg-amber-600 text-white shadow'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        Request Callback
                      </button>
                      <button
                        id="select-table-btn"
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'table' })}
                        className={`py-2 text-sm font-medium rounded-md transition-all ${
                          formData.type === 'table'
                            ? 'bg-amber-600 text-white shadow'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        Reserve Table
                      </button>
                    </div>

                    <form id="booking-form" onSubmit={handleSubmit} className="space-y-4">
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                          <input
                            id="form-name-input"
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full py-2.5 pl-10 pr-4 bg-white border rounded-lg text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                              errors.name ? 'border-red-500' : 'border-[#E9E1D3]'
                            }`}
                            placeholder="John Doe"
                          />
                        </div>
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>

                      {/* Phone input */}
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                          <input
                            id="form-phone-input"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className={`w-full py-2.5 pl-10 pr-4 bg-white border rounded-lg text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                              errors.phone ? 'border-red-500' : 'border-[#E9E1D3]'
                            }`}
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                      </div>

                      {/* Dynamic fields based on selection */}
                      {formData.type === 'table' && (
                        <motion.div
                          id="table-booking-fields"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="grid grid-cols-2 gap-4 pt-1"
                        >
                          <div>
                            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                              Date *
                            </label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <input
                                id="form-date-input"
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className={`w-full py-2.5 pl-10 pr-3 bg-white border rounded-lg text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                  errors.date ? 'border-red-500' : 'border-[#E9E1D3]'
                                }`}
                              />
                            </div>
                            {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                              Time *
                            </label>
                            <div className="relative">
                              <Clock className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <input
                                id="form-time-input"
                                type="time"
                                value={formData.time}
                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                className={`w-full py-2.5 pl-10 pr-3 bg-white border rounded-lg text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                  errors.time ? 'border-red-500' : 'border-[#E9E1D3]'
                                }`}
                              />
                            </div>
                            {errors.time && <p className="mt-1 text-xs text-red-500">{errors.time}</p>}
                          </div>

                          <div className="col-span-2">
                            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                              Number of Guests
                            </label>
                            <div className="relative">
                              <Users className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <select
                                id="form-guests-select"
                                value={formData.guests}
                                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                className="w-full py-2.5 pl-10 pr-4 bg-white border border-[#E9E1D3] rounded-lg text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none"
                              >
                                {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                                  <option key={num} value={num}>
                                    {num} {num === 1 ? 'Guest' : 'Guests'}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Notes / Special Instructions */}
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                          {formData.type === 'table' ? 'Special Instructions (Dietary/Seating)' : 'Your Query / Note'}
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                          <textarea
                            id="form-notes-textarea"
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            rows={2}
                            className="w-full py-2.5 pl-10 pr-4 bg-white border border-[#E9E1D3] rounded-lg text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder={
                              formData.type === 'table'
                                ? 'e.g. Window seat, anniversary celebration, vegetarian menus needed...'
                                : 'Describe how we can assist you...'
                            }
                          />
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-2">
                        <button
                          id="submit-form-btn"
                          type="submit"
                          className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-amber-400 hover:text-amber-300 font-medium rounded-lg text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        >
                          <span>Submit Request</span>
                        </button>
                      </div>
                    </form>

                    <div className="mt-4 pt-4 border-t border-[#E9E1D3] text-center">
                      <p className="text-xs text-stone-500">
                        Or reach us directly at{' '}
                        <a href={`tel:${PHONE_NUMBER}`} className="font-semibold text-amber-800 hover:underline">
                          {DISPLAY_PHONE}
                        </a>
                      </p>
                    </div>
                  </>
                ) : (
                  <motion.div
                    id="success-form-content"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 mx-auto text-emerald-600" />
                    <h3 className="mt-4 font-serif text-2xl font-bold text-stone-900">
                      Request Received!
                    </h3>
                    <p className="mt-2 text-stone-600 text-sm px-4">
                      Thank you, <span className="font-semibold">{formData.name}</span>. Our concierge team is already preparing for you and will call you shortly on{' '}
                      <span className="font-semibold">{formData.phone}</span>.
                    </p>

                    <div className="mt-8 space-y-3 px-4">
                      <button
                        id="form-whatsapp-direct-btn"
                        onClick={handleSendWhatsApp}
                        className="w-full py-3 bg-[#25D366] hover:bg-[#20ba56] text-white font-medium rounded-lg text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.588 2.016 14.135 1 11.53 1c-5.438 0-9.863 4.37-9.868 9.8a9.693 9.693 0 0 0 1.492 5.127L2.17 21.09l5.226-1.353c1.514.86 3.011 1.31 4.5 1.31h.01a.01.01 0 0 0 .011-.001zm11.512-10.748c-.288-.144-1.7-.84-1.964-.936-.264-.096-.456-.144-.648.144-.192.288-.744.936-.912 1.128-.168.192-.336.216-.624.072-1.359-.684-2.25-1.128-3.156-2.688-.24-.414.24-.384.688-1.284.078-.156.039-.294-.018-.408-.057-.114-.456-1.104-.624-1.512-.164-.396-.348-.342-.48-.342h-.408c-.144 0-.384.054-.582.27-.198.216-.756.738-.756 1.8s.774 2.088.882 2.232c.108.144 1.524 2.328 3.696 3.264 1.25.538 2.016.708 2.736.612.44-.06 1.35-.552 1.542-1.08.192-.528.192-.984.132-1.08-.06-.096-.216-.144-.504-.288z" />
                        </svg>
                        <span>Send Details via WhatsApp</span>
                      </button>

                      <button
                        id="form-success-close-btn"
                        onClick={handleReset}
                        className="w-full py-2.5 border border-stone-300 hover:bg-stone-100 text-stone-700 font-medium rounded-lg text-sm transition-all duration-300"
                      >
                        Close Window
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
