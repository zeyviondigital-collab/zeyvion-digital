import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-300 py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/" className="text-xs text-amber-400 hover:underline">← Back to Home</Link>
        <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
        <p className="text-xs text-zinc-500">Effective Date: November 2026</p>
        <p>Zeyviondigital LLC operates zeyviondigital.com. We respect your privacy and collect information (name, email, company details) solely to deliver contracted digital services and process payments securely via Stripe. We never sell your data.</p>
        <p>Contact: support@zeyviondigital.com | Zeyviondigital LLC, 30 N Gould St Ste R, Sheridan, WY 82801, USA.</p>
      </div>
    </div>
  );
}
