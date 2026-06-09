import Reveal from "@/components/animations/Reveal"
import { Headphones, Layers3, ShieldCheck, TimerReset } from "lucide-react"

const features = [
  {
    title: "Compliance ready",
    description:
      "Built to support secure and compliant e-invoicing operations for modern businesses.",
    Icon: ShieldCheck,
    color: "text-emerald-600",
  },
  {
    title: "Scalable infrastructure",
    description:
      "From startups to enterprise systems, Layer21 scales with your operational growth.",
    Icon: Layers3,
    color: "text-blue-600",
  },
  {
    title: "Fast integrations",
    description:
      "Connect ERPs, accounting systems, and APIs without rebuilding your workflow.",
    Icon: TimerReset,
    color: "text-amber-500",
  },
  {
    title: "Enterprise support",
    description:
      "Dedicated technical support, onboarding assistance, and long-term infrastructure guidance.",
    Icon: Headphones,
    color: "text-rose-500",
  },
]

export default function WhyLayer21() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-28">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-50 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Why Layer21
            </p>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 lg:text-6xl">
              Built for businesses that need reliable digital infrastructure
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              We combine enterprise-grade software engineering with secure
              e-invoicing infrastructure to help businesses operate more
              efficiently and scale confidently.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                ["99.9%", "Infrastructure uptime"],
                ["24/7", "Enterprise support"],
                ["7 yrs", "Audit-ready archiving"],
                ["6+", "ERP connector paths"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-4xl font-black text-slate-950">{value}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                  <feature.Icon className={`h-6 w-6 ${feature.color}`} />
                </div>

                <h3 className="mt-7 text-2xl font-black text-slate-950">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
