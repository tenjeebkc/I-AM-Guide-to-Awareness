import { SiteFooter } from "../components/site-footer";
import { SiteNav } from "../components/site-nav";

const questionGroups = [
  {
    title: "Thoughts",
    questions: [
      {
        question: "Am I my thoughts?",
        answer:
          "You have thoughts, but you don't have to become them. Having a thought like \"I'm not good enough\" doesn't mean you are that thought.",
      },
      {
        question: "What if I believe a thought?",
        answer:
          "That's okay. You don't have to fight the thought or force yourself to think differently. You can let it be and see that it's simply a thought.",
      },
      {
        question: "What should I do with negative thoughts?",
        answer:
          "You don't have to fight every negative thought. You can let it be there without automatically believing it or acting on it.",
      },
      {
        question: "Do I need to stop thinking?",
        answer:
          "No. Thinking is normal. The point isn't to create an empty mind or control every thought that appears.",
      },
    ],
  },
  {
    title: "Awareness",
    questions: [
      {
        question: "What is Awareness?",
        answer:
          "Here, Awareness simply means being aware of what is happening — thoughts, feelings, sensations, sounds, and what you see.",
      },
      {
        question: "How do I know I'm aware?",
        answer:
          "Right now, you're aware of these words. You may also hear sounds, feel sensations, or have thoughts while reading them. You don't need to create that ability.",
      },
      {
        question: "Do I need to stay aware all the time?",
        answer:
          "No. Sometimes you'll get caught up in your thoughts. That's normal. You don't have to keep watching your thoughts. When you happen to notice, you're already aware.",
      },
    ],
  },
  {
    title: "I AM and everyday life",
    questions: [
      {
        question: "What does I AM mean?",
        answer:
          "“I AM” points to the simple fact that you are here, before adding descriptions such as “I am tired” or “I am a student.”",
      },
      {
        question: "Why does I AM matter?",
        answer:
          "It can help you see the difference between what is happening and the descriptions you put on yourself. You can have a thought or feeling without making it your identity.",
      },
      {
        question: "What about difficult emotions?",
        answer:
          "You don't have to immediately get rid of a difficult emotion. You can let it be there without having to act on it.",
      },
      {
        question: "Do I have to practice this all day?",
        answer:
          "No. You don't have to practice this all day. You don't have to keep watching your thoughts. There's nothing you need to maintain.",
      },
    ],
  },
];

export default function QuestionsPage() {
  return (
    <main className="text-[#292724]">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#292724]/50">
            Questions
          </p>

          <h1 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Questions you may have.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#292724]/65 sm:text-xl">
            Simple answers to some questions that naturally come up.
          </p>
        </div>

        <div className="mt-16 max-w-4xl space-y-12">
          {questionGroups.map((group) => (
            <section key={group.title}>
              <h2 className="mb-4 text-2xl font-medium tracking-tight">
                {group.title}
              </h2>

              <div className="border-t border-[#292724]/10">
                {group.questions.map((item) => (
                  <details
                    key={item.question}
                    className="group border-b border-[#292724]/10"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-base font-medium marker:hidden sm:py-5">
                      <span>{item.question}</span>

                      <span
                        aria-hidden="true"
                        className="text-xl font-normal text-[#292724]/35 transition-transform duration-200 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <div className="pb-5 pr-8 text-base leading-7 text-[#292724]/65">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
