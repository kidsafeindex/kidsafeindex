export default function HarmfulAccountsPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div className="flex justify-center md:justify-end">
            <img
              src="/lumo.png"
              alt="Lumo, the KidSafe Index guide mascot"
              className="w-full max-w-xs drop-shadow-xl"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              Guidance
            </p>

            <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
              How to Spot Harmful Accounts
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Not every dangerous account looks obviously dangerous. Some blend in
              with trends, humor, lifestyle content, gaming communities, or peer
              conversation. This page is designed to help parents recognize common
              warning signs, understand how harmful accounts operate, and know
              what to do next.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="space-y-12">
          <div className="rounded-2xl border border-orange-200/70 bg-gradient-to-br from-orange-50 via-white to-sky-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              Important Note
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-800">
              Focus on Patterns, Not Panic
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              The goal is not to make parents suspicious of every unfamiliar
              account. The goal is to recognize patterns of behavior that may
              signal manipulation, harmful influence, exploitation, or unsafe
              content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              What Harmful Accounts Often Have in Common
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-700">
              Harmful accounts can look very different on the surface, but many
              use similar tactics to gain attention, build trust, or pull kids
              deeper into risky spaces.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">
                  They try to build trust quickly
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Harmful accounts often try to feel familiar, validating,
                  exciting, or secretive very quickly. They may present
                  themselves as understanding, supportive, or “safe” before
                  shifting into more harmful behavior.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">
                  They normalize risky behavior
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Some accounts make harmful ideas seem normal, funny,
                  rebellious, or harmless. This can include dangerous
                  challenges, self-harm themes, manipulative communities, or
                  exploitative contact.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">
                  They encourage secrecy
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  A common red flag is any account or person that tries to move
                  a child away from visible spaces and into private or hidden
                  conversations, especially while discouraging them from telling
                  a parent.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">
                  They push emotional or social pressure
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Harmful accounts often use urgency, guilt, peer pressure,
                  flattery, fear of exclusion, or emotional manipulation to get
                  a child to keep engaging.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Warning Signs Parents Can Watch For
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">
                  Content Red Flags
                </h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-sm leading-7">
                      Glorifies self-harm, violence, exploitation, or dangerous
                      challenges
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-sm leading-7">
                      Repeatedly pushes extreme, disturbing, or manipulative
                      themes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-sm leading-7">
                      Frames dangerous behavior as funny, normal, or empowering
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">
                  Behavior Red Flags
                </h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-sm leading-7">
                      Tries to move conversations into direct messages or other
                      private channels
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-sm leading-7">
                      Encourages secrecy or says adults “wouldn’t understand”
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-sm leading-7">
                      Uses pressure, urgency, guilt, or flattery to keep a child
                      engaged
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">
                  Profile Red Flags
                </h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-sm leading-7">
                      Very little real identity information or inconsistent
                      profile details
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-sm leading-7">
                      Recent or low-effort account with suspicious engagement
                      patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-sm leading-7">
                      Content and tone that do not match the claimed identity of
                      the account
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              How Harmful Accounts Can Look Different Across Platforms
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">
                  Social Platforms
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  These may look like trend accounts, meme pages, confessional
                  spaces, lifestyle accounts, or “supportive” communities while
                  gradually pushing harmful or manipulative ideas.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">
                  Messaging Apps
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The risk often shifts from public content to private pressure,
                  hidden chats, grooming behavior, or invitations to move off
                  platform.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">
                  Gaming and Live Platforms
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Harmful influence may come through usernames, direct messages,
                  group chats, live chat, voice chat, or community behavior
                  rather than a traditional feed.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800">
                What Parents Can Do
              </h2>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                  <span className="text-sm leading-7">
                    Ask your child what kinds of accounts they follow or engage
                    with most
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                  <span className="text-sm leading-7">
                    Review reporting, blocking, and privacy settings on the
                    relevant platform
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                  <span className="text-sm leading-7">
                    Document usernames, messages, and screenshots if something
                    appears unsafe
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                  <span className="text-sm leading-7">
                    Use official reporting tools and seek urgent help if there
                    is immediate danger
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-sky-50/50 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                Where to Go Next
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-800">
                Use the Right Support Tools
              </h2>
              <p className="mt-4 leading-7 text-slate-700">
                If you need official reporting tools, platform safety centers,
                or trusted next steps, visit the Resources page for direct links
                and guidance.
              </p>

              <a
                href="/resources"
                className="mt-5 inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                Go to Resources →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}