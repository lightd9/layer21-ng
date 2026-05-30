import Reveal from "@/components/animations/Reveal"

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your business workflow, infrastructure requirements and operational goals.",
  },
  {
    number: "02",
    title: "System Design",
    description:
      "Our team designs scalable software architecture tailored to your business.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "We build, integrate and deploy your software systems.",
  },
  {
    number: "04",
    title: "Support & Scaling",
    description:
      "Continuous monitoring, maintenance and support to ensure long-term operational stability.",
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-[#F8FAFC] px-6 py-32">

      <div className="mx-auto max-w-6xl">

        {/* TOP */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Development Process
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 lg:text-5xl">
            A streamlined approach to building modern business systems
          </h2>

        </div>

        {/* STEPS */}
       <Reveal> <div className="relative mt-24">

          {/* LINE */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 lg:block" />

          <div className="space-y-10">

            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* CARD */}
               <Reveal> <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">

                  <div className="flex items-center gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
                      {step.number}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                  </div>

                  <p className="mt-8 text-lg leading-8 text-slate-600">
                    {step.description}
                  </p>

                </div></Reveal>

                {/* EMPTY SIDE */}
                <div className="hidden lg:block" />

              </div>
            ))}

          </div>

        </div></Reveal>

      </div>

    </section>
  )
}
