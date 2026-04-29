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
  signals: string[];
};

type SignalRecord = {
  id: string;
  title: string;
  sourceUrl: string;
  sourceName: string;
  date: string;
};

type ResourceCard = {
  title: string;
  description: string;
  href: string;
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
    signals: record.fields["Signals"] || [],
  };
}

async function getSignals(signalIds: string[]): Promise<SignalRecord[]> {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const token = process.env.AIRTABLE_TOKEN;

  if (!baseId || !token || signalIds.length === 0) {
    return [];
  }

  const records = await Promise.all(
    signalIds.slice(0, 6).map(async (signalId) => {
      const url = `https://api.airtable.com/v0/${baseId}/Signals/${signalId}`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });

      if (!response.ok) {
        return null;
      }

      const record = await response.json();

      return {
        id: record.id,
        title: record.fields["Signal Title"] || "Untitled source",
        sourceUrl: record.fields["Source URL"] || "",
        sourceName: record.fields["Source Name"] || "Unknown source",
        date: record.fields["Date"] || "",
      };
    })
  );

  return records.filter(Boolean) as SignalRecord[];
}

function getSusceptibilityLabel(audienceScope: string) {
  return audienceScope === "Family/Parent"
    ? "Household Susceptibility"
    : "Child Susceptibility";
}

