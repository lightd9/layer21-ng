import HowWeWork from "@/components/sections/home/HowWeWork"
import Image from "next/image"

export default function HowWeWorkCard() {
  return (
    <section id="how-we-work" className="relative overflow-hidden bg-white px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
        <div className="relative min-h-[420px] overflow-hidden rounded-xl bg-slate-950">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
            alt="Software development team working together"
            width={1200}
            height={760}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
              SDaaS pod
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight">
              Senior product capacity without a hiring sprint.
            </h2>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm lg:p-10">
          <HowWeWork />
        </div>
      </div>
    </section>
  )
}
