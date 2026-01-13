const Hero = () => {
  return (
    <div className="relative z-10 flex h-auto md:h-100 w-full pt-30 pb-10 md:pt-0 md:pb-0 2xl:h-120">
      <div className="relative flex items-end h-full w-full overflow-hidden p-6 lg:py-8 lg:pl-16">
        <div className="flex flex-col space-y-2 overflow-hidden text-white md:space-y-4 2xl:space-y-6">
          {/* titles with subtitles */}
          <div className="flex flex-col space-y-2 text-white 2xl:space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl 2xl:text-6xl">
Bit hoster            </h1>
            <h3 className="text-lg font-medium tracking-tight md:text-2xl 2xl:text-3xl">
Powering Digital Infrastructure with Reliable Server Hosting            </h3>
            <p className="sm:text-md text-sm font-light tracking-tight text-white/50 md:pr-20 xl:text-lg">
Bit Hoster was built to deliver fast, secure, and scalable server solutions for businesses, developers, and growing platforms. With a focus on uptime, performance, and simplicity, Bit Hoster provides hosting services that users can rely on—whether for websites, applications, or enterprise workloads.            </p>
            <p className="sm:text-md text-sm font-light tracking-tight text-white/50 md:pr-20 xl:text-lg">
By combining optimized server architecture with a clean management experience, Bit Hoster enables clients to deploy, scale, and manage their infrastructure confidently, without unnecessary complexity or hidden costs.            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
