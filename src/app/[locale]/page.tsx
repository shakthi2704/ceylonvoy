import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { SITE_NAME } from '@/lib/constants';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { FeaturedTours } from '@/components/sections/FeaturedTours';

export default async function HomePage() {
    const tHero = await getTranslations('hero');
    const tNav = await getTranslations('navigation');

    return (
        <>
            <HeroSection />
            <WhyChooseUs />
            <FeaturedTours />
        </>
    );
}