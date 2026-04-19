export default function AboutPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            About
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
            What Is KidSafe Index?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            KidSafe Index helps parents stay informed about online risks
            affecting kids across apps and the wider online world. We track
            emerging threats, platform safety concerns, and child-focused online
            risks, then translate them into clear, plain-language insights.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Why It Exists</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Parents are constantly expected to keep up with new apps, platform
              changes, harmful online trends, and digital safety issues. That
              information is often scattered, overly technical, or easy to miss.
              KidSafe Index brings it together in one place and makes it easier
              to understand.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">What You’ll Find Here</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• Clear summaries of current child safety risks</li>
              <li>• Platform-related safety concerns and online threat trends</li>
              <li>• Easy-to-understand risk scoring</li>
              <li>• Parent advice and practical next steps</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">Who It’s For</h2>
            <p className="mt-4 leading-7 text-slate-700">
              KidSafe Index is built for parents, caregivers, and families who
              want a clearer view of the online risks that may affect the kids
              in their lives.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-sky-50/40">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="/lumo.png"
              alt="Lumo, the KidSafe Index guide mascot"
              className="w-full max-w-xs drop-shadow-xl transition-transform"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              Meet Lumo
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800">
              Your Digital Scout
            </h2>

            <p className="mt-5 leading-7 text-slate-700">
              Lumo KidSafe Indexs' mascot and guide. Lumo represents
              awareness, clarity, and early warning, helping parents spot
              online risks sooner and understand them more clearly.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              The name <span className="font-semibold">Lumo</span> comes from
              the idea of light and illumination. It reflects the role KidSafe
              Index plays: shining a light on child safety risks across the online
              world, and turning complex information into something parents can
              actually use.
            </p>

          </div>
        </div>
      </section>
    </main>
  );
}