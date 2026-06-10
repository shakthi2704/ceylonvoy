import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'ar'],
    defaultLocale: 'en',

    // When user visits /, redirect to /en (not /ar even if browser is Arabic)
    // We can adjust this later based on client preference
    localePrefix: 'always',
});