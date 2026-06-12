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
      // 1. Trigger the upward slide animation
      setIsAnimating(true)
      
      // 2. Wait for the CSS transition to finish (700ms), 
      // then instantly snap back to the start position while updating the logical step
      setTimeout(() => {
        setIsAnimating(false)
        setStep((prev) => prev + 1)
      }, 700) 
      
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Math to ensure the slots rotate smoothly: 3->1, 1->2, 2->3
  const getLogoForSlot = (slotIndex: number, stepOffset: number) => {
    const index = (slotIndex - ((step + stepOffset) % 3) + 3) % 3
    return logos[index]
  }

  return (
    <div className="mt-14 w-full">
      {/* 1. HEADER */}

      
      {/* 2. THE ANIMATED LOGO SLOTS */}
      <div className="mx-auto mt-8 flex w-full max-w-3xl items-center justify-between gap-4 px-4 sm:px-6">
        {[0, 1, 2].map((slotIndex) => {
          const currentLogo = getLogoForSlot(slotIndex, 0)
          const nextLogo = getLogoForSlot(slotIndex, 1) // The logo waiting underneath

          return (
            <div key={slotIndex} className="relative h-[40px] w-1/3 overflow-hidden">
              <div 
                className={`absolute left-0 top-0 flex w-full flex-col ${
                  isAnimating 
                    ? "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] -translate-y-1/2" 
                    : "translate-y-0"
                }`}
              >
                {/* CURRENT LOGO (Top) */}
                <div className="flex h-[40px] items-center justify-center transition-opacity hover:opacity-100">
                  <img 
                    src={currentLogo.src} 
                    alt={currentLogo.name} 
                    // brightness-0 turns everything black, opacity-40 turns it grey.
                    className="h-8 w-auto max-w-[120px] object-contain brightness-0 opacity-40 transition-all duration-300 hover:opacity-80" 
                  />
                </div>
                
                {/* NEXT LOGO (Bottom, waiting to push up) */}
                <div className="flex h-[40px] items-center justify-center">
                  <img 
                    src={nextLogo.src} 
                    alt={nextLogo.name} 
                    className="h-8 w-auto max-w-[120px] object-contain brightness-0 opacity-40" 
                  />
                </div>
              </div>
              
            </div>
            
          )
        })}
      </div>
            <div className="flex items-center justify-center gap-4 px-2 sm:gap-8 sm:px-6 mt-5">
        <span className="h-px w-6 bg-blue-600 sm:w-12" />
        <p className="text-center text-xs font-bold uppercase leading-6 tracking-[0.095em] text-slate-900 sm:whitespace-nowrap sm:text-[15px]">
          Trusted by amazing brands
        </p>
        <span className="h-px w-6 bg-blue-600 sm:w-12" />
      </div>
    </div>
  )
}