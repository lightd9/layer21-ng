export default function DashboardPreview() {
  return (
    <section className="bg-slate-50 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-blue-600">
            Platform Preview
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Full visibility into every invoice
          </h2>
        </div>

        <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          
          <div className="grid gap-6 md:grid-cols-4">
            
            <div className="rounded-2xl bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm text-slate-500">
                Total Submitted
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                4,287
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm text-slate-500">
                Accepted
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                4,232
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm text-slate-500">
                Pending
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                38
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm text-slate-500">
                Retrying
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                17
              </h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
