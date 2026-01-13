import PeopleCard from '../ui/PeopleCard'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const People = () => {
  const topTrackRef = useRef(null)
  const bottomTrackRef = useRef(null)

  // ✅ NEW: GSAP tween refs for pause / resume
  const topTweenRef = useRef(null)
  const bottomTweenRef = useRef(null)

  // ✅ Keep your data (unchanged)
  const peopleWithImgSrc = [
    {
      img_src: '/images/people_1.webp',
      title: 'Daniel R.',
      subTitle: ' — United States',
      para:
        'Working with Metamorph Solutions was a smooth and well-organized experience. Communication was clear, timelines were respected, and the quality of work exceeded our expectations. They delivered a solution that feels both functional and visually refined.',
      isFlip: false,
    },
    {
      img_src: '/images/people_2.webp',
      title: 'Aisha K.',
      subTitle: ' — United States',
      para:
        'The team brought a great balance of creativity and technical expertise to our project. Every detail was carefully considered, and the outcome feels professional without being overcomplicated. We’ve received very positive feedback since the launch.',
      isFlip: true,
    },
  ]

  const peopleWithImgSrc2 = [
    {
      img_src: '/images/people_2.webp',
      title: 'Sophia M.',
      subTitle: ' — United States',
      para:
        'Metamorph Solutions truly understood what we needed from the start. Their team was thoughtful, responsive, and detail-oriented throughout the entire process. The final result felt polished, modern, and perfectly aligned with our brand vision.',
      isFlip: true,
    },
    {
      img_src: '/images/people_1.webp',
      title: 'Michael T.',
      subTitle: ' — United States',
      para:
        'Metamorph Solutions delivered exactly what they promised. The process was transparent, collaborative, and efficient. It’s clear they care about long-term results, not just delivering a project and moving on.',
      isFlip: false,
    },
  ]

  useEffect(() => {
    const topTrack = topTrackRef.current
    const bottomTrack = bottomTrackRef.current

    if (!topTrack || !bottomTrack) return

    gsap.killTweensOf(topTrack)
    gsap.killTweensOf(bottomTrack)

    const getSetWidth = (el) => el.scrollWidth / 2

    const topWidth = getSetWidth(topTrack)
    const bottomWidth = getSetWidth(bottomTrack)

    // ✅ TOP ROW (right → left)
    gsap.set(topTrack, { x: 0 })
    topTweenRef.current = gsap.to(topTrack, {
      x: -topWidth,
      duration: 25,
      ease: 'none',
      repeat: -1,
    })

    // ✅ BOTTOM ROW (left → right)
    gsap.set(bottomTrack, { x: -bottomWidth })
    bottomTweenRef.current = gsap.to(bottomTrack, {
      x: 0,
      duration: 25,
      ease: 'none',
      repeat: -1,
    })

    return () => {
      gsap.killTweensOf(topTrack)
      gsap.killTweensOf(bottomTrack)
    }
  }, [])

  return (
    <div className="flex flex-col gap-5 overflow-hidden lg:py-8">
      {/* ✅ HEADING (unchanged) */}
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

      {/* ✅ ROW 1 (pause on hover) */}
      <div
        className="hide-scrollbar w-full overflow-hidden pt-10"
        onMouseEnter={() => topTweenRef.current?.pause()}
        onMouseLeave={() => topTweenRef.current?.resume()}
      >
        <div ref={topTrackRef} className="flex w-max gap-10">
          {peopleWithImgSrc.map((item, index) => (
            <PeopleCard key={`top-a-${index}`} {...item} />
          ))}
          {peopleWithImgSrc.map((item, index) => (
            <PeopleCard key={`top-b-${index}`} {...item} />
          ))}
        </div>
      </div>

      {/* ✅ ROW 2 (pause on hover) */}
      <div
        className="hide-scrollbar w-full overflow-hidden"
        onMouseEnter={() => bottomTweenRef.current?.pause()}
        onMouseLeave={() => bottomTweenRef.current?.resume()}
      >
        <div ref={bottomTrackRef} className="flex w-max gap-10">
          {peopleWithImgSrc2.map((item, index) => (
            <PeopleCard key={`bottom-a-${index}`} {...item} />
          ))}
          {peopleWithImgSrc2.map((item, index) => (
            <PeopleCard key={`bottom-b-${index}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default People






// import PeopleCard from '../ui/PeopleCard'
  // import { useEffect, useRef, useState } from 'react'
  // import { gsap } from 'gsap'
  // const People = () => {
  //   const containerRef = useRef(null)
  //   const RevContainerRef = useRef(null)

  //   const [isAutoPlay, setIsAutoPlay] = useState(true)

  //   // 1. Create state to track the hover status
  //   const [isHovered, setIsHovered] = useState({ left: false, right: false })

  //   // 2. Define the image sources
  //   const defaultSrc = '/images/icons/chevron.svg'
  //   const hoverSrc = '/images/icons/chev_up.svg'
  //   // const [activeIndex, setActiveIndex] = useState({
  //   //   first: 0,
  //   //   second: 1,
  //   // })
  //   const [activeIndex, setActiveIndex] = useState(0)
  //   const peopleWithImgSrc = [
  //     {
  //       img_src: '/images/people_1.webp',
  //       title: 'Sophia M.',
  //       subTitle: ' — United States',
  //       para: 'We offer comprehensive design and development services to help businesses establish a strong online presence and deliver exceptional digital experiences. Our expert team of designers, developers, and strategists work collaboratively to create visually stunning, user-friendly, and technically robust solutions that align with your business goals.',
  //       isFlip: false,
  //     },
  //     {
  //       img_src: '/images/people_2.webp',
  //       title: 'Sophia M.',
  //       subTitle: ' — United States',
  //       para: 'We offer comprehensive design and development services to help businesses establish a strong online presence and deliver exceptional digital experiences. Our expert team of designers, developers, and strategists work collaboratively to create visually stunning, user-friendly, and technically robust solutions that align with your business goals.',
  //       isFlip: true,
  //     },
  //   ]
  //   const peopleWithImgSrc2 = [
  //     {
  //       img_src: '/images/people_2.webp',
  //       title: 'Sophia M.',
  //       subTitle: ' — United States',
  //       para: 'We offer comprehensive design and development services to help businesses establish a strong online presence and deliver exceptional digital experiences. Our expert team of designers, developers, and strategists work collaboratively to create visually stunning, user-friendly, and technically robust solutions that align with your business goals.',
  //       isFlip: true,
  //     },
  //     {
  //       img_src: '/images/people_1.webp',
  //       title: 'Sophia M.',
  //       subTitle: ' — United States',
  //       para: 'We offer comprehensive design and development services to help businesses establish a strong online presence and deliver exceptional digital experiences. Our expert team of designers, developers, and strategists work collaboratively to create visually stunning, user-friendly, and technically robust solutions that align with your business goals.',
  //       isFlip: false,
  //     },
  //   ]

  //   const handleNext = () => {
  //     animateSwipe(-150, 150, () => {
  //       setActiveIndex((prev) => (prev + 1) % peopleWithImgSrc.length)
  //     })
  //   }

  //   const handlePrev = () => {
  //     animateSwipe(150, -150, () => {
  //       setActiveIndex((prev) =>
  //         prev === 0 ? peopleWithImgSrc.length - 1 : prev - 1
  //       )
  //     })
  //   }

  //   const animateSwipe = (direction, revDirection, onComplete) => {
  //     gsap.to(containerRef.current, {
  //       x: direction,
  //       opacity: 0,
  //       duration: 0.4,
  //       ease: 'power2.in',
  //       onComplete: () => {
  //         onComplete()

  //         gsap.fromTo(
  //           containerRef.current,
  //           { x: -direction, opacity: 0 },
  //           {
  //             x: 0,
  //             opacity: 1,
  //             duration: 0.8,
  //             ease: 'power3.out', // fast → slow
  //           }
  //         )
  //       },
  //     })
  //     gsap.to(RevContainerRef.current, {
  //       x: revDirection,
  //       opacity: 0,
  //       duration: 0.4,
  //       ease: 'power2.in',
  //       onComplete: () => {
  //         onComplete()

  //         gsap.fromTo(
  //           RevContainerRef.current,
  //           { x: -revDirection, opacity: 0 },
  //           {
  //             x: 0,
  //             opacity: 1,
  //             duration: 0.8,
  //             ease: 'power3.out', // fast → slow
  //           }
  //         )
  //       },
  //     })
  //   }
  //   // Auto-play effect
  //   useEffect(() => {
  //     if (!isAutoPlay) return

  //     const interval = setInterval(() => {
  //       handleNext()
  //     }, 5000)

  //     return () => clearInterval(interval)
  //   }, [isAutoPlay, activeIndex, peopleWithImgSrc.length])
  //   // Pause auto-play when user manually navigates
  // const handleManualNext = () => {
  //   setIsAutoPlay(false);
  //   handleNext();
    
  //   // Resume auto-play after 10 seconds
  //   setTimeout(() => {
  //     setIsAutoPlay(true);
  //   }, 10000); // 10000ms = 10 seconds
  // }

  //   return (
  //     <div className="flex flex-col gap-10 overflow-hidden p-6 lg:px-16 lg:py-8">
  //       <div className="flex flex-col items-center capitalize">
  //         <div className="capitalize">
  //           <h2 className="-mb-5 pl-11 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-21 sm:text-[30px] md:-mb-10 md:pl-24 md:text-[40px] lg:-mb-13 lg:pl-29 lg:text-[55px]">
  //             what
  //           </h2>

  //           <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
  //             people
  //           </h1>
  //           <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">
  //             say
  //           </h2>
  //         </div>
  //       </div>

  //       <div
  //         ref={containerRef}
  //         className="hide-scrollbar flex w-full flex-col gap-10 self-center overflow-hidden pt-10"
  //       >
  //         {peopleWithImgSrc.slice(0, 1).map((item) => (
  //           <PeopleCard {...peopleWithImgSrc[activeIndex]} />
  //         ))}
  //       </div>
  //       <div
  //         ref={RevContainerRef}
  //         className="hide-scrollbar flex w-full flex-col gap-10 self-center overflow-hidden pt-10"
  //       >
  //         {peopleWithImgSrc2.slice(1).map((item) => (
  //           <PeopleCard {...peopleWithImgSrc2[activeIndex]} />
  //         ))}
  //       </div>

  //       <div className="flex w-full justify-center gap-3">
  //         <div
  //           // 3. Attach event handlers to update state
  //           onMouseEnter={() =>
  //             setIsHovered((prev) => ({ ...prev, left: !prev['left'] }))
  //           }
  //           onMouseLeave={() =>
  //             setIsHovered((prev) => ({ ...prev, left: !prev['left'] }))
  //           }
  //           className="gradient-border rotate-180 cursor-pointer rounded-2xl p-0.5"
  //         >
  //           <div className="cursor-pointer rounded-2xl">
  //             <button
  //               onClick={handlePrev} // Hooked to state update
  //               // 4. Conditionally set the background class based on state
  //               className={` ${
  //                 isHovered['left'] ? 'bg-white' : 'bg-hero-combo'
  //               } cursor-pointer rounded-2xl p-3`}
  //             >
  //               <img
  //                 className={`h-4 w-5 ${isHovered['left'] ? 'rotate-90' : ''}`}
  //                 // 5. Conditionally set the src based on state
  //                 src={isHovered['left'] ? hoverSrc : defaultSrc}
  //                 alt="Next"
  //               />
  //             </button>
  //           </div>
  //         </div>

  //         <div
  //           // 3. Attach event handlers to update state
  //           onMouseEnter={() =>
  //             setIsHovered((prev) => ({ ...prev, right: !prev['right'] }))
  //           }
  //           onMouseLeave={() =>
  //             setIsHovered((prev) => ({ ...prev, right: !prev['right'] }))
  //           }
  //           className="gradient-border cursor-pointer rounded-2xl p-0.5"
  //         >
  //           <div className="cursor-pointer rounded-2xl">
  //             <button
  //               // onClick={handleNext} // Hooked to state update
  //               onClick={handleManualNext} // Hooked to state update
  //               // 4. Conditionally set the background class based on state
  //               className={` ${
  //                 isHovered['right'] ? 'bg-white' : 'bg-hero-combo'
  //               } cursor-pointer rounded-2xl p-3`}
  //             >
  //               <img
  //                 className={`h-4 w-5 ${isHovered['right'] ? 'rotate-90' : ''}`}
  //                 // 5. Conditionally set the src based on state
  //                 src={isHovered['right'] ? hoverSrc : defaultSrc}
  //                 alt="Next"
  //               />
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  // export default People
