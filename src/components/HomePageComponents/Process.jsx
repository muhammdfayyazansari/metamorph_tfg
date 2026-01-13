import { useEffect, useRef, useState } from 'react'
import ProcessCard from '../ui/ProcessCard'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const processWithImgSrc = [
  {
    img_src: '/images/process_1.webp',
    title: 'Initiate the Morph',
    para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
    isFlip: false,
  },
  {
    img_src: '/images/process_2.webp',
    title: 'Visualize & Design',
    para: 'Bring us your boldest ideas. We’ll craft sleek, futuristic visuals that align perfectly with your brand’s mission and forward-thinking identity.',
    isFlip: true,
  },
  {
    img_src: '/images/process_3.webp',
    title: 'Development',
    para: 'Your designs morph into interactive, scalable digital solutions—built to perform, impress, and grow with you.',
    isFlip: false,
  },
  {
    img_src: '/images/process_4.webp',
    title: 'UI/UX Design',
    para: 'We design intuitive interfaces that feel natural, elegant, and conversion-focused.',
    isFlip: false,
  },
  {
    img_src: '/images/process_4.webp',
    title: 'Strategy & Analysis',
    para: 'We dive deep into your target audience and market to build a robust foundation for success.',
    isFlip: true,
  },
  {
    img_src: '/images/process_4.webp',
    title: 'Launch & Iterate',
    para: 'Deployment is just the start. We monitor performance and continuously refine for peak digital excellence.',
    isFlip: false,
  },
]

const STEP_SIZE = 340
const AUTO_SCROLL_DELAY = 2500

