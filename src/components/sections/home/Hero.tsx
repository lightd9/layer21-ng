"use client"
import TickerTrustLabel from "@/components/sections/home/Trust"
import Reveal from "@/components/animations/Reveal"
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Hero() {
  const [activeImage, setActiveImage] = useState<"team" | "infrastructure">("infrastructure")

  const proofPoints = [
    { label: "FIRS ready", Icon: ShieldCheck },
    { label: "ERP friendly", Icon: Zap },
    { label: "SLA backed", Icon: CheckCircle2 },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section id="hero" className="relative overflow-hidden bg-[#f7fbff] px-6 pb-24 pt-20 sm:pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,105,198,0.18),transparent_32%),linear-gradient(245deg,rgba(245,158,11,0.18),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Software team + certified e-invoicing infrastructure
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.98] text-slate-950 sm:text-6xl lg:text-7xl">
              Build the systems that keep business moving.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
              Layer21 helps businesses build scalable software systems 
              while providing secure, compliant e-invoicing infrastructure 
              for modern operations.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("services")}
                className="group inline-flex min-h-12 items-center gap-3 rounded-lg bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-xl shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Explore services
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("platform")}
                className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-slate-300 bg-white/80 px-6 py-4 text-base font-bold text-slate-900 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-slate-900"
              >
                See platform
              </button>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {proofPoints.map(({ label, Icon }) => (
                <div key={label} className="flex items-center gap-2 rounded-lg bg-white/70 px-4 py-3 text-sm font-semibold text-slate-700 shadow-md ring-2 ring-slate-100/70 backdrop-blur">
                  <Icon className="h-4 w-4 text-emerald-500" />
                  {label}
                </div>
              ))}
            </div>

            <TickerTrustLabel />
          </div>
        </Reveal>

        <Reveal>
          <div className="relative min-h-[560px]">
            <button
              type="button"
              onClick={() => setActiveImage("team")}
              className={`float-slow absolute left-0 top-2 w-[74%] overflow-hidden rounded-xl border bg-white text-left shadow-2xl shadow-slate-900/15 outline-none transition ${
                activeImage === "team"
                  ? "z-30 border-blue-300 ring-4 ring-blue-300/25"
                  : "z-10 border-white/70 hover:z-20 hover:ring-4 hover:ring-white/70"
              }`}
              aria-label="Bring software engineering image to front"
              aria-pressed={activeImage === "team"}
            >
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                alt="Software engineers working at computer workstations"
                width={1200}
                height={760}
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="h-[330px] w-full object-cover"
              />
              <div className="grid grid-cols-3 gap-px bg-slate-100">
                {["Discovery", "Build", "Launch"].map((item) => (
                  <div key={item} className="bg-white px-4 py-4 text-sm font-bold text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveImage("infrastructure")}
              className={`float-fast absolute bottom-4 right-0 w-[76%] overflow-hidden rounded-xl border bg-slate-950 text-left shadow-2xl shadow-blue-900/25 outline-none transition ${
                activeImage === "infrastructure"
                  ? "z-30 border-blue-300 ring-4 ring-blue-300/25"
                  : "z-10 border-blue-100 hover:z-20 hover:ring-4 hover:ring-blue-100/70"
              }`}
              aria-label="Bring infrastructure image to front"
              aria-pressed={activeImage === "infrastructure"}
            >
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                alt="Digital infrastructure circuit display"
                width={1200}
                height={760}
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="h-[300px] w-full object-cover opacity-80"
              />
              <div className="absolute inset-x-0 top-0 h-1 origin-left bg-blue-400 pulse-line" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-sm font-semibold text-blue-200">Live validation lane</p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {["4,287", "98.7%", "6 ERP"].map((value) => (
                    <div key={value} className="rounded-lg bg-white/10 p-3 backdrop-blur">
                      <p className="text-xl font-black">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </button>

            <div className="absolute right-8 top-20 z-40 rounded-lg border border-emerald-400 bg-white px-5 py-4 shadow-xl">
              <p className="text-xs font-bold uppercase text-emerald-600">NRS status</p>
              <p className="mt-1 text-2xl font-black text-slate-950">Accepted</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
