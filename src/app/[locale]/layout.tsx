import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { cairo, playfairDisplay } from '@/lib/fonts';
import { routing } from '@/i18n/routing';
import '../globals.css';

export const metadata: Metadata = {
    title: {
        default: 'CeylonVoy — Luxury Sri Lanka Tours',
        template: '%s | CeylonVoy',
    },
    description:
        'Discover Sri Lanka with premium, tailor-made tours designed for discerning travelers from the Middle East and beyond.',
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

    // Reject any unsupported locale immediately
    if (!routing.locales.includes(locale as typeof routing.locales[number])) {
        notFound();
    }

    const isRTL = locale === 'ar';

    // Load all messages for this locale (passed to client components)
    const messages = await getMessages();

    return (
        <html
            lang={locale}
            dir={isRTL ? 'rtl' : 'ltr'}
            className={`${cairo.variable} ${playfairDisplay.variable}`}
        >
            <body className="bg-ivory text-body font-sans antialiased min-h-screen flex flex-col">
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}