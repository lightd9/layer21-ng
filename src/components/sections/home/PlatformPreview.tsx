import Reveal from "@/components/animations/Reveal";

export default function PlatformPreview() {
  return (
    <section id="platform" className="bg-[#F8FAFC] px-6 py-32">

      <div className="mx-auto max-w-6xl">

        {/* TOP */}
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-medium text-blue-700 shadow-sm">
              FIRS Accredited    &middot;    NRS Certified
            </div>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 lg:text-5xl">
              E-Invoicing Infrastructure
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              FIRS-accredited Certified Access Point Provider. We sit between your ERP and the Nigeria Revenue Service - handling validation, encryption, retry logic, and audit-ready receipt storage so you never miss a submission.


            </p>
          </div>
        </Reveal>

        {/* DASHBOARD */}
        <div className="relative mt-24">

          {/* BLUR */}
          <div className="absolute inset-0 scale-110 rounded-[40px] bg-blue-200 blur-3xl opacity-20" />

          <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            {/* TOP BAR */}
            <div className="flex items-center justify-between border-b border-slate-100 px-8 py-5">

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <p className="text-sm font-medium text-slate-500">
                Layer21 Dashboard
              </p>

            </div>

            {/* BODY */}
            <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr]">

              {/* LEFT */}
              <div>

                {/* METRICS */}
                <div className="grid gap-4 sm:grid-cols-3">

                  {[
                    ["Invoices", "4,287"],
                    ["Success Rate", "98.7%"],
                    ["Integrations", "6+"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-3xl bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <p className="text-sm text-slate-500">
                        {label}
                      </p>

                      <h3 className="mt-3 text-3xl font-bold text-slate-900">
                        {value}
                      </h3>
                    </div>
                  ))}

                </div>

                {/* TABLE */}
                <div className="mt-6 rounded-3xl border border-slate-100">

                  <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

                    <h3 className="font-semibold text-slate-900">
                      Recent Activity
                    </h3>

                    <button className="text-sm font-medium text-blue-600">
                      View all
                    </button>

                  </div>

                  <Reveal>
                    <div className="divide-y divide-slate-100">
                      {[
                        ["INV-8841", "Validated", "2 sec ago"],
                        ["INV-8840", "Submitted", "4 sec ago"],
                        ["INV-8839", "Retrying", "10 sec ago"],
                        ["INV-8838", "Accepted", "20 sec ago"],
                      ].map(([id, status, time]) => (
                        <div
                          key={id}
                          className="flex items-center justify-between px-6 py-5"
                        >
                          <div>
                            <p className="font-medium text-slate-900">
                              {id}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                              {time}
                            </p>
                          </div>

                          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                            {status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Reveal>

                </div>

              </div>

              {/* RIGHT */}
              <Reveal>
                <div className="space-y-6">

                  <div className="rounded-3xl bg-blue-600 p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

                    <p className="text-sm text-blue-100">
                      ERP Connections
                    </p>

                    <h3 className="mt-4 text-4xl font-bold">
                      Active
                    </h3>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {[
                        "Odoo",
                        "SAP",
                        "Oracle",
                        "QuickBooks",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-full bg-white/10 px-4 py-2 text-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <p className="text-sm text-slate-500">
                      System Health
                    </p>

                    <h3 className="mt-4 text-4xl font-bold text-slate-900">
                      99.9%
                    </h3>

                    <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-[99%] rounded-full bg-emerald-500" />
                    </div>

                    <p className="mt-4 text-sm text-slate-500">
                      Real-time infrastructure monitoring
                    </p>

                  </div>

                </div>
              </Reveal>

            </div>

          </div>
   
        </div>

      </div>
      <div className="text-center">
                <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
          Monitor invoice activity, manage integrations, automate workflows
              and oversee compliance operations from a single dashboard.

            </p>
</div>

    </section>
  );
}