const Process = () => {
  const scrollContainerRef = useRef(null)
  const isAnimating = useRef(false)
  const autoScrollRef = useRef(null)

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  /* ----------------------------------------
     Auto Scroll
  ---------------------------------------- */
  const startAutoScroll = () => {
    stopAutoScroll()
    autoScrollRef.current = setInterval(() => {
      scrollNext()
    }, AUTO_SCROLL_DELAY)
  }

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
      autoScrollRef.current = null
    }
  }

  /* ----------------------------------------
     Scroll Helpers
  ---------------------------------------- */
  const updateScrollState = () => {
    const el = scrollContainerRef.current
    if (!el) return

    const maxScroll = el.scrollWidth - el.clientWidth
    setCanScrollPrev(el.scrollLeft > 5)
    setCanScrollNext(el.scrollLeft < maxScroll - 5)
  }

  const scrollNext = () => {
    const el = scrollContainerRef.current
    if (!el || isAnimating.current) return

    stopAutoScroll()

    const maxScroll = el.scrollWidth - el.clientWidth
    let target = el.scrollLeft + STEP_SIZE
    if (target > maxScroll) target = 0

    gsap.to(el, {
      scrollTo: { x: target },
      duration: 0.8,
      ease: 'power2.inOut',
      onStart: () => (isAnimating.current = true),
      onComplete: () => {
        isAnimating.current = false
        updateScrollState()
        startAutoScroll()
      },
    })
  }

  const scrollPrev = () => {
    const el = scrollContainerRef.current
    if (!el || isAnimating.current) return

    stopAutoScroll()

    let target = el.scrollLeft - STEP_SIZE
    if (target < 0) target = 0

    gsap.to(el, {
      scrollTo: { x: target },
      duration: 0.8,
      ease: 'power2.inOut',
      onStart: () => (isAnimating.current = true),
      onComplete: () => {
        isAnimating.current = false
        updateScrollState()
        startAutoScroll()
      },
    })
  }

  /* ----------------------------------------
     Lifecycle
  ---------------------------------------- */
  useEffect(() => {
    updateScrollState()
    startAutoScroll()
    return stopAutoScroll
  }, [])

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Heading */}
      <div className="flex flex-col items-center capitalize">
        <h2 className="lg:mb-[-120px] lg:ms-[-400px] mb-[-35px] ms-[-180px] pl-10 text-[20px] sm:text-[30px] md:text-[40px] lg:text-[55px]">
          our
        </h2>
        <h1 className="text-[70px] sm:text-[120px] md:text-[150px] lg:text-[185px]">
          Process
        </h1>
        <h2 className="lg:mt-[-75px] lg:ms-[350px] ms-[150px] mt-[-20px] text-end text-[20px] sm:text-[30px] md:text-[40px] lg:text-[55px]">
          is Everything
        </h2>
      </div>

      {/* Slider */}
      <div className="relative mt-20 flex items-center justify-center">
        {/* LEFT BUTTON */}
        <button
          onClick={scrollPrev}
          className="bg-hero-combo absolute left-5 z-10 flex h-14 w-14 items-center justify-center rounded-xl"
        >
          <img
            src="/images/icons/chevron.svg"
            className="h-6 w-6 rotate-180"
            alt="Prev"
          />
        </button>

        {/* SCROLLER */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          className="hide-scrollbar flex w-[85vw] flex-nowrap gap-6 overflow-x-scroll"
        >
          {processWithImgSrc.map((item, index) => (
            <ProcessCard
              key={index}
              img_src={item.img_src}
              title={item.title}
              para={item.para}
              isFlip={item.isFlip}
              extraClass="w-80 flex-none"
            />
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollNext}
          className="bg-hero-combo absolute right-5 z-10 flex h-14 w-14 items-center justify-center rounded-xl"
        >
          <img
            src="/images/icons/chevron.svg"
            className="h-6 w-6"
            alt="Next"
          />
        </button>
      </div>
    </div>
  )
}

export default Process






// import { useEffect, useRef, useState } from 'react'
// import ProcessCard from '../ui/ProcessCard'
// import gsap from 'gsap'
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
// import { useGSAP } from '@gsap/react'

// gsap.registerPlugin(ScrollToPlugin)

// const processWithImgSrc = [
//   // ... (The processWithImgSrc array remains the same)
//   {
//     img_src: '/images/process_1.webp',
//     title: 'Initiate the Morph',
//     para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
//     isFlip: false,
//   },
//   {
//     img_src: '/images/process_2.webp',
//     title: 'Visualize & Design',
//     para: 'Bring us your boldest ideas. We’ll craft sleek, futuristic visuals that align perfectly with your brand’s mission and forward-thinking identity.',
//     isFlip: true,
//   },
//   {
//     img_src: '/images/process_3.webp',
//     title: 'Development',
//     para: 'Your designs morph into interactive, scalable digital solutions—built to perform, impress, and grow with you.',
//     isFlip: false,
//   },
//   {
//     img_src: '/images/process_4.webp',
//     title: 'UI/UX Design',
//     para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
//     isFlip: false,
//   },
//   {
//     img_src: '/images/process_4.webp',
//     title: 'Strategy & Analysis',
//     para: 'We dive deep into your target audience and market to build a robust foundation for success.',
//     isFlip: true,
//   },
//   {
//     img_src: '/images/process_4.webp',
//     title: 'Launch & Iterate',
//     para: 'Deployment is just the start. We monitor performance and continuously refine for peak digital excellence.',
//     isFlip: false,
//   },
// ]

// const SCROLL_INTERVAL = 2000
// const STEP_SIZE = 340

// const Process = () => {
//   const scrollContainerRef = useRef(null)
//   const isScrolling = useRef(false)
//   const intervalRef = useRef(null) // Ref to hold the interval ID

//   // State to track manual boundaries (for button disabling)
//   const [canScrollNext, setCanScrollNext] = useState(true)
//   const [canScrollPrev, setCanScrollPrev] = useState(false)

//   // --- Timer Management Functions ---

//   // Stops the current auto-scroll timer
//   const stopAutoScroll = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//     }
//   }

//   // Starts/Restarts the auto-scroll timer
//   const startAutoScroll = () => {
//     stopAutoScroll() // Clear any existing timer first
//     intervalRef.current = setInterval(() => {
//       // Use the autoScrollNext wrapper function
//       autoScrollNext()
//     }, SCROLL_INTERVAL)
//   }

//   // Wrapper for auto-scrolling (does not affect the timer itself)
//   const autoScrollNext = () => {
//     const container = scrollContainerRef.current
//     if (!container || isScrolling.current) return

//     const { scrollLeft, clientWidth, scrollWidth } = container
//     const maxScrollLeft = scrollWidth - clientWidth

//     // Check for Loop condition
//     if (Math.ceil(scrollLeft) >= Math.round(maxScrollLeft) - 1) {
//       // Smooth Scroll back to Start (Looping)
//       gsap.to(container, {
//         scrollTo: { x: 0 },
//         duration: 1.2,
//         ease: 'power2.inOut',
//         onStart: () => {
//           isScrolling.current = true
//         },
//         onComplete: () => {
//           isScrolling.current = false
//           updateScrollState()
//         },
//       })
//       return
//     }

//     // Standard Auto Scroll Step
//     let nextScrollPosition = scrollLeft + STEP_SIZE
//     if (nextScrollPosition > maxScrollLeft) {
//       nextScrollPosition = maxScrollLeft
//     }

//     gsap.to(container, {
//       scrollTo: { x: nextScrollPosition },
//       duration: 0.8,
//       ease: 'power1.inOut',
//       onStart: () => {
//         isScrolling.current = true
//       },
//       onComplete: () => {
//         isScrolling.current = false
//         updateScrollState()
//       },
//     })
//   }

//   // --- Scroll Boundary Update Logic ---
//   const updateScrollState = () => {
//     const container = scrollContainerRef.current
//     if (!container) return

//     const { scrollLeft, scrollWidth, clientWidth } = container
//     const maxScroll = scrollWidth - clientWidth

//     const isEnd = Math.ceil(scrollLeft) >= Math.round(maxScroll) - 1
//     const isStart = scrollLeft <= 1

//     setCanScrollNext(!isEnd)
//     setCanScrollPrev(!isStart)
//   }

//   // --- Manual Scroll Functions (Stops/Restarts Timer) ---
//   const scrollToNext = () => {
//     stopAutoScroll() // Stop the timer on manual interaction

//     const container = scrollContainerRef.current
//     if (!container || isScrolling.current) return

//     const { scrollLeft, clientWidth, scrollWidth } = container
//     const maxScrollLeft = scrollWidth - clientWidth

//     // Check for Loop condition (as requested: smooth scroll back if disabled)
//     if (!canScrollNext) {
//       console.log(
//         'scrollToNext: Manual click at end, initiating smooth scroll to start (0).'
//       )

//       gsap.to(container, {
//         scrollTo: { x: 0 },
//         duration: 1.2,
//         ease: 'power2.inOut',
//         onStart: () => {
//           isScrolling.current = true
//         },
//         onComplete: () => {
//           isScrolling.current = false
//           updateScrollState()
//           startAutoScroll() // Restart timer after manual action completes
//         },
//       })
//       return
//     }

//     // Standard Manual Scroll Step
//     let nextScrollPosition = scrollLeft + STEP_SIZE
//     if (nextScrollPosition > maxScrollLeft) {
//       nextScrollPosition = maxScrollLeft
//     }

//     gsap.to(container, {
//       scrollTo: { x: nextScrollPosition },
//       duration: 0.8,
//       ease: 'power1.inOut',
//       onStart: () => {
//         isScrolling.current = true
//       },
//       onComplete: () => {
//         isScrolling.current = false
//         updateScrollState()
//         startAutoScroll() // Restart timer after manual action completes
//       },
//     })
//   }

//   const scrollToPrev = () => {
//     stopAutoScroll() // Stop the timer on manual interaction

//     const container = scrollContainerRef.current
//     if (!container || isScrolling.current || !canScrollPrev) return

//     const scrollLeft = container.scrollLeft
//     let prevScrollPosition = scrollLeft - STEP_SIZE

//     if (prevScrollPosition < 0) {
//       prevScrollPosition = 0
//     }

//     gsap.to(container, {
//       scrollTo: { x: prevScrollPosition },
//       duration: 0.8,
//       ease: 'power1.inOut',
//       onStart: () => {
//         isScrolling.current = true
//       },
//       onComplete: () => {
//         isScrolling.current = false
//         updateScrollState()
//         startAutoScroll() // Restart timer after manual action completes
//       },
//     })
//   }

//   return (
//     <div className="flex flex-col overflow-hidden">
//       <div className="flex flex-col items-center capitalize">
//         <div className="capitalize">
//           {/* ... (Title/Heading structure remains the same) ... */}
//           <h2 className="-mb-5 pl-10 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-20 sm:text-[30px] md:-mb-10 md:pl-[90px] md:text-[40px] lg:-mb-13 lg:pl-[100px] lg:text-[55px]">
//             our
//           </h2>

//           <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
//             Process
//           </h1>
//           <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">
//             is Everything
//           </h2>
//         </div>
//       </div>

//       <div className='flex flex-row justify-center mt-20 slider-container'>
//         <div
//           ref={scrollContainerRef}
//           className="hide-scrollbar flex w-500 flex-nowrap gap-5 self-center overflow-x-scroll "
//         >
//           {processWithImgSrc.map((item, index) => (
//             <ProcessCard
//               key={index}
//               img_src={item['img_src']}
//               isFlip={item['isFlip']}
//               title={item['title']}
//               para={item['para']}
//               extraClass="w-80 flex-none"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Process
