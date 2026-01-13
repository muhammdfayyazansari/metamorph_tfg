import React from 'react'

const BusinessFoundation = () => {
  const features = [
    {
      title: 'Own your customers',
      icon: '/images/CustomStoresImgs/customerIcon.svg',
    },
    {
      title: 'Own your payments',
      icon: '/images/CustomStoresImgs/paymentIcon.svg',
    },
    {
      title: 'Own your data',
      icon: '/images/CustomStoresImgs/dataIcon.svg',
    },
    {
      title: 'Scale without relying on someone else\'s platform',
      icon: '/images/CustomStoresImgs/platformIcon.svg',
    },
  ]

  return (
    <section className="py-20 text-white">
      <div className="container-section text-center space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Built For Businesses That <br />
            Think Bigger
          </h2>
          <p className="opacity-60 text-[20px] font-[300]">
            This system is the foundation for your private digital economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div key={index} className="business-card group">
              <div className="relative">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300" 
                />
              </div>
              <h3 className="text-lg font-medium leading-snug max-w-[80%]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessFoundation
