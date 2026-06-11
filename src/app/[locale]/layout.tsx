import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { cairo, playfairDisplay } from '@/lib/fonts';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '../globals.css';

export const metadata: Metadata = {
    title: {
        default: 'CeylonVoy — Luxury Sri Lanka Tours',
        template: '%s | CeylonVoy',
    },
    description:
        'Discover Sri Lanka with premium, tailor-made tours designed for discerning travelers from the Middle East and beyond.',

    icons: {
        icon: [
            { url: '/fevicon/favicon.ico' },
            { url: '/fevicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/fevicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            {
                url: '/fevicon/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
        other: [
            {
                rel: 'android-chrome',
                url: '/fevicon/android-chrome-192x192.png',
            },
            {
                rel: 'android-chrome',
                url: '/fevicon/android-chrome-512x512.png',
            },
        ],
    },

    manifest: '/fevicon/site.webmanifest',
};
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as typeof routing.locales[number])) {
        notFound();
    }

    const isRTL = locale === 'ar';
    const messages = await getMessages();

    return (
        <html
            lang={locale}
            dir={isRTL ? 'rtl' : 'ltr'}
            className={`${cairo.variable} ${playfairDisplay.variable}`}
        >
            <body className="bg-ivory text-body font-sans antialiased min-h-screen flex flex-col">
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {/* pt-20 clears the fixed header (h-20) */}
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}