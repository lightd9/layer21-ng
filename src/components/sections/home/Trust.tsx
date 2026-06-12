"use client"
import { useState, useEffect } from "react"

const logos = [
  { 
    id: "kkontech", 
    name: "Kkontech", 
    src: "/kkon-logo.png" 
  },
  { 
    id: "firs", 
    name: "FIRS", 
    src: "https://einvoice.firs.gov.ng/assets/logo-oZgquXvw.svg" 
  },
  { 
    id: "fob", 
    name: "FOB", 
    src: "https://fob.ng/wp-content/uploads/2025/07/FOB-LOGO-WHITE-cropped-2048x395.png" 
  }
]

export default function TickerTrustLabel() {
  const [step, setStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      
      setTimeout(() => {
        setIsAnimating(false)
        setStep((prev) => prev + 1)
      }, 700) 
      
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-14 w-full">
      
      {/* THE ANIMATED LOGO SLOTS */}
      {/* On mobile (sm), we center 1 logo. On desktop, we spread out 3 logos. */}
      <div className="mx-auto flex w-full max-w-3xl items-center justify-center gap-8 px-4 sm:justify-between sm:px-6">
        {[0, 1, 2].map((slotIndex) => (
          <div 
            key={slotIndex} 
            // Hide slots 1 and 2 on mobile, show all on desktop
            className={`relative h-[40px] w-full overflow-hidden sm:w-1/3 ${slotIndex > 0 ? "hidden sm:block" : ""}`}
          >
            <div 
              className={`absolute left-0 top-0 flex w-full flex-col ${
                isAnimating 
                  ? "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] -translate-y-1/2" 
                  : "translate-y-0"
              }`}
            >
              {/* CURRENT LOGO */}
              <div className="flex h-[40px] items-center justify-center">
                <img 
                  src={logos[(slotIndex + step) % logos.length].src} 
                  alt="brand-logo" 
                  className="h-7 w-auto max-w-[110px] object-contain brightness-0 opacity-40 transition-opacity hover:opacity-80 sm:h-8" 
                />
              </div>
              
              {/* NEXT LOGO */}
              <div className="flex h-[40px] items-center justify-center">
                <img 
                  src={logos[(slotIndex + step + 1) % logos.length].src} 
                  alt="brand-logo" 
                  className="h-7 w-auto max-w-[110px] object-contain brightness-0 opacity-40 sm:h-8" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* HEADER */}
      <div className="mt-8 flex items-center justify-center gap-4 px-2 sm:gap-8 sm:px-6">
        <span className="h-px w-6 bg-blue-600 sm:w-12" />
        <p className="text-center text-xs font-bold uppercase leading-6 tracking-[0.095em] text-slate-900 sm:whitespace-nowrap sm:text-[15px]">
          Trusted by amazing brands
        </p>
        <span className="h-px w-6 bg-blue-600 sm:w-12" />
      </div>

    </div>
  )
}