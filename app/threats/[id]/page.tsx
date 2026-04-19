type ThreatDetailProps = {
  params: Promise<{
    id: string;
  }>;
};

type ScoreCardProps = {
  label: string;
  value: number;
};

async function getThreat(id: string) {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const token = process.env.AIRTABLE_TOKEN;

  if (!baseId || !token) {
    throw new Error("Missing Airtable environment variables.");
  }

 const formula = encodeURIComponent(`RECORD_ID()="${id}"`);
 const url = `https://api.airtable.com/v0/${baseId}/Threats?filterByFormula=${formula}&maxRecords=1`;

 const response = await fetch(url, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
  cache: "no-store",
});

if (!response.ok) {
  const text = await response.text();
  throw new Error(`Airtable request failed: ${response.status} ${text}`);
}

const data = await response.json();
const record = data.records?.[0];

if (!record) {
  throw new Error("Threat not found.");
}

  return {
    id: record.id,
    name: record.fields["Threat Name"] || "Untitled threat",
    summary: record.fields["Summary"] || "No summary available.",
    threatType: record.fields["Threat Type"] || "Unknown",
    exposureRisk: Number(record.fields["AI Exposure Risk"] ?? 0),
    harmSeverity: Number(record.fields["AI Harm Severity"] ?? 0),
    childSusceptibility: Number(
      record.fields["AI Child Susceptibility"] ?? 0
    ),
    parentAdvice:
      record.fields["Parent Advice"] ||
      "Parent advice will appear here once this field is populated in Airtable.",
    
    lumoTip:
    record.fields["Lumo Tip"] ||
    "Risks that feel social, playful, or familiar can be easier for kids to trust before they recognize the danger.",
  };
}

function ScoreCard({ label, value }: ScoreCardProps) {
  const level =
    value <= 1 ? "Low" : value <= 3 ? "Moderate" : "High";

  const cardStyles =
    value <= 1
      ? "border-green-200/80 bg-gradient-to-br from-green-50 via-white to-emerald-50"
      : value <= 3
      ? "border-yellow-200/80 bg-gradient-to-br from-yellow-50 via-white to-amber-50"
      : "border-red-200/80 bg-gradient-to-br from-red-50 via-white to-rose-50";

  return (
    <div className={`rounded-2xl border p-5 shadow-sm ${cardStyles}`}>
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">
        {label}
      </p>
      <p className="mt-3 text-2xl font-bold text-slate-800">{level}</p>
    </div>
  );
}

function getHelpfulResources(threat: {
  name: string;
  summary: string;
  threatType: string;
}) {
  const combined = `${threat.name} ${threat.summary} ${threat.threatType}`.toLowerCase();

  const hasSpecificExternalResource = () =>
    resources.some((resource) => resource.href.startsWith("http"));

  const resources: Array<{
    title: string;
    description: string;
    href: string;
    cta: string;
  }> = [];

  if (
    combined.includes("roblox")
  ) {
    resources.push({
      title: "Roblox Safety",
      description:
        "Official safety, parental controls, moderation, and family guidance for Roblox.",
      href: "https://about.roblox.com/safety",
      cta: "Visit Roblox Safety →",
    });
  }

  if (
    combined.includes("snapchat")
  ) {
    resources.push({
      title: "Snapchat Family Center",
      description:
        "Official family tools, reporting options, and parent visibility features for Snapchat.",
      href: "https://values.snap.com/safety/family-center",
      cta: "Visit Snapchat Family Center →",
    });
  }

  if (
    combined.includes("tiktok")
  ) {
    resources.push({
      title: "TikTok Parent Guidance",
      description:
        "Official family pairing and parent guidance resources for TikTok.",
      href: "https://support.tiktok.com/en/safety-hc/account-and-user-safety/for-parents-and-guardians",
      cta: "Visit TikTok Safety →",
    });
  }

  if (
    combined.includes("grooming") ||
    combined.includes("enticement") ||
    combined.includes("exploitation") ||
    combined.includes("sextortion")
  ) {
    resources.push({
      title: "NCMEC CyberTipline",
      description:
        "Report suspected online child exploitation, sextortion, enticement, or other serious child safety violations.",
      href: "https://www.missingkids.org/gethelpnow/cybertipline",
      cta: "Visit CyberTipline →",
    });
  }

  if (
    combined.includes("scam") ||
    combined.includes("fraud") ||
    combined.includes("phishing") ||
    combined.includes("account theft")
  ) {
    resources.push({
      title: "FTC ReportFraud",
      description:
        "Report scams, fraud, and deceptive online activity that may affect your family.",
      href: "https://reportfraud.ftc.gov/",
      cta: "Visit ReportFraud →",
    });

    resources.push({
      title: "FBI / IC3",
      description:
        "Report cyber-enabled scams, fraud, impersonation, and other online criminal activity.",
      href: "https://www.ic3.gov/",
      cta: "Visit IC3 →",
    });
  }

  if (
    combined.includes("mental health") ||
    combined.includes("harmful content") ||
    combined.includes("self-harm")
  ) {
    resources.push({
      title: "Platform Safety Resources",
      description:
        "Review the relevant platform’s family safety and reporting tools if harmful content is involved.",
      href: "/resources",
      cta: "View Resources Page →",
    });
  }

  if (!hasSpecificExternalResource()) {
  resources.push({
    title: "Resources for Parents",
    description:
      "Browse trusted reporting tools, platform safety centers, and family guidance resources.",
    href: "/resources",
    cta: "View Resources Page →",
  });
}

  return resources.slice(0, 3);
}

