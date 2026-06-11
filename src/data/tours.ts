import type { Tour } from '@/types';

// NOTE: Itinerary data is abbreviated placeholder for Phase 1.
// Full day-by-day detail will be added when building the Tour Detail page (Step 13).
// Hero images are Unsplash placeholders — replace with client-supplied photography.

export const tours: Tour[] = [
    {
        id: '1',
        slug: 'classic-sri-lanka',
        title: 'Classic Sri Lanka',
        duration: '8 Days / 7 Nights',
        heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&q=80',
        overview:
            'The definitive Sri Lanka experience. Journey through ancient kingdoms, mist-covered highlands, and golden coastlines on a tour that captures every facet of this extraordinary island.',
        highlights: [
            'Sigiriya Rock Fortress',
            'Temple of the Tooth, Kandy',
            'Nuwara Eliya Tea Plantations',
            'Galle Dutch Fort',
            'Bentota Beach',
        ],
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Colombo',
                description: 'Arrive at Bandaranaike International Airport. Your private driver meets you and transfers you to your Colombo hotel.',
                activities: ['Private airport pickup', 'Hotel check-in', 'Welcome briefing', 'Optional evening city walk'],
            },
            {
                day: 2,
                title: 'Colombo → Sigiriya',
                description: 'Drive north through the Cultural Triangle to the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site.',
                activities: ['Breakfast at hotel', 'Scenic drive to Cultural Triangle', 'Sigiriya Rock Fortress climb', 'Village jeep safari'],
            },
            {
                day: 3,
                title: 'Dambulla & Kandy',
                description: 'Explore the Dambulla Cave Temples before continuing to Kandy, Sri Lanka\'s cultural capital.',
                activities: ['Dambulla Cave Temples', 'Matale spice garden', 'Kandy Cultural Show', 'Temple of the Sacred Tooth Relic'],
            },
            {
                day: 4,
                title: 'Kandy → Nuwara Eliya',
                description: 'Scenic train journey through emerald tea plantations to the cool highland town of Nuwara Eliya.',
                activities: ['Scenic train ride', 'Tea factory & plantation tour', 'Gregory Lake visit', 'Evening at leisure'],
            },
        ],
        includedServices: [
            'Private air-conditioned vehicle throughout',
            'Professional English-speaking guide',
            'All entrance fees as per itinerary',
            'Private airport transfers',
        ],
        optionalAddons: [
            'Arabic-speaking guide',
            'Accommodation package',
            'Ayurveda spa treatments',
            'Hot air balloon over Sigiriya',
        ],
        featured: true,
    },
    {
        id: '2',
        slug: 'wildlife-adventure',
        title: 'Wildlife Adventure',
        duration: '5 Days / 4 Nights',
        heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
        overview:
            'Sri Lanka is one of Asia\'s finest wildlife destinations. This focused safari journey brings you face-to-face with leopards, elephants, and hundreds of bird species across three iconic national parks.',
        highlights: [
            'Yala National Park Safari',
            'Udawalawe Elephant Gathering',
            'Minneriya Tank at Dusk',
            'Kumana Bird Sanctuary',
            'Wilpattu Forest Lodge',
        ],
        itinerary: [
            {
                day: 1,
                title: 'Arrival → Minneriya',
                description: 'Transfer directly from the airport to Minneriya National Park for your first evening game drive.',
                activities: ['Airport pickup', 'Drive to Minneriya', 'Evening game drive', 'Lodge dinner'],
            },
            {
                day: 2,
                title: 'Udawalawe National Park',
                description: 'Full-day safari in Udawalawe, renowned for its high density of wild elephants.',
                activities: ['Morning game drive', 'Elephant Transit Home visit', 'Afternoon jeep safari', 'Sunset photography session'],
            },
            {
                day: 3,
                title: 'Yala National Park',
                description: 'Dawn-to-dusk safari in Yala — Sri Lanka\'s most famous park and one of the world\'s best leopard-spotting destinations.',
                activities: ['6 AM dawn game drive', 'Packed breakfast in the park', 'Afternoon safari block', 'Night at luxury tented camp'],
            },
        ],
        includedServices: [
            'Private jeep safaris with naturalist guide',
            'All national park entrance and jeep fees',
            'Private airport transfers',
            'English-speaking wildlife guide',
        ],
        optionalAddons: [
            'Arabic-speaking guide',
            'Luxury tented camp upgrade',
            'Bird-watching specialist guide',
            'Photography guide',
        ],
        featured: true,
    },
    {
        id: '3',
        slug: 'beach-escape',
        title: 'Beach Escape',
        duration: '7 Days / 6 Nights',
        heroImage: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80',
        overview:
            'Sri Lanka\'s southern and western coastlines are dotted with some of Asia\'s most beautiful beaches. This unhurried escape blends pristine sands, whale watching, and the charm of colonial Galle.',
        highlights: [
            'Mirissa Whale Watching',
            'Galle Dutch Fort & Old Town',
            'Unawatuna Beach',
            'Snorkelling at Hikkaduwa',
            'Tangalle Lagoon Sunset',
        ],
        itinerary: [
            {
                day: 1,
                title: 'Arrival → Galle',
                description: 'Arrive and transfer directly to Galle, a UNESCO-listed Dutch colonial fort town on the southern coast.',
                activities: ['Airport pickup', 'Transfer to Galle', 'Evening fort walk', 'Sunset at the ramparts'],
            },
            {
                day: 2,
                title: 'Galle Fort & Unawatuna',
                description: 'Morning exploring Galle\'s cobblestone streets, then relax on the crescent beach at Unawatuna.',
                activities: ['Galle Fort guided tour', 'Local lunch at fort café', 'Unawatuna beach afternoon', 'Coral reef snorkelling'],
            },
            {
                day: 3,
                title: 'Mirissa — Whale Watching',
                description: 'Early morning boat excursion to spot blue whales and spinner dolphins in the warm Indian Ocean.',
                activities: ['6 AM whale watching boat', 'Blue whale sighting', 'Mirissa beach afternoon', 'Fresh seafood dinner'],
            },
        ],
        includedServices: [
            'Private air-conditioned vehicle',
            'Whale watching excursion',
            'Snorkelling equipment',
            'Private airport transfers',
        ],
        optionalAddons: [
            'Surfing lessons at Weligama',
            'Cooking class with local family',
            'Deep-sea fishing charter',
            'Accommodation package',
        ],
        featured: true,
    },
    {
        id: '4',
        slug: 'luxury-journey',
        title: 'Luxury Journey',
        duration: '10 Days / 9 Nights',
        heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&q=80',
        overview:
            'The most comprehensive Sri Lanka experience available. Ancient cities, highland tea estates, exclusive safari camps, and a private beach finale — every moment crafted for the most discerning traveler.',
        highlights: [
            'Exclusive Cultural Triangle Circuit',
            'Private Tea Estate Stay',
            'Yala Luxury Tented Camp',
            'South Coast Private Beach Resort',
            'Colombo Rooftop Fine Dining',
        ],
        itinerary: [
            {
                day: 1,
                title: 'Arrival — Colombo Luxury',
                description: 'VIP arrival meet-and-greet at the airport followed by check-in at a five-star Colombo property.',
                activities: ['VIP airport reception', 'Luxury hotel check-in', 'Private city tour by tuk-tuk', 'Rooftop dinner'],
            },
            {
                day: 2,
                title: 'Colombo → Sigiriya by Seaplane',
                description: 'Optional scenic seaplane transfer over the island to the Cultural Triangle for maximum drama.',
                activities: ['Optional seaplane transfer', 'Luxury tented lodge check-in', 'Sigiriya sunset walk', 'Private chef dinner'],
            },
            {
                day: 3,
                title: 'Sigiriya & Polonnaruwa',
                description: 'Private guided exploration of Sigiriya Rock and the ancient city of Polonnaruwa by bicycle.',
                activities: ['Private Sigiriya climb', 'Polonnaruwa ancient city', 'Bicycle tour of ruins', 'Sunset cocktails at lodge'],
            },
            {
                day: 4,
                title: 'Tea Estate Immersion — Nuwara Eliya',
                description: 'Stay at a colonial-era private tea estate with panoramic highland views and a personal plucking experience.',
                activities: ['Scenic train through tea country', 'Private estate check-in', 'Tea plucking & blending', 'Estate candlelit dinner'],
            },
        ],
        includedServices: [
            'Private luxury vehicle with chauffeur',
            'Dedicated personal guide throughout',
            'All entrance and activity fees',
            'VIP airport reception & transfers',
        ],
        optionalAddons: [
            'Seaplane transfer Colombo → Sigiriya',
            'Arabic-speaking private guide',
            'Helicopter charter for aerial photography',
            'Private chef for villa stays',
        ],
        featured: true,
    },
];

export const featuredTours = tours.filter((t) => t.featured);