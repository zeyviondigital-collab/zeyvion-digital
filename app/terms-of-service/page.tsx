import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050507] text-zinc-300 py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/" className="text-xs text-amber-400 hover:underline">
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Terms of Service
        </h1>
        <p className="text-xs text-zinc-500">Effective Date: November 2026</p>

        <p>
          By accessing <strong>zeyviondigital.com</strong> or purchasing
          services from <strong>Zeyviondigital LLC</strong>, you agree to be
          bound by these Terms of Service.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">
          1. Scope of Services
        </h2>
        <p>
          Zeyviondigital LLC provides custom web development, UI/UX design,
          brand identity, and digital consulting services as outlined in our
          service packages or custom written proposals.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">
          2. Payments & Billing
        </h2>
        <p>
          All prices are listed in United States Dollars (USD). Projects require
          either full upfront payment for fixed packages or a 50% deposit prior
          to commencement, with the remaining balance due upon final delivery.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">
          3. Intellectual Property
        </h2>
        <p>
          Upon full payment, the client receives full ownership rights to the
          final custom deliverables, code, and design assets created for their
          project.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">
          4. Governing Law
        </h2>
        <p>
          These terms are governed by the laws of the State of Wyoming, United
          States. Contact: support@zeyviondigital.com.
        </p>
      </div>
    </div>
  );
}
