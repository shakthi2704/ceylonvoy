import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants';

export default function HomePage() {
    return (
        <main className="flex-1 flex items-center justify-center">
            <div className="text-center px-6">
                <h1 className="font-display text-5xl font-bold text-emerald-primary">
                    {SITE_NAME}
                </h1>
                <p className="mt-4 text-xl text-body">{SITE_TAGLINE}</p>
                <div className="mt-8 flex gap-2 justify-center">
                    <span className="px-3 py-1 text-sm rounded-full bg-emerald-primary text-white">
                        Design system ✓
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-gold-accent text-white">
                        Fonts ✓
                    </span>
                </div>
            </div>
        </main>
    );
}