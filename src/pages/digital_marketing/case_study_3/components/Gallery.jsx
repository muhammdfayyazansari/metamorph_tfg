const items = [
    {
        id: 1,
        bg_scr: 'g_',
    },
    {
        id: 2,
        bg_scr: 'g_',
    },
    {
        id: 3,
        bg_scr: 'g_',
    },
    {
        id: 4,
        bg_scr: 'g_',
    },
    {
        id: 5,
        bg_scr: 'g_',
    },
    {
        id: 6,
        bg_scr: 'g_',
    },
]
export default function Gallery() {
    return (
        <div className="z-10 flex w-full items-center justify-center p-6 lg:py-8 lg:px-30 overflow-hidden">
            <div className="flex justify-between items-center flex-wrap max-w-5xl gap-4">

                {/* ---------- FIRST ROW (2 ITEMS) ---------- */}
                {items.map((item) => (
                    <div
                        key={item.bg_scr + "1" + item.id}
                        className="w-full sm:w-[calc(50%-0.8rem)]"
                    >
                        <Card id={item.id} bg={item.bg_scr} />
                    </div>
                ))}

                {/* ---------- SECOND ROW (3 ITEMS) ---------- */}
                {/* {items.slice(2).map((item, index) => (
                    <div
                        key={item.bg_scr + index}
                        className="w-full sm:w-[calc(33%-1rem)]"
                    >
                        <Card id={item.id} bg={item.bg_scr} />
                    </div>
                ))} */}

            </div>
        </div>
    );
}


function Card({ bg, id }) {
    return (
        <div
            className={`glass card-gradient flex items-center justify-center rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.4)]`}
        >
            <img
                className="object-cover h-full w-full"
                src={`/images/gallery/${bg}${id}.webp`}
                alt=""
            />
        </div>
    );
}
