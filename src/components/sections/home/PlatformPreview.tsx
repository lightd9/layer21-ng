import Reveal from "@/components/animations/Reveal"
import { Activity, CheckCircle2, DatabaseZap, RefreshCcw } from "lucide-react"
import Image from "next/image"

const metrics = [
  ["Invoices validated", "4,287", "text-blue-600"],
  ["Success rate", "98.7%", "text-emerald-600"],
  ["ERP connectors", "6+", "text-amber-500"],
]

const activity = [
  ["INV-8841", "Validated", "2 sec ago", "bg-emerald-100 text-emerald-700"],
  ["INV-8840", "Submitted", "4 sec ago", "bg-blue-100 text-blue-700"],
  ["INV-8839", "Retrying", "10 sec ago", "bg-amber-100 text-amber-700"],
  ["INV-8838", "Accepted", "20 sec ago", "bg-emerald-100 text-emerald-700"],
]

export default function PlatformPreview() {
  return (
    <section id="platform" className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600"
          alt="Hands reviewing software on a laptop"
          width={1600}
          height={1000}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-slate-950/85" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(#22d3ee_1px,transparent_1px),linear-gradient(90deg,#22d3ee_1px,transparent_1px)] [background-size:46px_46px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-blue-300/30 bg-blue-300/10 px-4 py-2 text-sm font-bold text-blue-100">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                FIRS Accredited - NRS Certified
              </div>

              <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight lg:text-6xl">
                E-Invoicing Infrastructure
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-slate-300 lg:ml-auto">
              We sit between your ERP and the Nigeria Revenue Service, handling
              validation, encryption, retry logic, and audit-ready receipt
              storage so your compliance workflow keeps moving.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative mt-16 overflow-hidden rounded-xl border border-white/10 bg-white/95 text-slate-950 shadow-2xl shadow-blue-950/40">
            <div className="scan-line absolute left-0 right-0 z-10 h-24 bg-gradient-to-b from-transparent via-blue-300/20 to-transparent" />

            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                Layer21 Operations Cockpit
              </p>
            </div>

            <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
              <div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {metrics.map(([label, value, color]) => (
                    <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                      <p className="text-sm font-semibold text-slate-500">{label}</p>
                      <h3 className={`mt-3 text-3xl font-black ${color}`}>{value}</h3>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                    <h3 className="font-black text-slate-950">Recent activity</h3>
                    <Activity className="h-5 w-5 text-blue-600" />
                  </div>

                  <div className="divide-y divide-slate-100">
                    {activity.map(([id, status, time, badge]) => (
                      <div key={id} className="flex items-center justify-between gap-4 px-5 py-4">
                        <div>
                          <p className="font-bold text-slate-950">{id}</p>
                          <p className="mt-1 text-sm text-slate-500">{time}</p>
                        </div>

                        <span className={`rounded-full px-3 py-1.5 text-sm font-bold ${badge}`}>
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-lg bg-slate-950 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-blue-200">ERP connections</p>
                    <DatabaseZap className="h-5 w-5 text-blue-300" />
                  </div>

                  <h3 className="mt-4 text-4xl font-black">Active</h3>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {["Odoo", "SAP", "Oracle", "QuickBooks"].map((item) => (
                      <div key={item} className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-500">Retry queue</p>
                    <RefreshCcw className="h-5 w-5 text-amber-500" />
                  </div>

                  <h3 className="mt-4 text-4xl font-black text-slate-950">17</h3>
                  <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-2/3 origin-left rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 pulse-line" />
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    Automated retries protect submissions when downstream
                    systems slow down.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
