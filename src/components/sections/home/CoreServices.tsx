"use client"

import Reveal from "@/components/animations/Reveal"
import {
  ArrowUpRight,
  Braces,
  FileCheck2,
  Network,
  Workflow,
  Zap,
} from "lucide-react"

const primaryServices = [
  {
    title: "E-Invoicing Infrastructure",
    description:
      "We are a trused and accredited Access Point Provider(APP) that facilitate the  exchange of Electronic Invoicing between your trading systems through secure APIs, while ensuring these invoices meet the required legal andd technical standard.",
    badge: "Compliance Access Point Provider Infrastructure",
    target: "pricing",
    Icon: FileCheck2,
    accent: "from-cyan-500 to-blue-600",
    metric: "98.7% acceptance flow",
  },
  {
    title: "SDaaS",
    description:
      "Dedicated software development services for building scalable platforms, internal systems and enterprise-grade business applications.",
    badge: "Software Development as a Service",
    target: "contact",
    Icon: Braces,
    accent: "from-emerald-500 to-teal-600",
    metric: "Dedicated product pods",
  },
]

const supportingServices = [
  { label: "ERP/CRM Integrations", Icon: Network },
  { label: "System Architecture", Icon: Workflow },
  { label: "API Development", Icon: Braces },
  { label: "Workflow Automation", Icon: Zap },
  { label: "Infrastructure Consulting", Icon: Network },
  { label: "Enterprise Platforms", Icon: Workflow },
]

export default function CoreServices() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const offset = -80
    const top = el.getBoundingClientRect().top + window.pageYOffset + offset

    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <section id="services" className="relative overflow-hidden bg-white px-6 py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(240,253,250,0.9)_45%,transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                What We Do
              </p>

              <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 lg:text-6xl">
                Two Core Technology Services.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-slate-600 lg:ml-auto">
              Layer21 provides enterprise e-invoicing infrastructure and 
              scalable software engineering services for businesses building
              modern digital operations.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {primaryServices.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 lg:p-10"
              >
                <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(135deg,#0f172a_1px,transparent_1px)] [background-size:18px_18px]" />

                <div className="relative flex items-center justify-between gap-4">
                  <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                    {service.badge}
                  </div>

                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${service.accent} text-white shadow-lg`}>
                    <service.Icon className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="relative mt-8 text-4xl font-black tracking-tight text-slate-950">
                  {service.title}
                </h3>

                <p className="relative mt-6 text-lg leading-8 text-slate-600">
                  {service.description}
                </p>

                <div className="relative mt-8 rounded-lg bg-slate-950 px-5 py-4 text-white">
                  <p className="text-sm font-semibold text-white">{service.metric}</p>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full w-4/5 origin-left rounded-full bg-gradient-to-r ${service.accent} pulse-line`} />
                  </div>
                </div>

                <button
                  onClick={() => scrollTo(service.target)}
                  className="relative mt-8 inline-flex items-center gap-2 font-bold text-blue-600 transition group-hover:gap-3"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/10 lg:p-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Additional Services
                </p>

                <h3 className="mt-4 text-3xl font-black tracking-tight">
                  Supporting infrastructure & integration services
                </h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {supportingServices.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-400/20"
                  >
                    <Icon className="h-4 w-4 text-blue-300" />
                    {label}
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
