import Link from "next/link";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";

export default function HomePage() {
  return (
    <main className="text-[#292724]">
      <SiteNav />

      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6 py-20 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[#292724]/50">
            A simple way to look at your thoughts
          </p>

          <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            A thought can appear without becoming who you are.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#292724]/65 sm:text-xl">
            Thoughts happen all the time. Some are helpful. Some are negative.
            Some appear without warning. You can notice a thought without
            believing it, following it, or trying to get rid of it.
          </p>

          <div className="mt-7">
            <Link
              href="/learn"
              className="inline-flex items-center rounded-full bg-[#292724] px-6 py-3 text-sm font-medium text-[#f5f2ec] transition-colors hover:bg-[#403c37]"
            >
              Understand this
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#292724]/10">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#292724]/50">
              Remember this
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              When a thought appears
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-8 text-[#292724]/65">
              <p>A thought may come and go on its own.</p>

              <p>You don't have to change it, follow it, or push it away.</p>

              <p className="pt-2 font-medium text-[#292724]">
                You can simply let it be.
              </p>

              <p>
                Sometimes you may notice that you're caught up in a thought. That's okay. You don't
                have to do anything about that either.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#292724]/10">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#292724]/50">
              I AM
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              And what does “I AM” mean?
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[#292724]/65">
              <p>
                Before “I am happy,” “I am worried,” or “I am a student,”
                there is simply:
              </p>

              <p className="text-4xl font-medium tracking-tight text-[#292724] sm:text-4xl">
                I AM.
              </p>

              <p>
                It is a simple way of pointing to the fact that you are here
                and aware.
              </p>

              <p>
                You don&apos;t have to turn it into a belief. Just notice your own
                experience.
              </p>
            </div>

            <div className="mt-7">
              <Link
                href="/learn"
                className="text-sm font-medium text-[#292724] underline decoration-[#292724]/25 underline-offset-4 transition-colors hover:decoration-[#292724]/60"
              >
                Understand more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}