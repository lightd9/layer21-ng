"use client"

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "E-invoicing", href: "#platform" },
  { label: "Pricing", href: "#pricing" },

]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">

        {/* LOGO */}
        <a href="#hero" className="text-2xl font-bold">
          Layer<span className="text-blue-500">21</span>
        </a>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* NAV (RIGHT ALIGNED) */}
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-slate-900 transition"
              >
                {link.label}
              </a>
            ))}

          </nav>

          {/* CONTACT BUTTON (ALWAYS VISIBLE) */}
          <a
            href="#contact"
            className="flex h-10 items-center rounded-2xl bg-blue-600 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
          >
            Contact
          </a>

        </div>

      </div>
    </header>
  )
}