import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umar Inamdar — AI & Backend Developer",
  description:
    "Portfolio of Umar Inamdar, an AI & Backend Developer building practical software, reliable backend systems, and AI-powered applications across the Land of Ooo.",
  keywords: [
    "Umar Inamdar",
    "AI Developer",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Python",
    "RAG",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Umar Inamdar" }],
  openGraph: {
    title: "Umar Inamdar — AI & Backend Developer",
    description:
      "A developer portfolio existing inside a calm, colorful, lo-fi adventure world.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umar Inamdar — AI & Backend Developer",
    description:
      "A developer portfolio existing inside a calm, colorful, lo-fi adventure world.",
  },
};

export const viewport: Viewport = {
  themeColor: "#C7F5EE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceMono.variable}`}>
      <body className="antialiased selection:bg-ooo-marceline selection:text-white min-h-screen relative font-sans text-ooo-cosmic bg-[#D8F0F3]">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
