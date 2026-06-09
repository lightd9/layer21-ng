import Reveal from "@/components/animations/Reveal"

export default function CTA() {
  return (
    <section id="cta" className="relative z-10 px-6 pb-0 pt-32">

     <Reveal> <div className="mx-auto max-w-6xl">

        <div className="relative overflow-hidden rounded-[40px] bg-blue-600 px-8 py-20 text-center text-white lg:px-20">

          {/* BACKGROUND EFFECT */}

          <div className="relative">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Get Started
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
              Build modern business infrastructure with Layer21
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
              From compliant e-invoicing systems to scalable software
              development, we help businesses build reliable digital operations.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">



              <button className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20">
                Talk to Us
              </button>

            </div>

          </div>

        </div>

      </div></Reveal>

    </section>
  )
}
