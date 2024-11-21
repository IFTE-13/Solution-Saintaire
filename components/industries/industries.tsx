import React from 'react'
import { BentoGridSection } from './Grid'

const Industries = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto">
          <div className="max-w-[540px] mx-auto mb-10">
          <h2 className="text-center text-7xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#38bdf8] text-transparent bg-clip-text">Industries</h2>
        </div>
      </div>
      <div className="mx-10">
      <BentoGridSection />
      </div>
    </section>

  )
}

export default Industries