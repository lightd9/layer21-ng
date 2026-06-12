import Reveal from "@/components/animations/Reveal"
import { DraftingCompass, PlugZap, Radar, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Map the workflow",
    description:
      "We turn your business process, compliance needs, and integration stack into a practical build map.",
    Icon: Radar,
    color: "text-blue-600",
  },
  {
    number: "02",
    title: "Design the architecture",
    description:
      "Your platform, APIs, data models, and invoice flows are designed for reliability before code starts.",
    Icon: DraftingCompass,
    color: "text-amber-500",
  },
  {
    number: "03",
    title: "Build and connect",
    description:
      "We ship product increments, connect ERP systems, and automate the validation paths that matter.",
    Icon: PlugZap,
    color: "text-emerald-600",
  },
  {
    number: "04",
    title: "Launch and improve",
    description:
      "Monitoring, support, and iteration keep the system healthy as transaction volume and teams grow.",
    Icon: Rocket,
    color: "text-rose-500",
  },
]

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#f8fafc] px-6 py-28">
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Application Development Process
            </p>

            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 lg:text-6xl">
              From brief to live system, with a visible path.
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-slate-600 lg:ml-auto">
            The work is sequenced like an operations pipeline: discover the
            risks, design the system, connect the moving parts, and keep tuning
            after launch.
          </p>
        </div>

        <Reveal>
          <div className="relative mt-16 grid gap-5 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-14 hidden h-1 origin-left rounded-full bg-gradient-to-r from-blue-400 via-amber-300 to-rose-400 pulse-line lg:block" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                    <step.Icon className={`h-7 w-7 ${step.color}`} />
                  </div>

                  <span className="font-mono text-sm font-black text-slate-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-black text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
