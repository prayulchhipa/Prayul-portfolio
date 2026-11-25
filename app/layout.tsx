import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Prayul Bolya — Software Engineer · FlutterFlow & Flutter",
  description:
    "Software Engineer (FlutterFlow, Flutter, Firebase, Supabase, AI): 4+ years, 40 apps, ICICI Bank journeys used by millions daily. Team lead. Download my CV.",
  keywords: ["Prayul Bolya", "Flutter Developer", "FlutterFlow Developer", "Enterprise FlutterFlow", "Mobile App Developer", "AI Apps", "Jaipur"],
  authors: [{ name: "Prayul Bolya" }],
  openGraph: {
    title: "Prayul Bolya — Software Engineer · FlutterFlow & Flutter",
    description: "40 apps · ICICI Bank journeys used by millions daily · OpenAI & Claude · Team lead. Download my CV.",
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
