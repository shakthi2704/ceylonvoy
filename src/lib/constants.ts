export const SITE_NAME = 'CeylonVoy' as const;
export const SITE_TAGLINE = 'Discover Sri Lanka in Luxury' as const;

// Update with real contact details when available
export const CONTACT_WHATSAPP = '+94XXXXXXXXX';
export const CONTACT_EMAIL = 'info@ceylonvoy.com';

// export const SOCIAL_LINKS = {
//     instagram: '',
//     facebook: '',
//     whatsapp: `https://wa.me/${CONTACT_WHATSAPP.replace('+', '')}`,
// } as const;

export const LOCALES = ['en', 'ar'] as const;
export const DEFAULT_LOCALE = 'en' as const;

export type Locale = typeof LOCALES[number];

export const SOCIAL_LINKS = {
    instagram: 'https://instagram.com/ceylonvoy', // ← real URL
    facebook: 'https://facebook.com/ceylonvoy',  // ← real URL
    whatsapp: `https://wa.me/94XXXXXXXXX`,       // ← real number
};