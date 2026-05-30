const items = [
  "FIRS Accredited",
  "NRS Certified",
  "99.9% Uptime SLA",
  "Secure API Infrastructure",
  "24/7 Support",
]

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6">
        {items.map((item) => (
          <p
            key={item}
            className="text-sm font-medium text-slate-700"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}