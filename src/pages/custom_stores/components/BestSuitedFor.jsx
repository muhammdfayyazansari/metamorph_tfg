import React from 'react'

const BestSuitedFor = () => {
  const items = [
    {
      title: <>High-volume digital <br /> sellers</>,
      icon: '/images/CustomStoresImgs/bsOne.svg',
    },
    {
      title: <>No arbitrary <br /> Subscription and access- <br /> based businesses</>,
      icon: '/images/CustomStoresImgs/bsTwo.svg',
    },
    {
      title: <>Software/Digital license <br /> marketplaces</>,
      icon: '/images/CustomStoresImgs/bsThree.svg',
    },
    {
      title: <>Entrepreneurs wanting <br /> absolute control over their <br /> brand</>,
      icon: '/images/CustomStoresImgs/bsFour.svg',
    },
  ]

  return (
    <section className="py-24 text-white">
      <div className="container-section space-y-16 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Best Suited For
          </h2>
          <p className="opacity-60 text-xl font-light leading-relaxed">
            Because it removes friction, strengthens ownership, automates fulfillment, <br /> and
            elevates the brand experience.
          </p>
        </div>
        
        {/* Rerendering the grid with cleaner manual border logic for perfect crosshair */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto border-collapse">
            {items.map((item, index) => (
                <div 
                    key={index}
                    className={`
                        flex flex-col items-center justify-center p-16 gap-6
                        ${index === 0 ? 'md:border-r md:border-b border-white/50 border-b' : ''}
                        ${index === 1 ? 'md:border-b border-white/50 border-b' : ''}
                        ${index === 2 ? 'md:border-r border-white/50 border-b md:border-b-0' : ''}
                        ${index === 3 ? '' : ''}
                    `}
                >
                    <div className="relative">
                        <img 
                            src={item.icon} 
                            alt="Icon" 
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    <h3 className="text-2xl font-medium text-center max-w-xs leading-snug">
                        {item.title}
                    </h3>
                </div>
            ))}
        </div>

      </div>
    </section>
  )
}

export default BestSuitedFor
