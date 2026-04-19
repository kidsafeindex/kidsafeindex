export default function PrivacyPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            Privacy
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
            Your Privacy Matters Here
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            KidSafe Index is built on the belief that families deserve clearer
            information about online risks, without giving up their privacy to
            get it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              What We Collect
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              If you sign up for updates, we collect the email address you
              provide so we can send you KidSafe Index communications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              How We Use It
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              We use your email address to send updates related to KidSafe
              Index, including information about online risks, child safety
              concerns, and related updates connected to the service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              What We Do Not Do
            </h2>

            <ul className="mt-5 space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="leading-7">
                  We do not sell your data.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="leading-7">
                  We do not share your email address with third parties for
                  advertising purposes.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="leading-7">
                  We do not collect more information than we need for the update
                  list.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-sky-50/50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              Privacy Promise
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-800">
              We Will Never Sell Your Data
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              That promise is simple and intentional. If you trust KidSafe Index
              with your email address, it will be used only for KidSafe Index
              updates and related communication.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Email Updates
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              If you no longer want to receive updates, you will be able to
              unsubscribe from future communications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Questions
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              If you have questions about privacy or how KidSafe Index handles
              subscriber information, a contact page or direct support option
              will be added as the site continues to grow.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}