import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

export const metadata: Metadata = {
  title: "Evoked Beauty | Lash & brow technician in Wolverhampton",
  description: "Qualified and insured lash extensions, lash lifts and brows in Wolverhampton. DM to book.",
  icons: { icon: "/logo.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={figtree.variable}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
