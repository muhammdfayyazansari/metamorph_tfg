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
]

export default function Gallery() {
    return (
        <div className="z-10 flex w-full items-center justify-center p-6 lg:py-8 lg:px-16 overflow-hidden">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-9 max-w-5xl ">
                {/* First Row (2 items) */}
                <div className="col-span-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {items.slice(0, 2).map((item) => (
                        <Card key={item.bg_scr+"1"+item.id} id={item.id} bg={item.bg_scr} />
                    ))}
                </div>

                {/* Second Row (3 items) */}
                {items.slice(2).map((item, index) => {
                    return (
                        <div className="col-span-3">
                            <Card
                                key={item.bg_scr+index}
                                id={item.id}
                                bg={item.bg_scr}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function Card({ bg, id}) {
    return (
        <div
            className={`glass card-gradient flex sm:48 items-center justify-center rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.4)]`}
        >
            <img className='object-cover h-full w-full ' src={'/images/gallery/' + bg + id + '.webp'} />
        </div>
    )
}
