"use client"

import Reveal from "@/components/animations/Reveal"

const primaryServices = [
  {
    title: "E-Invoicing Infrastructure",
    description:
      "FIRS/NRS-compliant invoice submission infrastructure that connects businesses and ERP systems directly to the Nigeria Revenue Service through secure APIs.",
    badge: "Compliance Infrastructure",
    target: "pricing",
  },
  {
    title: "SDaaS",
    description:
      "Dedicated software development services for building scalable platforms, internal systems and enterprise-grade business applications.",
    badge: "Software Development as a Service",
    target: "contact",
  },
]

const supportingServices = [
  "ERP Integrations",
  "System Architecture",
  "API Development",
  "Workflow Automation",
  "Infrastructure Consulting",
  "Enterprise Platforms",
]

export default function CoreServices() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const offset = -80
    const top =
      el.getBoundingClientRect().top + window.pageYOffset + offset

    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <section id="services" className="bg-white my-20 px-6 py-24">

      <div className="mx-auto max-w-6xl">

        {/* TOP */}
        <Reveal>
          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              What We Do
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 lg:text-5xl">
              Two core technology services built for modern businesses
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Layer21 provides enterprise e-invoicing infrastructure and
              scalable software engineering services for businesses building
              modern digital operations.
            </p>

          </div>
        </Reveal>

        {/* MAIN SERVICES */}
        <Reveal>
          <div className="mt-20 grid gap-8 lg:grid-cols-2">

            {primaryServices.map((service, index) => (
              <div
                key={service.title}
                className={`relative overflow-hidden rounded-[36px] p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 bg-slate-50"
                }`}
              >

                {/* BADGE */}
                <div
                  className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
                    index === 0
                      ? "bg-white/10 text-blue-100"
                      : "bg-white text-slate-600"
                  }`}
                >
                  {service.badge}
                </div>

                {/* TITLE */}
                <h3
                  className={`mt-8 text-4xl font-bold tracking-tight ${
                    index === 0 ? "text-white" : "text-slate-900"
                  }`}
                >
                  {service.title}
                </h3>

                {/* DESC */}
                <p
                  className={`mt-6 text-lg leading-8 ${
                    index === 0 ? "text-blue-100" : "text-slate-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* CTA */}
                <button
                  onClick={() => scrollTo(service.target)}
                  className={`mt-10 font-semibold ${
                    index === 0 ? "text-white" : "text-blue-600"
                  }`}
                >
                  Learn more →
                </button>

                {index === 0 && (
                  <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                )}

              </div>
            ))}

          </div>
        </Reveal>

        {/* SUPPORTING SERVICES */}
        <Reveal>
          <div className="mt-20 rounded-[36px] border border-slate-200 bg-slate-50 p-10">

            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Additional Services
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                  Supporting infrastructure & integration services
                </h3>
              </div>

              <div className="flex flex-wrap gap-4">

                {supportingServices.map((service) => (
                  <div
                    key={service}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    {service}
                  </div>
                ))}

              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}