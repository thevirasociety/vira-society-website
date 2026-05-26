export type Event = {
    title: string;
    slug: string;
    date: string;
    time: string;
    location: string;
    venue: string;
    address: string;
    price: string;
    ticketActive: boolean;
    ticketUrl?: string;
    description: string;
    shortDescription?: string;
    artistName?: string;
    cardImage?: string;
    imageFit?: "tall" | "wide";
    eventImage?: string;
    videoUrl?: string;
    galleryImages?: string[];
};


export const upcomingEvents: Event[] = [
    {
        title: "The Anason Sessions",
        slug: "the-anasaon-sessions",
        date: "27 June, 2026",
        time: "Doors open at 19:30",
        location: "Berlin",
        venue: "Jockel Event Hall",
        address: "Ratiborstraße 14c, 10999 Berlin",
        price: "From 80 EUR",
        ticketActive: true,
        ticketUrl: "https://buytickets.at/thevirasociety/2234094",
        artistName: "Estefani",
        cardImage: "/cardImage/Estefani.png", // homepage card only 
        imageFit: "tall",
        videoUrl:
            "https://res.cloudinary.com/dcelajipl/video/upload/q_auto/f_auto/v1779061862/turkish-greek-night_al8vzo.mp4", // optional
        shortDescription: "Where the Aegean spirit comes alive in Berlin. An evening of Turkish and Greek mezzes, live music by Estefani all the way from Izmir, a mesmerizing belly dance performance, Sirtaki dancing, and Mediterranean celebration around shared tables. A warm night of culture, rhythm, and connection. Limited seating available.",
        description:
            "Where the Aegean tradition comes alive in the heart of Berlin. Doors open at 19:30 to welcome you with an authentic selection of Turkish and Greek mezze, proudly paired with Yeni Rakı as our official event partner. At 21:00, the night officially begins as Estefani, arriving straight from Izmir, takes the stage. She brings the true, sun-drenched soul of the Aegean coast to Berlin, leading a live musical journey across both sides of the sea. Following her first captivating set, Berlin's very own Turkish Raqs takes over for mesmerizing belly dance performance that will elevate the room's energy. The celebration continues into the night as Estefani returns to the stage until midnight, bringing the ultimate Mediterranean spirit to life with vibrant Sirtaki dancing and the timeless Greek tradition of plate smashing. A night of deep cultural rhythm, shared tables, and unfiltered joy. Limited seating available."
    },
    {
        title: "Mediterranean Mixology Workshop",
        slug: "mediterranean-mixology-workshop",
        date: "2026",
        time: "TBA",
        location: "Berlin",
        venue: "TBA",
        address: "TBA", // ← update with real one
        price: "Tickets coming soon",
        ticketActive: false,
        cardImage: "/cardImage/mixology.png",
        eventImage: "mixology1.png",
        imageFit: "wide",
        description:
            "Discover Mediterranean drinks in Berlin. This mixology-focused experience brings together signature cocktails inspired by Greece, Turkey, Spain, and other coastal traditions, blending regional spirits with fresh herbs and citrus. Set in a warm, social atmosphere with curated music, the evening invites you to explore new flavors and connect over drinks that carry the spirit of the Mediterranean.",
    },
];

/*export const previousEvents = [
    "Sunset Table — Berlin",
    "Spring Gathering — Kreuzberg",
    "Mediterranean Evening — Prenzlauer Berg",
];*/