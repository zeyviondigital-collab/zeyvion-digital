import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-300 py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/" className="text-xs text-amber-400 hover:underline">← Back to Home</Link>
        <h1 className="text-3xl font-semibold text-white">Refund & Cancellation Policy</h1>
        <p className="text-xs text-zinc-500">Effective Date: November 2026</p>
        <p>Orders canceled within 24 hours before project work begins qualify for a 100% refund. Once custom design or engineering begins, refunds are prorated based on completed milestones. Delivered files are non-refundable.</p>
        <p>For refund inquiries, email support@zeyviondigital.com. Approved refunds are processed within 5–7 business days.</p>
      </div>
    </div>
  );
}
