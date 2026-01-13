import React from 'react'

const EliteSellers = () => {
  const benefits = [
    {
      title: <>No platform <br /> bans</>,
      icon: '/images/CustomStoresImgs/eliteIconOne.svg', 
    },
    {
      title: <>No arbitrary <br /> holds</>,
      icon: '/images/CustomStoresImgs/eliteIconTwo.svg', 
    },
    {
      title: <>No dependency <br /> fatigue</>,
      icon: '/images/CustomStoresImgs/eliteIconThree.svg', 
    },
    {
      title: <>A system that grows <br /> with your business</>,
      icon: '/images/CustomStoresImgs/eliteIconFour.svg', 
    },
  ]

  return (
    <section className="py-24 text-white relative">
      <div className="container-section text-center space-y-16 relative z-10">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Why Elite Sellers Choose This <br /> Platform
          </h2>
          <p className="opacity-60 text-xl font-light leading-relaxed">
            Because it removes friction, strengthens ownership, automates fulfillment, and <br />
            elevates the brand experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <div key={index} className="business-card group">
              <div className="relative">
                {/* Placeholder Icon - User will upload */}
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-medium leading-snug max-w-[90%]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <img src="/images/CustomStoresImgs/purpleShadowImg.svg" alt="" className='absolute left-0 right-0 bottom-[-200px] pointer-events-none' />
    </section>
  )
}

export default EliteSellers
