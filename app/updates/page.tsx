import SubscribeForm from "../components/SubscribeForm";

export default function UpdatesPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              Get Weekly Updates
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
              Stay Informed Without Doing All the Research Yourself
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Sign up to receive clear, parent-friendly updates on emerging
              online risks affecting kids across apps, video games, and the
              wider online world.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/lumo.png"
              alt="Lumo, the KidSafe Index guide mascot"
              className="w-full max-w-xs drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800">
              What You’ll Get
            </h2>

            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="leading-7">
                  Weekly updates on online risks affecting kids
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="leading-7">
                  Clear, plain-language summaries of what matters most
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="leading-7">
                  Parent-focused guidance and practical context
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="leading-7">
                  Insights designed to help you stay aware without feeling
                  overwhelmed
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-sky-50/50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800">
              Join the List
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Get weekly updates from KidSafe Index with clear insights into
              online risks, emerging concerns, and what they mean for your
              family.
            </p>

            <SubscribeForm />

            <p className="mt-4 text-xs leading-6 text-slate-500">
              We’ll use your email only for KidSafe Index updates. We will never
              sell your data.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}