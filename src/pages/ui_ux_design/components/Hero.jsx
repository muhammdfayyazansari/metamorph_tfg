const Hero = () => {
  return (
    <div className="div-bottom-gradient relative z-10 flex h-120 w-full items-center justify-center md:h-150 2xl:h-200">
      <div className="relative flex h-full w-full flex-col-reverse items-center justify-end overflow-hidden lg:flex-row-reverse lg:py-8 lg:pl-16">
        {/* heading div */}

        {/* perfect */}
        {/* <div className="absolute -bottom-20 left-0 flex h-full w-full lg:static lg:bottom-0 lg:w-full">
          <img
            src="/images/bg_images/ui_ux_design.webp"
            className="object-contain w-full h-full"
            alt="robot-image"
          />
        </div> */}

        {/* testing  for large and above screen*/}
        <div className="hidden lg:block absolute top-0 lg:-top-10 right-0 w-full lg:max-w-200 xl:max-w-220">
          <img
            src="/images/bg_images/ui_ux_design.webp"
            className="object-contain w-full h-full"
            alt="robot-image"
          />
        </div>
        <div className="block lg:hidden absolute -bottom-5 sm:-bottom-15  md:-bottom-10 mx-auto w-full max-w-100 sm:max-w-130 md:max-w-150">
          <img
            src="/images/bg_images/ui_ux_design.webp"
            className="object-contain w-full h-full"
            alt="robot-image"
          />
        </div>



     
        <div className="z-10 flex h-full justify-center pt-25 sm:pt-15 md:pt-22 lg:items-center lg:justify-start lg:pt-0">
          {/* <h1 className="text-4xl leading-none font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[10rem] 2xl:text-9xl"> */}
          {/* <h1 className="text-[60px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[150px] xl:text-[180px]"> */}
          <h1 className="text-4xl leading-none font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            UI/UX <br className="hidden lg:block" />Design
          </h1>
        </div>
      </div>

      {/* bottom div */}
      <div className="absolute bottom-0 hidden w-full flex-row items-end justify-between p-6 md:flex lg:px-16">
        <div className="max-w-2/6">
          <p>
            We're passionate about turning your vision into stunning designs.
            Whether you're an individual, startup, or corporation, we bring
            creativity and precision to elevate your brand.
          </p>
        </div>
        <div className="right-0 bottom-5 flex max-w-2/6 flex-col items-end justify-center gap-3">
          <button className="button-glass">Contact</button>
          <button className="button-gradient"><span>Have a Project</span></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
