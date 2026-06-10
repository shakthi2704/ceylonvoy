// ─────────────────────────────────────
// Locale
// ─────────────────────────────────────
export type Locale = 'en' | 'ar';

// ─────────────────────────────────────
// Tours
// ─────────────────────────────────────
export interface ItineraryDay {
    day: number;
    title: string;
    description: string;
    activities: string[];
}

export interface Tour {
    id: string;
    slug: string;
    title: string;
    duration: string;          // e.g. "8 Days / 7 Nights"
    heroImage: string;
    overview: string;
    highlights: string[];
    itinerary: ItineraryDay[];
    includedServices: string[];
    optionalAddons: string[];
    featured: boolean;
}

// ─────────────────────────────────────
// Testimonials
// ─────────────────────────────────────
export interface Testimonial {
    id: string;
    name: string;
    country: string;
    rating: number;            // 1–5
    text: string;
    avatar?: string;
}

// ─────────────────────────────────────
// FAQ
// ─────────────────────────────────────
export interface FAQ {
    id: string;
    question: string;
    answer: string;
}

// ─────────────────────────────────────
// Destinations
// ─────────────────────────────────────
export interface Destination {
    id: string;
    name: string;
    image: string;
    description: string;
}