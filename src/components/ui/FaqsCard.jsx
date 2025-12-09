export default function FaqsCard({
  question,
  answer,
  extraClass,
  isActive = false,
}) {
  if (!isActive) {
    return (
      <div className="flex justify-between flex-row w-full items-start gap-5 glass card-gradient p-5 rounded-xl max-w-[760px]">
        <div className="flex flex-col gap-5 w-full">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
            What services do you offer?
          </h3>
        </div>

        <div className="p-px rounded-lg bg-linear-to-t from-[#51D1F4] to-[#74288F]">
          <div className=" rounded-[calc(0.5rem-1px)]">
            <button className="bg-hero-combo rounded-[calc(0.5rem-1px)] p-3 rotate-180">
              <img
                className="h-4 w-5 rotate-270"
                src="/images/icons/chevron.svg"
                alt="chevron"
                
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row items-start gap-5 bg-hero-combo p-5 rounded-xl max-w-[760px]">
      <div className="flex flex-col gap-5">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">What services do you offer?</h3>
        <p className="font-light">
          We provide branding, web and UI/UX design, social media content, and
          custom creative solutions for digital and print.
        </p>
      </div>

      <div className="p-px rounded-lg bg-linear-to-t from-[#51D1F4] to-[#74288F]">
        <div className=" rounded-[calc(0.5rem-1px)]">
          <button className="rounded-[calc(0.5rem-1px)] bg-white p-3">
            <img
              className="h-4 w-7 object-contain"
              src="/images/icons/chev_up.svg"
              alt="chevron"
              
            />
          </button>
        </div>
      </div>
    </div>
  );
}
