const DESTINATIONS = [
    'Sigiriya',
    'Kandy',
    'Galle',
    'Ella',
    'Yala',
    'Nuwara Eliya',
    'Mirissa',
    'Anuradhapura',
    'Jaffna',
    'Trincomalee',
    'Arugam Bay',
    'Dambulla',
    'Polonnaruwa',
    'Horton Plains',
    'Wilpattu',
];

export function MarqueeStrip() {
    const items = [...DESTINATIONS, ...DESTINATIONS];

    return (
        <div className="bg-emerald-deepest border-t border-white/5 overflow-hidden py-3 group">
            <div className="flex whitespace-nowrap [animation:marquee_40s_linear_infinite] [will-change:transform] marquee-track">
                {items.map((name, i) => (
                    <span key={i} className="inline-flex items-center">
                        <span className="text-[12px] tracking-[0.18em] uppercase text-white/60 font-medium px-5 lg:text-[16px]">
                            {name}
                        </span>
                        <span className="text-gold-accent text-[20px]">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}