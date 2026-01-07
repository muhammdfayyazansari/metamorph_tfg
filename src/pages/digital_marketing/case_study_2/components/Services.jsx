const items = [
  {
    id: 1,
    title: 'Case study',
    subTitle: 'Turning Streamify into a Streaming Revenue Powerhouse',
    desc: 'Revamped Streamify’s user experience and subscription model, achieving a 4x growth in premium sign-ups without additional marketing costs.',
    leads: '5x',
    ads: '24%',
    image: '/images/gallery/ui_ux_3.webp',
  },
  {
    id: 2,
    title: 'Case study',
    subTitle: 'Turning Streamify into a Streaming Revenue Powerhouse',
    desc: 'Revamped Streamify’s user experience and subscription model, achieving a 4x growth in premium sign-ups without additional marketing costs.',
    leads: '3x',
    ads: '36%',
    image: '/images/digitalMarketingCS/DMC2.svg',
  },
  {
    id: 3,
    title: 'Case study',
    subTitle: 'Turning Streamify into a Streaming Revenue Powerhouse',
    desc: 'Revamped Streamify’s user experience and subscription model, achieving a 4x growth in premium sign-ups without additional marketing costs.',
    leads: '4x',
    ads: '47%',
    image: '/images/digitalMarketingCS/DMC3.svg',
  },
]
const Services = () => {
  return (
    <div className="relative flex w-full flex-col py-10">
      <div className="absolute -bottom-50 left-0 md:h-190 md:w-190">
        <img className="h-full object-contain" src="/images/ellipse.webp" />
      </div>

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

      {/* <div className="z-10 flex w-full items-center justify-center overflow-hidden p-6 lg:px-30 lg:py-8"> */}
      <div className="relative z-10 flex w-full items-center justify-center overflow-hidden ">
        <div className="hide-scrollbar flex w-full max-w-500 flex-nowrap items-center gap-5 overflow-x-scroll px-2">
          {/* ---------- FIRST ROW (2 ITEMS) ---------- */}
          {items.map((item) => (
            <div
              key={item.id}
              className="max-w-80 flex-none lg:max-w-180"
            >
              <Card id={item.id} item={item} />
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

function Card({ id, item }) {
  const { image, title, subTitle, desc, leads, ads } = item
  return (
    <div
      // className={`glass card-gradient flex flex-col items-center justify-center space-y-5 rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.4)] 2xl:space-y-7`}
      className={`glass card-gradient flex flex-col items-center justify-center space-y-5 rounded-2xl p-4  2xl:space-y-7`}
    >
      <img
        className="h-full w-full object-contain"
        src={image}
        alt=""
      />
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
