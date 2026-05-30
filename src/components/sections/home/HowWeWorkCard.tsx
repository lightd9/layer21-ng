import HowWeWork from "@/components/sections/home/HowWeWork"

export default function HowWeWorkCard() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-32">
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute inset-0 scale-110 rounded-[40px] bg-blue-200 opacity-30 blur-3xl" />

        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-100 px-8 py-5">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <p className="text-sm font-medium text-blue-600">
              HOW WE WORK
            </p>
          </div>

          <div className="px-6 py-12 sm:px-10 lg:px-12">
            <HowWeWork />
          </div>
        </div>
      </div>
    </section>
  )
}
