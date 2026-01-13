import { Link } from 'react-router-dom'

const items = [
  {
    id: 1,
    image: '/images/gallery/ui_ux_3.webp',
    link: '/digital-marketing/case-study-1',
  },
  {
    id: 2,
    image: '/images/digitalMarketingCS/DMC1.svg',
    link: '/digital-marketing/case-study-2',
  },
  {
    id: 3,
    image: '/images/digitalMarketingCS/DMC2.svg',
    link: '/digital-marketing/case-study-3',
  },
  {
    id: 4,
    image: '/images/digitalMarketingCS/DMC3.svg',
    link: '/digital-marketing/case-study-4',
  },
]

const Services = () => {
  return (
    <div className="relative flex w-full flex-col py-10">
      <div className="absolute -bottom-50 left-0 md:h-190 md:w-190">
        <img className="h-full object-contain" src="/images/ellipse.webp" />
      </div>

      {/* Large Image Showcase */}
      {/* <div className="z-10 flex w-full flex-col items-center gap-10 py-10 px-6 lg:px-30">
        <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl">
          <img
            className="w-full h-auto object-contain"
            src="/images/digitalMarketingCS/DMC7.svg"
            alt="Large Digital Marketing Showcase"
          />
        </div>
      </div> */}

      {/* Decorative Iridescent Ring */}
      <div className="relative h-0 w-full">
        <div className="absolute -top-20 -left-40 z-0 md:-top-40 md:-left-80 md:h-200 md:w-200">
          <img
            className="object-contain"
            src="/images/service_bg.webp"
            alt="decorative ring"
          />
        </div>
      </div>

      {/* Other Case Studies Section */}
      <div className="z-10 flex w-full flex-col items-center gap-10 py-10">
        <div className="capitalize">
          <h2 className="-mb-5 pl-12 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-20 sm:text-[30px] md:-mb-10 md:pl-25 md:text-[40px] lg:-mb-13 lg:pl-30 lg:text-[55px]">
            other
          </h2>
          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
            Case
          </h1>
          <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">
            Studies
          </h2>
        </div>
      </div>

      <div className="relative z-10 flex w-full items-center justify-center overflow-hidden ">
        <div className="hide-scrollbar flex w-full flex-nowrap items-center gap-3 overflow-x-scroll snap-x snap-mandatory px-6 md:px-10 lg:px-20">
          {items.map((item) => (
            <div
              key={item.id}
              className="w-[80vw] md:w-[60vw] lg:w-[50vw] flex-none snap-center"
            >
              <Card item={item} />
            </div>
          ))}
        </div>

        <div className="gradient-faded absolute top-0 z-10 h-full w-20 right-0 rotate-180"></div>
        <div className="gradient-faded absolute top-0 z-10 h-full w-20 left-0"></div>
      </div>
    </div>
  )
}

export default Services

function Card({ item }) {
  const { image, link } = item
  return (
    <div
      className={`glass card-gradient group flex flex-col items-center justify-center rounded-2xl p-2 md:p-4 shadow-[0_0_20px_rgba(0,0,0,0.4)]`}
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-xl">
        <Link
          to={link || '#'}
          className="button-gradient-prev absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <span className="md:px-8 md:py-3 text-lg whitespace-nowrap">Case Study</span>
        </Link>
        <img
          className={`h-full w-full object-cover transition-all duration-300 group-hover:bg-white/30 group-hover:blur-md scale-100 group-hover:scale-105`}
          src={image}
          alt="digital_marketing_case_study"
        />
      </div>
    </div>
  )
}



