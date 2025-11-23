"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Plus, Edit, Trash2, Eye, Calendar, MapPin, Clock, X, DollarSign, Users, TrendingUp, Settings } from "lucide-react";

// Mock data for events - in a real app this would come from an API
const mockEvents: Event[] = [
  // Events will be added here when available
];

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: "upcoming" | "happening" | "ended";
  totalTickets: number;
  soldTickets: number;
  revenue: number;
  flyer: string | null;
  videoUrl?: string;
  ticketTypes: Array<{
    name: string;
    price: number;
    total: number;
    sold: number;
  }>;
};

type FormData = {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: "upcoming" | "happening" | "ended";
  totalTickets: number;
  flyer: File | null;
  videoUrl?: string;
  ticketTypes: Array<{
    name: string;
    price: number;
    total: number;
  }>;
};

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    status: "upcoming",
    totalTickets: 200,
    flyer: null,
    ticketTypes: [
      { name: "Standard", price: 0, total: 150 },
      { name: "VIP", price: 15000, total: 30 },
      { name: "VI", price: 20000, total: 15 },
      { name: "VVIP", price: 30000, total: 5 }
    ]
  });

  const router = useRouter();
  const pathname = usePathname();

  const handleCreate = () => {
    const newEvent: Event = {
      id: Date.now().toString(),
      ...formData,
      soldTickets: 0,
      revenue: 0,
      flyer: null, // In a real app, this would be uploaded and get a URL
      videoUrl: "https://www.youtube.com/embed/vxc4ymgi3U4?autoplay=1&mute=1&loop=1&playlist=vxc4ymgi3U4&controls=0&rel=0&showinfo=0&modestbranding=1&playsinline=1&start=7&end=42",
      ticketTypes: formData.ticketTypes.map(type => ({ ...type, sold: 0 }))
    };
    setEvents([...events, newEvent]);
    setIsCreateModalOpen(false);
    resetForm();
  };

  const handleEdit = (eventItem: Event) => {
    setSelectedEvent(eventItem);
    setFormData({
      title: eventItem.title,
      description: eventItem.description,
      date: eventItem.date,
      time: eventItem.time,
      location: eventItem.location,
      status: eventItem.status,
      totalTickets: eventItem.totalTickets,
      flyer: null, // For editing, we don't load the file back
      ticketTypes: eventItem.ticketTypes.map(type => ({ name: type.name, price: type.price, total: type.total }))
    });
    setIsEditModalOpen(true);
  };

  const handleUpdate = () => {
    if (!selectedEvent) return;
    const { flyer, ...formDataWithoutFlyer } = formData;
    const updatedEvent = {
      ...selectedEvent,
      ...formDataWithoutFlyer,
      ticketTypes: formData.ticketTypes.map((newType, index) => {
        const existing = selectedEvent.ticketTypes.find(t => t.name === newType.name);
        return existing ? { ...newType, sold: existing.sold } : { ...newType, sold: 0 };
      })
    };
    setEvents(events.map(event =>
      event.id === selectedEvent.id
        ? updatedEvent
        : event
    ));
    setIsEditModalOpen(false);
    setSelectedEvent(null);
    resetForm();
  };

  const handleView = (eventItem: Event) => {
    setSelectedEvent(eventItem);
    setIsViewModalOpen(true);
  };

  const handleDelete = (eventId: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter(event => event.id !== eventId));
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      status: "upcoming",
      totalTickets: 200,
      flyer: null,
      ticketTypes: [
        { name: "Standard", price: 0, total: 150 },
        { name: "VIP", price: 15000, total: 30 },
        { name: "VI", price: 20000, total: 15 },
        { name: "VVIP", price: 30000, total: 5 }
      ]
    });
  };

  const getStatusColor = (status: "upcoming" | "happening" | "ended"): string => {
    switch (status) {
      case "happening":
        return "bg-green-100 text-green-800";
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "ended":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatCurrency = (amount: number): string => {
    return `${amount.toLocaleString()} RWF`;
  };

  const totalRevenue = events.reduce((sum, event) => sum + event.revenue, 0);
  const totalSoldTickets = events.reduce((sum, event) => sum + event.soldTickets, 0);
  const upcomingEvents = events.filter(event => event.status === "upcoming").length;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header with Stats */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Events Management</h1>
            <p className="text-gray-600 mt-2">Manage your cultural events and track performance</p>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-200"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Event
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">{events.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Tickets Sold</p>
                <p className="text-2xl font-bold text-gray-900">{totalSoldTickets.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalRevenue)}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Upcoming</p>
                <p className="text-2xl font-bold text-gray-900">{upcomingEvents}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      {upcomingEvents > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter(event => event.status === "upcoming")
              .map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-sm border border-blue-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                  {/* Event Image Placeholder */}
                  <div className="h-32 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Calendar className="w-8 h-8 mx-auto mb-1" />
                      <p className="text-xs opacity-90">Upcoming</p>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                        {event.title}
                      </h3>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        upcoming
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-3 h-3 mr-2" />
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-3 h-3 mr-2" />
                        {event.location}
                      </div>
                    </div>

                    {/* Sales Stats */}
                    <div className="bg-blue-50 rounded-lg p-2 mb-3">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-blue-600">Tickets Sold</p>
                          <p className="font-semibold text-blue-900">{event.soldTickets}/{event.totalTickets}</p>
                        </div>
                        <div>
                          <p className="text-blue-600">Revenue</p>
                          <p className="font-semibold text-blue-900">{formatCurrency(event.revenue)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleView(event)}
                        className="flex-1 inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </button>
                      <button
                        onClick={() => handleEdit(event)}
                        className="flex-1 inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* All Events Grid */}
      {events.length === 0 ? (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">No Events Yet</h3>
            <p className="text-gray-600 mb-6">
              We don't have any upcoming events scheduled at the moment. Stay tuned for exciting cultural performances and experiences!
            </p>
            <p className="text-sm text-gray-500">
              When events are available, you'll be able to book your tickets directly through this page.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, 3).map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              {/* Event Image Placeholder */}
              <div className="h-48 bg-gradient-to-r from-emerald-400 to-emerald-600 flex items-center justify-center overflow-hidden">
                {event.videoUrl ? (
                  <iframe
                    className="w-full h-full"
                    src={event.videoUrl}
                    title={`${event.title} promotional video`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="text-white text-center">
                    <Calendar className="w-12 h-12 mx-auto mb-2 opacity-80" />
                    <p className="text-sm font-medium opacity-95">Event Image</p>
                  </div>
                )}
              </div>

              {/* Event Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {event.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description || "Experience this amazing cultural event featuring traditional performances and authentic Rwandan culture."}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date} at {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>

                {/* Sales Stats */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Tickets Sold</p>
                      <p className="font-semibold text-gray-900">{event.soldTickets}/{event.totalTickets}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Revenue</p>
                      <p className="font-semibold text-gray-900">{formatCurrency(event.revenue)}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleView(event)}
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </button>
                  <button
                    onClick={() => handleEdit(event)}
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Event Modal */}
      {isCreateModalOpen && (
        <EventModal
          title="Create New Event"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleCreate}
          onClose={() => setIsCreateModalOpen(false)}
          submitText="Create Event"
        />
      )}

      {/* Edit Event Modal */}
      {isEditModalOpen && selectedEvent && (
        <EventModal
          title="Edit Event"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleUpdate}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedEvent(null);
          }}
          submitText="Update Event"
        />
      )}

      {/* View Event Modal */}
      {isViewModalOpen && selectedEvent && (
        <ViewEventModal
          event={selectedEvent}
          onClose={() => {
            setIsViewModalOpen(false);
            setSelectedEvent(null);
          }}
        />
      )}
    </div>
  );
}

// Event Modal Component
function EventModal({ 
  title, 
  formData, 
  setFormData, 
  onSubmit, 
  onClose, 
  submitText 
}: {
  title: string;
  formData: FormData;
  setFormData: (data: FormData) => void;
  onSubmit: () => void;
  onClose: () => void;
  submitText: string;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter event title"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter event description"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date *
                </label>
                <input
                  type="text"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="e.g., December 15, 2025"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Time *
                </label>
                <input
                  type="text"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="e.g., 7:00 PM"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter venue location"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Flyer
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, flyer: e.target.files?.[0] || null })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
                <p className="text-sm text-gray-500 mt-1">Upload an image for the event flyer (optional)</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Status *
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as "upcoming" | "happening" | "ended" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="happening">Happening</option>
                  <option value="ended">Ended</option>
                </select>
              </div>
            </div>

            {/* Ticket Types */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Ticket Types & Pricing
              </label>
              <div className="space-y-4">
                {formData.ticketTypes.map((ticket, index) => (
                  <div key={index} className="flex gap-4 items-end">
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-600 mb-2">Standard</label>
                      <select
                        value={ticket.name}
                        onChange={(e) => {
                          const newTicketTypes = [...formData.ticketTypes];
                          newTicketTypes[index].name = e.target.value;
                          setFormData({ ...formData, ticketTypes: newTicketTypes });
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="Standard">Standard</option>
                        <option value="VIP">VIP</option>
                        <option value="VI">VI</option>
                        <option value="VVIP">VVIP</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-600 mb-2">Total Seats</label>
                      <input
                        type="number"
                        min="1"
                        value={ticket.total}
                        onChange={(e) => {
                          const newTicketTypes = [...formData.ticketTypes];
                          newTicketTypes[index].total = parseInt(e.target.value) || 1;
                          setFormData({ ...formData, ticketTypes: newTicketTypes });
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="100"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-600 mb-2">Amount (RWF)</label>
                      <input
                        type="number"
                        min="0"
                        value={ticket.price}
                        onChange={(e) => {
                          const newTicketTypes = [...formData.ticketTypes];
                          newTicketTypes[index].price = parseInt(e.target.value) || 0;
                          setFormData({ ...formData, ticketTypes: newTicketTypes });
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="0"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const newTicketTypes = formData.ticketTypes.filter((_, i) => i !== index);
                        setFormData({ ...formData, ticketTypes: newTicketTypes });
                      }}
                      className="px-3 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
                      disabled={formData.ticketTypes.length <= 1}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      ticketTypes: [...formData.ticketTypes, { name: "Standard", price: 0, total: 100 }]
                    });
                  }}
                  className="px-4 py-2 text-emerald-600 border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Add Ticket Type
                </button>
              </div>
            </div>

            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
              >
                {submitText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// View Event Modal Component
function ViewEventModal({ event, onClose }: { event: Event; onClose: () => void }) {
  const formatCurrency = (amount: number): string => {
    return `${amount.toLocaleString()} RWF`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Event Details - {event.title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-8">
            {/* Event Overview */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-emerald-900 mb-3">Event Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                      <div>
                        <p className="text-sm text-emerald-600 font-medium">Date & Time</p>
                        <p className="font-semibold">{event.date} at {event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                      <div>
                        <p className="text-sm text-emerald-600 font-medium">Venue</p>
                        <p className="font-semibold">{event.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900 mb-3">Performance Stats</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/60 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-emerald-600">{event.soldTickets}</p>
                      <p className="text-sm text-emerald-700">Tickets Sold</p>
                    </div>
                    <div className="bg-white/60 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-emerald-600">{formatCurrency(event.revenue)}</p>
                      <p className="text-sm text-emerald-700">Revenue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ticket Types Breakdown */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-6">Ticket Sales Breakdown</h4>
              <div className="space-y-4">
                {event.ticketTypes.map((ticket: Event['ticketTypes'][0], index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full ${
                        ticket.name === 'Standard' ? 'bg-emerald-500' :
                        ticket.name === 'VIP' ? 'bg-purple-500' : 'bg-orange-500'
                      }`}></div>
                      <div>
                        <h5 className="font-semibold text-gray-900">{ticket.name}</h5>
                        <p className="text-sm text-gray-600">
                          {ticket.price === 0 ? 'Free Entry' : `${formatCurrency(ticket.price)} per ticket`}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {ticket.total - ticket.sold} available / {ticket.total} total
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{ticket.sold} sold</p>
                      <p className="text-sm text-gray-600">
                        {formatCurrency(ticket.sold * ticket.price)} revenue
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Description */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Event Description</h4>
              <p className="text-gray-600 leading-relaxed">
                {event.description || "No description available for this event."}
              </p>
            </div>
          </div>

          <div className="flex gap-4 pt-6 border-t border-gray-200 mt-8">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
