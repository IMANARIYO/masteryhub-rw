type Props = {
    children: React.ReactNode;
};

export default function SectionLabel({ children }: Props): React.JSX.Element {
    return (
        <div className="inline-flex items-center gap-3">
            {/* Left ornament */}
            <div className="hidden sm:flex items-center gap-1" aria-hidden="true">
                <span className="block h-[2px] w-8 rounded-full bg-gradient-to-r from-transparent to-primary/40" />
                <span className="block h-[3px] w-5 rounded-full bg-gradient-to-r from-primary/60 to-primary" />
                <span className="block size-2 rounded-full bg-primary shadow-[0_0_6px_rgba(4,163,76,0.6)]" />
            </div>

            {/* Pill */}
            <span className="
        relative inline-flex items-center gap-1.5
        uppercase font-extrabold tracking-[0.15em] text-xs
        text-primary
        bg-gradient-to-br from-white to-[#f0fbf5]
        px-5 py-2 rounded-full
        shadow-[0_2px_12px_rgba(4,163,76,0.18),inset_0_1px_0_rgba(255,255,255,0.9)]
        border border-primary/20
        ring-1 ring-primary/10
      ">
                {/* Subtle inner glow dot */}
                <span className="size-1.5 rounded-full bg-primary/70 shadow-[0_0_4px_rgba(4,163,76,0.8)]" aria-hidden="true" />
                {children}
            </span>

            {/* Right ornament */}
            <div className="hidden sm:flex items-center gap-1" aria-hidden="true">
                <span className="block size-2 rounded-full bg-primary shadow-[0_0_6px_rgba(4,163,76,0.6)]" />
                <span className="block h-[3px] w-5 rounded-full bg-gradient-to-l from-primary/60 to-primary" />
                <span className="block h-[2px] w-8 rounded-full bg-gradient-to-l from-transparent to-primary/40" />
            </div>
        </div>
    );
}
