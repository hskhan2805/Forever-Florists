import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingPetals from "@/components/FloatingPetals";

export const metadata: Metadata = {
  title: "Forever Florists Boutique | Prince George, BC",
  description:
    "Fragrant fresh flowers, handcrafted gifts, fine jewelry & chocolates. Prince George's premier floral boutique at 6551 Hart Highway.",
  keywords:
    "florist Prince George BC, wedding flowers, fresh bouquets, gifts, jewelry, chocolates, forever florists boutique",
  authors: [{ name: "Forever Florists Boutique" }],
  openGraph: {
    title: "Forever Florists Boutique | Prince George, BC",
    description:
      "Beautiful fresh flowers and curated gifts for every occasion in Prince George.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-forest-900 text-cream overflow-x-hidden">
        <ScrollProgress />
        <FloatingPetals />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
