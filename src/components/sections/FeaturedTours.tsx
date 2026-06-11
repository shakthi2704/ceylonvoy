import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { buttonVariants } from '@/components/ui/Button';
import { featuredTours } from '@/data/tours';

export async function FeaturedTours() {
    const t = await getTranslations('featuredTours');

    return (
        <section className="bg-ivory py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Section Header ─────────────────────────── */}
                <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
                    <p className="text-gold-accent text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                        Curated Journeys
                    </p>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-heading mb-5">
                        {t('title')}
                    </h2>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="h-px w-12 bg-gold-accent/40" />
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
                        <span className="h-px w-12 bg-gold-accent/40" />
                    </div>
                    <p className="text-body text-lg leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* ── Tour Cards ─────────────────────────────── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                    {featuredTours.map((tour) => (
                        <article
                            key={tour.id}
                            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={tour.heroImage}
                                    alt={tour.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Duration badge */}
                                <div className="absolute top-3 start-3 bg-emerald-deepest/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide">
                                    {tour.duration}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-5">

                                <Link href={`/tours/${tour.slug}`} className="block mb-3">
                                    <h3 className="font-display text-lg font-bold text-heading leading-snug hover:text-gold-accent transition-colors duration-200">
                                        {tour.title}
                                    </h3>
                                </Link>

                                {/* Highlights */}
                                <ul className="space-y-1.5 mb-5 flex-1">
                                    {tour.highlights.slice(0, 3).map((highlight) => (
                                        <li key={highlight} className="flex items-start gap-2 text-body text-sm">
                                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gold-accent/70 shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <div className="border-t border-gray-100 pt-4">
                                    <Link
                                        href="/plan-your-journey"
                                        className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-primary hover:text-gold-accent transition-colors duration-200"
                                    >
                                        {t('requestQuote')}
                                        <ChevronRight className="w-4 h-4 shrink-0 rtl:rotate-180" />
                                    </Link>
                                </div>

                            </div>
                        </article>
                    ))}
                </div>

                {/* ── View All CTA ────────────────────────────── */}
                <div className="text-center">
                    <Link
                        href="/tours"
                        className={buttonVariants({ variant: 'outline-gold', size: 'lg' })}
                    >
                        {t('viewAll')}
                    </Link>
                </div>

            </div>
        </section>
    );
}