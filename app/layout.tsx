import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Prayul Bolya — Senior FlutterFlow Developer & Team Lead",
  description:
    "Senior FlutterFlow Developer & Team Lead: 4+ years, 35+ apps, 10 live on the App Store and Google Play. Firebase & Supabase backends, OpenAI & Claude, ICICI Bank. Download my CV.",
  keywords: ["Prayul Bolya", "Senior FlutterFlow Developer", "Flutter Developer", "FlutterFlow Developer", "Enterprise FlutterFlow", "Mobile App Developer", "AI Apps", "Jaipur"],
  authors: [{ name: "Prayul Bolya" }],
  openGraph: {
    title: "Prayul Bolya — Senior FlutterFlow Developer & Team Lead",
    description: "35+ apps · 10 live on the stores · OpenAI & Claude · Enterprise banking for ICICI Bank. Download my CV.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#07080f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
