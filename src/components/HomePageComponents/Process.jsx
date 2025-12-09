import ProcessCard from '../ui/ProcessCard'

const Process = () => {
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
        <div className="flex flex-col">
            <div className="flex flex-col items-center capitalize">
                <div className="capitalize">
                    <h2 className="-mb-5 pl-10 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-20 sm:text-[30px] md:-mb-10 md:pl-[90px] md:text-[40px] lg:-mb-13 lg:pl-[100px] lg:text-[55px]">
                      our
                    </h2>

                    <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
                        Process
                    </h1>
                    <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">
                        is Everything
                    </h2>
                </div>
            </div>

            <div className="hide-scrollbar flex w-[90vw] flex-nowrap gap-5 self-center overflow-x-scroll pt-10">
                {processWithImgSrc.map((item) => (
                    <ProcessCard
                        img_src={item['img_src']}
                        isFlip={item['isFlip']}
                        title={item['title']}
                        para={item['para']}
                        extraClass="w-80 flex-none"
                    />
                ))}
            </div>
        </div>
    )
}

export default Process
