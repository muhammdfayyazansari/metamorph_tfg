import { useState } from 'react'
import Services from './Services'
import ScrollReveal from '../../../components/animations/ScrollReveal'
import { Link } from 'react-router-dom'

const OtherCaseStudies = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  return (
    <>
      <div className="relative flex w-full flex-col">
        <Services />
        <div className="absolute top-0 right-0 flex h-full w-full items-center justify-end self-end lg:pt-48">
          <div className="relative h-[500px] w-[350px] lg:h-[1000px] lg:w-[700px]">
            <img
              className="absolute right-0 h-full object-contain lg:bottom-0"
              src="/images/bg_images/faqs_bg.webp"
            />
          </div>
        </div>

        {/* dimension div */}
        <ScrollReveal>
          <div className="combo-gradient-opacity z-10 flex flex-col items-center gap-16 p-16 py-20 pt-48 capitalize">
            <div className="capitalize">
              <h2 className="-mb-5 pl-20 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-30 sm:text-[30px] md:-mb-10 md:pl-40 md:text-[40px] lg:-mb-13 lg:pl-50 lg:text-[55px]">
                Enter the Next
              </h2>

              <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
                Dimension
              </h1>
              <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">
                of Design
              </h2>
            </div>
            <div className="flex w-full justify-center">
              <div
                onMouseEnter={() => setIsButtonHovered((prev) => !prev)}
                onMouseLeave={() => setIsButtonHovered((prev) => !prev)}
                className={`cursor-pointer rounded-2xl px-5 py-4 ${isButtonHovered ? `bg-white` : `bg-gradient-two`}`}
              >
                <Link to="/contact" className={`${isButtonHovered ? `text-clip-two` : `text-white`} cursor-pointer text-xl font-semibold`}>Let's Morph</Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  )
}

export default OtherCaseStudies
