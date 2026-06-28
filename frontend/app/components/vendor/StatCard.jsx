"use client";

import Link from "next/link";

export default function StatCard({ icon, title, value, subtitle, action, actionText }) {
  return (
    <div className="glass rounded-2xl border border-white/40 shadow-sm p-6 card-hover animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
      {action && actionText && (
        <Link
          href={action}
          className="text-xs text-brand-600 font-semibold hover:text-brand-700 mt-1 inline-block"
        >
          {actionText} →
        </Link>
      )}
    </div>
  );
}
