import { Link } from "react-router-dom"

const DigitalMarketing = () => {
  return (
    <div className="relative flex w-full flex-col py-10 mb-[50px]">
      <div className="absolute top-40 right-0 md:h-160 md:w-160">
      </div>
      
      <div className="flex w-full flex-col items-center gap-10 pt-10">
        {/* SECTION TITLE */}
        <div className="capitalize text-center relative pointer-events-none">
          <h2 className="lg:ms-[-320px] lg:mb-[-50px] ms-[-130px] text-[20px] leading-none tracking-[-0.04em] sm:text-[30px] md:text-[40px] lg:text-[55px]">
            Digital
          </h2>
          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
            Marketing
          </h1>
        </div>

        {/* CONTENT CONTAINER */}
        <div className="z-10 flex w-full max-w-5xl flex-col gap-8 p-6 lg:px-0">
          
          {/* CASE STUDIES WRAPPER */}
          <div className="flex flex-col gap-8">
            
            {/* CARD 1: STREAMIFY */}
            <div className="">
              <div className="mb-8 w-full overflow-hidden rounded-2xl">
                <img 
                  src="/images/digitalMarketingCS/serviceMarketingImg.svg" 
                  alt="Streamify Case Study" 
                  className="w-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>

        {/* VIEW MORE BUTTON */}
        <div className="mt-6 flex w-full items-center justify-center">
          <Link
            to="/digital-marketing"
            className="button-gradient z-20 cursor-pointer"
          >
            <span>View more</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DigitalMarketing
