import React from 'react'
import ScrollReveal from '../../../components/animations/ScrollReveal'

const Overview = () => {
  return (
    <section className="py-20 text-white relative overflow-hidden">
      {/* Background Asset */}
      

      <div className="container-section relative z-10">
        <div className="flex flex-col lg:flex-row items-center relative min-h-[600px]">
          {/* Left Column: Text Content & Stats */}
          <div className="w-full lg:w-[60%] space-y-12 z-10 relative">
            <ScrollReveal direction="bottom">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
                  Overview
                </h2>
                <h3 className="text-3xl mb-4 text-[#FFF]">
                  Invader Shop — Wholesale Premium Accounts Marketplace
                </h3>
                
                <div className="space-y-6 text-lg opacity-80 leading-relaxed font-light">
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

            <div className="flex flex-col sm:flex-row gap-6 max-w-2xl">
              <ScrollReveal direction="left" delay={0.2} className="w-full sm:w-1/2">
                <div className="custom-store-card p-5 md:p-6 min-h-[160px]">
                  <span className="text-4xl md:text-5xl font-bold stat-number-gradient">4x</span>
                  <p className="text-base md:text-xl font-medium mt-1 leading-tight">Increase in number of leads</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.4} className="w-full sm:w-1/2">
                <div className="custom-store-card p-5 md:p-6 min-h-[160px]">
                  <span className="text-4xl md:text-5xl font-bold stat-number-gradient">40%</span>
                  <p className="text-base md:text-xl font-medium mt-1 leading-tight">Less money spent on ads</p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          
        </div>
      </div>

      {/* Right Column: Character Image (Absolute) */}
      <div className="hidden lg:block absolute -right-20 xl:-right-0 top-1/2 -translate-y-1/2 w-[600px] xl:w-[750px] pointer-events-none z-0">
        <ScrollReveal direction="right" delay={0.6}>
          <img 
            src="/images/digitalMarketingCS/invaderCharacterImg.svg" 
            alt="Invader Character" 
            className="w-full h-auto object-contain"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Overview
