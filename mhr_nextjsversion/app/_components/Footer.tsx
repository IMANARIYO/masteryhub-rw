"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, ChevronRight, Share2, Camera, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const quickLinks = [
  { label: "Our Peers Portfolios", href: "/studentsProjects" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Condition", href: "#" },
];

const galleryImages = [
  { src: "/img/MHR1-min.jpg", alt: "MasteryHub Web development class" },
  { src: "/img/MHR2-min.jpg", alt: "MasteryHub Web development class" },
  { src: "/img/MHR3-min.jpg", alt: "Backend development at MasteryHub" },
  { src: "/img/MHR4-min.jpg", alt: "MasteryHub course" },
  { src: "/img/MHR5-min.jpg", alt: "MasteryHub course" },
  { src: "/img/MHR6-min.jpg", alt: "MasteryHub course" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe() {
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you for subscribing! You'll receive our weekly newsletter.");
    setEmail("");
  }

  return (
    <footer className="relative overflow-hidden bg-[rgba(0,86,45,0.92)] text-white mt-10">
      <div className="container mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 py-1 text-sm text-white/70 hover:text-white hover:pl-2 transition-all duration-300"
                >
                  <ChevronRight className="size-3.5 text-primary shrink-0" />
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* DBI Trust Seal */}
            <div className="mt-5">
              <Link href="https://certification.dbi.rw/public?name=MASTERY" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/img/MHR LOGO.png"
                  alt="MasteryHub DBI Trust Seal"
                  width={160}
                  height={60}
                  className="object-contain border-0 outline-0"
                />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link
                href="https://maps.app.goo.gl/RcMRjjPjfumutn9B7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/80 hover:text-white transition-colors"
              >
                <MapPin className="size-4 mt-0.5 shrink-0 text-primary" />
                KG 31 Ave, Kigali-Kinyinya
              </Link>
              <Link
                href="tel:+250782228575"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                (+250) 782 228 575
              </Link>
              <Link
                href="mailto:info@masteryhub.co.rw"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                info@masteryhub.co.rw
              </Link>
            </div>
            {/* Socials */}
            <div className="flex gap-2 mt-5">
              {[
                { icon: Share2, href: "https://x.com/masteryhub_Rwa", label: "Twitter / X" },
                { icon: MessageCircle, href: "https://wa.me/message/J2W6LE7QIQZHI1", label: "WhatsApp" },
                { icon: Camera, href: "https://www.instagram.com/mastery_hub_of_rwanda/", label: "Instagram" },
                { icon: Briefcase, href: "https://www.linkedin.com/company/mastery-hub-of-rwanda", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="size-10 flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Gallery</h4>
            <div className="grid grid-cols-3 gap-1.5">
              {galleryImages.map((img) => (
                <div key={img.src} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="80px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Subscribe to our weekly newsletter, where we talk about trending technologies.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full focus:border-primary focus:ring-primary"
              />
              <Button
                onClick={handleSubscribe}
                className="shrink-0 bg-primary hover:bg-[#11482a] text-white rounded-full px-4"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 py-5 text-center text-sm text-white/60">
          &copy;{" "}
          <Link href="/" className="text-yellow-300 hover:underline">
            Mastery Hub Of Rwanda
          </Link>{" "}
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
