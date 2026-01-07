import React from 'react'
import ScrollReveal from '../../../components/animations/ScrollReveal'

const Overview = () => {
  return (
    <section className="py-20 text-white relative overflow-hidden">
      {/* Background Asset */}
      

      <div className="container-section relative z-10">
        <ScrollReveal direction="bottom">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 max-w-4xl leading-tight">
              Overview
            </h2>
            <h3 className="text-3xl mb-4 text-[#FFF]">
              Invader Shop — Wholesale Premium Accounts Marketplace
            </h3>
            
            <div className="space-y-6 max-w-5xl text-lg opacity-80 leading-relaxed font-light">
              <p>
                Invader Shop is a digital marketplace that sells premium subscription accounts at 
                wholesale rates, including entertainment platforms (Netflix, Hulu), professional 
                tools (Adobe), and other premium digital services.
              </p>
              <p>
                The challenge was to build a high-trust, high-conversion website in a niche 
                where user confidence, clarity, and smooth purchasing are critical.
              </p>
              <p>
                Our goal was to create a platform that feels secure, modern, and 
                conversion-driven, while keeping acquisition costs low and repeat purchases high.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="custom-store-card p-6 md:p-8">
              <span className="text-4xl md:text-6xl font-bold stat-number-gradient">4x</span>
              <p className="text-lg md:text-2xl font-medium mt-2">Increase in number of leads</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4}>
            <div className="custom-store-card p-6 md:p-8">
              <span className="text-4xl md:text-6xl font-bold stat-number-gradient">40%</span>
              <p className="text-lg md:text-2xl font-medium mt-2">Less money spent on ads</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Overview
