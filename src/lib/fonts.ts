import { Cairo, Playfair_Display } from 'next/font/google';

export const cairo = Cairo({
    subsets: ['latin', 'arabic'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-cairo',
    display: 'swap',
});

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-playfair',
    display: 'swap',
});