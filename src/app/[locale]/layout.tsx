import type { Metadata } from 'next';
import { cairo, playfairDisplay } from '@/lib/fonts';
import '../globals.css';

export const metadata: Metadata = {
    title: {
        default: 'CeylonVoy — Luxury Sri Lanka Tours',
        template: '%s | CeylonVoy',
    },
    description:
        'Discover Sri Lanka with premium, tailor-made tours designed for discerning travelers.',
};

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const isRTL = locale === 'ar';

    return (
        <html
            lang={locale}
            dir={isRTL ? 'rtl' : 'ltr'}
            className={`${cairo.variable} ${playfairDisplay.variable}`}
        >
            <body className="bg-ivory text-body font-sans antialiased min-h-screen flex flex-col">
                {children}
            </body>
        </html>
    );
}