// import ServiceCard from "../ui/ServiceCard";

import Gallery from './Gallery'

const Services = () => {
  return (
    <div className="relative flex w-full flex-col py-10 lg:pt-20">
      <div className="absolute top-0 right-0 z-0 flex justify-end md:h-200 md:w-200">
        <img
          className="h-full object-contain"
          src="/images/bg_images/logos_branding_bg.webp"
        />
      </div>

      <div className="absolute -bottom-30 -left-80 md:h-190 md:w-190">
        <img className="object-contain" src="/images/service_bg.webp" />
      </div>

      <div className="absolute -top-150 left-0 md:h-190 md:w-190">
        {/* <img className="object-contain" src="/images/service_bg.webp" /> */}
        <img className="w-full object-contain" src="/images/ellipse.webp" />
      </div>

      <div className="z-10 flex w-full flex-col items-center gap-10 pt-10">
        <div className="capitalize">
          <h2 className="-mb-5 pl-11 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-20 sm:text-[30px] md:-mb-10 md:pl-25 md:text-[40px] lg:-mb-13 lg:pl-30 lg:text-[55px]">
            Logos &
          </h2>
          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
            Branding
          </h1>
        </div>

        <Gallery />

        {/* <div className="flex w-full items-center justify-center">
          <button className="button-gradient"><span>View more</span></button>
        </div> */}

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
    </div>
  )
}

export default Services
