const FeaturedProjects = () => {
    const servicesWithImgSrc = [
        {
            img_src: 'branding_and_logos',
            title: 'Branding and Logos',
            // icon: "/images/icons/branding_and_logos.svg", // Example placeholder
        },
        {
            img_src: 'motion_design',
            title: 'Motion Design',
        },
        {
            img_src: 'ui_ux_design',
            title: 'UI/UX Design',
        },
        {
            img_src: 'digital_marketing',
            title: 'Digital Marketing',
        },
        {
            img_src: '2d_3d_animations',
            title: '2D/3D Animations',
        },
    ]
    return (
        <div className="relative mb-48 flex w-full flex-col items-center justify-center overflow-hidden lg:pt-0 xl:pt-20">
            <div className="absolute bottom-0 w-screen sm:w-5/6 lg:w-3/4">
                <img
                    className="h-full w-full object-contain"
                    src="/images/bg_images/featured_bg.webp"
                />
            </div>
            <div className="z-10 flex w-full flex-col items-center sm:gap-10">
                <div className="capitalize">
                    <h2 className="-mb-5 pr-13 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pr-24 sm:text-[30px] md:-mb-10 md:pr-28 md:text-[40px] lg:-mb-13 lg:pr-33 lg:text-[55px]">
                        featured
                    </h2>
                    <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
                        Projects
                    </h1>
                </div>

                <div className="-mb-10 flex h-full w-full items-center justify-center gap-2 px-5">
                    {/* for small screen */}
                    <div className="block pb-10 lg:hidden">
                        <div className="z-10 rounded-lg bg-linear-to-t from-[#51D1F4] to-[#74288F] p-px">
                            <div className="rounded-[calc(0.5rem-1px)]">
                                <button className="bg-hero-combo rounded-[calc(0.5rem-1px)] p-3">
                                    <img
                                        className="h-4 w-6 rotate-180"
                                        src="/images/icons/chevron.svg"
                                        alt="chevron"
                                        
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="-mb-16">
                        <img
                            className="h-[300px] object-contain lg:h-[600px]"
                            src="/images/mobile.webp"
                            alt=""
                        />
                    </div>
                    <div className="block pb-10 lg:hidden">
                        <div className="rounded-lg bg-linear-to-t from-[#51D1F4] to-[#74288F] p-px lg:hidden">
                            <div className="rounded-[calc(0.5rem-1px)]">
                                <button className="bg-hero-combo rounded-[calc(0.5rem-1px)] p-3">
                                    <img
                                        className="h-4 w-6"
                                        src="/images/icons/chevron.svg"
                                        alt="chevron"
                                        
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* for large screen */}
            <div className="absolute bottom-0 z-10 w-full">
                <div className="hidden h-full w-full items-end justify-between p-10 lg:flex">
                    <div className="flex flex-col items-start justify-center gap-5">
                        <h3 className="text-3xl font-medium">
                            Deep Seek <br />
                            Landing page
                        </h3>
                        <button className="button-gradient">case study</button>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-lg bg-linear-to-t from-[#51D1F4] to-[#74288F] p-px">
                            <div className="rounded-[calc(0.5rem-1px)]">
                                <button className="bg-hero-combo rounded-[calc(0.5rem-1px)] p-3">
                                    <img
                                        className="h-4 w-5 rotate-180"
                                        src="/images/icons/chevron.svg"
                                        alt="chevron"
                                        
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="rounded-lg bg-linear-to-t from-[#51D1F4] to-[#74288F] p-px">
                            <div className="rounded-[calc(0.5rem-1px)]">
                                <button className="bg-hero-combo rounded-[calc(0.5rem-1px)] p-3">
                                    <img
                                        className="h-4 w-5"
                                        src="/images/icons/chevron.svg"
                                        alt="chevron"
                                        
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="w-full text-center">
        <div className="relative flex justify-center items-center w-full h-[800px]  overflow-hidden">
          <img
            className="absolute top-0 left-0 h-[750px] object-contain "
            src="/images/gradient_bg.webp"
          />
          <h1 className="text-9xl text-center">video</h1>
        </div>
      </div> */}
        </div>
    )
}

export default FeaturedProjects
