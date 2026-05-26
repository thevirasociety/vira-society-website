/*<section className="mx-auto max-w-6xl px-6 py-24">
<p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#D9A441]">
  Previous events
</p>

<div className="grid gap-4 md:grid-cols-3">
  {previousEvents.map((event) => (
    <div
      key={event}
      className="rounded-3xl border border-[#DDE3E8] bg-white p-6 text-lg text-[#1F3A5F] shadow-sm"
    >
      {event}
    </div>
  ))}
</div>
</section>

*/

import { upcomingEvents } from "./data/events";
import Footer from "./components/footer";

export default function Home() {

  const activeTicketEvent = upcomingEvents.find(
  (event) => event.ticketActive && event.ticketUrl
);

  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#4E463A]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#DDD6C8] bg-[#F5F1E8]/90 backdrop-blur">
        <div className="mx-auto flex h-[88px] max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="The Vira Society logo"
              className="h-32 w-auto md:h-40"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#6B6F1D] md:flex">
            <a href="#about" className="transition hover:text-[#4D5300]">
              About
            </a>
            <a href="#events" className="transition hover:text-[#4D5300]">
              Events
            </a>
            <a href="#tickets" className="transition hover:text-[#4D5300]">
              Tickets
            </a>
            <a
              href="mailto:hello@thevirasociety.com"
              className="transition hover:text-[#4D5300]"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-[1.1fr_0.9fr] md:pt-40">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6B6F1D]">
            Mediterranean events in Berlin
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-[#4D5300] md:text-7xl">
            The Vira Society
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4E463A]">
            We belong to the sun, the sea, and the shared rhythm of the
            Mediterranean. Beyond boundaries and stereotypes, our cultures
            possess an undeniable warmth—a philosophy of life that speaks
            through our food, our laughter, and the way we celebrate. Vira
            Society is a sophisticated sanctuary in Berlin where these deeply
            intertwined souls finally converge. We are here to revive that
            effortless sense of belonging, to network with purpose, and to
            co-create a community that feels exactly like home.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#events"
              className="rounded-full bg-[#4D5300] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#6B6F1D]"
            >
              View upcoming events
            </a>

            <a
              href="#about"
              className="rounded-full border border-[#4D5300] px-6 py-3 text-sm font-medium text-[#4D5300] transition hover:bg-[#4D5300] hover:text-white"
            >
              About us
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#DDD6C8] bg-[#FBF8F1] p-6 shadow-sm">
          <div className="flex min-h-[420px] flex-col justify-between rounded-[1.5rem] bg-[#4D5300] p-8 text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-[#CBB98E]">
              Dinner · Music · Culture
            </p>

            <div>
              <p className="text-4xl font-semibold leading-tight">
                A softer way to gather in the city.
              </p>

              <p className="mt-5 leading-7 text-[#F5F1E8]">
                The Vira Society creates curated social experiences and
                gatherings across the city. Built on art, culture, music, and
                long tables, we bring people together around the effortless
                warmth and ease of the Mediterranean.
              </p>
            </div>

            <p className="text-sm text-[#F5F1E8]">Berlin · Germany</p>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6B6F1D]">
          About
        </p>

        <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-[#4D5300] md:text-5xl">
          Mediterranean-inspired gatherings for people who value atmosphere,
          culture, and connection.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4E463A]">
          The Vira Society creates intimate events across Berlin and Germany:
          dinners, music-led evenings, seasonal gatherings, and curated social
          experiences shaped by Mediterranean warmth.
        </p>
      </section>

      <section id="events" className="bg-[#FBF8F1]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6B6F1D]">
            Upcoming events
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => {
              const hasImage = Boolean(event.cardImage);

              return (
                <article
                  key={event.title}
                  className="relative overflow-hidden rounded-3xl border border-[#DDD6C8] bg-[#F5F1E8] shadow-sm"
                >
                  <div
                    className={
                      event.imageFit === "wide"
                        ? "relative min-h-[460px]"
                        : hasImage
                          ? "relative min-h-[430px]"
                          : "min-h-[300px]"
                    }
                  >
                    <div
                      className={
                        event.imageFit === "wide"
                          ? "relative z-10 p-8 pb-48"
                          : hasImage
                            ? "relative z-10 p-8 pb-64 md:pb-8 md:pr-44"
                            : "relative z-10 p-8"
                      }
                    >
                      <p className="text-sm text-[#6B6F1D]">
                        {event.location} · {event.date}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold text-[#4D5300]">
                        {event.title}
                      </h3>

                      <p className="mt-4 leading-7 text-[#4E463A]">
                        {event.shortDescription || event.description}
                      </p>

                      <div className="mt-6 flex flex-col items-start gap-4">
                        <span className="text-sm text-[#6B6F1D]">
                          {event.price}
                        </span>

                        <a
                          href={`/events/${event.slug}`}
                          className="rounded-full bg-[#4D5300] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6B6F1D]"
                        >
                          View event
                        </a>
                      </div>
                    </div>

                    {hasImage && (
                      <div
                        className={
                          event.imageFit === "wide"
                            ? "pointer-events-none relative z-0 flex justify-end px-6 pb-6 md:absolute md:bottom-6 md:right-6 md:block md:px-0 md:pb-0"
                            : "pointer-events-none absolute bottom-0 right-3 z-0 flex justify-end"
                        }
                      >
                        <img
                          src={event.cardImage}
                          alt={event.artistName ?? event.title}
                          className={
                            event.imageFit === "wide"
                              ? "w-[220px] object-contain md:w-[340px] md:max-w-none"
                              : "h-[230px] object-contain opacity-95 md:h-[315px]"
                          }
                        />
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

 <section id="tickets" className="bg-[#4D5300] px-6 py-24 text-white">
  <div className="mx-auto max-w-4xl text-center">
    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#CBB98E]">
      Tickets
    </p>

    <h2 className="text-3xl font-semibold md:text-5xl">
      Ready to join the next gathering?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#F5F1E8]">
      {activeTicketEvent
        ? `Tickets are now available for ${activeTicketEvent.title}. Capacity is intentionally limited to preserve the atmosphere and experience of the evening.`
        : "Tickets for upcoming events will be available soon. For early access, announcements, or collaborations, contact The Vira Society."}
    </p>

    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
      {activeTicketEvent ? (
        <>
          <a
            href={`/events/${activeTicketEvent.slug}`}
            className="inline-block rounded-full border border-[#F5F1E8] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#F5F1E8] hover:text-[#4D5300]"
          >
            View event
          </a>

          <a
            href={activeTicketEvent.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#F5F1E8] px-6 py-3 text-sm font-medium text-[#4D5300] transition hover:bg-[#CBB98E]"
          >
            Get tickets
          </a>
        </>
      ) : (
        <a
          href="mailto:hello@thevirasociety.com"
          className="inline-block rounded-full bg-[#F5F1E8] px-6 py-3 text-sm font-medium text-[#4D5300] transition hover:bg-[#CBB98E]"
        >
          Contact for tickets
        </a>
      )}
    </div>
  </div>
</section>

      <Footer />
    </main>
  );
}