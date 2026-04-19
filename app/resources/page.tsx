import Link from "next/link";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            Resources
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
            Trusted Resources for Parents and Families
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            If your family is dealing with an online safety concern, this page
            is here to help you find the right next step. Whether you need to
            act quickly, report an incident, or find platform-specific support,
            these resources are meant to point you in the right direction.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="space-y-12">
          <div className="rounded-2xl border border-orange-200/70 bg-gradient-to-br from-orange-50 via-white to-sky-50 p-6 shadow-sm">
            <p className="text-lg font-semibold uppercase tracking-wide text-orange-500">
              Urgent Situations
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              If a child is in immediate danger, if there is a credible threat,
              or if you believe a crime is actively taking place, contact local
              law enforcement or emergency services right away.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Online safety situations can range from confusing to severe. If
              something feels urgent, it is always better to treat it seriously
              and seek immediate help.
            </p>
        </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Report an Incident
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-700">
              If something has already happened, these are strong starting
              points for reporting cybercrime, scams, exploitation, harmful
              content, and other serious online safety concerns.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <a
                href="https://www.ic3.gov/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-800">
                  FBI / IC3
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Report cyber-enabled crime, scams, fraud, impersonation, and
                  other online criminal activity through the Internet Crime
                  Complaint Center.
                </p>
                <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
                  Visit IC3 →
                </p>
              </a>

              <a
                href="https://www.missingkids.org/gethelpnow/cybertipline"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-800">
                  NCMEC CyberTipline
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Report suspected online child sexual exploitation, enticement,
                  sextortion, CSAM, or other serious child safety violations.
                </p>
                <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
                  Visit CyberTipline →
                </p>
              </a>

              <a
                href="https://reportfraud.ftc.gov/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-800">
                  FTC ReportFraud
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Report scams, fraud, deceptive business practices, and other
                  consumer harm that may affect your family.
                </p>
                <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
                  Visit ReportFraud →
                </p>
              </a>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">
                  Platform Reporting Tools
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                   If the issue happened inside a specific app, game, or platform, check the
                   Platform Safety Centers section below for official reporting tools, family
                   resources, and safety guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-sky-50/50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              A Note for Parents
            </p>
            <p className="mt-3 leading-7 text-slate-700">
              Not every online issue needs the same response. Some situations
              require reporting. Others require platform support, documentation,
              or a conversation with your child. The goal of this page is to
              help you start in the right place.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Get Help and Guidance
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-700">
              These resources can help families better understand online risks,
              platform settings, and practical next steps.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <a
                href="https://consumer.ftc.gov/scams"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-800">
                  FTC Scam Guidance
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Learn how scams work, what warning signs to look for, and what
                  to do if someone in your family may have been targeted.
                </p>
                <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
                  View FTC Guidance →
                </p>
              </a>

              <a
                href="https://www.youtube.com/kids/parent-resources/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-800">
                  YouTube Kids Parent Resources
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Explore family tools, settings, and controls for guiding your
                  child’s experience on YouTube Kids.
                </p>
                <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
                  View Parent Resources →
                </p>
              </a>

              <a
                href="https://familycenter.meta.com/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-800">
                  Meta Family Center
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Learn about built-in protections, parental supervision, and
                  family safety tools across Meta services.
                </p>
                <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
                  View Family Center →
                </p>
              </a>

              <Link
                href="/harmful-accounts"
                className="group rounded-2xl border border-slate-200/80 bg-sky-50/50 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-800">
                  Warning Signs of Harmful Accounts
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Learn how to recognize common patterns used by harmful accounts,
                  including secrecy, manipulation, risky content, and behavior that
                  may put kids at risk.
                </p>
                <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
                  Read the Guide →
                </p>
              </Link>
            </div>
          </div>

          <div>
  <h2 className="text-2xl font-bold text-slate-800">
    Platform Safety Centers
  </h2>
  <p className="mt-4 max-w-3xl leading-7 text-slate-700">
    Some issues are best handled directly through the app, game, platform,
    or service involved. These official safety centers and family tools are
    organized by category to make them easier to browse.
  </p>

  <div className="mt-10 space-y-10">
    <div>
      <h3 className="text-xl font-semibold text-slate-800">
        Gaming Platforms
      </h3>

      <div className="mt-5 grid gap-6 md:grid-cols-3">
        {/* Roblox */}
        <a
          href="https://about.roblox.com/safety"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">Roblox</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Official safety center with policies, moderation resources, and parent-focused tools.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit Roblox Safety →
          </p>
        </a>

        {/* Xbox */}
        <a
          href="https://support.xbox.com/en-US/help/family-online-safety/browse"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">Xbox</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Family and online safety tools, including privacy settings, activity reporting, and controls.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit Xbox Family Safety →
          </p>
        </a>

        {/* PlayStation */}
        <a
          href="https://www.playstation.com/en-us/support/safety/"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">PlayStation</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Official PlayStation safety resources, family settings, and parental controls guidance.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit PlayStation Safety →
          </p>
        </a>

        {/* Nintendo */}
        <a
          href="https://www.nintendo.com/us/mobile-apps/parental-controls/"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">Nintendo</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Official parental controls and family guidance for Nintendo systems, including time and age settings.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit Nintendo Parental Controls →
          </p>
        </a>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-slate-800">
        Social and Messaging Platforms
      </h3>

      <div className="mt-5 grid gap-6 md:grid-cols-3">
        {/* Snapchat */}
        <a
          href="https://values.snap.com/safety/family-center"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">Snapchat</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Family Center tools for visibility, reporting, and safer teen account use.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit Snapchat Family Center →
          </p>
        </a>

        {/* Instagram */}
        <a
          href="https://familycenter.meta.com/our-products/instagram/"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">Instagram</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Family Center resources for teen supervision, notifications, and safety-related guidance.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit Instagram Family Center →
          </p>
        </a>

        {/* Facebook */}
        <a
          href="https://familycenter.meta.com/our-products/facebook-messenger/"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">Facebook</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Meta Family Center resources for Facebook and Messenger, including teen safety features and family guidance.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit Facebook Family Resources →
          </p>
        </a>

        {/* Messenger Kids */}
        <a
          href="https://www.messengerkids.com/parent-resources/"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">Messenger Kids</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Official parent resources for Messenger Kids, including controls, setup guidance, and dashboard support.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit Messenger Kids Resources →
          </p>
        </a>

        {/* X */}
        <a
          href="https://help.x.com/en/safety-and-security"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">X</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Official safety and security help for reporting abuse, privacy concerns, and account problems.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit X Safety →
          </p>
        </a>

        {/* Discord */}
        <a
          href="https://discord.com/safety"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">Discord</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Official safety center with parent resources, Family Center guidance, and reporting tools.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit Discord Safety →
          </p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://faq.whatsapp.com/323781503786199"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">WhatsApp</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Parent and guardian guidance for helping teens stay safer on WhatsApp.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit WhatsApp Guidance →
          </p>
        </a>

        {/* Telegram */}
        <a
          href="https://telegram.org/faq"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">Telegram</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Official FAQ and security guidance, including privacy and safer-use recommendations.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit Telegram FAQ →
          </p>
        </a>

        {/* BeReal */}
        <a
          href="https://help.bereal.com/hc/en-us/categories/10449460450589-Safety"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">BeReal</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Official safety help resources, including reporting inappropriate behavior and blocking.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit BeReal Safety →
          </p>
        </a>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-slate-800">
        Video and Streaming Platforms
      </h3>

      <div className="mt-5 grid gap-6 md:grid-cols-3">
        {/* TikTok */}
        <a
          href="https://support.tiktok.com/en/safety-hc/account-and-user-safety/for-parents-and-guardians"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">TikTok</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Parent and guardian guidance, including Family Pairing and teen account safety controls.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit TikTok Safety →
          </p>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/kids/parent-resources/"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">YouTube / YouTube Kids</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Parent resources, controls, and family guidance for YouTube and YouTube Kids.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit YouTube Family Resources →
          </p>
        </a>

        {/* Twitch */}
        <a
          href="https://safety.twitch.tv/s/?language=en_US"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">Twitch</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Official Twitch Safety Center with policies, reporting tools, and platform guidance.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit Twitch Safety →
          </p>
        </a>

        {/* Spotify */}
        <a
          href="https://www.spotify.com/safetyandprivacy"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
        >
          <h4 className="text-lg font-semibold text-slate-800">Spotify</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Official Safety & Privacy Center with reporting information, rules, and guidance.
          </p>
          <p className="mt-4 text-sm font-medium text-blue-600 transition-transform duration-200 group-hover:translate-x-1">
            Visit Spotify Safety →
          </p>
        </a>
      </div>
    </div>
  </div>
</div>
</div>
</section>
</main>
  );
}