"use client"

import { AnimatePresence, motion } from "framer-motion"

interface Props {
  open: boolean
  onClose: () => void
}

export default function EnquiryModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal wrapper */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 24,
            }}
          >
            {/* Card */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-[36px] bg-white p-8 shadow-[0_40px_120px_rgba(0,0,0,0.15)]"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Send an Enquiry
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Tell us about your project and we’ll get back to you.
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="text-2xl text-slate-400 hover:text-slate-700"
                >
                  ×
                </button>
              </div>

              {/* Form */}
              <div className="mt-8 space-y-5">

                {/* Grid inputs */}
                <div className="grid gap-5 md:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Your company"
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
                  />

                  <input
                    type="text"
                    placeholder="Full name"
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
                  />

                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
                  />

                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
                  />

                </div>

                {/* Select */}
                <select
                  defaultValue=""
                  className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 outline-none focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select a Service
                  </option>

                  <option>E-Invoicing Infrastructure</option>
                  <option>Software Development as a Service (SDaaS)</option>
                  <option>ERP Integration</option>
                  <option>System Integration</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>

                {/* Message */}
                <textarea
                  rows={5}
                  placeholder="What are you trying to solve? Any details on your current setup, timeline, or budget are helpful..."
                  className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
                />

                {/* Button */}
                <button className="w-full rounded-2xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">
                  Send Enquiry →
                </button>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}