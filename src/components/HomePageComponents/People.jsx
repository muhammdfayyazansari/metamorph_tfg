import PeopleCard from '../ui/PeopleCard'

const People = () => {
    const peopleWithImgSrc = [
        {
            img_src: '/images/people_1.webp',
            title: 'Sophia M.',
            subTitle: ' — United States',
            para: 'We offer comprehensive design and development services to help businesses establish a strong online presence and deliver exceptional digital experiences. Our expert team of designers, developers, and strategists work collaboratively to create visually stunning, user-friendly, and technically robust solutions that align with your business goals.',
            isFlip: false,
        },
        {
            img_src: '/images/people_2.webp',

            title: 'Sophia M.',
            subTitle: ' — United States',
            para: 'We offer comprehensive design and development services to help businesses establish a strong online presence and deliver exceptional digital experiences. Our expert team of designers, developers, and strategists work collaboratively to create visually stunning, user-friendly, and technically robust solutions that align with your business goals.',
            isFlip: true,
        },
    ]
    return (
        <div className="flex flex-col p-6 lg:py-8 lg:px-16 gap-10">
            <div className="flex flex-col items-center capitalize">
                <div className="capitalize">
                    <h2 className="-mb-5 pl-11 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-21 sm:text-[30px] md:-mb-10 md:pl-24 md:text-[40px] lg:-mb-13 lg:pl-29 lg:text-[55px]">
                        what
                    </h2>

                    <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
                        people
                    </h1>
                    <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">
                        say
                    </h2>
                </div>
            </div>

            <div className="flex w-full flex-col gap-10 self-center pt-10">
                {peopleWithImgSrc.map((item) => (
                    <PeopleCard
                        img_src={item['img_src']}
                        isFlip={item['isFlip']}
                        title={item['title']}
                        subTitle={item['subTitle']}
                        para={item['para']}
                        extraClass=""
                    />
                ))}
            </div>

            <div className="flex w-full justify-center gap-3">
                <button className="bg-hero-combo rotate-180 rounded-xl p-3">
                    <img
                        className="h-4 w-5"
                        src="/images/icons/chevron.svg"
                        alt="chevron"
                    />
                </button>
                <button className="bg-hero-combo rounded-xl p-3">
                    <img
                        className="h-4 w-5"
                        src="/images/icons/chevron.svg"
                        alt="chevron"
                    />
                </button>
            </div>
        </div>
    )
}

export default People
