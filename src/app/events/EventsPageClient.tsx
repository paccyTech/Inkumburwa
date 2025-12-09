"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, Theater, Ticket, X, Minus, Plus, CreditCard, User, Mail, Phone, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleContext";

const events = ["sampleEvent"] as const;

type EventKey = (typeof events)[number];

type EventStatus = "upcoming" | "happening" | "ended";

interface EventData {
  key: EventKey;
  date: Date;
  status: EventStatus;
}

interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
}

const ticketTypes: TicketType[] = [
  {
    id: "standard",
    name: "Standard Admission",
    price: 0, // Free entry
    description: "General admission seating"
  },
  {
    id: "vip",
    name: "VIP Experience",
    price: 25000, // 25,000 RWF
    description: "Premium seating and backstage access"
  },
  {
    id: "group",
    name: "Group (10+ people)",
    price: 15000, // 15,000 RWF per person
    description: "Special group pricing"
  }
];

export default function EventsPageClient() {
  const { t } = useLocale();
  const [selectedEvent, setSelectedEvent] = useState<EventKey | null>(null);
  const [ticketQuantities, setTicketQuantities] = useState<Record<string, number>>({});
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isHappeningNow, setIsHappeningNow] = useState(false);

  useEffect(() => {
    const checkEventTime = () => {
      const now = new Date();
      const options = { timeZone: 'Africa/Kigali' };
      const rwandaTime = now.toLocaleString('en-US', options);
      const rwandaDate = new Date(rwandaTime);
      
      // Friday is 5 in getDay() (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
      const isFriday = rwandaDate.getDay() === 5;
      const isEventTime = rwandaDate.getHours() === 19 && rwandaDate.getMinutes() < 60; // 7:00 PM to 8:00 PM
      
      setIsHappeningNow(isFriday && isEventTime);
    };

    // Check immediately and then every minute
    checkEventTime();
    const interval = setInterval(checkEventTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const openBookingModal = (eventKey: EventKey) => {
    setSelectedEvent(eventKey);
    setTicketQuantities({});
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
    setSelectedEvent(null);
    setTicketQuantities({});
    setCustomerInfo({ name: '', email: '', phone: '', specialRequests: '' });
  };

  const updateQuantity = (ticketId: string, delta: number) => {
    setTicketQuantities(prev => ({
      ...prev,
      [ticketId]: Math.max(0, (prev[ticketId] || 0) + delta)
    }));
  };

  const totalTickets = Object.values(ticketQuantities).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = ticketTypes.reduce((sum, ticket) => 
    sum + (ticketQuantities[ticket.id] || 0) * ticket.price, 0
  );

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with a payment processor
    // For now, we'll just show a success message
    alert(`Booking submitted! Total: ${totalPrice} RWF for ${totalTickets} tickets`);
    closeBookingModal();
  };

  const eventData = useMemo(() => {
    const now = new Date();

    return events.map((eventKey) => {
      const dateStr = t(`events.event.${eventKey}.date`);
      const timeStr = t(`events.event.${eventKey}.time`);

      // Parse date string directly (includes year)
      const date = new Date(dateStr);

      // Parse time and add to date
      const [hours, minutes] = timeStr.includes(':') ? timeStr.split(':').map(Number) : [19, 0]; // Default to 7 PM if parsing fails
      date.setHours(hours, minutes, 0, 0);

      // Determine status based on current time
      const now = new Date();
      const eventStart = new Date(date);
      const eventEnd = new Date(eventStart.getTime() + 2 * 60 * 60 * 1000); // 2 hours duration
      
      let status: EventStatus = "upcoming";
      if (now >= eventStart && now <= eventEnd) {
        status = "happening";
      } else if (now > eventEnd) {
        status = "ended";
      }

      return {
        key: eventKey,
        date: eventStart,
        status,
      };
    }).sort((a, b) => {
      // Sort by status priority: happening > upcoming > ended
      const statusOrder = { happening: 0, upcoming: 1, ended: 2 };
      return statusOrder[a.status] - statusOrder[b.status] || a.date.getTime() - b.date.getTime();
    });
  }, [t]);

  const getStatusColor = (status: EventStatus) => {
    switch (status) {
      case "happening":
        return "bg-green-500 text-white";
      case "upcoming":
        return "bg-blue-500 text-white";
      case "ended":
        return "bg-gray-500 text-white";
    }
  };

  const getStatusText = (status: EventStatus) => {
    switch (status) {
      case "happening":
        return "HAPPENING NOW";
      case "upcoming":
        return "EVERY FRIDAY";
      case "ended":
        return "ENDED";
    }
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 min-h-screen">
      <PageHero
        title={t("events.title")}
        subtitle={t("events.subtitle")}
        backgroundImageUrl="/28.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
              {t("events.title")}
            </h2>
            <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
              {t("events.subtitle")}
            </p>
          </div>

          {eventData.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-lg mx-auto">
                <div className="relative mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Calendar className="w-16 h-16 text-emerald-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🎭</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Events Yet</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  We're currently preparing exciting cultural performances and experiences. Check back soon for upcoming events!
                </p>
                
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Ticket className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-800 uppercase tracking-wide">Coming Soon</span>
                  </div>
                  <p className="text-sm text-emerald-700">
                    When events are available, this is where you'll be able to book your tickets directly through this page.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {eventData.map(({ key: eventKey, status }) => (
                <Reveal key={eventKey} className="group">
                  <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2 hover:scale-[1.02]">
                    
                    {/* Event Image Thumbnail */}
                    <div className="h-96 relative overflow-hidden rounded-t-3xl group-hover:h-[28rem] transition-all duration-500 ease-out bg-white">
                      <div className="relative w-full h-full">
                        <Image
                          src="/event1.png"
                          alt={t(`events.event.${eventKey}.title`)}
                          fill
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={status === "upcoming"}
                        />
                      </div>
                      {/* Status Badge Overlay */}
                      <div className="absolute top-4 right-4 z-20">
                        <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl backdrop-blur-sm border ${
                          isHappeningNow 
                            ? 'bg-emerald-500 text-white border-emerald-400 animate-pulse' 
                            : `${getStatusColor(status)} border-white/20`
                        }`}>
                          {isHappeningNow ? 'Happening Now' : getStatusText(status)}
                        </span>
                      </div>
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${
                        status === "happening" 
                          ? "from-green-900/80 via-green-900/20 to-transparent" 
                          : status === "ended"
                          ? "from-red-900/60 via-red-900/20 to-transparent"
                          : "from-black/70 via-black/20 to-transparent"
                      } transition-opacity duration-300`}></div>
                      
                      {/* Hover Overlay Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6 relative">
                      {/* Decorative Elements */}
                      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-emerald-600">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium uppercase tracking-wide">Featured Event</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                            {eventKey === "sampleEvent" ? "Solia Cultural Soirée" : t(`events.event.${eventKey}.title`)}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {eventKey === "sampleEvent" 
                              ? "Experience the vibrant culture of Rwanda with live performances every Friday evening." 
                              : t(`events.event.${eventKey}.description`)}
                          </p>
                        </div>

                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-3 group/detail">
                            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center group-hover/detail:bg-emerald-100 transition-colors duration-200">
                              <Clock className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div>
                              <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide">Time</p>
                              <p className="text-xs font-semibold text-gray-900 leading-tight">
                                {eventKey === "sampleEvent" ? "07:00PM - Every Friday" : t(`events.event.${eventKey}.time`)}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 group/detail">
                            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center group-hover/detail:bg-emerald-100 transition-colors duration-200">
                              <MapPin className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div>
                              <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide">Venue</p>
                              <p className="text-xs font-semibold text-gray-900 leading-tight">
                                {eventKey === "sampleEvent" ? "Solia Pool Bar - Zaria Court Hotel" : t(`events.event.${eventKey}.location`)}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 group/detail">
                            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center group-hover/detail:bg-emerald-100 transition-colors duration-200">
                              <Mail className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div>
                              <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide">Email</p>
                              <a href="mailto:info@zariacourt.com" className="text-xs font-semibold text-gray-900 leading-tight hover:underline">
                                {eventKey === "sampleEvent" ? "info@zariacourt.com" : t(`events.event.${eventKey}.email`)}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 group/detail">
                            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center group-hover/detail:bg-emerald-100 transition-colors duration-200">
                              <Phone className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div>
                              <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide">Phone</p>
                              <a href="tel:0796699087" className="text-xs font-semibold text-gray-900 leading-tight hover:underline">
                                {eventKey === "sampleEvent" ? "0796699087" : t(`events.event.${eventKey}.phone`)}
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Spacing for layout consistency */}
                        <div className="h-4"></div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-emerald-900 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Experience Our Culture?
              </h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Join us for unforgettable cultural performances that celebrate Rwanda's rich heritage.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-900 font-semibold rounded-lg hover:bg-emerald-50 transition-colors duration-200 shadow-lg"
              >
                Book Your Experience
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Booking Modal */}
      {showBookingModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 p-6 md:p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              
              <div className="relative flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    🎫 Book Your Tickets
                  </h3>
                  <p className="text-emerald-100 text-lg">
                    {t(`events.event.${selectedEvent}.title`)}
                  </p>
                </div>
                <button
                  onClick={closeBookingModal}
                  className="p-3 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 md:p-8 max-h-[calc(90vh-200px)] overflow-y-auto">
              <div className="space-y-8">
                {/* Event Details Card */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100 shadow-sm">
                  <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                    <Theater className="w-5 h-5" />
                    Event Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl backdrop-blur-sm">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide">Date</p>
                        <p className="font-semibold text-gray-900">{t(`events.event.${selectedEvent}.date`)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl backdrop-blur-sm">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide">Time</p>
                        <p className="font-semibold text-gray-900">{t(`events.event.${selectedEvent}.time`)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl backdrop-blur-sm">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide">Venue</p>
                        <p className="font-semibold text-gray-900">{t(`events.event.${selectedEvent}.location`)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ticket Selection */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Ticket className="w-5 h-5 text-emerald-600" />
                    Select Your Tickets
                  </h4>
                  <div className="space-y-4">
                    {ticketTypes.map((ticket) => (
                      <div key={ticket.id} className="group flex items-center justify-between p-5 border-2 border-gray-100 rounded-2xl hover:border-emerald-200 hover:shadow-md transition-all duration-300 bg-gradient-to-r from-gray-50/50 to-white">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-4 h-4 rounded-full ${
                              ticket.id === 'standard' ? 'bg-emerald-500' :
                              ticket.id === 'vip' ? 'bg-purple-500' : 'bg-orange-500'
                            }`}></div>
                            <h5 className="font-bold text-gray-900 text-lg">{ticket.name}</h5>
                          </div>
                          <p className="text-gray-600 mb-3 ml-7">{ticket.description}</p>
                          <div className="ml-7">
                            {ticket.price === 0 ? (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-800">
                                🎉 FREE ENTRY
                              </span>
                            ) : (
                              <span className="text-2xl font-bold text-emerald-600">
                                {ticket.price.toLocaleString()} <span className="text-sm font-normal text-gray-500">RWF</span>
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 bg-white rounded-2xl border border-gray-200 p-1 shadow-sm">
                            <button
                              onClick={() => updateQuantity(ticket.id, -1)}
                              className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-red-50 hover:text-red-600 flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                              disabled={(ticketQuantities[ticket.id] || 0) <= 0}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center font-bold text-xl text-gray-900">
                              {ticketQuantities[ticket.id] || 0}
                            </span>
                            <button
                              onClick={() => updateQuantity(ticket.id, 1)}
                              className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-emerald-50 hover:text-emerald-600 flex items-center justify-center transition-all duration-200 hover:scale-110"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                {totalTickets > 0 && (
                  <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-6 text-white shadow-lg">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Order Summary
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-emerald-100">Total Tickets</span>
                        <span className="font-bold text-xl">{totalTickets}</span>
                      </div>
                      <div className="border-t border-white/20 pt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-emerald-100">Total Amount</span>
                          <span className="font-bold text-2xl">{totalPrice.toLocaleString()} RWF</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Customer Information */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <User className="w-5 h-5 text-emerald-600" />
                      Contact Information
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <User className="w-4 h-4 text-emerald-600" />
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <Mail className="w-4 h-4 text-emerald-600" />
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={customerInfo.email}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <Phone className="w-4 h-4 text-emerald-600" />
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="+250 788 992 367"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-emerald-600" />
                          Special Requests
                        </label>
                        <input
                          type="text"
                          value={customerInfo.specialRequests}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, specialRequests: e.target.value }))}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="Accessibility needs, dietary requirements..."
                        />
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-4 pt-6 border-t border-gray-200">
                      <button
                        type="button"
                        onClick={closeBookingModal}
                        className="flex-1 px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <X className="w-5 h-5" />
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={totalTickets === 0}
                        className="flex-1 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                      >
                        <CreditCard className="w-5 h-5" />
                        {totalTickets === 0 ? 'Select Tickets First' : `Book ${totalTickets} Ticket${totalTickets > 1 ? 's' : ''}`}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
