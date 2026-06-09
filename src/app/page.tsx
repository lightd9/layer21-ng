import Ticker from "@/components/layout/Ticker"

import Hero from "@/components/sections/home/Hero"
import CoreServices from "@/components/sections/home/CoreServices"
import HowWeWorkCard from "@/components/sections/home/HowWeWorkCard"
import PlatformPreview from "@/components/sections/home/PlatformPreview"
import WhyLayer21 from "@/components/sections/home/WhyLayer21"
import CTA from "@/components/sections/home/CTA"
import Contact from "@/components/sections/home/Contact"
import Pricing from "@/components/sections/home/Pricing"
import Process from "@/components/sections/home/Process"


export default function Page() {
  return (
    <main>
     {/* <Ticker/> */}
      <Hero />    
      <CoreServices />
      <HowWeWorkCard />
      <Process/>     
      <PlatformPreview />
      <WhyLayer21 />
      <Pricing />
      <CTA />
      <Contact />
    </main>
  )
}
