import { getTranslations } from 'next-intl/server';
import { MessageCircle, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';
import { SOCIAL_LINKS } from '@/lib/constants';

import { Link } from '@/i18n/navigation';
import {
    SITE_NAME,
    CONTACT_EMAIL,
    CONTACT_WHATSAPP,
} from '@/lib/constants';

const NAV_LINKS = [
    { href: '/', labelKey: 'home' },
    { href: '/tours', labelKey: 'tours' },
    { href: '/about', labelKey: 'about' },
    { href: '/plan-your-journey', labelKey: 'planJourney' },
] as const;

// Update these when real social URLs are ready
const SOCIAL = [
    { Icon: InstagramIcon, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
    { Icon: FacebookIcon, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
];
export async function Footer() {
    const tFooter = await getTranslations('footer');
    const tNav = await getTranslations('navigation');

    const year = new Date().getFullYear();

    return (
        <footer className="bg-emerald-deepest text-white">
            {/* Gold accent line at top */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold-accent to-transparent" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-white/10 text-center">
                <p className="font-display text-xl sm:text-2xl text-white/30 italic tracking-wide">
                    Crafting extraordinary Sri Lanka journeys, one traveler at a time.
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {/* ── Column 1: Brand ─────────────────────────── */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <div>
                            <Link href="/" className="inline-block">
                                <span className="font-display font-bold text-2xl text-white tracking-wide">
                                    Ceylon<span className="text-gold-accent">Voy</span>
                                </span>
                            </Link>

                            <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mt-1">
                                Sri Lanka
                            </p>
                        </div>

                        {/* Tagline */}
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            {tFooter('tagline')}
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {SOCIAL.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-gold-accent hover:text-gold-accent transition-colors duration-200"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Column 2: Quick Links ────────────────────── */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-accent mb-6 flex items-center gap-3">
                            <span>{tFooter('quickLinks')}</span>
                            <span className="flex-1 h-px bg-gold-accent/25" />
                        </h3>

                        <ul className="space-y-3">
                            {NAV_LINKS.map(({ href, labelKey }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-white/60 hover:text-white text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-4 h-px bg-gold-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
                                        {tNav(labelKey)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Column 3: Contact ────────────────────────── */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-accent mb-6 flex items-center gap-3">
                            <span>{tFooter('contact')}</span>
                            <span className="flex-1 h-px bg-gold-accent/25" />
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={`https://wa.me/${CONTACT_WHATSAPP.replace('+', '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 group"
                                >
                                    <span className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-gold-accent/20 border border-white/10 flex items-center justify-center shrink-0 transition-colors duration-200">
                                        <MessageCircle className="w-4 h-4 text-gold-accent" />
                                    </span>

                                    <span className="text-sm">{CONTACT_WHATSAPP}</span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 group"
                                >
                                    <span className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-gold-accent/20 border border-white/10 flex items-center justify-center shrink-0 transition-colors duration-200">
                                        <Mail className="w-4 h-4 text-gold-accent" />
                                    </span>

                                    <span className="text-sm">{CONTACT_EMAIL}</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 rtl:sm:flex-row-reverse">
                    <p className="text-white/40 text-xs">
                        © {year} {SITE_NAME}. {tFooter('rights')}
                    </p>

                    <p className="text-white/25 text-xs">
                        Designed for the discerning traveler
                    </p>
                </div>
            </div>
        </footer>
    );
}