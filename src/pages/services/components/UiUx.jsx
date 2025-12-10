const items = [
    {
        id: 1,
        bg_scr: 'ui_ux_',
    },
    {
        id: 2,
        bg_scr: 'ui_ux_',
    }
   
]

const UiUx = () => {
  return (
    <div className="relative flex flex-col w-full py-10">
      <div className="absolute top-0 left-0 pt-48">
        <div className="relative h-[900px] w-[900px] overflow-x-hidden overflow-y-auto">
          <img
            className="absolute bottom-0 h-full w-full -left-78 object-contain "
            src="/images/ellipse.webp"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full pt-10 gap-10">
        <div className="capitalize">
          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">UI/UX</h1>
          <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">design</h2>
        </div>
          <div className="z-10 flex w-full items-center justify-center p-6 lg:py-8 lg:px-30 overflow-hidden">
            <div className="flex justify-between items-center flex-wrap max-w-5xl gap-4">

                {/* ---------- FIRST ROW (2 ITEMS) ---------- */}
                {items.slice(0, 2).map((item) => (
                    <div
                        key={item.bg_scr + "1" + item.id}
                        className="w-full "
                    >
                        <Card id={item.id} bg={item.bg_scr} />
                    </div>
                ))}
            </div>
        </div>

        <div className="flex items-center justify-center w-full ">
          <button className="button-gradient">View more</button>
        </div>
      </div>

     
    </div>
  );
};

export default UiUx;


function Card({ bg, id }) {
    return (
        <div
            className={`glass card-gradient flex items-center justify-center rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.4)]`}
        >

            <img
                className="object-contain h-full w-full"
                src={`/images/gallery/${bg}${id}.webp`}
                alt=""
            />
        </div>
    );
}
