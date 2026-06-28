"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { getVendorProfile, getVendorStats } from "@/lib/vendorApi";
import ApprovalStatus from "@/app/components/vendor/ApprovalStatus";
import DashboardStats from "@/app/components/vendor/DashboardStats";
import QuickLinks from "@/app/components/vendor/QuickLinks";
import RecentProducts from "@/app/components/vendor/RecentProducts";

export default function VendorDashboard() {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();
  const [vendor, setVendor] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      fetchDashboardData();
    }
  }, [isLoggedIn]);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        logout();
        router.push("/login");
        return;
      }

      const [vendorData, statsData] = await Promise.all([
        getVendorProfile(token),
        getVendorStats(token),
      ]);
      setVendor(vendorData);
      setStats(statsData);
    } catch (error) {
      if (error?.message?.includes("401") || error?.message?.toLowerCase().includes("unauthorized")) {
        localStorage.removeItem("accessToken");
        logout();
        router.push("/login");
      } else {
        console.error("Failed to load dashboard:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Please login to access the vendor dashboard</p>
          <Link href="/login" className="text-blue-600 font-semibold">
            Go to Login →
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading dashboard...</p>
      </div>
    );
  }

  if (!vendor) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-lg font-semibold text-slate-900">No vendor data is available yet</p>
          <p className="text-sm text-slate-600 mt-2">
            Your account is signed in, but no vendor profile was found for this dashboard yet.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/vendors" className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
              Browse Vendors
            </Link>
            <Link href="/vendor/profile" className="rounded-2xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white">
              Create Vendor Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">
              Welcome back, {vendor.business_name}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/vendor/profile"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 border border-gray-200 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Edit Profile
            </Link>
            <Link
              href="/vendor/products/create"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Product
            </Link>
          </div>
        </div>

        {/* Approval Status */}
        <ApprovalStatus isApproved={vendor.verification_status === "verified"} />

        {/* Stats */}
        <DashboardStats
          stats={stats}
          subscriptionPlan={vendor.subscription_plan || "free"}
        />

        {/* Quick Links */}
        <QuickLinks vendorSlug={vendor.store_slug} />

        {/* Recent Products */}
        <RecentProducts />
      </div>

      <style jsx global>{`
        .glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease;
        }
      `}</style>
    </div>
  );
}
