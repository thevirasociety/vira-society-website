import { upcomingEvents } from "../../data/events";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/footer";

type EventPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;

  const event = upcomingEvents.find((event) => event.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#4E463A]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Link
          href="/"
          className="text-sm font-medium text-[#4D5300] transition hover:text-[#6B6F1D]"
        >
          ← Back to home
        </Link>

        <section className="mt-12 overflow-hidden rounded-[2rem] border border-[#DDD6C8] bg-[#FBF8F1] shadow-sm">
          <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 md:p-12">
              <p className="text-sm uppercase tracking-[0.25em] text-[#6B6F1D]">
                {event.location} · {event.date}
              </p>

              <h1 className="mt-4 text-5xl font-semibold leading-tight text-[#4D5300] md:text-7xl">
                {event.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4E463A]">
                {event.description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <InfoCard label="Venue" value={event.venue} />
                <InfoCard label="Address" value={event.address} />
                <InfoCard label="Date" value={event.date} />
                <InfoCard label="Time" value={event.time} />
                <InfoCard label="Tickets" value={event.price} />
              </div>

              <div className="mt-10 rounded-3xl bg-[#4D5300] p-6 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-[#CBB98E]">
                  Tickets
                </p>

                <p className="mt-3 leading-7 text-[#F5F1E8]">
                  Ticket sales are not active yet. For early access or
                  questions, contact The Vira Society.
                </p>

                <a
                  href="mailto:hello@thevirasociety.com"
                  className="mt-6 inline-block rounded-full bg-[#F5F1E8] px-6 py-3 text-sm font-medium text-[#4D5300] transition hover:bg-[#CBB98E]"
                >
                  Contact for tickets
                </a>
              </div>
            </div>

            <div className="relative min-h-[420px] bg-[#4D5300] md:min-h-[720px]">
              {event.videoUrl ? (
                <video
                  src={event.videoUrl}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              ) : event.eventImage ? (
                <img
                  src={event.eventImage}
                  alt={event.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full" />
              )}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-[#F5F1E8] p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-[#6B6F1D]">
        {label}
      </p>
      <p className="mt-2 font-semibold text-[#4D5300]">{value}</p>
    </div>
  );
}