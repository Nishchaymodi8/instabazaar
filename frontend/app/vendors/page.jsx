"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { vendors as vendorSeedData } from "@/data/homeData";

export default function VendorsPage() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600 mb-3">
              Discover creators
            </p>
            <h1 className="text-4xl font-bold text-slate-900">Meet the vendors</h1>
            <p className="text-lg text-slate-600 mt-3 max-w-2xl">
              Browse featured sellers, view their store highlights, and jump into the vendor dashboard when you are signed in.
            </p>
          </div>

          {isLoggedIn && (
            <Link
              href="/vendor/dashboard"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg"
            >
              Open Vendor Dashboard
            </Link>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {vendorSeedData.map((vendor) => (
            <div
              key={vendor.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">{vendor.name}</h2>
                  <p className="text-sm text-slate-500 mt-1">@{vendor.username}</p>
                </div>
                {vendor.premium && (
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    Premium
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
                <span>{vendor.products} products</span>
                <span className="font-medium text-purple-600">View profile</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
