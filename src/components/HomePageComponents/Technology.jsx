import ProcessCard from '../ui/ProcessCard'

const Technology = () => {
    const processWithImgSrc = [
        {
            img_src: '/images/process_1.webp',
            title: 'Initiate the Morph',
            para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
            isFlip: false,
        },
        {
            img_src: '/images/process_2.webp',
            title: 'Visualize & Design',
            para: 'Bring us your boldest ideas. We’ll craft sleek, futuristic visuals that align perfectly with your brand’s mission and forward-thinking identity.',
            isFlip: true,
        },
        {
            img_src: '/images/process_3.webp',
            title: 'Development',
            para: 'Your designs morph into interactive, scalable digital solutions—built to perform, impress, and grow with you.',
            isFlip: false,
        },
        {
            img_src: '/images/process_4.webp',
            title: 'UI/UX Design',
            para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
            isFlip: false,
        },
        {
            img_src: '/images/process_4.webp',
            title: 'UI/UX Design',
            para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
            isFlip: false,
        },
        {
            img_src: '/images/process_4.webp',
            title: 'UI/UX Design',
            para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
            isFlip: false,
        },
    ]
    return (
        // <div className="flex flex-col ">
        // <div className="flex flex-col items-center capitalize">
        //   <div className="">
        //     <h2 className="text-4xl pl-[84px] -mb-10">our</h2>
        //     <h1 className="text-9xl font-semibold">Technology</h1>
        //     <h2 className="text-end text-4xl -mt-5">& Tools</h2>
        //   </div>
        // </div>

        //   <div className="flex self-center flex-nowrap overflow-x-scroll gap-5 w-[90vw] hide-scrollbar pt-10">
        //     {processWithImgSrc.map((item) => (
        //       <ProcessCard
        //         img_src={item["img_src"]}
        //         isFlip={item["isFlip"]}
        //         title={item["title"]}
        //         para={item["para"]}
        //         extraClass="w-80 flex-none"
        //       />
        //     ))}
        //   </div>
        // </div>

        <div className="relative flex w-full flex-col items-center justify-center gap-20">
            <div className="absolute top-20 md:top-10 lg:top-0 -left-35  z-10">
                <img
                    className="object-contain h-85 w-85 md:h-[500px] md:w-[500px] lg:h-full lg:w-full"
                    src="/images/bg_images/technology_bg.webp"
                />
            </div>

            <div className="z-10 flex flex-col items-center pt-20 lg:pt-48 capitalize">
                <div className="capitalize">
                    <h2 className="-mb-5 pl-11 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-21 sm:text-[30px] md:-mb-10 md:pl-24 md:text-[40px] lg:-mb-13 lg:pl-29 lg:text-[55px]">
                        our
                    </h2>

                    <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
                        Technology
                    </h1>
                    <h2 className="-mt-2 pr-19 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:pr-31 sm:text-[30px] md:-mt-5 md:pr-39 md:text-[40px] lg:-mt-6 lg:pr-48 lg:text-[55px]">
                        & Tools
                    </h2>
                </div>
            </div>

            <div className="flex w-full flex-col items-center gap-10 pb-48">
                <div className="hide-scrollbar flex w-[90vw] gap-5 overflow-x-scroll">
                    {Array.from('fayyaz ansari').map((item) => {
                        return (
                            <div className="flex-none">
                                <div className="bg-hero-combo flex items-center gap-3 rounded-full px-5 py-3 font-medium capitalize">
                                    <img
                                        src="/images/icons/wordpress.svg"
                                        alt="wordpress icon"
                                        
                                    />
                                    <p>Shopify</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="hide-scrollbar flex w-[90vw] gap-5 overflow-x-scroll">
                    {Array.from('fayyaz ansari').map((item) => {
                        return (
                            <div className="flex-none">
                                <div className="bg-hero-combo flex items-center gap-3 rounded-full px-5 py-3 font-medium capitalize">
                                    <img
                                        src="/images/icons/wordpress.svg"
                                        alt="wordpress icon"
                                        
                                    />
                                    <p>Shopify</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Technology
