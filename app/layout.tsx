import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zeyviondigital LLC | Bespoke Digital Engineering & Luxury Brand Systems",
  description:
    "Zeyviondigital LLC crafts high-performance web applications, digital brand architecture, and conversion-engineered experiences for modern enterprises.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.className} bg-[#050507] text-zinc-100 antialiased selection:bg-amber-500/30 selection:text-amber-200`}
      >
        {children}
      </body>
    </html>
  );
}
