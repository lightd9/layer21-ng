import { GitBranch, Link as LinkIcon, Mail, Phone } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  "Access Point",
  "Platform",
  "Services",
  "Pricing",
  "Contact",
]

export default function Footer() {
  return (
    <footer className="bg-[#111204] px-6 pb-16 text-white">
        <div className=" flex flex-col text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <Link key={link} href="#">
                {link}
              </Link>
            ))}
          </nav>

          <p>© {new Date().getFullYear()} Layer21. All Rights Reserved.</p>
        </div>
    </footer>
  )
}
