import Reveal from "@/components/animations/Reveal"

const features = [
  {
    title: "Compliance Ready",
    description:
      "Built to support secure and compliant e-invoicing operations for modern businesses.",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "From startups to enterprise systems, Layer21 scales with your operational growth.",
  },
  {
    title: "Fast Integrations",
    description:
      "Connect ERPs, accounting systems and APIs without rebuilding your workflow.",
  },
  {
    title: "Enterprise Support",
    description:
      "Dedicated technical support, onboarding assistance and long-term infrastructure guidance.",
  },
]

export default function WhyLayer21() {
  return (
    <section className="bg-white px-6 py-32">

      <div className="mx-auto grid max-w-6xl gap-20 lg:grid-cols-2 lg:items-center">

        {/* LEFT */}
        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Why Layer21
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 lg:text-5xl">
            Built for businesses that need reliable digital infrastructure
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            We combine enterprise-grade software engineering with secure
            e-invoicing infrastructure to help businesses operate more
            efficiently and scale confidently.
          </p>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-2 gap-8">

            <div>
              <h3 className="text-4xl font-bold text-slate-900">
                99.9%
              </h3>

              <p className="mt-2 text-slate-500">
                Infrastructure uptime
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-slate-900">
                24/7
              </h3>

              <p className="mt-2 text-slate-500">
                Enterprise support
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
       <Reveal>  <div className="grid gap-6 sm:grid-cols-2">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl dark:hover:bg-slate-800"
            >

              {/* ICON */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">

                <div className="h-3 w-3 rounded-full bg-white" />

              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {feature.description}
              </p>

            </div> 
          ))}

        </div></Reveal>

      </div>

    </section>
  )
}
