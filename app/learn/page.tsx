import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteNav } from "../components/site-nav";

const sections = [
  {
    number: "01",
    title: "Thoughts happen.",
    paragraphs: [
      "Thoughts appear naturally.",
      'You might suddenly think, "What if this doesn\'t work out?"',
      "You didn't necessarily choose that thought. Another thought will eventually replace it.",
    ],
  },
  {
    number: "02",
    title: "You can notice a thought.",
    paragraphs: [
      'When a thought appears, you can recognize it: "I\'m having this thought."',
      "You don't have to change it, argue with it, or push it away.",
      "Simply notice it.",
    ],
  },
  {
    number: "03",
    title: "A thought isn't automatically a fact.",
    paragraphs: [
      'Your mind can say, "I\'m not good enough."',
      "Having that thought doesn't make it true.",
      "You can notice the thought without accepting it.",
    ],
    emphasis: "You are not every thought that appears in your mind.",
    afterEmphasis: "You can have a thought without having to believe it.",
  },
  {
    number: "04",
    title: "This is Awareness.",
    paragraphs: [
      "You can notice thoughts.",
      "You can notice sounds, sensations, feelings, and what you see.",
      "The fact that you can notice what is happening is what we mean by Awareness.",
    ],
  },
  {
    number: "05",
    title: "And I AM?",
    paragraphs: [
      'Before all the descriptions you put after "I am" — "I am tired," "I am happy," "I am a student" — there is simply:',
    ],
    emphasis: "I AM.",
    afterEmphasis:
      "You don't have to turn this into a belief. Just notice that you are here and aware.",
  },
];

export default function LearnPage() {
  return (
    <main className="bg-[#f5f2ec] text-[#292724]">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#292724]/50">
            Understand
          </p>

          <h1 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Start with something you can notice.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#292724]/65 sm:text-xl">
            You don&apos;t need a special experience or a particular belief. Start
            with something that happens every day: thoughts appear, and you can
            notice them.
          </p>
        </div>

        <div className="mt-16 max-w-4xl">
          <div className="space-y-0">
            {sections.map((section) => (
              <section
                key={section.number}
                className="border-t border-[#292724]/10 py-10 first:border-t-0 first:pt-0 sm:py-12"
              >
                <div className="grid gap-5 sm:grid-cols-[72px_1fr]">
                  <p className="text-xs font-medium tracking-[0.14em] text-[#292724]/40">
                    {section.number}
                  </p>

                  <div>
                    <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                      {section.title}
                    </h2>

                    <div className="mt-5 space-y-3 text-lg leading-8 text-[#292724]/65">
                      {section.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}

                      {section.emphasis && (
                        <p className=" text-xl font-medium leading-9 text-[#292724] sm:text-xl">
                          {section.emphasis}
                        </p>
                      )}

                      {section.afterEmphasis && <p>{section.afterEmphasis}</p>}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#292724]/10">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#292724]/50">
              When you get caught up
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              You will forget.
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-8 text-[#292724]/65">
              <p>
                You may believe a thought, follow it, or get completely lost in
                it. That&apos;s normal.
              </p>

              <p>When you notice it, simply notice again.</p>

              <p className="pt-2 text-xl font-medium leading-5 text-[#292724] sm:text-xl">
                You don&apos;t have to start over.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-[#292724]/10 pt-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-medium tracking-tight">
                Still have questions?
              </h2>

              <p className="mt-4 text-lg leading-8 text-[#292724]/65">
                Explore some of the questions that naturally come up.
              </p>

              <Link
                href="/questions"
                className="mt-6 inline-flex items-center rounded-full bg-[#292724] px-6 py-3 text-sm font-medium text-[#f5f2ec] transition-colors hover:bg-[#403c37]"
              >
                Explore questions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
