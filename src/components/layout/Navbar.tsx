"use client"

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "E-invoicing", href: "#platform" },
  { label: "Pricing", href: "#pricing" },

]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">

        {/* LOGO */}
        <a href="#hero" className="text-2xl font-bold">
          Layer<span className="text-blue-600">21</span>
        </a>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* NAV (RIGHT ALIGNED) */}
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}

          </nav>

          {/* CONTACT BUTTON (ALWAYS VISIBLE) */}
          <a
            href="#contact"
            className="flex min-h-10 items-center rounded-lg bg-blue-600 px-5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800"
          >
            Contact
          </a>

        </div>

      </div>
    </header>
  )
}
