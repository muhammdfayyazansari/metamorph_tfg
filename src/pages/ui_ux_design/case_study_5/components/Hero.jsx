const Hero = () => {
  return (
    <div className="relative z-10 flex h-auto md:h-100 w-full pt-30 pb-10 md:pt-0 md:pb-0 2xl:h-120">
      <div className="relative flex items-end h-full w-full overflow-hidden p-6 lg:py-8 lg:pl-16">
        <div className="flex flex-col space-y-2 overflow-hidden text-white md:space-y-4 2xl:space-y-6">
          {/* titles with subtitles */}
          <div className="flex flex-col space-y-2 text-white 2xl:space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl 2xl:text-6xl">
Sim Verified            </h1>
            <h3 className="text-lg font-medium tracking-tight md:text-2xl 2xl:text-3xl">
Enabling Secure & Reliable SMS Verification at Scale            </h3>
            <p className="sm:text-md text-sm font-light tracking-tight text-white/50 md:pr-20 xl:text-lg">
SIM VERIFIED was built to provide fast, dependable SMS verification solutions for businesses and individuals who require secure account authentication. The platform focuses on accuracy, speed, and availability—ensuring verification codes are delivered reliably across multiple services and regions.            </p>
            <p className="sm:text-md text-sm font-light tracking-tight text-white/50 md:pr-20 xl:text-lg">
By combining a streamlined user experience with a robust verification infrastructure, SIM VERIFIED helps reduce fraud, improve onboarding success, and simplify phone-based authentication without compromising security or privacy.            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
