import React from 'react'

const InvestingIn = () => {
  return (
    <section className="py-24 text-white">
      <div className="container-section space-y-16 text-center flex flex-col items-center">
        
        {/* Glass Pill */}
        <div className="relative inline-flex items-center gap-4 px-8 py-3 rounded-full overflow-hidden">
          {/* Background & Border (Replicating .business-card logic manually for rounded-full) */}
          <div className="absolute inset-0 rounded-full border border-transparent"
               style={{
                 background: `
                   radial-gradient(146.61% 98.67% at 89.05% 79.61%, rgba(255, 255, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%) padding-box,
                   linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, transparent 100%) border-box
                 `,
                 mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                 WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                 WebkitMaskComposite: 'xor',
                 maskComposite: 'exclude'
               }}
          />
          <div 
            className="absolute inset-0 rounded-full backdrop-blur-md -z-10" 
            style={{
              background: 'radial-gradient(146.61% 98.67% at 89.05% 79.61%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.00) 100%)'


            }}
          />

          {/* Icon Placeholder */}
          <img 
            src="/images/CustomStoresImgs/bannerIcon.svg" 
            alt="Icon" 
            className="w-6 h-6 object-contain" 
          />
          <span className="text-xl md:text-[20px] font-light relative z-10">
            What You Are Investing In?
          </span>
        </div>

        {/* Text Content */}
        <div className="space-y-4 max-w-4xl mx-auto">
           <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
             A private, automated digital <br /> commerce engine
           </h2>
           <p className="opacity-60 text-xl font-light">
             built for scale, engineered for ownership, designed for simplicity and speed
           </p>
        </div>

        {/* Two Image Placeholders at Bottom */}
        <div className="flex flex-col gap-8 w-full justify-center items-center mt-12 mb-0 lg:mb-[-600px]">
            {/* Image 1 */}
            <div className="relative w-full lg:top-[-300px]">
                 <img 
                    src="/images/CustomStoresImgs/groupImg.svg"
                    alt="Investing Visual 1"
                    className="w-full h-auto object-contain"
                 />
            </div>
             {/* Image 2 */}
            <div className="relative w-full lg:top-[-600px]">
                 <img 
                    src="/images/CustomStoresImgs/customLargeImg.svg"
                    alt="Investing Visual 2"
                    className="w-full h-auto object-contain"
                 />
            </div>
        </div>

        <p className="text-xl md:text-[40px] font-[500] leading-relaxed mt-16">
          Invader Shop is more than just a store — it’s a reliable partner for your digital needs.
        </p>

      </div>
    </section>
  )
}

export default InvestingIn
