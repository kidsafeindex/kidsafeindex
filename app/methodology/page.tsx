function SectionDivider() {
  return <div className="border-t border-slate-200" />;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-orange-600">
      {children}
    </h2>
  );
}

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
            Methodology
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-800">
            How KidSafe Index Works
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            KidSafe Index is designed to turn fast-moving digital safety signals
            into clear, structured risk summaries that parents can understand
            more easily.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="max-w-4xl space-y-10">
          <section>
            <SectionTitle>What We Track</SectionTitle>
            <p className="mt-3 text-base leading-8 text-slate-600">
              KidSafe Index reviews signals that may point to meaningful digital
              safety concerns, including:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-slate-600">
              <li>child and teen online safety risks</li>
              <li>grooming and exploitation concerns</li>
              <li>cyberbullying and social manipulation</li>
              <li>harmful or disturbing content</li>
              <li>privacy and data misuse</li>
              <li>mental health risks linked to digital platforms</li>
              <li>
                scams, phishing, breaches, malware, and other family-relevant
                digital threats
              </li>
              <li>
                regulatory, platform, and enforcement developments connected to
                digital safety
              </li>
            </ul>
          </section>

          <SectionDivider />

          <section>
            <SectionTitle>How Signals Become Threats</SectionTitle>

            <div className="mt-3 space-y-5 text-base leading-8 text-slate-600">
              <p>
                The site does not treat every article or report as a separate
                threat.
              </p>

              <p>
                Instead, new signals are reviewed and normalized into broader
                recurring threat categories. If multiple stories describe the
                same underlying issue, they are grouped into one stable threat
                rather than creating duplicate cards.
              </p>

              <p>
                This helps the site stay focused on meaningful risk patterns
                instead of isolated headlines.
              </p>
            </div>
          </section>

          <SectionDivider />

          <section>
            <SectionTitle>Audience Scope</SectionTitle>

            <div className="mt-3 space-y-5 text-base leading-8 text-slate-600">
              <p>Each threat is assigned one of two audience scopes:</p>

              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Child/Teen
                </h3>
                <p className="mt-1">
                  Used when the core risk is primarily about protecting children
                  or teens directly.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Family/Parent
                </h3>
                <p className="mt-1">
                  Used when the core risk is broader household digital safety,
                  including scams, breaches, malware, phishing, or other
                  family-relevant digital threats.
                </p>
              </div>

              <p>
                This allows KidSafe Index to stay child-focused while also
                helping parents understand larger risks affecting the household
                around them.
              </p>
            </div>
          </section>

          <SectionDivider />

          <section>
            <SectionTitle>How Scoring Works</SectionTitle>

            <div className="mt-3 space-y-5 text-base leading-8 text-slate-600">
              <p>Each threat is scored across three dimensions:</p>

              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Exposure Risk
                </h3>
                <p className="mt-1">
                  How likely someone in the relevant audience is to encounter
                  the threat.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Harm Severity
                </h3>
                <p className="mt-1">
                  How serious the impact could be if the threat occurs.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Susceptibility
                </h3>
                <p className="mt-1">
                  How likely someone in the relevant audience is to trust, fall
                  for, or be affected by the threat.
                </p>
              </div>

              <p>These scores use a 0–5 scale:</p>

              <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-slate-600">
                <li>0 = very low</li>
                <li>5 = very high</li>
              </ul>

              <p>
                For Child/Teen threats, susceptibility reflects how vulnerable
                kids or teens may be. For Family/Parent threats, susceptibility
                reflects how vulnerable someone in the household may be.
              </p>
            </div>
          </section>

          <SectionDivider />

          <section>
            <SectionTitle>Advice and Resources</SectionTitle>

            <div className="mt-3 space-y-5 text-base leading-8 text-slate-600">
              <p>Each threat also includes practical guidance and context:</p>

              <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-slate-600">
                <li>a short summary of the risk</li>
                <li>action-oriented advice</li>
                <li>a “Lumo’s Tip” insight card</li>
                <li>
                  selected external resources that may help readers learn more
                </li>
              </ul>

              <p>
                External resources are included as potentially helpful
                references, but not every outside organization or page is fully
                vetted or endorsed by KidSafe Index.
              </p>
            </div>
          </section>

          <SectionDivider />

          <section>
            <SectionTitle>Trend Tracking</SectionTitle>

            <div className="mt-3 space-y-4 text-base leading-8 text-slate-600">
              <p>
                KidSafe Index also tracks whether a threat appears to be rising
                or becoming more visible over time.
              </p>

              <p>
                Trend indicators are based on changes in recent signal activity
                and coverage, not just on one article alone.
              </p>

              <p>
                This helps highlight issues that may be gaining momentum, not
                just issues that happened to appear in a single headline.
              </p>
            </div>
          </section>

          <SectionDivider />

          <section>
            <p className="text-base leading-8 text-slate-600">
              KidSafe Index is meant to help parents see patterns more clearly,
              understand what matters, and respond with better context.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}