function renderAdviceContent(advice: string) {
  const lines = advice
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const looksLikeList =
    lines.length > 1 ||
    lines.some((line) => line.startsWith("- ") || line.startsWith("• "));

  if (!looksLikeList) {
    return <p className="text-sm leading-7 text-slate-600">{advice}</p>;
  }

  const cleanedLines = lines.map((line) =>
    line.replace(/^[-•]\s*/, "").trim()
  );

  return (
    <ul className="space-y-3 text-slate-700">
      {cleanedLines.map((line, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
          <span className="text-sm leading-7">{line}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ThreatDetailPage({
  params,
}: ThreatDetailProps) {
  const { id } = await params;
  const threat = await getThreat(id);
  const helpfulResources = getHelpfulResources(threat);

  return (
    <main className="min-h-screen text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div>
            <a
              href="/"
              className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              ← Back to Home
            </a>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-orange-500">
              Threat Detail
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-800">
              {threat.name}
            </h1>

            <p className="mt-3 text-sm font-medium text-slate-500">
              {threat.threatType}
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {threat.summary}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ScoreCard
              label="Exposure Risk"
              value={threat.exposureRisk}
            />

            <ScoreCard
              label="Harm Severity"
              value={threat.harmSeverity}
            />

            <ScoreCard
              label="Child Susceptibility"
              value={threat.childSusceptibility}
            />
          </div>
        </div>
      </section>

    <section className="mx-auto max-w-6xl px-6 py-12">
  <div className="grid gap-6 md:grid-cols-2">
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-800">
        How to Read These Scores
      </h2>

      <div className="mt-6 space-y-6">
        <div>
          <h3 className="text-base font-semibold text-slate-800">
            Exposure Risk
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            This shows how likely your child is to come across this issue while
            using apps, games, websites, or online services.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-800">
            Harm Severity
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            This shows how serious the impact could be if the risk affects your
            child.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-800">
            Child Susceptibility
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            This shows how likely your child is to fall for, believe, trust, or
            get pulled into the risk. Some risks are highly technical and harder
            for kids to engage with directly, while others are much easier for
            them to fall for.
          </p>
        </div>
      </div>
    </div>

    <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800">
            Parent Advice
        </h2>

        <div className="mt-6">
         {renderAdviceContent(threat.parentAdvice)}
        </div>
    </div>

    <div className="rounded-2xl border border-orange-200/70 bg-gradient-to-br from-sky-50 via-white to-orange-50 p-6 shadow-sm">
  <div className="flex items-center gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
      <img
        src="/lumo.png"
        alt="Lumo"
        className="h-8 w-8 object-contain"
      />
    </div>

    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
        Lumo’s Tip
      </p>
      <p className="text-xs text-slate-500">
        A quick insight to keep in mind
      </p>
    </div>
  </div>

  <p className="mt-4 text-sm leading-7 text-slate-700">
    {threat.lumoTip}
  </p>
</div>
  </div>
  </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 pb-16">
  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
    <h2 className="text-2xl font-bold text-slate-800">Helpful Resources</h2>
    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
      These resources may help if you want to report an issue, review platform
      safety tools, or take the next step based on this threat.
    </p>

    <div className="mt-6 grid gap-6 md:grid-cols-3">
      {helpfulResources.map((resource) => (
        <a
          key={resource.title}
          href={resource.href}
          target={resource.href.startsWith("http") ? "_blank" : undefined}
          rel={resource.href.startsWith("http") ? "noreferrer" : undefined}
          className="group rounded-2xl border border-slate-200/80 bg-sky-50/40 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-slate-800">
            {resource.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {resource.description}
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            {resource.cta}
          </p>
        </a>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}