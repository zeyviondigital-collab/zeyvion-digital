import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-300 py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/" className="text-xs text-amber-400 hover:underline">
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Refund & Cancellation Policy
        </h1>
        <p className="text-xs text-zinc-500">Effective Date: November 2026</p>

        <p>
          At <strong>Zeyviondigital LLC</strong>, we strive for complete client
          satisfaction on every custom digital project.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">
          1. Cancellations Before Project Start
        </h2>
        <p>
          If you cancel your order within 24 hours of payment and before design
          or development work has commenced, you are eligible for a 100% full
          refund.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">
          2. Projects in Progress
        </h2>
        <p>
          Because our services involve custom digital engineering and design
          labor, once work has started, refunds are prorated based on the
          percentage of milestones completed. Completed and delivered code or
          design files are non-refundable.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">
          3. Requesting a Refund
        </h2>
        <p>
          To request a cancellation or refund review, please email{" "}
          <span className="text-amber-300">support@zeyviondigital.com</span>{" "}
          with your order details. Approved refunds are processed back to the
          original payment method within 5–7 business days.
        </p>
      </div>
    </div>
  );
}
