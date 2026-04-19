import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            Contact
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
            Get in Touch
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            If you have a question, want to share feedback, suggest a resource,
            or reach out about KidSafe Index, this is the place to do it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800">
              How We Can Help
            </h2>

            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="leading-7">
                  Questions about KidSafe Index and how the site works
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="leading-7">
                  Feedback, corrections, or suggested improvements
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="leading-7">
                  Resource suggestions for the Resources page
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="leading-7">
                  Partnership, media, or professional inquiries
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="leading-7">
                  Privacy-related questions about your information or updates
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800">
              Send a Message
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              A direct contact form or support address can live here. For now,
              this section can be used as a placeholder while the final contact
              workflow is being set up.
            </p>

            <ContactForm />

            <p className="mt-4 text-xs leading-6 text-slate-500">
              If you submit information through KidSafe Index, it will only be
              used to respond to your message or support your request. We will
              never sell your information.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}