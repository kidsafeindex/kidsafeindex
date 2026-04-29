type Threat = {
  id: string;
  name: string;
  summary: string;
  threatType: string;
  audienceScope: string;
};

type TrendThreat = {
  id: string;
  name: string;
  arrow: string;
  color: string;
};

async function getChildTeenThreats(): Promise<Threat[]> {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const token = process.env.AIRTABLE_TOKEN;

  if (!baseId || !token) {
    throw new Error("Missing Airtable environment variables.");
  }

  const formula = encodeURIComponent(`{Audience Scope} = "Child/Teen"`);
  const url = `https://api.airtable.com/v0/${baseId}/Threats?filterByFormula=${formula}&maxRecords=6&sort[0][field]=Threat%20Score&sort[0][direction]=desc`;

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

  return (data.records || []).map((record: any) => ({
    id: record.id,
    name: record.fields["Threat Name"] || "Untitled threat",
    summary: record.fields["Summary"] || "No summary available.",
    threatType: record.fields["Threat Type"] || "Unknown",
    audienceScope: record.fields["Audience Scope"] || "",
  }));
}

async function getFamilyParentThreats(): Promise<Threat[]> {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const token = process.env.AIRTABLE_TOKEN;

  if (!baseId || !token) {
    throw new Error("Missing Airtable environment variables.");
  }

  const formula = encodeURIComponent(`{Audience Scope} = "Family/Parent"`);
  const url = `https://api.airtable.com/v0/${baseId}/Threats?filterByFormula=${formula}&maxRecords=6&sort[0][field]=Threat%20Score&sort[0][direction]=desc`;

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

  return (data.records || []).map((record: any) => ({
    id: record.id,
    name: record.fields["Threat Name"] || "Untitled threat",
    summary: record.fields["Summary"] || "No summary available.",
    threatType: record.fields["Threat Type"] || "Unknown",
    audienceScope: record.fields["Audience Scope"] || "",
  }));
}

async function getTrendWatch(): Promise<TrendThreat[]> {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const token = process.env.AIRTABLE_TOKEN;

  if (!baseId || !token) {
    throw new Error("Missing Airtable environment variables.");
  }

  const formula = encodeURIComponent(`{Show in Trend Watch} = 1`);
  const url = `https://api.airtable.com/v0/${baseId}/Threats?filterByFormula=${formula}&maxRecords=8&sort[0][field]=Last%20Signal%20Date&sort[0][direction]=desc`;

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

  return (data.records || []).map((record: any) => ({
    id: record.id,
    name: record.fields["Threat Name"] || "Untitled threat",
    arrow: record.fields["Trend Arrow"] || "",
    color: record.fields["Trend Color"] || "",
  }));
}

function ThreatCard({ threat }: { threat: Threat }) {
  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
          {threat.threatType}
        </p>
        <h3 className="mt-2 text-xl font-semibold leading-7 text-slate-800">
          {threat.name}
        </h3>
      </div>

      <p className="flex-1 text-sm leading-6 text-slate-600">
        {threat.summary}
      </p>

      <a
        href={`/threats/${threat.id}`}
        className="mt-6 inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
      >
        View Details →
      </a>
    </article>
  );
}

export default async function Home() {
  const childTeenThreats = await getChildTeenThreats();
  const familyParentThreats = await getFamilyParentThreats();
  const trendWatch = await getTrendWatch();

  return (
    <main className="min-h-screen text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
              Stay Ahead of Online Risks Affecting Your Kids.
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-slate-600">
              Real-time insights into child safety risks across apps, video
              games, and the wider online world, explained in plain language
              for parents.
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

      <section className="border-b border-slate-200 bg-white/50">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-40">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                Trend Watch
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Based on changes in recent reporting and media coverage.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-slate-700">
              {trendWatch.length > 0 ? (
                trendWatch.map((threat) => (
                  <span key={threat.id}>
                    {threat.name}{" "}
                    <span
                      className={
                        threat.color === "red"
                          ? "text-red-600"
                          : threat.color === "green"
                          ? "text-green-600"
                          : "text-slate-600"
                      }
                    >
                      {threat.arrow}
                    </span>
                  </span>
                ))
              ) : (
                <span className="text-slate-500">No current trend shifts.</span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="top-risks" className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Child &amp; Teen Safety Watch
          </h2>
          <p className="mt-2 text-slate-600">
            The most important online safety risks we’re tracking right now for kids
            and teens.
          </p>
        </div>

        {childTeenThreats.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {childTeenThreats.map((threat) => (
              <ThreatCard key={threat.id} threat={threat} />
            ))}
          </div>
        ) : (
          <p className="text-slate-600">
            No child or teen threats are currently available.
          </p>
        )}
      </section>

      <section className="border-t border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
              Family &amp; Parent Safety Watch
            </h2>
            <p className="mt-2 text-slate-600">
              Broader digital safety risks parents and households should keep an
              eye on, including scams, breaches, malware, and other family-relevant
              threats.
            </p>
          </div>

          {familyParentThreats.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {familyParentThreats.map((threat) => (
                <ThreatCard key={threat.id} threat={threat} />
              ))}
            </div>
          ) : (
            <p className="text-slate-600">
              No family or parent safety threats are currently available.
            </p>
          )}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-sky-50/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
              How KidSafe Index Helps
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              KidSafe Index helps parents make sense of online risks by turning
              fast-changing digital safety issues into clear, useful insights.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Spot Risks Earlier</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Stay aware of emerging online safety concerns affecting kids
                across apps and the wider online world.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                Understand What Matters
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Get clear explanations of threats, trends, and safety concerns
                without having to sort through technical or confusing
                information.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Know What To Do Next</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Use parent-focused guidance to better understand what each issue
                means and how to respond with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}