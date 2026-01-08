import { Link } from "react-router-dom"
import ScrollReveal from "../animations/ScrollReveal"

const CustomStore = () => {
  return (
    <div className="relative flex w-full flex-col py-20 pb-40 lg:pb-60">
      {/* Background Ellipse subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:h-250 md:w-250 opacity-20 pointer-events-none">
        <img className="object-contain h-full w-full" src="/images/ellipse.webp" alt="" />
      </div>

      <div className="flex w-full flex-col items-center gap-10">
        {/* Title Block */}
        <ScrollReveal direction="bottom">
          <div className="flex flex-col items-center capitalize">
            <h2 className="text-[20px] mb-[-60px] ms-[60px] leading-none tracking-[-0.04em] sm:text-[30px] md:text-[40px] lg:text-[55px] font-light">
              Custom
            </h2>
            <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
              Store
            </h1>
          </div>
        </ScrollReveal>

        {/* Large Image Card */}
        <div className="z-10 flex w-full items-center justify-center overflow-hidden p-6 lg:px-10">
          <ScrollReveal direction="bottom" delay={0.2} className="w-full max-w-[1550px]">
            <div className={`glass card-gradient flex items-center justify-center rounded-2xl p-4 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-white/5`}>
              <img
                className="h-full w-full object-contain hover:scale-[1.02] transition-transform duration-500"
                src="/images/digitalMarketingCS/invaderHomeImg.svg"
                alt="Invader Store Mockup"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* View More Button */}
        <div className="flex w-full items-center justify-center mt-5">
          <ScrollReveal direction="bottom" delay={0.4}>
            <Link
              to="/custom-stores"
              className="button-gradient z-20 cursor-pointer shadow-[0_0_20px_rgba(222,20,255,0.3)] hover:shadow-[0_0_35px_rgba(222,20,255,0.5)] transition-shadow duration-300"
            >
              <span className="text-lg md:text-xl px-4">View more</span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

export default CustomStore
