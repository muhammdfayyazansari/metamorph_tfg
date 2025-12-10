// import ServiceCard from "../ui/ServiceCard";

import Gallery from './Gallery'

const Services = () => {

  return (
    <div className="relative flex w-full flex-col py-10 lg:pt-20 mt-[calc(-100vh)]">
      <div className="absolute top-0 -left-80 md:h-190 md:w-190">
        <img className="object-contain" src="/images/service_bg.webp" />
      </div>
      <div className="flex w-full flex-col items-center gap-10 pt-10">
        <div className="capitalize">
          <h2 className="-mb-5 pl-11 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-20 sm:text-[30px] md:-mb-10 md:pl-25 md:text-[40px] lg:-mb-13 lg:pl-30 lg:text-[55px]">
            Logos &
          </h2>
          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
            Branding
          </h1>
        </div>

        <Gallery />

        <div className="flex w-full items-center justify-center">
          <button className="button-gradient">View more</button>
        </div>
      </div>  
    </div>
  )
}

export default Services
