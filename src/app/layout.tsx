import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lake Kawana Hotel | Sunshine Coast Accommodation",
  description:
    "Lake Kawana Hotel offers premium accommodation on the Sunshine Coast, Queensland. Located lakeside in Birtinya with restaurant, bar, free WiFi, and modern rooms. Book your stay today.",
  keywords:
    "Lake Kawana Hotel, Sunshine Coast accommodation, Birtinya hotel, Queensland hotel, lakeside accommodation",
  openGraph: {
    title: "Lake Kawana Hotel | Sunshine Coast Accommodation",
    description:
      "Premium lakeside accommodation on the Sunshine Coast. Restaurant & bar, free WiFi, modern rooms.",
    type: "website",
    url: "https://lakekawanahotel.com.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
