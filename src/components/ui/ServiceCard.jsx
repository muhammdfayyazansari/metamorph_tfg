import { forwardRef } from 'react'

const ServiceCard = forwardRef(
  ({ icon, title, extraClass, isActive = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        // className={`-ml-5 flex w-70 -rotate-12 cursor-pointer flex-col items-start gap-10 rounded-2xl p-5 transition-transform duration-300 ease-in-out lg:w-52 ${isActive ? 'bg-hero-combo -translate-y-10 lg:-translate-y-20' : 'glass card-gradient'} ${extraClass}`}
        className={`-ml-3 flex w-70 -rotate-12 cursor-pointer flex-col items-start gap-10 rounded-2xl p-5 lg:w-52 card-gradient  ${extraClass}`}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
          <img src={icon} alt="" className="h-8 w-8" />
        </div>

        <h3 className="text-lg leading-snug font-light text-white">{title}</h3>
      </div>
    )
  }
)

export default ServiceCard
