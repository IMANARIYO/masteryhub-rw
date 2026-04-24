"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ExternalLink, Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

const servicesLinks = [
  { label: "Software Development", href: "/softwaredev" },
  { label: "Internship", href: "/internership" },
  { label: "Training", href: "/training" },
  { label: "Tech Consultancy", href: "/consultancy" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.08)] border-b border-black/5">
      <div className="flex items-center justify-between h-[70px] px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/img/MHR LOGO.png" alt="Mastery Hub of Rwanda Logo" width={90} height={50} className="object-contain" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            href="https://codeforimpact.rw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#181d38] hover:text-primary transition-colors"
          >
            Code For Impact <ExternalLink className="size-3" />
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link-underline px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors",
                pathname === link.href ? "text-primary active" : "text-[#181d38] hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-link-underline flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-[#181d38] hover:text-primary transition-colors">
              Services <ChevronDown className="size-3 transition-transform group-hover:rotate-180" />
            </button>
            <div
              className={cn(
                "absolute top-full left-0 mt-0 w-52 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] py-2 transition-all duration-300 origin-top",
                servicesOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
              )}
            >
              {servicesLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-5 py-2 text-sm text-[#181d38] hover:text-primary hover:pl-6 transition-all hover:bg-[#F0FBFC]"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="https://form.jotform.com/250560825113045"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center h-[70px] px-8 bg-primary hover:bg-[#11482a] text-white font-semibold uppercase tracking-wide text-sm transition-colors"
          >
            Join Now →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger className="lg:hidden inline-flex items-center justify-center size-9 rounded-md text-[#181d38] hover:bg-gray-100 transition-colors">
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center px-6 h-[70px] border-b">
                <Image src="/img/MHR LOGO.png" alt="MHR Logo" width={70} height={40} className="object-contain" />
              </div>
              <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
                <Link
                  href="https://codeforimpact.rw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-[#181d38] hover:text-primary hover:bg-[#F0FBFC] rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Code For Impact <ExternalLink className="size-3" />
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-2.5 text-sm font-semibold uppercase rounded-lg transition-colors",
                      pathname === link.href
                        ? "text-primary bg-[#F0FBFC]"
                        : "text-[#181d38] hover:text-primary hover:bg-[#F0FBFC]"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-3 py-1 text-xs font-bold uppercase text-muted-foreground tracking-wider mt-2">
                  Services
                </div>
                {servicesLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="px-6 py-2 text-sm text-[#181d38] hover:text-primary hover:bg-[#F0FBFC] rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </nav>
              <div className="p-4 border-t">
                <Link
                  href="https://form.jotform.com/250560825113045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "default" }), "w-full bg-primary hover:bg-[#11482a] text-white font-semibold justify-center")}
                  onClick={() => setMobileOpen(false)}
                >
                  Join Now →
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
