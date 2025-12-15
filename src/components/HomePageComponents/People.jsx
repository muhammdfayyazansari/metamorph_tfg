import PeopleCard from '../ui/PeopleCard'
import { useRef, useState } from 'react'
import { gsap } from 'gsap'
const People = () => {
  const containerRef = useRef(null)
  const RevContainerRef = useRef(null)
  // const [activeIndex, setActiveIndex] = useState({
  //   first: 0,
  //   second: 1,
  // })
  const [activeIndex, setActiveIndex] = useState(0)
  const peopleWithImgSrc = [
    {
      img_src: '/images/people_1.webp',
      title: 'Sophia M.',
      subTitle: ' — United States',
      para: 'We offer comprehensive design and development services to help businesses establish a strong online presence and deliver exceptional digital experiences. Our expert team of designers, developers, and strategists work collaboratively to create visually stunning, user-friendly, and technically robust solutions that align with your business goals.',
      isFlip: false,
    },
    {
      img_src: '/images/people_2.webp',
      title: 'Sophia M.',
      subTitle: ' — United States',
      para: 'We offer comprehensive design and development services to help businesses establish a strong online presence and deliver exceptional digital experiences. Our expert team of designers, developers, and strategists work collaboratively to create visually stunning, user-friendly, and technically robust solutions that align with your business goals.',
      isFlip: true,
    },
  ]
  const peopleWithImgSrc2 = [
    {
      img_src: '/images/people_2.webp',
      title: 'Sophia M.',
      subTitle: ' — United States',
      para: 'We offer comprehensive design and development services to help businesses establish a strong online presence and deliver exceptional digital experiences. Our expert team of designers, developers, and strategists work collaboratively to create visually stunning, user-friendly, and technically robust solutions that align with your business goals.',
      isFlip: true,
    },
    {
      img_src: '/images/people_1.webp',
      title: 'Sophia M.',
      subTitle: ' — United States',
      para: 'We offer comprehensive design and development services to help businesses establish a strong online presence and deliver exceptional digital experiences. Our expert team of designers, developers, and strategists work collaboratively to create visually stunning, user-friendly, and technically robust solutions that align with your business goals.',
      isFlip: false,
    },
  ]

  const handleNext = () => {
    animateSwipe(-150, 150, () => {
      setActiveIndex((prev) => (prev + 1) % peopleWithImgSrc.length)
    })
  }

  const handlePrev = () => {
    animateSwipe(150, -150, () => {
      setActiveIndex((prev) =>
        prev === 0 ? peopleWithImgSrc.length - 1 : prev - 1
      )
    })
  }

  const animateSwipe = (direction, revDirection, onComplete) => {
    gsap.to(containerRef.current, {
      x: direction,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        onComplete()

        gsap.fromTo(
          containerRef.current,
          { x: -direction, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out', // fast → slow
          }
        )
      },
    })
    gsap.to(RevContainerRef.current, {
      x: revDirection,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        onComplete()

        gsap.fromTo(
          RevContainerRef.current,
          { x: -revDirection, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out', // fast → slow
          }
        )
      },
    })
  }

  return (
    <div className="flex flex-col gap-10 overflow-hidden p-6 lg:px-16 lg:py-8">
      <div className="flex flex-col items-center capitalize">
        <div className="capitalize">
          <h2 className="-mb-5 pl-11 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-21 sm:text-[30px] md:-mb-10 md:pl-24 md:text-[40px] lg:-mb-13 lg:pl-29 lg:text-[55px]">
            what
          </h2>

          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
            people
          </h1>
          <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">
            say
          </h2>
        </div>
      </div>

      <div
        ref={containerRef}
        className="hide-scrollbar flex w-full flex-col gap-10 self-center overflow-hidden pt-10"
      >
        {peopleWithImgSrc.slice(0, 1).map((item) => (
          <PeopleCard {...peopleWithImgSrc[activeIndex]} />
        ))}
      </div>
      <div
        ref={RevContainerRef}
        className="hide-scrollbar flex w-full flex-col gap-10 self-center overflow-hidden pt-10"
      >
        {peopleWithImgSrc2.slice(1).map((item) => (
          <PeopleCard {...peopleWithImgSrc2[activeIndex]} />
        ))}
      </div>

      <div className="flex w-full justify-center gap-3">
        {/* <button
          onClick={handlePrev}
          className="bg-hero-combo rotate-180 rounded-xl p-3"
        >
          <img
            className="h-4 w-5"
            src="/images/icons/chevron.svg"
            alt="chevron"
          />
        </button> */}
        {/* <button onClick={handleNext} className="bg-hero-combo rounded-xl p-3">
          <img
            className="h-4 w-5"
            src="/images/icons/chevron.svg"
            alt="chevron"
          />
        </button> */}

        <div className="gradient-border cursor-pointer rounded-2xl p-0.5 rotate-180">
          <div className="cursor-pointer rounded-2xl">
            <button
              onClick={handlePrev} // Hooked to state update
              className="bg-hero-combo cursor-pointer rounded-2xl p-3"
            >
              <img
                className="h-4 w-5"
                src="/images/icons/chevron.svg"
                alt="Next"
              />
            </button>
          </div>
        </div>

        <div className="gradient-border cursor-pointer rounded-2xl p-0.5">
          <div className="cursor-pointer rounded-2xl">
            <button
              onClick={handleNext} // Hooked to state update
              className="bg-hero-combo cursor-pointer rounded-2xl p-3"
            >
              <img
                className="h-4 w-5"
                src="/images/icons/chevron.svg"
                alt="Next"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default People
