'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/Button';
import Image from 'next/image';

const NAV_LINKS = [
    { href: '/about', labelKey: 'about' },
    { href: '/destinations', labelKey: 'destinations' },
    { href: '/tours', labelKey: 'tours' },
    { href: '/stories', labelKey: 'stories' },
    { href: '/plan-your-journey', labelKey: 'planJourney' },
] as const;

export function Header() {
    const t = useTranslations('navigation');
    const locale = useLocale();
    const pathname = usePathname();

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Solid header after 60px scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on navigation
    useEffect(() => { setMenuOpen(false); }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const switchLocale = locale === 'en' ? 'ar' : 'en';
    const switchLabel = locale === 'en' ? 'العربية' : 'English';

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <>
            {/* ── Main Header Bar ─────────────────────────────────── */}
            <header
                className={cn(
                    'fixed top-0 start-0 end-0 z-50 transition-all duration-300',
                    scrolled
                        ? 'bg-[var(--color-emerald-deepest)]/90 backdrop-blur-md shadow-sm'
                        : 'bg-[var(--color-emerald-deepest)]/60'
                )}
            >
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--color-gold-accent)] z-20" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* <div className="grid grid-cols-[auto_1fr_auto] items-center h-20"> */}
                    <div className="flex items-center justify-between h-20">

                        {/* Logo */}
                        <Link href="/" className="shrink-0 group">
                            {/* <div className="flex flex-col leading-none">
                                <span
                                    className={cn(
                                        'font-display font-bold text-2xl tracking-wide transition-colors duration-300',
                                        scrolled ? 'text-emerald-primary' : 'text-white'
                                    )}
                                >
                                    Ceylon
                                    <span className="text-gold-accent">Voy</span>
                                </span>
                                <span
                                    className={cn(
                                        'text-[10px] tracking-[0.25em] uppercase font-sans transition-colors duration-300',
                                        scrolled ? 'text-muted' : 'text-white/60'
                                    )}
                                >
                                    Sri Lanka
                                </span>
                            </div> */}
                            <Image
                                src="/logo/logo-1.png" // place your logo in public/logo.png
                                alt="CeylonVoy Logo"
                                width={180}
                                height={60}
                                className="h-16 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
                            {NAV_LINKS.map(({ href, labelKey }) => (
                                // <Link
                                //     key={href}
                                //     href={href}
                                //     className={cn(
                                //         'px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200',
                                //         isActive(href)
                                //             ? scrolled
                                //                 ? 'text-emerald-primary font-semibold'
                                //                 : 'text-gold-accent font-semibold'
                                //             : scrolled
                                //                 ? 'text-heading text-white  hover:text-gold-accent'
                                //                 : 'text-white/85 hover:text-white'
                                //     )}
                                // >
                                //     {t(labelKey)}
                                // </Link>
                                <Link
                                    key={href}
                                    href={href}
                                    className={cn(
                                        'relative px-4 py-2 rounded-lg text-base font-medium transition-all duration-300',

                                        // Underline
                                        'after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0',
                                        'after:h-[2px] after:w-0 after:bg-gold-accent',
                                        'after:transition-all after:duration-300 hover:after:w-[70%]',

                                        isActive(href)
                                            ? 'text-gold-accent font-semibold after:w-[70%]'
                                            : scrolled
                                                ? 'text-white hover:text-gold-accent'
                                                : 'text-white/85 hover:text-gold-accent'
                                    )}
                                >
                                    {t(labelKey)}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop Actions */}
                        {/* <div className="hidden lg:flex justify-end items-center gap-2">


                            <Link
                                href={pathname}
                                locale={switchLocale}
                                className={cn(
                                    'flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200',
                                    scrolled
                                        ? 'text-body hover:text-emerald-primary hover:bg-emerald-primary/5'
                                        : 'text-white/80 hover:text-white hover:bg-white/10'
                                )}
                            >
                                <Globe className="w-4 h-4 shrink-0" />
                                <span>{switchLabel}</span>
                            </Link>


                            <Link
                                href="/plan-your-journey"
                                className={buttonVariants({
                                    variant: scrolled ? 'primary' : 'outline-gold',
                                    size: 'sm',
                                })}
                            >
                                {t('requestQuote')}
                            </Link>
                        </div> */}

                        <div className="hidden lg:flex justify-end items-center">
                            <Link
                                href={pathname}
                                locale={switchLocale}
                                // className={buttonVariants({ variant: 'gold', size: 'sm' })}
                                className="flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg text-white/80 hover:text-white hover:text-[var(--color-gold-accent)]/80 transition-colors duration-400"
                            >
                                <Globe className="w-4 h-4 shrink-0" />
                                <span>{switchLabel}</span>
                            </Link>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                            className={cn(
                                'lg:hidden p-2 rounded-lg transition-colors',
                                scrolled
                                    ? 'text-heading hover:bg-gray-100'
                                    : 'text-white hover:bg-white/10'
                            )}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            {/* ── Mobile Full-Screen Menu ──────────────────────────── */}
            <div
                className={cn(
                    'fixed inset-0 z-50 bg-emerald-deepest flex flex-col lg:hidden',
                    'transition-all duration-300 ease-in-out',
                    menuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                )}
            >
                {/* Mobile Menu Top Bar */}
                <div className="flex items-center justify-between px-6 h-20 rtl:flex-row-reverse border-b border-white/10">
                    <Link href="/" className="flex flex-col leading-none">
                        {/* <span className="font-display font-bold text-2xl text-white tracking-wide">
                            Ceylon<span className="text-gold-accent">Voy</span>
                        </span>
                        <span className="text-[10px] tracking-[0.25em] uppercase text-white/50">
                            Sri Lanka
                        </span> */}
                        <Image
                            src="/logo/logo-1.png" // place your logo in public/logo.png
                            alt="CeylonVoy Logo"
                            width={180}
                            height={60}
                            className="h-16 w-auto"
                            priority
                        />
                    </Link>

                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
                    {NAV_LINKS.map(({ href, labelKey }, i) => (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                'font-display text-3xl font-semibold py-5 border-b border-white/10',
                                'text-start transition-colors duration-200',
                                isActive(href)
                                    ? 'text-gold-accent'
                                    : 'text-white hover:text-gold-light'
                            )}
                            style={{ transitionDelay: `${i * 40}ms` }}
                        >
                            {t(labelKey)}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Bottom Actions */}
                {/* <div className="px-6 pb-10 pt-6 space-y-3">
                    <Link
                        href="/plan-your-journey"
                        className={buttonVariants({
                            variant: 'gold',
                            size: 'lg',
                            className: 'w-full',
                        })}
                    >
                        {t('requestQuote')}
                    </Link>

                    <Link
                        href={pathname}
                        locale={switchLocale}
                        className="flex items-center justify-center gap-2 py-3 text-white/60 hover:text-white transition-colors"
                    >
                        <Globe className="w-4 h-4" />
                        <span className="text-sm">{switchLabel}</span>
                    </Link>
                </div> */}
                <div className="px-6 pb-10 pt-6 justify-end">
                    <Link
                        href={pathname}
                        locale={switchLocale}
                        className="flex items-center justify-center gap-2 py-3 text-white/60 hover:text-white transition-colors"
                    >
                        <Globe className="w-4 h-4" />
                        <span className="text-sm">{switchLabel}</span>
                    </Link>
                </div >
            </div >
        </>
    );
}