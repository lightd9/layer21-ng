const tickerItems = [
  "NRS-Accredited E-Invoicing Access Point",
  "Real-time invoice validation to NRS",
  "Seamless ERP integration (Odoo, SAP, Oracle, QuickBooks)",
  "SDaaS: Dedicated software engineering teams on demand",
  "Custom software built for scale and performance",
  "Secure API infrastructure for enterprise systems",
  "Automated compliance, audit trails & invoice archiving",
  "Fast integration with existing business systems",
  "99.9% uptime enterprise-grade infrastructure",
  "Built for Nigerian enterprise compliance & growth",
]

export default function Ticker() {
  return (
    <div className="w-full overflow-hidden bg-slate-950 text-sm text-white">
      <div className="flex w-max animate-marquee whitespace-nowrap py-3">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span
            key={`${item}-${index}`}
            aria-hidden={index >= tickerItems.length}
            className="mx-8 inline-flex items-center gap-3 font-semibold"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
