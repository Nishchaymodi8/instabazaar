"use client";

export default function ApprovalStatus({ isApproved }) {
  if (isApproved) return null;

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <span className="text-2xl">⏳</span>
        <div>
          <p className="font-semibold text-amber-800">Pending Approval</p>
          <p className="text-sm text-amber-600">
            Your store is awaiting admin approval. Products won't be visible to
            customers until approved.
          </p>
        </div>
      </div>
    </div>
  );
}
