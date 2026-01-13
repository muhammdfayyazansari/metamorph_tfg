import React from 'react'

const EnterprisePlatform = () => {
  return (
    <section className="py-20 text-white relative">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-5">
            <h2 className="text-4xl md:text-[40px] font-semibold leading-tight">
              Enterprise-Grade Automated
              Digital Delivery Commerce
              Platform
            </h2>
            
            <p className="text-[18px] opacity-60 leading-relaxed font-[400]">
              A fully owned, fully controlled digital selling ecosystem — engineered for businesses that refuse restrictions.
            </p>

            <div className="space-y-6 opacity-60 text-[18px] leading-relaxed">
              <p>
                This isn't just a store template. <br />
                It is a complete digital infrastructure built for brands that value control, scalability, automation, and customer experience.
              </p>
              <p>
                Designed for merchants selling digital goods, subscription access, credentials, software keys, e-books, online services, and virtual products — this platform offers unmatched automation and ownership, eliminating the dependence on third-party marketplaces that freeze funds, impose limits, or compromise brand authority.
              </p>
            </div>
          </div>

          {/* Right Column: Images */}
          <div className="relative flex justify-center items-center h-[300px] lg:h-[600px] mt-8 lg:mt-0">
             {/* Combined Monster & Mask Image */}
            <img 
              src="/images/CustomStoresImgs/MonsterMaskImg.svg" 
              alt="Enterprise Platform Monster" 
              className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnterprisePlatform
