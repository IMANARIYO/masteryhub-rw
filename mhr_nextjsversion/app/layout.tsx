import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/app/_components/Navbar";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mastery Hub | Software Training, IT Solutions & Language Courses",
  description:
    "Mastery Hub of Rwanda provides expert training in Software Development, IT solutions, English language skills, music training, and internship programs. Empower your future with us!",
  keywords:
    "Mastery Hub of Rwanda, IT training, Software Development, English Courses, Music Training, Internship Programs, Tech Education in Rwanda",
  authors: [{ name: "Mastery Hub of Rwanda" }],
  robots: "index, follow",
  openGraph: {
    title: "Mastery Hub of Rwanda | Expert Training & IT Solutions",
    description:
      "Join Mastery Hub of Rwanda for top-tier training in software development, IT solutions, language learning, and music education. Start your journey today!",
    url: "https://masteryhub.co.rw",
    type: "website",
    images: [{ url: "https://masteryhub.co.rw/img/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mastery Hub of Rwanda | Expert Training & IT Solutions",
    description:
      "Mastery Hub of Rwanda offers cutting-edge courses in IT, software development, English, music, and professional internships. Learn from experts today!",
    images: ["https://masteryhub.co.rw/img/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-(family-name:--font-nunito)">
        <Navbar />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
