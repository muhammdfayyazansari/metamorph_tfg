export default function FaqsCard({
  question,
  answer,
  extraClass,
  isActive = false,
}) {
  if (!isActive) {
    return (
      <div className="glass card-gradient flex w-full max-w-[760px] flex-row items-start justify-between gap-5 rounded-xl p-5">
        <div className="flex w-full flex-col gap-5">
          <h3 className="text-lg font-semibold sm:text-xl lg:text-2xl">
            What services do you offer?
          </h3>
        </div>

        <div className="gradient-border rotate-180 rounded-[13.8px] p-px">
          <button className="bg-hero-combo rotate-180 rounded-[13.8px] p-3">
            <img
              className="h-4 w-5 rotate-270"
              src="/images/icons/chevron.svg"
              alt="chevron"
            />
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-hero-combo flex max-w-[760px] flex-row items-start gap-5 rounded-xl p-5">
      <div className="flex flex-col gap-5">
        <h3 className="text-lg font-semibold sm:text-xl lg:text-2xl">
          What services do you offer?
        </h3>
        <p className="font-light">
          We provide branding, web and UI/UX design, social media content, and
          custom creative solutions for digital and print.
        </p>
      </div>

      <div className="gradient-border rotate-180 rounded-[13.8px] p-px">
        {/* <div className="rounded-[calc(0.5rem-1px)]"> */}
        {/* <button className="rounded-[calc(0.5rem-1px)] bg-white p-3"> */}
        
          <button className="rounded-[13.8px] bg-white p-3">
            <img
              className="h-4 w-7 object-contain"
              src="/images/icons/chev_up.svg"
              alt="chevron"
            />
          </button>
        
      </div>
    </div>
  )
}
