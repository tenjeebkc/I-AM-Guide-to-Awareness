import { SiteFooter } from "../components/site-footer";
import { SiteNav } from "../components/site-nav";

export default function AboutPage() {
  return (
    <main className="bg-[#f5f2ec] text-[#292724]">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#292724]/50">
            About
          </p>

          <h1 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Why this exists.
          </h1>

          <div className="mt-6 max-w-2xl space-y-5 text-lg leading-8 text-[#292724]/65 sm:text-xl">
            <p>
              This project started with a simple observation: you can have a
              thought without having to believe it or become it.
            </p>

            <p>
              The ideas here come from my own learning, reflection, and
              exploration of I AM and Awareness.
            </p>

            <p>
              I&apos;ve tried to put them into simple language that anyone can
              explore for themselves.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-4xl border-t border-[#292724]/10 pt-10">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
            Explore it for yourself.
          </h2>

          <div className="mt-5 max-w-2xl space-y-4 text-lg leading-8 text-[#292724]/65">
            <p>This isn&apos;t a belief system you need to accept.</p>

            <p>
              Read the ideas. Notice your own experience. See what makes sense
              to you.
            </p>
          </div>
        </div>

        <div className="mt-14 max-w-4xl border-t border-[#292724]/10 pt-10">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
            Project note
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#292724]/65">
            This is an independent personal project. It is not officially
            affiliated with any teacher, organization, or teaching.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}