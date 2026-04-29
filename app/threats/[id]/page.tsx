type ThreatDetail = {
  id: string;
  name: string;
  summary: string;
  threatType: string;
  audienceScope: string;
  exposureRisk: number;
  harmSeverity: number;
  susceptibility: number;
  parentAdvice: string;
  lumoTip: string;
};

async function getThreat(id: string): Promise<ThreatDetail | null> {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const token = process.env.AIRTABLE_TOKEN;

  if (!baseId || !token) {
    throw new Error("Missing Airtable environment variables.");
  }

  const url = `https://api.airtable.com/v0/${baseId}/Threats/${id}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }

    const text = await response.text();
    throw new Error(`Airtable request failed: ${response.status} ${text}`);
  }

  const record = await response.json();

  return {
    id: record.id,
    name: record.fields["Threat Name"] || "Untitled threat",
    summary: record.fields["Summary"] || "No summary available.",
    threatType: record.fields["Threat Type"] || "Unknown",
    audienceScope: record.fields["Audience Scope"] || "Child/Teen",
    exposureRisk: record.fields["AI Exposure Risk"] ?? 0,
    harmSeverity: record.fields["AI Harm Severity"] ?? 0,
    susceptibility: record.fields["AI Child Susceptibility"] ?? 0,
    parentAdvice: record.fields["Parent Advice"] || "",
    lumoTip: record.fields["Lumo Tip"] || "",
  };
}

function getSusceptibilityLabel(audienceScope: string) {
  return audienceScope === "Family/Parent"
    ? "Household Susceptibility"
    : "Child Susceptibility";
}

function getScoreExplanation(audienceScope: string) {
  if (audienceScope === "Family/Parent") {
    return {
      exposure:
        "How likely a family or household is to encounter this risk in everyday digital life.",
      harm:
        "How serious the impact could be if the threat affects a family or household.",
      susceptibility:
        "How likely someone in a household is to trust, fall for, or be affected by the threat.",
    };
  }

  return {
    exposure:
      "How likely a child or teen is to encounter this risk on the relevant platform or service.",
    harm:
      "How serious the impact could be if the threat affects a child or teen.",
    susceptibility:
      "How likely a child or teen is to trust, fall for, or be influenced by the threat.",
  };
}

function splitLines(text: string) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function ScoreCard({
  label,
  value,
  description,
  tone,
}: {
  label: string;
  value: number;
  description: string;
  tone: "blue" | "orange" | "purple";
}) {
  const toneClasses = {
    blue: {
      card: "border-sky-200 bg-sky-50/80",
      label: "text-sky-700",
      value: "text-sky-900",
    },
    orange: {
      card: "border-orange-200 bg-orange-50/80",
      label: "text-orange-700",
      value: "text-orange-900",
    },
    purple: {
      card: "border-violet-200 bg-violet-50/80",
      label: "text-violet-700",
      value: "text-violet-900",
    },
  };

  const styles = toneClasses[tone];

  return (
    <div className={`rounded-2xl border p-5 shadow-sm ${styles.card}`}>
      <p className={`text-sm font-semibold uppercase tracking-wide ${styles.label}`}>
        {label}
      </p>
      <p className={`mt-3 text-3xl font-bold ${styles.value}`}>{value}/5</p>
      <p className="mt-3 text-sm leading-6 text-slate-700">{description}</p>
    </div>
  );
}

export default async function ThreatDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const threat = await getThreat(id);

  if (!threat) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-800">Threat not found</h1>
        <p className="mt-4 text-slate-600">
          We couldn’t find the threat you were looking for.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          ← Back to homepage
        </a>
      </main>
    );
  }

  const susceptibilityLabel = getSusceptibilityLabel(threat.audienceScope);
  const scoreExplanation = getScoreExplanation(threat.audienceScope);
  const adviceLines = splitLines(threat.parentAdvice);

  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to homepage
          </a>

          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              {threat.threatType}
            </p>

            <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-800">
              {threat.name}
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              {threat.summary}
            </p>

            <p className="mt-4 text-sm font-medium text-slate-500">
              Audience Scope: {threat.audienceScope}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <ScoreCard
            label="Exposure Risk"
            value={threat.exposureRisk}
            description={scoreExplanation.exposure}
            tone="blue"
          />
          <ScoreCard
            label="Harm Severity"
            value={threat.harmSeverity}
            description={scoreExplanation.harm}
            tone="orange"
          />
          <ScoreCard
            label={susceptibilityLabel}
            value={threat.susceptibility}
            description={scoreExplanation.susceptibility}
            tone="purple"
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-800">
              How to read these scores
            </h2>

            {threat.audienceScope === "Family/Parent" ? (
              <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600">
                <p>
                  These scores are designed to help families quickly understand
                  how often a broader digital risk may show up, how serious the
                  impact could be, and how vulnerable a household may be to it.
                </p>
                <p>
                  A higher score does not mean something bad will definitely
                  happen. It means the risk deserves more attention because it is
                  more common, more harmful, or easier for people to fall for.
                </p>
              </div>
            ) : (
              <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600">
                <p>
                  These scores are designed to help parents quickly understand
                  how often a child-focused digital risk may show up, how
                  serious the impact could be, and how vulnerable kids may be to
                  it.
                </p>
                <p>
                  A higher score does not mean something bad will definitely
                  happen. It means the risk deserves more attention because it is
                  more common, more harmful, or easier for children and teens to
                  encounter or trust.
                </p>
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded-2xl border border-sky-200 shadow-sm">
            <div className="bg-gradient-to-br from-sky-100 via-cyan-50 to-orange-50 p-6">
              <div className="flex items-center gap-3">
                <img
                  src="/lumo.png"
                  alt="Lumo"
                  className="h-12 w-12 shrink-0"
                />
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">
                    Lumo’s Tip
                  </h2>
                  <p className="text-sm text-slate-600">
                    Quick context to help make sense of this risk.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-700">
                {threat.lumoTip || "No additional context available yet."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">
            Parent Advice
          </h2>

          {adviceLines.length > 0 ? (
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-600">
              {adviceLines.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm leading-6 text-slate-600">
              No advice is available yet for this threat.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}