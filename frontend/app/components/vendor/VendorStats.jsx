"use client";

import { useState, useEffect } from "react";
import { getVendorStats } from "@/lib/vendorApi";
import { useAuth } from "@/context/AuthContext";

export default function VendorStats() {
  const { isLoggedIn } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetchStats();
    }
  }, [isLoggedIn]);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("accessToken");
      const data = await getVendorStats(token);
      setStats(data);
    } catch (err) {
      setError("Failed to load stats");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-center">Loading stats...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">{error}</div>;
  }

  if (!stats) {
    return <div className="p-6 text-center">No stats available</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-sm text-gray-600 mb-2">Total Products</p>
        <p className="text-3xl font-bold text-gray-900">
          {stats.total_products || 0}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-sm text-gray-600 mb-2">Total Sales</p>
        <p className="text-3xl font-bold text-gray-900">
          ${stats.total_sales || 0}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-sm text-gray-600 mb-2">Total Orders</p>
        <p className="text-3xl font-bold text-gray-900">
          {stats.total_orders || 0}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-sm text-gray-600 mb-2">Average Rating</p>
        <p className="text-3xl font-bold text-gray-900">
          {stats.average_rating || 0} ⭐
        </p>
      </div>
    </div>
  );
}
