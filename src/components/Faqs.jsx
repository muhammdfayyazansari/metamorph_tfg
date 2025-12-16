import { useEffect, useState } from 'react'
import FaqsCard from './ui/FaqsCard'

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState([])

  const questions = [
    { question: 'What services do you offer?' },
    { question: 'What services do you offer?' },
    { question: 'What services do you offer?' },
    { question: 'What services do you offer?' },
    { question: 'What services do you offer?' },
  ]
   useEffect(()=>{
    const hovered = questions.map(item => 0);
    setIsHovered(hovered);
  },[])
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
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              isHovered={isHovered[index]}
              setIsHovered={setIsHovered}
            />
          )
        })}
      </div>

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
          <div className="rounded-2xl bg-white px-5 py-4">
            <button className="bg-[linear-gradient(93deg,#51D1F4_-27.2%,#D30A8C_77.56%)] bg-clip-text text-xl font-semibold text-transparent">
              Let's Morph
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs
