"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Calendar, DollarSign, Users, TrendingUp, Settings, Menu, X, LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        suppressHydrationWarning={true}
        className={`w-64 bg-gradient-to-b from-emerald-600 via-emerald-700 to-green-800 shadow-xl lg:block ${
          sidebarOpen ? 'block' : 'hidden'
        } lg:static lg:translate-x-0 relative overflow-hidden flex flex-col min-h-screen`}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-transparent to-green-600/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="p-1 bg-white/10 rounded-xl backdrop-blur-sm">
              <img
                src="/logo.png"
                alt="Inkumburwa Logo"
                className="w-10 h-10 rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Inkumburwa</h1>
              <p className="text-sm text-emerald-100">Admin Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="mt-8 relative flex-1 flex flex-col justify-between">
          {/* Menu Items */}
          <div className="px-4 space-y-2">
            <div
              suppressHydrationWarning={true}
              onClick={() => {
                router.push('/admin/events');
                setSidebarOpen(false);
              }}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl cursor-pointer transition-all duration-200 group ${
                pathname === '/admin/events'
                  ? 'text-white bg-white/20 shadow-lg backdrop-blur-sm'
                  : 'text-emerald-100 hover:text-white hover:bg-white/10 hover:shadow-md'
              }`}
            >
              <div className={`p-1.5 rounded-lg mr-3 transition-colors duration-200 ${
                pathname === '/admin/events'
                  ? 'bg-white/20'
                  : 'bg-emerald-500/20 group-hover:bg-emerald-400/30'
              }`}>
                <Calendar className="w-4 h-4" />
              </div>
              Events
            </div>

            <div
              suppressHydrationWarning={true}
              onClick={() => {
                router.push('/admin/payments');
                setSidebarOpen(false);
              }}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl cursor-pointer transition-all duration-200 group ${
                pathname === '/admin/payments'
                  ? 'text-white bg-white/20 shadow-lg backdrop-blur-sm'
                  : 'text-emerald-100 hover:text-white hover:bg-white/10 hover:shadow-md'
              }`}
            >
              <div className={`p-1.5 rounded-lg mr-3 transition-colors duration-200 ${
                pathname === '/admin/payments'
                  ? 'bg-white/20'
                  : 'bg-emerald-500/20 group-hover:bg-emerald-400/30'
              }`}>
                <DollarSign className="w-4 h-4" />
              </div>
              Payments
            </div>

            <div
              suppressHydrationWarning={true}
              onClick={() => {
                router.push('/admin/bookings');
                setSidebarOpen(false);
              }}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl cursor-pointer transition-all duration-200 group ${
                pathname === '/admin/bookings'
                  ? 'text-white bg-white/20 shadow-lg backdrop-blur-sm'
                  : 'text-emerald-100 hover:text-white hover:bg-white/10 hover:shadow-md'
              }`}
            >
              <div className={`p-1.5 rounded-lg mr-3 transition-colors duration-200 ${
                pathname === '/admin/bookings'
                  ? 'bg-white/20'
                  : 'bg-emerald-500/20 group-hover:bg-emerald-400/30'
              }`}>
                <Users className="w-4 h-4" />
              </div>
              Bookings
            </div>

            <div
              suppressHydrationWarning={true}
              onClick={() => {
                router.push('/admin/analytics');
                setSidebarOpen(false);
              }}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl cursor-pointer transition-all duration-200 group ${
                pathname === '/admin/analytics'
                  ? 'text-white bg-white/20 shadow-lg backdrop-blur-sm'
                  : 'text-emerald-100 hover:text-white hover:bg-white/10 hover:shadow-md'
              }`}
            >
              <div className={`p-1.5 rounded-lg mr-3 transition-colors duration-200 ${
                pathname === '/admin/analytics'
                  ? 'bg-white/20'
                  : 'bg-emerald-500/20 group-hover:bg-emerald-400/30'
              }`}>
                <TrendingUp className="w-4 h-4" />
              </div>
              Analytics
            </div>

            <div
              suppressHydrationWarning={true}
              onClick={() => {
                router.push('/admin/settings');
                setSidebarOpen(false);
              }}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl cursor-pointer transition-all duration-200 group ${
                pathname === '/admin/settings'
                  ? 'text-white bg-white/20 shadow-lg backdrop-blur-sm'
                  : 'text-emerald-100 hover:text-white hover:bg-white/10 hover:shadow-md'
              }`}
            >
              <div className={`p-1.5 rounded-lg mr-3 transition-colors duration-200 ${
                pathname === '/admin/settings'
                  ? 'bg-white/20'
                  : 'bg-emerald-500/20 group-hover:bg-emerald-400/30'
              }`}>
                <Settings className="w-4 h-4" />
              </div>
              Settings
            </div>
          </div>

          {/* Footer Elements */}
          <div className="px-4 space-y-3 mt-auto">
            {/* Version */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-xs text-emerald-200/80">Version 1.0.0</p>
              </div>
            </div>

            {/* Logout Button */}
            <div className="pt-3">
              <button
                onClick={() => {
                  // In a real app, this would handle logout
                  router.push('/');
                  setSidebarOpen(false);
                }}
                className="w-full flex items-center px-4 py-3 text-sm font-medium text-emerald-100 rounded-xl cursor-pointer transition-all duration-200 hover:text-white hover:bg-red-500/20 hover:shadow-md group"
              >
                <div className="p-1.5 rounded-lg mr-3 bg-red-500/20 group-hover:bg-red-400/30 transition-colors duration-200">
                  <LogOut className="w-4 h-4" />
                </div>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Mobile header */}
        <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Admin Dashboard</h1>
          <div className="w-10" /> {/* Spacer */}
        </div>
        
        <div className="p-4 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
