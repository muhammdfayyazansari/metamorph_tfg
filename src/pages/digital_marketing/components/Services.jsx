import { Link } from 'react-router-dom'

const items = [
  {
    id: 1,
    title: 'Case study',
    subTitle: 'Turning Streamify into a Streaming Revenue Powerhouse',
    desc: 'Revamped Streamify’s user experience and subscription model, achieving a 4x growth in premium sign-ups without additional marketing costs.',
    leads: '5x',
    ads: '24%',
    image: '/images/gallery/ui_ux_3.webp',
    link: '/digital-marketing/case-study-1',
  },
  {
    id: 2,
    title: 'Case study',
    subTitle: 'Turning Streamify into a Streaming Revenue Powerhouse',
    desc: 'Revamped Streamify’s user experience and subscription model, achieving a 4x growth in premium sign-ups without additional marketing costs.',
    leads: '3x',
    ads: '36%',
    image: '/images/digitalMarketingCS/DMC1.svg',
    link: '/digital-marketing/case-study-2',
  },
  {
    id: 3,
    title: 'Case study',
    subTitle: 'Turning Streamify into a Streaming Revenue Powerhouse',
    desc: 'Revamped Streamify’s user experience and subscription model, achieving a 4x growth in premium sign-ups without additional marketing costs.',
    leads: '4x',
    ads: '47%',
    image: '/images/digitalMarketingCS/DMC2.svg',
    link: '/digital-marketing/case-study-3',
  },
  {
    id: 4,
    title: 'Case study',
    subTitle: 'Building Anayeti as a Trusted Premium Accounts Marketplace',
    desc: 'Anayeti was launched as a secure and user-friendly platform for selling premium digital subscriptions, including popular streaming and online services. The goal was to create a smooth, trustworthy purchasing experience while maintaining speed, reliability.',
    leads: '5x',
    ads: '32%',
    image: '/images/digitalMarketingCS/DMC3.svg',
    link: '/digital-marketing/case-study-4',
  },
]
const Services = () => {
  return (
    <div className="relative flex w-full flex-col py-10 lg:pt-20">
      <div className="absolute top-0 right-0 z-0 flex justify-end md:h-200 md:w-200">
        <img
          className="h-full object-contain"
          src="/images/bg_images/logos_branding_bg.webp"
        />
      </div>

      <div className="absolute top-0 left-0 md:h-190 md:w-190">
        <img className="h-full object-contain" src="/images/ellipse.webp" />
      </div>

      <div className="z-10 flex w-full flex-col items-center gap-10 pt-10">
        <div className="capitalize">
          <h2 className="-mb-5 pl-16 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-30 sm:text-[30px] md:-mb-10 md:pl-36 md:text-[40px] lg:-mb-13 lg:pl-42 lg:text-[55px]">
            Digital
          </h2>
          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
            Marketing
          </h1>
        </div>
        <div className="z-10 flex w-full items-center justify-center overflow-hidden p-6 lg:px-30 lg:py-8">
          <div className="flex max-w-5xl flex-wrap items-center justify-between gap-5">
            {/* ---------- FIRST ROW (2 ITEMS) ---------- */}
            {items.map((item) => (
              <div key={item.bg_scr + '1' + item.id} className="w-full">
                <Card id={item.id} item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

function Card({ id, item }) {
  const { image, link, title, subTitle, desc, leads, ads } = item
  return (
    <div
      className={`glass card-gradient group flex flex-col items-center justify-center space-y-5 rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.4)] 2xl:space-y-7`}
    >
      <div className="relative w-full overflow-hidden rounded-xl">
        <Link to={link || "#"} className="button-gradient-prev absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span>Case Study</span>
        </Link>
        <img
          className={`h-full w-full object-contain transition-all duration-300 group-hover:bg-white/30 group-hover:blur-md`}
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col space-y-2 overflow-hidden text-white md:space-y-4 2xl:space-y-6">
        {/* titles with subtitles */}
        <div className="flex flex-col space-y-2 text-white 2xl:space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl 2xl:text-6xl">
            {title}
          </h1>
          <h3 className="text-lg font-medium tracking-tight md:text-2xl 2xl:text-3xl">
            {subTitle}
          </h3>
          <p className="sm:text-md text-sm font-light tracking-tight text-white/50 md:pr-20 xl:text-lg">
            {desc}
          </p>
        </div>

        <div className="flex gap-4 text-white sm:gap-15 2xl:gap-20">
          <div className="flex flex-col text-white">
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl 2xl:text-7xl">
              {leads}
            </h1>
            <p className="text-xs font-light tracking-tight sm:text-sm">
              Increase in number of leads
            </p>
          </div>
          <div className="flex flex-col text-white">
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl 2xl:text-7xl">
              {ads}
            </h1>
            <p className="text-xs font-light tracking-tight sm:text-sm">
              Less money spent on ads
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
