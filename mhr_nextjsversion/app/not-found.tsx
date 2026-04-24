import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound(): React.JSX.Element {
    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 text-center">
            {/* Logo */}
            <div className="mb-8">
                <Image
                    src="/img/MHR LOGO.png"
                    alt="Mastery Hub of Rwanda"
                    width={120}
                    height={70}
                    className="object-contain mx-auto"
                    priority
                />
            </div>

            {/* 404 display */}
            <div className="relative mb-6">
                <span className="text-[8rem] md:text-[12rem] font-extrabold leading-none text-[#04a34c]/10 select-none">
                    404
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl md:text-7xl font-extrabold text-[#04a34c]">404</span>
                </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-[#181d38] mb-3">
                Page Not Found
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-md mb-10 leading-relaxed">
                Looks like this page took a wrong turn. The page you&apos;re looking for
                doesn&apos;t exist or has been moved.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 justify-center">
                <Link
                    href="/"
                    className={cn(
                        buttonVariants({ variant: "default" }),
                        "bg-primary hover:bg-[#11482a] text-white rounded-full px-8 gap-2"
                    )}
                >
                    <Home className="size-4" /> Back to Home
                </Link>
                <Link
                    href="javascript:history.back()"
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                        "rounded-full px-8 gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                    )}
                >
                    <ArrowLeft className="size-4" /> Go Back
                </Link>
            </div>

            {/* Decorative section links */}
            <div className="mt-14">
                <p className="text-sm text-muted-foreground mb-4">Or explore these pages:</p>
                <div className="flex flex-wrap gap-3 justify-center text-sm">
                    {[
                        { label: "Courses", href: "/courses" },
                        { label: "About Us", href: "/about" },
                        { label: "Contact", href: "/contact" },
                        { label: "Internship", href: "/internership" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-primary hover:underline font-semibold"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
