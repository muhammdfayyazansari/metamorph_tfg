const items = [
  {
    id: 4,
    bg_scr: 'motion_graphics_4',
  },
  {
    id: 5,
    bg_scr: 'motion_graphics_5',
  },
  {
    id: 6,
    bg_scr: 'animation_3',
  },
  {
    id: 8,
    bg_scr: 'motion_graphics_6',
  },
  {
    id: 9,
    bg_scr: 'motion_graphics_7',
  },
  {
    id: 10,
    bg_scr: 'motion_graphics_8',
  },
  {
    id: 12,
    bg_scr: 'motion_graphics_9',
  },
  {
    id: 16,
    bg_scr: 'motion_graphics_10',
  },
]

const MotionGraphics = () => {
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
            Motion
          </h1>
          <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">
            Graphics
          </h2>
        </div>
        <div className="z-10 flex w-full items-center justify-center overflow-hidden p-6 lg:px-30 lg:py-8">
          <div className="flex max-w-5xl flex-wrap items-center justify-between gap-4">
            {/* ---------- FIRST ROW (2 ITEMS) ---------- */}
            {/* {items.slice(0, 1).map((item) => (
                            <div
                                key={item.bg_scr + '1' + item.id}
                                className="w-full"
                            >
                                <Card id={item.id} bg={item.bg_scr} />
                            </div>
                        ))} */}

            {items.map((item, index) => (
              <div
                key={item.bg_scr + '1' + item.id}
                className={`w-full ${item.id % 4 != 0 && 'sm:w-[calc(50%-0.8rem)]'}`}
              >
                <Card id={item.id} bg={item.bg_scr} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <button className="button-gradient"><span>View more</span></button>
        </div>
      </div>
    </div>
  )
}

export default MotionGraphics

function Card({ bg, id }) {
  return (
    <div
      className={`glass card-gradient flex items-center justify-center rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.4)]`}
    >
      <img
        className="h-full w-full max-w-300 object-contain"
        src={`/images/gallery/${bg}.webp`}
        alt=""
      />
    </div>
  )
}
