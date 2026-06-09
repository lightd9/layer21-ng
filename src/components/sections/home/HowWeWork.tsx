import { RefreshCcw, Rocket, Siren } from "lucide-react"

const steps = [
  {
    title: "Subscribe & submit requests",
    description:
      "Choose a plan and start submitting product, development, or maintenance requests right away.",
    Icon: Rocket,
  },
  {
    title: "Deliver High-quality Software",
    description:
      "We design, build, test, and deploy high-quality solutions with speed and precision.",
    Icon: Siren,
  },
  {
    title: "Continuous improvement",
    description:
      "Receive ongoing support, rapid iterations, and unlimited revisions. We refine, optimize, and enhance your software until it meets your goals.",
    Icon: RefreshCcw,
  },
]

export default function HowWeWork() {
  return (
    <div className="relative text-left text-slate-900">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
         

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            How we work
          </p>

          <h2 className="mt-5 max-w-xl text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-4xl">
            Get a dedicated product team at fraction of the cost.
          </h2>
        </div>

        <div className="pt-1 lg:max-w-md">
          <p className="text-base leading-7 text-slate-600">
            Build, launch, and scale your software with a flat monthly subscription. 
            Work with senior developers, designers, and product specialists without 
            the overhead of hiring in-house. Submit unlimited requests and keep your roadmap moving.
          </p>

          <a href="#pricing" className="mt-7 inline-flex min-h-12 items-center rounded-lg bg-slate-950 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700">
            See Pricing
          </a>
        </div>
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-10">
        {steps.map((step, index) => (
          <div key={step.title} className="relative">
            {index < steps.length - 1 && (
              <div className="absolute left-16 right-[-2.5rem] top-8 hidden h-px bg-blue-500 lg:block">
                <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-blue-500" />
              </div>
            )}

            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white text-blue-700 shadow-lg ring-1 ring-slate-200">
              <step.Icon className="h-8 w-8 stroke-[2.5]" />
            </div>

            <h3 className="mt-8 text-xl font-black leading-7 text-slate-950">
              {step.title}
            </h3>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
