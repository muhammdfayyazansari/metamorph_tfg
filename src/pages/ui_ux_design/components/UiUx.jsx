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
        <div className="capitalize">
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
            {items.map((item, index) => (
              <div key={item.bg_scr + '1' + item.id} className={`w-full`}>
                <Card id={item.id} bg={item.bg_scr} />
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

function Card({ bg, id }) {
  return (
    <div
      className={`glass card-gradient relative flex items-center justify-center overflow-hidden rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.4)]`}
    >
      {id === 1 && (
        <button className="button-gradient-prev absolute z-10 mx-auto">
          <span>Case Study</span>
        </button>
      )}
      <img
        className={`h-full w-full object-contain ${id === 1 ? 'overflow-hidden bg-white/30 blur-md' : ''}`}
        src={`/images/gallery/${bg}${id}.webp`}
        alt="ui_ux_images"
      />
    </div>
  )
}
