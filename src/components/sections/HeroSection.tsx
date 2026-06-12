import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { buttonVariants } from '@/components/ui/Button';

export async function HeroSection() {
    const t = await getTranslations('hero');

    return (
        <section className="relative h-[100vh] min-h-[640px] flex items-center overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--color-gold-accent)] z-20" />

            {/* Background Image — replace src with real image when available */}
            <Image
                src="/images/hero/bg-3.jpg"
                alt="Sri Lanka landscape"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center scale-105"
            />

            {/* Gradient overlay — heavier at bottom for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/25 to-black/60" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                <div className="max-w-3xl">

                    {/* Eyebrow label */}
                    <p
                        className="text-gold-accent text-xs font-semibold tracking-[0.35em] uppercase mb-5
                       opacity-0 animate-fade-up [animation-delay:100ms] [animation-fill-mode:forwards]"
                    >
                        Sri Lanka
                    </p>

                    {/* Headline */}
                    <h1
                        className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold text-white leading-[1.1] mb-6
                       opacity-0 animate-fade-up [animation-delay:250ms] [animation-fill-mode:forwards]"
                    >
                        {t('headline')}
                    </h1>

                    {/* Subheadline */}
                    <p
                        className="text-white/75 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-10
                        opacity-0 animate-fade-up [animation-delay:400ms] [animation-fill-mode:forwards]"
                    >
                        {t('subheadline')}
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-wrap gap-4 justify-center
                       opacity-0 animate-fade-up [animation-delay:550ms] [animation-fill-mode:forwards]"
                    >
                        <Link
                            href="/tours"
                            className={buttonVariants({ variant: 'outline-gold', size: 'lg' })}
                        >
                            {t('exploreTours')}
                        </Link>
                        <Link
                            href="/plan-your-journey"
                            className={buttonVariants({ variant: 'gold', size: 'lg' })}
                        >
                            {t('requestQuote')}
                        </Link>
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-up [animation-delay:900ms] [animation-fill-mode:forwards]">
                <span className="text-white/70 text-[10px] tracking-[0.3em] uppercase">
                    Scroll
                </span>
                <div className="w-5 h-8 rounded-full border-2 border-white/60 flex items-start justify-center pt-1.5">
                    <div className="w-0.5 h-2 bg-white/80 rounded-full animate-bounce" />
                </div>
            </div>

        </section>
    );
}