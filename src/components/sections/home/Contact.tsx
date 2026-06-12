"use client"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"


import { useState } from "react"
import EnquiryModal from "@/components/sections//home/Enquiry"

const contactItems = [
  {
    label: "Email",
    value: "sales@layer21.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: "+234 811 192 2822",
    Icon: Phone,
  },
  {
    label: "Location",
    value: "Lagos, Nigeria",
    Icon: MapPin,
  },
  
]

export default function Contact() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  return (
    <section id="contact" className="-mt-72 bg-[#111204] px-6 pb-24 pt-96 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            Ready to build reliable digital infrastructure?
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">
            Tell us what you are building, integrating, or automating. We will
            help you map the right next step.
          </p>

          <button  onClick={() => setEnquiryOpen(true)} 
          className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700">
            Start a Conversation
            <ArrowUpRight className="h-4 w-4" />
          </button>
                <EnquiryModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />

        </div>

        <div className="space-y-4">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 border-b border-white/10 py-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <item.Icon className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-white/50">{item.label}</p>
                <p className="mt-1 font-semibold text-white">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
