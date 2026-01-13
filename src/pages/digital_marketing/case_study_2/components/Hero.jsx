const Hero = () => {
  return (
    <div className="relative z-10 flex h-100 w-full  2xl:h-120">
      <div className="relative flex items-end h-full w-full overflow-hidden p-6 lg:py-8 lg:pl-16">
        <div className="flex flex-col space-y-2 overflow-hidden text-white md:space-y-4 2xl:space-y-6">
          {/* titles with subtitles */}
          <div className="flex flex-col space-y-2 text-white 2xl:space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl 2xl:text-6xl">
              Case Study
            </h1>
            <h3 className="text-lg font-medium tracking-tight md:text-2xl 2xl:text-3xl">
              Transforming Brands Through High-Impact Design & Development
            </h3>
            <p className="sm:text-md text-sm font-light tracking-tight text-white/50 md:pr-20 xl:text-lg">
              Alpha Web Studio reimagined digital experiences through strategic UI/UX design and scalable web development, helping businesses convert visitors into customers and build strong, future-ready platforms.
            </p>
            <p className="sm:text-md text-sm font-light tracking-tight text-white/50 md:pr-20 xl:text-lg">
By aligning brand identity with performance-driven design and clean, optimized code, we delivered measurable growth without increasing operational or marketing overhead.            </p>
          </div>

          <div className="flex gap-4 text-white sm:gap-15 2xl:gap-20">
            <div className="flex flex-col text-white">
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl 2xl:text-7xl">
                4x
              </h1>
              <p className="text-xs font-light tracking-tight sm:text-sm">
                Increase in number of leads
              </p>
            </div>
            <div className="flex flex-col text-white">
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl 2xl:text-7xl">
                30%
              </h1>
              <p className="text-xs font-light tracking-tight sm:text-sm">
                Less money spent on ads
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
