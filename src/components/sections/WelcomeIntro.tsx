import { getTranslations } from 'next-intl/server';

// const STATS = [
//     { value: '8', labelKey: 'unescoSites' },
//     { value: '21', labelKey: 'nationalParks' },
//     { value: '1,340km', labelKey: 'coastline' },
//     { value: '2,500+', labelKey: 'yearsOfHistory' },
// ] as const;

export async function WelcomeIntro() {
    const t = await getTranslations('welcome');

    return (
        <section className="bg-ivory pt-24 lg:pt-32 pb-16 lg:pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Eyebrow */}
                <p className="text-gold-accent text-base font-semibold tracking-[0.35em] uppercase mb-8">
                    {t('eyebrow')}
                </p>

                {/* Headline */}
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-dark leading-[1.15] mb-8">
                    {t('headline')}
                </h2>

                {/* Subtitle */}
                <p className="text-body text-lg leading-relaxed max-w-2xl mx-auto mb-20">
                    {t('subtitle')}
                </p>

                {/* Stats */}
                {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
                    {STATS.map(({ value, labelKey }) => (
                        <div key={labelKey} className="flex flex-col items-center gap-2">
                            <span className="font-display text-4xl lg:text-5xl font-bold text-gold-accent">
                                {value}
                            </span>
                            <span className="text-[11px] tracking-[0.2em] uppercase text-muted">
                                {t(labelKey)}
                            </span>
                        </div>
                    ))}
                </div> */}

            </div>
        </section>
    );
}