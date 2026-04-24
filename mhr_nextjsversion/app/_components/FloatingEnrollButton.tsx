import Link from "next/link";
import { UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function FloatingEnrollButton() {
  return (
    <Link
      href="https://form.jotform.com/250560825113045"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant: "default" }),
        "fixed bottom-6 right-6 z-50 bg-primary hover:bg-[#11482a] text-white rounded-full shadow-[0_4px_20px_rgba(4,163,76,0.4)] hover:shadow-[0_6px_25px_rgba(4,163,76,0.5)] hover:-translate-y-0.5 transition-all"
      )}
    >
      <UserPlus className="size-4 mr-1" /> Enroll Now
    </Link>
  );
}
