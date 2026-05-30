"use client"
import TickerTrustLabel from "@/components/sections/home/Trust"
import Reveal from "@/components/animations/Reveal"

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F8FAFC] px-6 pb-32 pt-24">
      {/* BACKGROUND GRADIENT */}
       <Reveal>  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#DBEAFE,transparent_35%)] dark:bg-[radial-gradient(circle_at_top,#1E3A8A,transparent_40%)]" />

        <div className="relative mx-auto max-w-6xl text-center">


        {/* HEADING */}
        <h1 className="mx-auto  max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 lg:text-7xl">
          Modern Software Systems
          <br />
          & E-Invoicing Infrastructure
          <span className="text-blue-600"> for Businesses</span>
        </h1>

        {/* SUBTEXT */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 lg:text-xl">
          Layer21 helps businesses build scalable software systems while
          providing secure, compliant e-invoicing infrastructure for modern
          operations.
        </p>

        {/* BUTTONS */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
           onClick={() => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }} className="rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
  >
            Get Started
          </button>
        </div>

        {/* SMALL TRUST TEXT */}
       <Reveal> <TickerTrustLabel /> </Reveal>  
       

        
      </div> </Reveal>
    </section>
  )
}
