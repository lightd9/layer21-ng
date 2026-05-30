const services = [
  "Enterprise Platforms",
  "Internal Business Systems",
  "Automation Tools",
  "API Development",
  "Cloud Infrastructure",
  "Web Applications",
]

export default function SDaaS() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <p className="text-sm font-medium text-blue-600">
            SDaaS
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Software development built around your operations
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-3xl border border-slate-200 bg-white p-8"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
