import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { SITE_NAME } from '@/lib/constants';

export default async function HomePage() {
    const tHero = await getTranslations('hero');
    const tNav = await getTranslations('navigation');

    return (
        <main className="flex-1 flex items-center justify-center px-6">
            <div className="text-center space-y-4 max-w-2xl">
                <h1 className="font-display text-5xl font-bold text-emerald-primary">
                    {SITE_NAME}
                </h1>

                <p className="text-2xl text-heading font-semibold">
                    {tHero('headline')}
                </p>

                <p className="text-body text-lg">
                    {tHero('subheadline')}
                </p>

                <div className="flex gap-3 justify-center flex-wrap pt-6">
                    <Link
                        href="/en"
                        className="px-4 py-2 rounded-full bg-emerald-primary text-white text-sm hover:bg-emerald-dark transition-colors"
                    >
                        English (LTR)
                    </Link>

                    <Link
                        href="/ar"
                        className="px-4 py-2 rounded-full bg-gold-accent text-white text-sm hover:bg-emerald-dark transition-colors"
                    >
                        العربية (RTL)
                    </Link>
                </div>

                <p className="text-muted text-sm pt-2">
                    {tNav('requestQuote')}
                </p>
            </div>
        </main>
    );
}