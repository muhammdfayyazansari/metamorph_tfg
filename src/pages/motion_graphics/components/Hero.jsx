import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="div-bottom-gradient relative z-10 flex h-120 w-full items-center justify-center md:h-150 2xl:h-200">
      <div className="relative flex h-full w-full flex-col-reverse items-center justify-end overflow-hidden lg:flex-row-reverse lg:py-8 lg:pl-16">
        {/* testing  for large and above screen*/}
        <div className="absolute top-0 right-0 hidden w-full lg:-bottom-10 lg:block lg:max-w-150 xl:-bottom-25 xl:-mt-20 xl:max-w-200">
          <img
            src="/images/bg_images/motion_graphics.webp"
            className="h-full w-full object-contain"
            alt="robot-image"
          />
        </div>
        <div className="absolute -bottom-10 mx-auto block w-full max-w-100 sm:-bottom-18 sm:max-w-120 md:-bottom-20 md:max-w-140 lg:hidden">
          <img
            src="/images/bg_images/motion_graphics.webp"
            className="h-full w-full object-contain"
            alt="robot-image"
          />
        </div>

        <div className="z-10 flex h-full justify-center pt-25 sm:pt-15 md:pt-22 lg:items-center lg:justify-start lg:pt-0">
          {/* <h1 className="text-4xl leading-none font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[10rem] 2xl:text-9xl"> */}
          {/* <h1 className="text-[60px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[150px] xl:text-[180px]"> */}
          <h1 className="text-4xl leading-none font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Motion <br className="hidden lg:block" />
            Graphics
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
          <Link to={`/contact`} className="button-glass">Contact</Link>
          <button className="button-gradient"><span>Have a Project</span></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
