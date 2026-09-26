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
    title: "A thought can be observed.",
    paragraphs: [
      "When a thought appears, you don't have to change it, argue with it, or push it away.",
      "You can simply observe the thought and let it be.",
    ],
  },
  {
    number: "03",
    title: "A thought isn't automatically a fact.",
    paragraphs: [
      'Your mind can say, "I\'m not good enough."',
      "Having that thought doesn't make it true.",
      "You can observe the thought without accepting it as true.",
    ],
    emphasis: "You are not every thought that appears in your mind.",
    afterEmphasis: "You can have a thought without having to believe it.",
  },
  {
    number: "04",
    title: "This is Awareness.",
    paragraphs: [
      "Thoughts, feelings, sounds, and everything you see can be experienced.",
      "You don't have to do anything with them.",
      "The simple fact that you can experience them is what this website calls Awareness.",
    ],
  },
  {
    number: "05",
    title: "And I AM?",
    paragraphs: [
      'Before all the descriptions you put after "I am" — "I am tired," "I am worried," "I am a student" — there is simply:',
    ],
    emphasis: '"I AM" — the simple fact that you are here',
    afterEmphasis:
      "You don't have to hold onto this idea or repeat it to yourself. Just understand what it points to.",
  },
];

export default function LearnPage() {
  return (
    <main className="text-[#292724]">
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
          <div>
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
