import React from 'react'
import ScrollReveal from '../../../components/animations/ScrollReveal'

const BrandIdentity = () => {
  const tools = {
    design: [
      { name: 'Figma', icon: '/images/icons/figmaIcon.svg' },
      { name: 'Illustrator', icon: '/images/icons/illustrationIcon.svg' },
      { name: 'Photoshop', icon: '/images/icons/photoshopIcon.svg' },
    ],
    development: [
      { name: 'HTML', icon: '/images/icons/htmlIcon.svg' },
      { name: 'CSS', icon: '/images/icons/cssIcon.svg' },
      { name: 'JS', icon: '/images/icons/JSIcon.svg' },
    ],
  }

  return (
    <section className="py-20 text-white relative">
        <div className="absolute bottom-0 top-30 right-0 w-[200px] md:w-[300px] z-0">
        <img 
          src="/images/bg_images/logos_branding_bg.webp" 
          alt="" 
          className="opacity-100 scale-125"
        />
      </div>
      <div className="container-section space-y-24">
        <ScrollReveal direction="bottom">
          <h2 className="text-6xl font-semibold mb-12">Brand identity</h2>
        </ScrollReveal>

            {/* 1. Colors Container */}
        <div className="brand-identity-container">
          <ScrollReveal direction="bottom" className="w-full">
            <h3 className="text-3xl font-medium mb-8 lg:mb-16">Colors</h3>
            <div className="flex flex-col lg:flex-row items-center gap-[30px] w-full">
              <div className="flex justify-center lg:justify-start items-center h-40 lg:h-56 group overflow-hidden w-full lg:w-auto">
                <img 
                  src="/images/metaMonster.svg" 
                  alt="Monster Character" 
                  className="h-full w-auto lg:w-[400px] object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="space-y-6 w-full">
                <div className="flex w-full items-center justify-between p-4 lg:p-6 rounded-full bg-[#DE14FF] text-white shadow-lg transform transition-transform hover:scale-[1.02]">
                  <span className="font-mono text-sm lg:text-[22px] uppercase pl-2 lg:pl-4">#DE14FF</span>
                  <span className="font-semibold text-xl lg:text-[33px] pr-2 lg:pr-4">magenta</span>
                </div>
                <div className="flex items-center justify-between p-4 lg:p-6 rounded-full bg-[#418EFF] text-white shadow-lg transform transition-transform hover:scale-[1.02]">
                  <span className="font-mono text-sm lg:text-[22px] uppercase pl-2 lg:pl-4">#418EFF</span>
                  <span className="font-semibold text-xl lg:text-[33px] pr-2 lg:pr-4">bright sky blue</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 2. Typography Container */}
        <div className="brand-identity-container">
          <ScrollReveal direction="bottom" className="w-full space-y-24 lg:space-y-48 py-8">
            <h3 className="text-3xl font-medium mb-12 lg:mb-20">Typography</h3>

            {/* Coolvetica Specs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start min-h-[350px] lg:min-h-[500px]">
              <div className="pt-4">
                <h4 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-8">Coolvetica</h4>
                <p className="opacity-40 leading-relaxed font-light text-lg lg:text-xl max-w-md italic">
                  Coolvetica is a bold, modern sans-serif typeface designed to communicate confidence, 
                  clarity, and contemporary appeal. Its rounded geometric forms and strong letter structure 
                  make it highly readable while maintaining a distinctive, premium presence.
                </p>
              </div>

              <div className="relative h-[300px] lg:h-[450px] w-full flex justify-center lg:justify-end">
                <div className="typography-card absolute top-0 lg:top-[-20px] right-4 lg:right-[140px] z-0 shadow-lg border border-white/5 scale-90 lg:scale-100 origin-top-right">
                  <span className="text-sm opacity-60">Regular</span>
                  <span className="text-7xl lg:text-9xl font-normal leading-none mt-6 lg:mt-10 opacity-40">Aa</span>
                </div>
                <div className="typography-card absolute top-[100px] lg:top-[120px] right-0 lg:right-[20px] z-10 shadow-2xl border border-white/10 scale-90 lg:scale-100 origin-top-right">
                  <span className="text-sm opacity-80 italic">Medium</span>
                  <span className="text-7xl lg:text-9xl font-medium italic leading-none mt-6 lg:mt-10">Aa</span>
                </div>
              </div>
            </div>

            {/* Inter Specs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start min-h-[400px] lg:min-h-[600px]">
              <div className="pt-4">
                <h4 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-8">Inter</h4>
                <p className="opacity-40 leading-relaxed font-light text-lg lg:text-xl max-w-md">
                  Inter is a modern, highly readable sans-serif typeface designed for user interfaces 
                  and digital screens. Created by Rasmus Andersson, it features clean lines, optimized 
                  letter spacing, and a tall x-height for enhanced legibility. Inter supports multiple 
                  weights and styles, making it versatile for web and app design.
                </p>
              </div>

              <div className="relative h-[400px] lg:h-[550px] w-full flex justify-center lg:justify-end">
                <div className="typography-card absolute top-[-20px] lg:top-[-40px] right-8 lg:right-[260px] z-0 shadow-lg border border-white/5 scale-90 lg:scale-100 origin-top-right">
                  <span className="text-sm opacity-60">Regular</span>
                  <span className="text-7xl lg:text-9xl font-normal leading-none mt-6 lg:mt-10 opacity-40">Aa</span>
                </div>
                <div className="typography-card absolute top-[80px] lg:top-[90px] right-4 lg:right-[110px] z-10 shadow-xl border border-white/10 scale-90 lg:scale-100 origin-top-right">
                  <span className="text-sm opacity-70">Medium</span>
                  <span className="text-7xl lg:text-9xl font-medium leading-none mt-6 lg:mt-10 opacity-80">Aa</span>
                </div>
                <div className="typography-card absolute top-[180px] lg:top-[250px] right-[-10px] lg:right-[-50px] z-20 shadow-2xl border border-white/20 scale-90 lg:scale-100 origin-top-right">
                  <span className="text-sm opacity-90">Bold</span>
                  <span className="text-7xl lg:text-9xl font-bold leading-none mt-6 lg:mt-10">Aa</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 3. Tools Container */}
        <div className="brand-identity-container">
          <ScrollReveal direction="bottom" className="w-full space-y-12 lg:space-y-24">
            <h3 className="text-3xl font-medium">UI Design Tools</h3>
            
            <div className="space-y-12 lg:space-y-16 pb-0 lg:pb-12">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
                <span className="text-4xl lg:text-5xl font-light opacity-60">Design</span>
                <div className="flex flex-wrap gap-4 lg:gap-8">
                  {tools.design.map((tool) => (
                    <div key={tool.name} className="w-20 h-20 md:w-32 md:h-32 rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center p-4 md:p-5 hover:bg-white/10 transition-all hover:scale-105 shadow-2xl group">
                      <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain filter group-hover:brightness-110" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
                <span className="text-4xl lg:text-5xl font-light opacity-60">Development</span>
                <div className="flex flex-wrap gap-4 lg:gap-8">
                  {tools.development.map((tool) => (
                    <div key={tool.name} className="w-20 h-20 md:w-32 md:h-32 rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center p-4 md:p-5 hover:bg-white/10 transition-all hover:scale-105 shadow-2xl group">
                      <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain filter group-hover:brightness-110" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default BrandIdentity
