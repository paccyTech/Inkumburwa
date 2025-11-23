"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { TrendingUp, TrendingDown, Calendar, Users, DollarSign, BarChart3, PieChart, Activity, CheckCircle, Settings } from "lucide-react";

// Mock analytics data - filtered for upcoming events only
const mockAnalytics = {
  overview: {
    totalEvents: 1, // Only upcoming events
    totalBookings: 4, // From Heritage Showcase
    totalRevenue: 155000, // From Heritage Showcase
    averageTicketPrice: 38750, // 155000 / 4
    attendanceRate: 75 // 3/4 * 100
  },
  monthlyRevenue: [
    { month: "Nov", revenue: 45000 },
    { month: "Dec", revenue: 65000 },
    { month: "Jan", revenue: 45000 }
  ],
  ticketTypeDistribution: [
    { type: "Standard", count: 2, percentage: 50 },
    { type: "VIP", count: 1, percentage: 25 },
    { type: "VVIP", count: 1, percentage: 25 }
  ],
  topEvents: [
    {
      title: "Heritage Showcase",
      bookings: 4,
      revenue: 155000,
      attendance: 3
    }
  ],
  recentActivity: [
    {
      type: "booking",
      description: "New booking for Heritage Showcase",
      amount: 20000,
      time: "1 day ago"
    },
    {
      type: "payment",
      description: "Payment received for VIP ticket - Heritage Showcase",
      amount: 40000,
      time: "2 days ago"
    },
    {
      type: "attendance",
      description: "Customer checked in for Heritage Showcase",
      amount: null,
      time: "3 days ago"
    }
  ]
};

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d");
  const analytics = mockAnalytics;
  const router = useRouter();
  const pathname = usePathname();

  const formatCurrency = (amount: number): string => {
    return `${amount.toLocaleString()} RWF`;
  };

  const getChangeIndicator = (value: number, isPositive: boolean) => {
    return (
      <div className={`flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        <span className="text-xs font-medium">{Math.abs(value)}%</span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Upcoming Events Analytics</h1>
            <p className="text-gray-600 mt-2">Track performance and insights for upcoming cultural events</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-200">
              <BarChart3 className="w-5 h-5 mr-2" />
              Generate Report
            </button>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Events</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.overview.totalEvents}</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              {getChangeIndicator(12, true)}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.overview.totalBookings}</p>
                </div>
                <Users className="w-8 h-8 text-green-600" />
              </div>
              {getChangeIndicator(8, true)}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(analytics.overview.totalRevenue)}</p>
                </div>
                <DollarSign className="w-8 h-8 text-emerald-600" />
              </div>
              {getChangeIndicator(15, true)}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Ticket Price</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(analytics.overview.averageTicketPrice)}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              {getChangeIndicator(5, true)}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.overview.attendanceRate}%</p>
                </div>
                <Activity className="w-8 h-8 text-orange-600" />
              </div>
              {getChangeIndicator(3, false)}
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Revenue Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue</h3>
              <div className="h-64 flex items-end justify-between space-x-2">
                {analytics.monthlyRevenue.map((data, index) => (
                  <div key={data.month} className="flex flex-col items-center flex-1">
                    <div
                      className="bg-emerald-500 rounded-t w-full mb-2 transition-all hover:bg-emerald-600"
                      style={{ height: `${(data.revenue / 250000) * 200}px` }}
                    ></div>
                    <span className="text-xs text-gray-600">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ticket Distribution */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ticket Type Distribution</h3>
              <div className="space-y-4">
                {analytics.ticketTypeDistribution.map((item) => (
                  <div key={item.type} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        item.type === 'Standard' ? 'bg-emerald-500' :
                        item.type === 'VIP' ? 'bg-purple-500' :
                        item.type === 'VVIP' ? 'bg-orange-500' : 'bg-blue-500'
                      }`}></div>
                      <span className="text-sm font-medium text-gray-900">{item.type}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">{item.count} tickets</span>
                      <span className="text-sm font-medium text-gray-900">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Events */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events Performance</h3>
              <div className="space-y-4">
                {analytics.topEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{event.title}</h4>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                        <span>{event.bookings} bookings</span>
                        <span>{event.attendance}/{event.bookings} attended</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{formatCurrency(event.revenue)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Upcoming Events Activity</h3>
              <div className="space-y-4">
                {analytics.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'booking' ? 'bg-blue-100' :
                      activity.type === 'payment' ? 'bg-green-100' : 'bg-purple-100'
                    }`}>
                      {activity.type === 'booking' && <Users className="w-4 h-4 text-blue-600" />}
                      {activity.type === 'payment' && <DollarSign className="w-4 h-4 text-green-600" />}
                      {activity.type === 'attendance' && <CheckCircle className="w-4 h-4 text-purple-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.description}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">{activity.time}</span>
                        {activity.amount && (
                          <span className="text-xs font-medium text-emerald-600">
                            {formatCurrency(activity.amount)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
  
  );
}
