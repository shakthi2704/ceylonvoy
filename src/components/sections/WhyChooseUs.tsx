import { getTranslations } from 'next-intl/server';
import { Users, Compass, Car, Award, MapPin, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type WhyKey =
    | 'privateTours'
    | 'tailorMade'
    | 'transportation'
    | 'guides'
    | 'localExpertise'
    | 'arabicFriendly';

const CARDS: { key: WhyKey; icon: LucideIcon; delay: string }[] = [
    { key: 'privateTours', icon: Users, delay: '0ms' },
    { key: 'tailorMade', icon: Compass, delay: '100ms' },
    { key: 'transportation', icon: Car, delay: '200ms' },
    { key: 'guides', icon: Award, delay: '300ms' },
    { key: 'localExpertise', icon: MapPin, delay: '400ms' },
    { key: 'arabicFriendly', icon: MessageCircle, delay: '500ms' },
];

export async function WhyChooseUs() {
    const t = await getTranslations('whyChooseUs');

    return (
        <section className="bg-ivory py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Section Header ─────────────────────────── */}
                <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
                    <p className="text-gold-accent text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                        {t('minititle')}
                    </p>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-heading mb-5">
                        {t('title')}
                    </h2>
                    {/* Gold decorative divider */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="h-px w-12 bg-gold-accent/40" />
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
                        <span className="h-px w-12 bg-gold-accent/40" />
                    </div>
                    <p className="text-body text-lg leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* ── Cards Grid ─────────────────────────────── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {CARDS.map(({ key, icon: Icon, delay }) => (
                        <div
                            key={key}
                            className={cn(
                                'group bg-white rounded-2xl p-8',
                                'border border-gray-200 shadow-md',
                                'hover:border-gold-accent/40 hover:shadow-xl hover:-translate-y-1.5',
                                'transition-all duration-300 ease-out',
                                'opacity-0 animate-fade-up [animation-fill-mode:forwards]'
                            )}
                            style={{ animationDelay: delay }}
                        >
                            {/* Icon container */}
                            <div className="w-12 h-12 rounded-xl bg-gold-accent/15 flex items-center justify-center mb-6 group-hover:bg-gold-accent/25 transition-colors duration-300">
                                <Icon
                                    className="w-6 h-6 text-gold-accent"
                                    strokeWidth={1.75}
                                />
                            </div>

                            {/* Title */}
                            <h3 className="font-display text-xl font-bold text-heading mb-3">
                                {t(`${key}.title` as any)}
                            </h3>

                            {/* Description */}
                            <p className="text-body leading-relaxed text-sm">
                                {t(`${key}.description` as any)}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}