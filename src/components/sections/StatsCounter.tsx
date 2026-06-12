'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

type StatConfig = {
    target: number;
    suffix: string;
    labelKey: 'happyTravelers' | 'curatedItineraries' | 'yearsExperience' | 'privateTours';
};

const STATS: StatConfig[] = [
    { target: 500, suffix: '+', labelKey: 'happyTravelers' },
    { target: 25, suffix: '+', labelKey: 'curatedItineraries' },
    { target: 10, suffix: '', labelKey: 'yearsExperience' },
    { target: 100, suffix: '%', labelKey: 'privateTours' },
];

function CountUp({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!started) return;

        const duration = 2200;
        let startTime: number | null = null;

        const tick = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4); // ease-out-quart
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target); // snap to exact value at end
        };

        requestAnimationFrame(tick);
    }, [started, target]);

    return <>{count}{suffix}</>;
}

export function StatsCounter() {
    const t = useTranslations('welcome');
    const ref = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="bg-emerald-deepest py-16 lg:py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                    {STATS.map(({ target, suffix, labelKey }) => (
                        <div key={labelKey} className="flex flex-col items-center gap-3 text-center">
                            <span className="font-display text-4xl lg:text-5xl font-bold text-gold-accent tabular-nums">
                                <CountUp target={target} suffix={suffix} started={started} />
                            </span>
                            <span className="text-[11px] tracking-[0.2em] uppercase text-white/60">
                                {t(labelKey)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}