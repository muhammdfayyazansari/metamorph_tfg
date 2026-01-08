const Hero = () => {
  return (
    <div className="relative z-10 flex h-auto md:h-100 w-full pt-30 pb-10 md:pt-0 md:pb-0 2xl:h-120">
      <div className="relative flex items-end h-full w-full overflow-hidden p-6 lg:py-8 lg:pl-16">
        <div className="flex flex-col space-y-2 overflow-hidden text-white md:space-y-4 2xl:space-y-6">
          {/* titles with subtitles */}
          <div className="flex flex-col space-y-2 text-white 2xl:space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl 2xl:text-6xl">
Best of Casino            </h1>
            <h3 className="text-lg font-medium tracking-tight md:text-2xl 2xl:text-3xl">
Creating a Smarter, Safer Online Betting Experience            </h3>
            <p className="sm:text-md text-sm font-light tracking-tight text-white/50 md:pr-20 xl:text-lg">
              Best of Casino was built as a modern betting platform designed for players who value transparency, performance, and fair play. The goal was to offer a clean, intuitive experience where users can explore games, place bets confidently, and manage their winnings with ease.
            </p>
            <p className="sm:text-md text-sm font-light tracking-tight text-white/50 md:pr-20 xl:text-lg">
By focusing on user trust, fast performance, and a streamlined betting flow, Best of Casino delivers an engaging environment where entertainment meets real earning potential—without unnecessary complexity or friction.            </p>
          </div>

          {/* <div className="flex gap-4 text-white sm:gap-15 2xl:gap-20">
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
                47%
              </h1>
              <p className="text-xs font-light tracking-tight sm:text-sm">
                Less money spent on ads
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
