import { Link } from 'react-router-dom'
import ChevronButtons from '../../../components/ChevronButtons'

const items = [
  {
    id: 1,
    bg_scr: 'ui_ux_',
  },
  {
    id: 3,
    bg_scr: 'ui_ux_',
  },
  {
    id: 4,
    bg_scr: 'ui_ux_',
  },
  {
    id: 5,
    bg_scr: 'ui_ux_',
  },
  {
    id: 6,
    bg_scr: 'ui_ux_',
  },
]
const ui_ux_items = [
  {
    id: 1,
    image: '/images/gallery/ui_ux_1.webp',
    link: '/ui-ux-design/case-study-1',
  },
  {
    id: 3,
    image: '/images/digitalMarketingCS/ux1.svg',
    link: '/ui-ux-design/case-study-2',
  },
  {
    id: 4,
    image: '/images/digitalMarketingCS/ux2.svg',
    link: '/ui-ux-design/case-study-3',
  },
  {
    id: 5,
    image: '/images/digitalMarketingCS/ux3.svg',
    link: '/ui-ux-design/case-study-4',
  },
  {
    id: 6,
    image: '/images/digitalMarketingCS/ux5.svg',
    link: '/ui-ux-design/case-study-5',
  },
]

const UiUx = () => {
  return (
    <div className="relative flex w-full flex-col py-10">
      <div className="absolute top-0 right-0 z-0 flex justify-end md:h-200 md:w-200">
        <img
          className="h-full object-contain"
          src="/images/bg_images/logos_branding_bg.webp"
        />
      </div>

      <div className="absolute top-0 left-0 md:h-190 md:w-190">
        <img className="h-full object-contain" src="/images/ellipse.webp" />
      </div>
      <div className="flex w-full flex-col items-center gap-10 pt-10">
        <div className="capitalize z-10">
          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
            UI/UX
          </h1>
          <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">
            design
          </h2>
        </div>
        <div className="z-10 flex w-full items-center justify-center overflow-hidden p-6 lg:px-30 lg:py-8">
          <div className="flex max-w-5xl flex-wrap items-center justify-between gap-4">
            {/* ---------- FIRST ROW (2 ITEMS) ---------- */}
            {ui_ux_items.map((item, index) => (
              <div key={'ui_ux_' + item.id} className={`w-full`}>
                <Card image={item.image} link={item.link} />
              </div>
            ))}
          </div>
        </div>
        <ChevronButtons />
      </div>
    </div>
  )
}

export default UiUx

function Card({ image, link }) {
  return (
    <div
      className={`glass card-gradient group flex flex-col items-center justify-center rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.4)]`}
    >
      <div className="relative w-full overflow-hidden rounded-xl">
        <Link
          to={link || '#'}
          className="button-gradient-prev absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <span>Case Study</span>
        </Link>
        <img
          className={`h-full w-full object-contain transition-all duration-300 group-hover:bg-white/30 group-hover:blur-md`}
          src={image}
          alt="ui_ux_images"
        />
      </div>
    </div>
  )
}
