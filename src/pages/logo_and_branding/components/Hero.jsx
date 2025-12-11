const Hero = () => {
  return (
    <div className="div-bottom-gradient relative z-10 flex h-120 w-full items-center justify-center md:h-150 2xl:h-200">
      {/* background image */}
      {/* <div className="absolute flex h-full w-full items-center justify-center lg:-top-10 lg:items-center">
        <img
          src="/images/hero-mountain.webp"
          className="w-[90vw] object-contain sm:w-[80vw] md:w-[60vw] lg:h-[900px] 2xl:h-[1044px]"
          alt="hero-mountain"
        />
      </div> */}

      {/* overlay content with headings */}
      {/* <div className="absolute flex h-full w-full flex-col items-center justify-center pb-20 text-end">
        <div>
          <h1 className="text-[60px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
            Logo & <br />
            Branding
          </h1>
        </div>
      </div> */}

      {/* robot image div */}
      {/* <div className="absolute top-0 flex h-full w-full items-center justify-center">
        <img
          src="/images/robot.webp"
          className="h-full w-full object-contain"
          alt="robot-image"
        />
      </div> */}

      <div className="relative flex h-full w-full flex-col-reverse items-center justify-end overflow-hidden lg:flex-row-reverse lg:py-8 lg:pl-16">
        {/* heading div */}

        {/* <h1 className="text-[60px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[150px] xl:text-[150px]"> */}
        {/* <div className="absolute -bottom-20 left-0 flex h-full w-full lg:static lg:bottom-0 lg:w-full">
          <img
            src="/images/bg_images/logo_and_branding.webp"
            className="h-full w-full object-cover"
            alt="robot-image"
          />
        </div>

        <div className="z-10 flex h-full justify-center pt-30 md:pt-20 lg:items-center lg:justify-start lg:pt-0">
          <h1 className="text-4xl leading-none font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Logo & Branding
          </h1>
        </div> */}

        <div className="absolute right-0 hidden w-full lg:block lg:max-w-200 xl:max-w-250">
          <img
            src="/images/bg_images/logo_and_branding.webp"
            className="h-full w-full object-contain"
            alt="robot-image"
          />
        </div>
        <div className="absolute -bottom-5 mx-auto block w-full max-w-100 sm:-bottom-27 sm:max-w-150 md:-bottom-35 md:max-w-190 lg:hidden">
          <img
            src="/images/bg_images/logo_and_branding.webp"
            className="h-full w-full object-contain"
            alt="robot-image"
          />
        </div>

        <div className="z-10 flex h-full justify-center pt-25 sm:pt-15 md:pt-22 lg:items-center lg:justify-start lg:pt-0">
          {/* <h1 className="text-4xl leading-none font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[10rem] 2xl:text-9xl"> */}
          {/* <h1 className="text-[60px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[150px] xl:text-[180px]"> */}
          <h1 className="text-4xl leading-none font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Logo &  <br className="hidden lg:block" />
            Branding
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
          <button className="button-gradient">Have a Project</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
