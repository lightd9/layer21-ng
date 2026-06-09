"use client"

import Reveal from "@/components/animations/Reveal"
import EnquiryModal from "@/components/sections/home/Enquiry"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    title: "E-Invoicing Access Point",
    subtitle: "FIRS-Certified Access Point for NRS Submission",
    description:
      "A tailored infrastructure quote based on invoice volume, ERP stack, compliance requirements, and SLA needs.",
    cta: "Request quote",
    accent: "from-blue-500 to-blue-600",
    features: [
      "FIRS-accredited real-time invoice validation",
      "ERP connectors for Odoo, SAP, Oracle, QuickBooks, and Sage",
      "Encrypted invoice submission and auto-retry queue",
      "End-to-end audit trail and 7-year archive",
      "Invoice dashboard and compliance reporting",
      "Sandbox environment and onboarding support",
    ],
  },
  {
    title: "Software Development as a Service",
    subtitle: "Dedicated Engineering and Product Development",
    description:
      "A flexible software development partnership for organizations that need custom software, system integrations, ongoing engineering support, and long-term product development.",
    cta: "Book discovery call",
    accent: "from-emerald-500 to-teal-600",
    features: [
      "Dedicated software engineering resources",
      "Web, mobile, and enterprise application development",
      "API development and systems integration",
      "Product maintenance and continuous improvements",
      "Architecture consulting and technical leadership",
      "SLA-backed support and long-term partnership",
    ],
  },
]

export default function Pricing() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  return (
    <>
      <section id="pricing" className="relative overflow-hidden bg-[#f8fafc] px-6 py-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(251,191,36,0.16),transparent_28%),linear-gradient(300deg,rgba(45,120,191,0.16),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Pricing
                </p>

                <h2 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-950 lg:text-6xl">
                  Flexible engagement models built around your business
                </h2>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-slate-600 lg:ml-auto">
                Every organization has different compliance, infrastructure,
                and development needs. These models give you a clear starting.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              {plans.map((plan) => (
                <div
                  key={plan.title}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 lg:p-10"
                >

                  <h3 className="text-3xl font-black text-slate-950">
                    {plan.title}
                  </h3>

                  <p className="mt-3 font-semi-bold text-blue-700">
                    {plan.subtitle}
                  </p>

                  <p className="mt-6 leading-8 text-slate-600">
                    {plan.description}
                  </p>

                  <div className="mt-8 rounded-lg bg-slate-950 px-6 py-5 text-white">
                    <p className="text-sm font-semibold text-blue-200">Starting model</p>
                    <h4 className="mt-2 text-3xl font-black">On Request / Quote</h4>
                  </div>

                  <div className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                        <p className="text-slate-600">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="mt-10 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-slate-950 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    {plan.cta}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  )
}
