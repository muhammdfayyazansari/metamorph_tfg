import { useEffect, useState } from 'react'
import FaqsCard from './ui/FaqsCard'
import ScrollReveal from './animations/ScrollReveal'
import { Link } from 'react-router-dom'

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState([])
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const questions = [
    { 
      question: 'What is a "Custom Store"?',
      answer: "A custom store is a fully-branded digital storefront we design and build from scratch. Unlike generic templates, it's tailored to your unique brand identity and optimized for high-conversion performance."
    },
    { 
      question: 'Do you handle both UI/UX design and development?',
      answer: 'Yes, we provide a complete end-to-end solution. Our team handles everything from the initial strategy and high-fidelity UI/UX design to the final development and launch of your platform.'
    },
    { 
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, but a standard brand identity or custom storefront typically takes between 4 to 8 weeks from kickoff to final delivery.'
    },
    { 
      question: 'Who is your primary target audience?',
      answer: 'We specialize in working with ambitious startups, e-commerce brands, and digital-first companies looking to differentiate themselves with high-end, bespoke design and technology.'
    },
    { 
      question: 'How can I get started with Metamorph?',
      answer: "It's simple! You can reach out via our contact form or Telegram. We'll schedule a discovery call to discuss your goals, provide a custom proposal, and start our \"morphing\" process."
    },
  ]
  useEffect(() => {
    const hovered = questions.map((item) => 0)
    setIsHovered(hovered)
  }, [])
  return (
    <div className="relative flex w-full flex-col overflow-hidden">
      <div className="absolute top-50 -right-100 h-[1006px] w-[730px] lg:top-30 lg:h-[1207px] lg:w-[876px] xl:top-10 xl:h-[1358px] xl:w-[985px] 2xl:-top-20 2xl:h-[1509px] 2xl:w-[1095px]">
        <img
          className="h-full w-full object-contain"
          src="/images/bg_images/faqs_bg_1.webp"
        />
      </div>
      <div className="z-10 flex w-full flex-col items-center gap-32 p-16 py-10">
        <div className="capitalize">
          <h2 className="-mb-2 pl-10 text-[20px] leading-none tracking-[-0.04em] sm:-mb-4 sm:pl-20 sm:text-[30px] md:-mb-5 md:pl-[90px] md:text-[40px] lg:-mb-6 lg:pl-[100px] lg:text-[55px]">
            frequently asked
          </h2>

          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
            questions
          </h1>
        </div>
      </div>

      <div className="z-10 flex w-full flex-col gap-5 p-6 lg:px-16 lg:py-8">
        {questions.map((item, index) => {
          return (
            <FaqsCard
              isActive={activeIndex === index}
              key={index}
              itemIndex={index}
              title={item.question}
              answer={item.answer}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              isHovered={isHovered[index]}
              setIsHovered={setIsHovered}
            />
          )
        })}
      </div>

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
            <Link to="/contact"
              onMouseEnter={() => setIsButtonHovered((prev) => !prev)}
              onMouseLeave={() => setIsButtonHovered((prev) => !prev)}
              className={`cursor-pointer rounded-2xl px-5 py-4 ${isButtonHovered ? `bg-gradient-two` : `bg-white`}`}
            >
              {/* <button
                className={`${isButtonHovered ? `text-white` : `text-clip-two`} cursor-pointer text-xl font-semibold`}
              >
                Let's Morph
              </button> */}
              <span className={`${isButtonHovered ? `text-white` : `text-clip-two`} cursor-pointer text-xl font-semibold`}>Let's Morph</span>

            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}

export default Faqs