function getAdviceHeading(audienceScope: string) {
  return audienceScope === "Family/Parent"
    ? "What To Do Next"
    : "Parent Advice";
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

function getHelpfulResources(
  threatType: string,
  audienceScope: string
): ResourceCard[] {
  if (audienceScope === "Family/Parent") {
    switch (threatType) {
      case "Scam":
      case "Phishing":
        return [
          {
            title: "FTC Scam Guidance",
            description:
              "Practical consumer guidance for spotting scams, fake messages, and impersonation attempts.",
            href: "https://consumer.ftc.gov/scams",
          },
          {
            title: "IdentityTheft.gov",
            description:
              "Official recovery and reporting steps if personal information or an account has been compromised.",
            href: "https://www.identitytheft.gov/",
          },
        ];
      case "Breach":
      case "Account Theft":
        return [
          {
            title: "Have I Been Pwned",
            description:
              "Check whether an email address has appeared in known data breaches.",
            href: "https://haveibeenpwned.com/",
          },
          {
            title: "IdentityTheft.gov",
            description:
              "Step-by-step help for identity theft, stolen credentials, and account misuse.",
            href: "https://www.identitytheft.gov/",
          },
        ];
      case "Malware":
      case "Cybercrime":
        return [
          {
            title: "CISA Cyber Guidance",
            description:
              "Official security guidance for protecting devices, accounts, and home networks.",
            href: "https://www.cisa.gov/",
          },
          {
            title: "FTC Online Security Tips",
            description:
              "Simple advice for updates, passwords, suspicious downloads, and household cyber safety.",
            href: "https://consumer.ftc.gov/topics/online-security",
          },
        ];
      case "Privacy Risk":
        return [
          {
            title: "FTC Privacy & Security",
            description:
              "Consumer guidance on privacy settings, data collection, and protecting personal information.",
            href: "https://consumer.ftc.gov/topics/protect-your-personal-information-hackers-scammers",
          },
          {
            title: "Mozilla Privacy Not Included",
            description:
              "Reviews and privacy breakdowns for connected devices, apps, and smart home products.",
            href: "https://foundation.mozilla.org/en/privacynotincluded/",
          },
        ];
      default:
        return [
          {
            title: "FTC Consumer Advice",
            description:
              "Broad guidance for scams, fraud, privacy issues, and consumer digital safety.",
            href: "https://consumer.ftc.gov/",
          },
          {
            title: "CISA",
            description:
              "Government cybersecurity guidance for staying safer online at home.",
            href: "https://www.cisa.gov/",
          },
        ];
    }
  }

  switch (threatType) {
    case "Grooming":
    case "Exploitation":
      return [
        {
          title: "NCMEC",
          description:
            "Resources for reporting exploitation, online enticement, and child sexual abuse material concerns.",
          href: "https://www.missingkids.org/home",
        },
        {
          title: "Thorn",
          description:
            "Guidance related to grooming, sextortion, and online exploitation risks.",
          href: "https://www.thorn.org/",
        },
      ];
    case "Cyberbullying":
      return [
        {
          title: "StopBullying.gov",
          description:
            "Practical guidance for understanding, responding to, and documenting bullying and cyberbullying.",
          href: "https://www.stopbullying.gov/",
        },
        {
          title: "Common Sense Media",
          description:
            "Parent-friendly guidance for handling online cruelty, group chats, and social pressure.",
          href: "https://www.commonsensemedia.org/",
        },
      ];
    case "Mental Health Risk":
    case "Harmful Content":
      return [
        {
          title: "Common Sense Media",
          description:
            "Parent guidance for app content, online behavior, and digital well-being.",
          href: "https://www.commonsensemedia.org/",
        },
        {
          title: "988 Lifeline",
          description:
            "Immediate support resource if online content is tied to emotional distress or self-harm concerns.",
          href: "https://988lifeline.org/",
        },
      ];
    case "Scam":
    case "Phishing":
      return [
        {
          title: "FTC Scam Guidance",
          description:
            "Advice for spotting fake messages, phishing attempts, and impersonation scams.",
          href: "https://consumer.ftc.gov/scams",
        },
        {
          title: "FBI Internet Crime Complaint Center",
          description:
            "Where to report serious online scams, extortion, and cyber-enabled fraud.",
          href: "https://www.ic3.gov/",
        },
      ];
    case "Privacy Risk":
      return [
        {
          title: "Common Sense Media",
          description:
            "Explanations of privacy settings, app permissions, and what to review on youth-focused platforms.",
          href: "https://www.commonsensemedia.org/",
        },
        {
          title: "FTC Privacy & Security",
          description:
            "Consumer guidance on protecting personal information and understanding privacy risks.",
          href: "https://consumer.ftc.gov/topics/protect-your-personal-information-hackers-scammers",
        },
      ];
    default:
      return [
        {
          title: "Common Sense Media",
          description:
            "Parent-friendly digital safety guidance, platform reviews, and age-appropriate recommendations.",
          href: "https://www.commonsensemedia.org/",
        },
        {
          title: "NCMEC",
          description:
            "Child safety resources and reporting pathways for serious online harm concerns.",
          href: "https://www.missingkids.org/home",
        },
      ];
  }
}

function getScoreTone(value: number): "green" | "yellow" | "red" {
  if (value <= 1) return "green";
  if (value <= 3) return "yellow";
  return "red";
}

function ScoreCard({
  label,
  value,
  description,
}: {
  label: string;
  value: number;
  description: string;
}) {
  const tone = getScoreTone(value);

  const toneClasses = {
    green: {
      card: "border-emerald-200 bg-emerald-50/90",
      label: "text-emerald-700",
      value: "text-emerald-900",
    },
    yellow: {
      card: "border-amber-200 bg-amber-50/90",
      label: "text-amber-700",
      value: "text-amber-900",
    },
    red: {
      card: "border-rose-200 bg-rose-50/90",
      label: "text-rose-700",
      value: "text-rose-900",
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

function SectionDivider() {
  return <div className="mx-auto max-w-5xl border-t border-slate-200 px-6" />;
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-xl font-semibold text-slate-800">{title}</h2>
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

  const signals = await getSignals(threat.signals);
  const susceptibilityLabel = getSusceptibilityLabel(threat.audienceScope);
  const adviceHeading = getAdviceHeading(threat.audienceScope);
  const scoreExplanation = getScoreExplanation(threat.audienceScope);
  const adviceLines = splitLines(threat.parentAdvice);
  const resources = getHelpfulResources(
    threat.threatType,
    threat.audienceScope
  );

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
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <SectionHeading eyebrow="Risk Snapshot" title="Current Risk Scores" />
        <div className="grid gap-6 md:grid-cols-3">
          <ScoreCard
            label="Exposure Risk"
            value={threat.exposureRisk}
            description={scoreExplanation.exposure}
          />
          <ScoreCard
            label="Harm Severity"
            value={threat.harmSeverity}
            description={scoreExplanation.harm}
          />
          <ScoreCard
            label={susceptibilityLabel}
            value={threat.susceptibility}
            description={scoreExplanation.susceptibility}
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <SectionHeading
              eyebrow="Score Guide"
              title="How to read these scores"
            />

            {threat.audienceScope === "Family/Parent" ? (
              <div className="space-y-3 text-sm leading-6 text-slate-600">
                <p>
                  These scores show how likely a broader digital risk is to affect
                  a family or household, how serious the impact could be, and how
                  vulnerable someone in the household may be.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-sm leading-6 text-slate-600">
                <p>
                  These scores show how likely a child-focused digital risk is to
                  affect kids or teens, how serious the impact could be, and how
                  vulnerable young users may be.
                </p>
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded-2xl border border-sky-200 shadow-sm">
            <div className="bg-gradient-to-br from-sky-100 via-cyan-50 to-orange-50 p-7">
              <div className="flex items-center gap-3">
                <img
                  src="/lumo.png"
                  alt="Lumo"
                  className="h-14 w-14 shrink-0"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                    Lumo Insight
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-orange-600">
                    Lumo’s Tip
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-base leading-7 text-slate-700">
                {threat.lumoTip || "No additional context available yet."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <SectionHeading eyebrow="Take Action" title={adviceHeading} />

            {adviceLines.length > 0 ? (
              <ul className="list-disc space-y-3 pl-5 text-sm leading-6 text-slate-600">
                {adviceLines.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm leading-6 text-slate-600">
                No advice is available yet for this threat.
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <SectionHeading eyebrow="Learn More" title="Helpful Resources" />

            <p className="text-xs leading-5 text-slate-500">
              Resource note: These links are provided as potentially helpful
              external references. KidSafe Index does not guarantee, endorse, or
              fully vet every third-party organization, page, or recommendation.
            </p>

            <div className="mt-4 space-y-4">
              {resources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-orange-200 hover:bg-orange-50/50"
                >
                  <h3 className="text-sm font-semibold text-slate-800">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {resource.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {signals.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-12">
          <SectionHeading eyebrow="Source Trail" title="Recent Reporting" />
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <p className="text-sm leading-6 text-slate-600">
              These are some of the signals and source stories that informed this
              threat summary.
            </p>

            <div className="mt-5 space-y-4">
              {signals.map((signal) => (
                <a
                  key={signal.id}
                  href={signal.sourceUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <h3 className="text-sm font-semibold text-slate-800">
                    {signal.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">
                    {signal.sourceName}
                    {signal.date ? ` • ${signal.date}` : ""}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}