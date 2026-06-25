import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Forever Florists Boutique - Fresh Flowers & Gifts in Prince George",
  description:
    "Discover beautiful floral arrangements, gifts, jewelry, chocolates & wedding services. Premium florist boutique in Prince George, BC.",
  keywords:
    "florist, flowers, Prince George, wedding flowers, gifts, boutique, fresh flowers",
  authors: [{ name: "Forever Florists Boutique" }],
  openGraph: {
    title: "Forever Florists Boutique",
    description:
      "Beautiful fresh flowers and curated gifts for every occasion.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Forever Florists Boutique",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
