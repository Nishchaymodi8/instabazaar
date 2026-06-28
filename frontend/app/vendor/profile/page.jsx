"use client";

import { useAuth } from "@/context/AuthContext";
import VendorProfile from "@/app/components/vendor/VendorProfile";
import Link from "next/link";

export default function VendorProfilePage() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Please login to access this page</p>
          <Link href="/login" className="text-blue-600 font-semibold">
            Go to Login →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/vendor/dashboard"
          className="text-blue-600 font-semibold mb-6 inline-block hover:text-blue-700"
        >
          ← Back to Dashboard
        </Link>
        <VendorProfile />
      </div>
    </div>
  );
}
