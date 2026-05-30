"use client"

import Reveal from "@/components/animations/Reveal"
import { useState } from "react"
import EnquiryModal from "@/components/sections/home/Enquiry"

const plans = [
  {
    title: "E-Invoicing Access Point",
    subtitle: "FIRS-Certified Access Point for NRS Submission",
    description:
      "Contact us for a tailored quote. We build around your invoice volume, ERP stack, compliance requirements, and SLA needs.",
    cta: "Request Quote",
    features: [
      "FIRS-accredited real-time invoice validation",
      "ERP connectors (Odoo, SAP, Oracle, QuickBooks, Sage)",
      "Encrypted invoice submission & auto-retry queue",
      "End-to-end audit trail & 7-year archive",
      "Invoice dashboard & compliance reporting",
      "Sandbox environment & onboarding support",
    ],
  },
  {
    title: "Software Development as a Service",
    subtitle: "Dedicated Engineering & Product Development",
    description:
      "A flexible software development partnership for organizations that need custom software, system integrations, ongoing engineering support, and long-term product development.",
    cta: "Book Discovery Call",
    features: [
      "Dedicated software engineering resources",
      "Web, mobile & enterprise application development",
      "API development & systems integration",
      "Product maintenance & continuous improvements",
      "Architecture consulting & technical leadership",
      "SLA-backed support & long-term partnership",
    ],
  },
]

export default function Pricing() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const openModal = (planTitle: string) => {
    setSelectedPlan(planTitle)
    setEnquiryOpen(true)
  }

  return (
    <>
      <Reveal>
        <section id="pricing" className="bg-white px-6 py-32">

          <div className="mx-auto max-w-6xl">

            {/* HEADER */}
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Pricing
              </p>

              <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Flexible engagement models built around your business
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
                Every organization has different compliance, infrastructure, and
                development needs.
              </p>
            </div>

            {/* CARDS */}
            <div className="mt-20 grid gap-8 lg:grid-cols-2">

              {plans.map((plan) => (
                <div
                  key={plan.title}
                  className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <h3 className="text-3xl font-bold text-slate-900">
                    {plan.title}
                  </h3>

                  <p className="mt-3 text-blue-600 font-medium">
                    {plan.subtitle}
                  </p>

                  <p className="mt-6 text-slate-600 leading-8">
                    {plan.description}
                  </p>

                  <div className="mt-8 rounded-2xl bg-slate-50 px-6 py-5">
                    <h4 className="text-3xl font-bold text-slate-900">
                      On Request / Quote
                    </h4>
                  </div>

                  <div className="mt-8 space-y-4">
                    {plan.features.map((f) => (
                      <div key={f} className="flex gap-3">
                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                        <p className="text-slate-600">{f}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => openModal(plan.title)}
                    className="mt-10 w-full rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}

            </div>

          </div>
        </section>
      </Reveal>

      {/* SINGLE GLOBAL MODAL (FIX) */}
      <EnquiryModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </>
  )
}