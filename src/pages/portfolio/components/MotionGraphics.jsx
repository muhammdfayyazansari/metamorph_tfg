import { Link } from "react-router-dom"

const items = [
    {
        id: 1,
        bg_scr: 'motion_graphics_',
    },
    {
        id: 2,
        bg_scr: 'motion_graphics_',
    },
    {
        id: 3,
        bg_scr: 'motion_graphics_',
    },
]

const MotionGraphics = () => {
    return (
        <div className="relative flex w-full flex-col py-10">
           
            <div className="flex w-full flex-col items-center gap-10 pt-10">
                <div className="capitalize">
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
                        {items.slice(0, 1).map((item) => (
                            <div
                                key={item.bg_scr + '1' + item.id}
                                className="w-full"
                            >
                                <Card id={item.id} bg={item.bg_scr} />
                            </div>
                        ))}

                        {items.slice(1).map((item,index) => (
                            <div
                                key={item.bg_scr + '1' + item.id}
                                className={`w-full ${index === 0 ? "sm:w-[calc(60%-0.8rem)]":"sm:w-[calc(40%-0.8rem)]"}`}
                            >
                                <Card id={item.id} bg={item.bg_scr} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex w-full items-center justify-center">
                      <Link
                        to="/motion-graphics"
                        className="button-gradient z-20 cursor-pointer"
                    >
                        <span>View more</span>
                    </Link></div>
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
                className="h-full w-full object-contain"
                src={`/images/gallery/${bg}${id}.webp`}
                alt=""
            />
        </div>
    )
}
