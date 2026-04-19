export default function MethodologyPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            Methodology
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
            How KidSafe Index Scores Risk
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            KidSafe Index is designed to help parents make sense of online risks
            affecting kids in a clearer, more practical way. Our scoring system
            is meant to provide context, highlight relative concern, and explain
            why some risks deserve more attention than others.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              The Three Core Scores
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Each threat is evaluated using three separate scores. Together,
              these help show how likely a risk is to appear, how serious it may
              be, and how likely a child is to fall for it.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800">
                Exposure Risk
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                How likely your child is to encounter the risk if they use the
                relevant app, video game, website, or online service.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800">
                Harm Severity
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                How serious the impact could be if the risk affects your child.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800">
                Child Susceptibility
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                How likely your child is to fall for, believe, trust, or be
                drawn into the risk.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              What the Levels Mean
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              To make scores easier for parents to understand, KidSafe Index
              groups them into simple categories like Low, Moderate, and High.
              These categories are meant to provide a quick sense of concern,
              not just a raw number.
            </p>
          </div>

          <div className="rounded-2xl border border-red-200/80 bg-gradient-to-br from-red-50 to-rose-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">
              High
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A High score usually means the risk is especially likely to be
              encountered, especially harmful if it happens, or especially easy
              for kids to fall for.
            </p>
            </div>

          <div className="rounded-2xl border border-yellow-200/80 bg-gradient-to-br from-yellow-50 to-amber-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">
                Moderate
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A Moderate score means the risk is meaningful and worth attention,
              but may be less common, less severe, or harder for most kids to
              engage with directly.
            </p>
          </div>

            <div className="rounded-2xl border border-green-200/80 bg-gradient-to-br from-green-50 to-emerald-50 p-6 shadow-sm">
             <h3 className="text-lg font-semibold text-slate-800">Low</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A Low score means the risk may still matter, but is less likely
                to be encountered, less severe, or less likely to directly fool
                or affect most children.
              </p>
            </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              How We Think About Risk
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
                Not all online risks are dangerous in the same way. Some are highly
                visible and easy to run into. Some are rare but severe. Others are
                not especially technical, but are socially persuasive and therefore
                easier for kids to trust or fall for. Exposure also depends on
                whether a child actually uses the relevant app, game, website, or
                online service where the risk appears.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Our scoring is designed to reflect those differences so parents can
              better understand not just what a risk is, but why it matters.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-sky-50/50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              Important Note
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-800">
              These Scores Are a Guide, Not a Guarantee
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              KidSafe Index scores are meant to help parents understand relative
              concern and ask better questions. They are not meant to replace
              judgment, personal knowledge of your child, or the reality that
              online risk can vary from family to family.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}