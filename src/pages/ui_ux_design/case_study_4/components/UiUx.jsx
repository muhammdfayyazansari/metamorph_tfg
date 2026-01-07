const items = [
  {
    id: 3,
    bg_scr: 'ui_ux_',
  },
  {
    id: 5,
    bg_scr: 'case_study_',
  },
  {
    id: 4,
    bg_scr: 'case_study_',
  },
]

const UiUx = () => {
  return (
    <div className="relative flex w-full flex-col py-10">
      {/* <div className="absolute top-0 left-0 md:h-190 md:w-190">
        <img className="h-full object-contain" src="/images/ellipse.webp" />
      </div> */}

      <div className="absolute top-0 right-0 z-0 flex justify-end md:h-200 md:w-200">
        <img
          className="h-full object-contain"
          src="/images/bg_images/logos_branding_bg.webp"
        />
      </div>

       
      <div className="absolute -bottom-160 -left-80 md:h-200 md:w-200">
        <img className="object-contain" src="/images/service_bg.webp" />
      </div>

      <div className="flex w-full flex-col items-center gap-10 pt-10">
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
      {/* {id === 1 && (
        <button className="button-gradient absolute z-10 mx-auto">
          Case Study
        </button>
      )} */}
      <img
        // className={`h-full w-full object-contain ${id === 1 ? 'overflow-hidden bg-white/30 blur-md' : ''}`}
        className={`h-full w-full object-contain`}
        src={`/images/gallery/${bg}${id}.webp`}
        alt="ui_ux_images"
      />
    </div>
  )
}
