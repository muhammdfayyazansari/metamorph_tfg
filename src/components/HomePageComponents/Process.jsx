import { useEffect, useRef, useState } from 'react'
import ProcessCard from '../ui/ProcessCard'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollToPlugin)

const processWithImgSrc = [
  // ... (The processWithImgSrc array remains the same)
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
    para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
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

const SCROLL_INTERVAL = 2000
const STEP_SIZE = 340

const Process = () => {
  const scrollContainerRef = useRef(null)
  const isScrolling = useRef(false)
  const intervalRef = useRef(null) // Ref to hold the interval ID

  // State to track manual boundaries (for button disabling)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [canScrollPrev, setCanScrollPrev] = useState(false)

  // --- Timer Management Functions ---

  // Stops the current auto-scroll timer
  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  // Starts/Restarts the auto-scroll timer
  const startAutoScroll = () => {
    stopAutoScroll() // Clear any existing timer first
    intervalRef.current = setInterval(() => {
      // Use the autoScrollNext wrapper function
      autoScrollNext()
    }, SCROLL_INTERVAL)
  }

  // Wrapper for auto-scrolling (does not affect the timer itself)
  const autoScrollNext = () => {
    const container = scrollContainerRef.current
    if (!container || isScrolling.current) return

    const { scrollLeft, clientWidth, scrollWidth } = container
    const maxScrollLeft = scrollWidth - clientWidth

    // Check for Loop condition
    if (Math.ceil(scrollLeft) >= Math.round(maxScrollLeft) - 1) {
      // Smooth Scroll back to Start (Looping)
      gsap.to(container, {
        scrollTo: { x: 0 },
        duration: 1.2,
        ease: 'power2.inOut',
        onStart: () => {
          isScrolling.current = true
        },
        onComplete: () => {
          isScrolling.current = false
          updateScrollState()
        },
      })
      return
    }

    // Standard Auto Scroll Step
    let nextScrollPosition = scrollLeft + STEP_SIZE
    if (nextScrollPosition > maxScrollLeft) {
      nextScrollPosition = maxScrollLeft
    }

    gsap.to(container, {
      scrollTo: { x: nextScrollPosition },
      duration: 0.8,
      ease: 'power1.inOut',
      onStart: () => {
        isScrolling.current = true
      },
      onComplete: () => {
        isScrolling.current = false
        updateScrollState()
      },
    })
  }

  // --- Scroll Boundary Update Logic ---
  const updateScrollState = () => {
    const container = scrollContainerRef.current
    if (!container) return

    const { scrollLeft, scrollWidth, clientWidth } = container
    const maxScroll = scrollWidth - clientWidth

    const isEnd = Math.ceil(scrollLeft) >= Math.round(maxScroll) - 1
    const isStart = scrollLeft <= 1

    setCanScrollNext(!isEnd)
    setCanScrollPrev(!isStart)
  }

  // --- Manual Scroll Functions (Stops/Restarts Timer) ---
  const scrollToNext = () => {
    stopAutoScroll() // Stop the timer on manual interaction

    const container = scrollContainerRef.current
    if (!container || isScrolling.current) return

    const { scrollLeft, clientWidth, scrollWidth } = container
    const maxScrollLeft = scrollWidth - clientWidth

    // Check for Loop condition (as requested: smooth scroll back if disabled)
    if (!canScrollNext) {
      console.log(
        'scrollToNext: Manual click at end, initiating smooth scroll to start (0).'
      )

      gsap.to(container, {
        scrollTo: { x: 0 },
        duration: 1.2,
        ease: 'power2.inOut',
        onStart: () => {
          isScrolling.current = true
        },
        onComplete: () => {
          isScrolling.current = false
          updateScrollState()
          startAutoScroll() // Restart timer after manual action completes
        },
      })
      return
    }

    // Standard Manual Scroll Step
    let nextScrollPosition = scrollLeft + STEP_SIZE
    if (nextScrollPosition > maxScrollLeft) {
      nextScrollPosition = maxScrollLeft
    }

    gsap.to(container, {
      scrollTo: { x: nextScrollPosition },
      duration: 0.8,
      ease: 'power1.inOut',
      onStart: () => {
        isScrolling.current = true
      },
      onComplete: () => {
        isScrolling.current = false
        updateScrollState()
        startAutoScroll() // Restart timer after manual action completes
      },
    })
  }

  const scrollToPrev = () => {
    stopAutoScroll() // Stop the timer on manual interaction

    const container = scrollContainerRef.current
    if (!container || isScrolling.current || !canScrollPrev) return

    const scrollLeft = container.scrollLeft
    let prevScrollPosition = scrollLeft - STEP_SIZE

    if (prevScrollPosition < 0) {
      prevScrollPosition = 0
    }

    gsap.to(container, {
      scrollTo: { x: prevScrollPosition },
      duration: 0.8,
      ease: 'power1.inOut',
      onStart: () => {
        isScrolling.current = true
      },
      onComplete: () => {
        isScrolling.current = false
        updateScrollState()
        startAutoScroll() // Restart timer after manual action completes
      },
    })
  }

  // // --- Initialization and Cleanup ---
  // useEffect(() => {
  //   const container = scrollContainerRef.current;
  //   if (container) {
  //     updateScrollState();

  //     // Event listeners for scroll/resize to update boundary buttons
  //     container.addEventListener('scroll', updateScrollState);
  //     window.addEventListener('resize', updateScrollState);

  //     // Start the auto-scroll timer
  //     startAutoScroll();

  //     return () => {
  //       // Cleanup on unmount
  //       container.removeEventListener('scroll', updateScrollState);
  //       window.removeEventListener('resize', updateScrollState);
  //       stopAutoScroll();
  //     };
  //   }
  // }, [scrollContainerRef.current]);

  // // useGSAP is kept for context, though its main function is covered by useEffect
  // useGSAP(() => {}, { scope: scrollContainerRef });

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-col items-center capitalize">
        <div className="capitalize">
          {/* ... (Title/Heading structure remains the same) ... */}
          <h2 className="-mb-5 pl-10 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-20 sm:text-[30px] md:-mb-10 md:pl-[90px] md:text-[40px] lg:-mb-13 lg:pl-[100px] lg:text-[55px]">
            our
          </h2>

          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
            Process
          </h1>
          <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">
            is Everything
          </h2>

          {/* Buttons with disabled state */}
          {/* <button 
            onClick={scrollToNext} 
            className="h-10 w-10 disabled:opacity-50"
          >
            Next {canScrollNext ? '' : '(Loop)'}
          </button>
          <button 
            onClick={scrollToPrev} 
            className="h-10 w-10 disabled:opacity-50"
            disabled={!canScrollPrev}
          >
            Previous
          </button> */}
        </div>
      </div>

      <div className='flex flex-row justify-center mt-20 slider-container'>
        <div
          ref={scrollContainerRef}
          className="hide-scrollbar flex w-500 flex-nowrap gap-5 self-center overflow-x-scroll "
        >
          {processWithImgSrc.map((item, index) => (
            <ProcessCard
              key={index}
              img_src={item['img_src']}
              isFlip={item['isFlip']}
              title={item['title']}
              para={item['para']}
              extraClass="w-80 flex-none"
            />
          ))}
        </div>
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

// const Process = () => {
//   const scrollContainerRef = useRef(null)
//   const [canScrollNext, setCanScrollNext] = useState(true)
//   const [canScrollPrev, setCanScrollPrev] = useState(false)

//   // --- Scroll Boundary Update Logic ---
//   const updateScrollState = () => {
//     const container = scrollContainerRef.current
//     if (!container) return

//     const { scrollLeft, scrollWidth, clientWidth } = container

//     // Use clientWidth to determine the end position
//     const maxScroll = scrollWidth - clientWidth

//     // Check if scrolled fully to the right (end)
//     // Using Math.round/ceil helps account for fractional scroll values
//     const isEnd = Math.ceil(scrollLeft) >= Math.round(maxScroll) - 1 // -1 for tolerance
//     // Check if scrolled fully to the left (start)
//     const isStart = scrollLeft <= 1 // Using 1 for tolerance

//     setCanScrollNext(!isEnd)
//     setCanScrollPrev(!isStart)
//   }

//   // Effect to monitor scroll changes and update button state
//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       // Initial check
//       updateScrollState();

//       // Listener for manual scrolling
//       container.addEventListener('scroll', updateScrollState);

//       // Listener for resizing (if container size changes)
//       window.addEventListener('resize', updateScrollState);

//       return () => {
//         container.removeEventListener('scroll', updateScrollState);
//         window.removeEventListener('resize', updateScrollState);
//       };
//     }
//   }, [scrollContainerRef.current]);

//   // useGSAP hook provides a context for cleanup, though for simple click handlers it's less critical
//   useGSAP(
//     () => {
//       // Initial state check after mount
//       updateScrollState();
//     },
//     { scope: scrollContainerRef }
//   )

//   // --- Scroll To Next Function ---
//   const scrollToNext = () => {
//     const container = scrollContainerRef.current
//     const step = 340; // Fixed step size

//     // Check 1: Return if container is null
//     if (!container) {
//       console.log("scrollToNext: Container ref is null, returning.")
//       return
//     }

//     // Check 2: Return if scroll is already at the end
//     if (!canScrollNext) {
//       console.log("scrollToNext: Already at the end, returning.")
//       return
//     }

//     const { scrollLeft, clientWidth, scrollWidth } = container

//     const maxScrollLeft = scrollWidth - clientWidth
//     let nextScrollPosition = scrollLeft + step

//     if (nextScrollPosition > maxScrollLeft) {
//       nextScrollPosition = maxScrollLeft
//     }

//     console.log(`[NEXT] scrollWidth:${scrollWidth} clientWidth:${clientWidth} Current: ${scrollLeft}, Step: ${step}, Next Target: ${nextScrollPosition}`)

//     // Scroll animation
//     gsap.to(container, {
//       scrollTo: {
//         x: nextScrollPosition,
//       },
//       duration: 0.8,
//       ease: 'power1.inOut',
//       onComplete: updateScrollState // Check boundaries after animation completes
//     })
//   }

//   // --- Scroll To Previous Function ---
//   const scrollToPrev = () => {
//     const container = scrollContainerRef.current
//     const step = 340;

//     // Check 1: Return if container is null
//     if (!container) {
//       console.log("scrollToPrev: Container ref is null, returning.")
//       return
//     }

//     // Check 2: Return if scroll is already at the beginning
//     if (!canScrollPrev) {
//       console.log("scrollToPrev: Already at the beginning, returning.")
//       return
//     }

//     const { scrollLeft } = container

//     // Calculate the previous position, making sure we don't scroll past 0
//     let prevScrollPosition = scrollLeft - step

//     if (prevScrollPosition < 0) {
//       prevScrollPosition = 0
//     }

//     console.log(`[PREV] Current: ${scrollLeft}, Step: ${step}, Prev Target: ${prevScrollPosition}`)

//     // Scroll animation
//     gsap.to(container, {
//       scrollTo: {
//         x: prevScrollPosition,
//         autoKill: false,
//       },
//       duration: 0.8,
//       ease: 'power1.inOut',
//       onComplete: updateScrollState // Check boundaries after animation completes
//     })
//   }

//   return (
//     <div className="flex flex-col">
//       <div className="flex flex-col items-center capitalize">
//         <div className="capitalize">
//           <h2 className="-mb-5 pl-10 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-20 sm:text-[30px] md:-mb-10 md:pl-[90px] md:text-[40px] lg:-mb-13 lg:pl-[100px] lg:text-[55px]">
//             our
//           </h2>

//           <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
//             Process
//           </h1>
//           <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">
//             is Everything
//           </h2>

//           {/* Button implementations with disabled state */}
//           <button
//             onClick={scrollToNext}
//             className="h-10 w-10 disabled:opacity-50"
//             disabled={!canScrollNext}
//           >
//             next
//           </button>
//           <button
//             onClick={scrollToPrev}
//             className="h-10 w-10 disabled:opacity-50"
//             disabled={!canScrollPrev}
//           >
//             previous
//           </button>
//         </div>
//       </div>

//       <div
//         ref={scrollContainerRef}
//         className="hide-scrollbar flex w-[90vw] flex-nowrap gap-5 self-center overflow-x-scroll pt-10"
//       >
//         {processWithImgSrc.map((item, index) => (
//           <ProcessCard
//             key={index} // Added key for better React performance
//             img_src={item['img_src']}
//             isFlip={item['isFlip']}
//             title={item['title']}
//             para={item['para']}
//             extraClass="w-80 flex-none"
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Process

// import { useEffect, useRef, useState } from 'react'
// import ProcessCard from '../ui/ProcessCard'
// import gsap from 'gsap'
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
// import { useGSAP } from '@gsap/react'

// gsap.registerPlugin(ScrollToPlugin)
// const processWithImgSrc = [
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
//     title: 'UI/UX Design',
//     para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
//     isFlip: false,
//   },
//   {
//     img_src: '/images/process_4.webp',
//     title: 'UI/UX Design',
//     para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
//     isFlip: false,
//   },
// ]
// const Process = () => {
//   const scrollContainerRef = useRef(null)
// const [canScrollNext, setCanScrollNext] = useState(true)
// const [canScrollPrev, setCanScrollPrev] = useState(false)

// // Function to check and update scroll boundaries
// const updateScrollState = () => {
//   const container = scrollContainerRef.current
//   if (!container) return

//   const { scrollLeft, scrollWidth, clientWidth } = container
//   const step = 340;

//   // Check if scrolled fully to the right (end)
// //   const isEnd = Math.ceil(scrollLeft) >= scrollWidth - clientWidth - 1 // -1 for tolerance
//   const isEnd = Math.ceil(scrollLeft) >= scrollWidth - step - 1 // -1 for tolerance
//   // Check if scrolled fully to the left (start)
//   const isStart = scrollLeft <= 1

//   setCanScrollNext(!isEnd)
//   setCanScrollPrev(!isStart)
// }

// // Effect to monitor scroll changes and update button state
// useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (container) {
//         // Initial check
//         updateScrollState();

//         // Listener for manual scrolling
//         container.addEventListener('scroll', updateScrollState);

//         // Listener for resizing (if container size changes)
//         window.addEventListener('resize', updateScrollState);

//         return () => {
//             container.removeEventListener('scroll', updateScrollState);
//             window.removeEventListener('resize', updateScrollState);
//         };
//     }
// }, [scrollContainerRef.current]);

// // useGSAP hook provides a context for cleanup, though for simple click handlers it's less critical
// useGSAP(
//   () => {
//     // optional: add any initial GSAP setup here if needed
//   },
//   { scope: scrollContainerRef }
// )

// const scrollToNext = () => {
//   const container = scrollContainerRef.current

//   // 1. Add check and console log
// //   if (!container) {
//   if (!container || !canScrollNext) {
//     console.log("scrollToNext: Container ref is null, returning.")
//     return
//   }

//   const { scrollLeft, clientWidth, scrollWidth } = container
//   // Use clientWidth for the step size
// //   const step = clientWidth
//   const step = 340;

//   // Calculate the next position, making sure we don't scroll past the max scrollable amount
// //   const maxScrollLeft = scrollWidth - clientWidth
//   const maxScrollLeft = scrollWidth - step
//   let nextScrollPosition = scrollLeft + step

//   if (nextScrollPosition > maxScrollLeft) {
//     nextScrollPosition = maxScrollLeft
//   }

//   console.log(`scrollWidth:${scrollWidth}  clientWidth:${clientWidth}  scrollToNext: Current: ${scrollLeft}, Step: ${step}, Next Target: ${nextScrollPosition}`)

//   // Scroll animation
//   gsap.to(container, {
//     scrollTo: {
//       x: nextScrollPosition,
//       // You can use autoKill: false if you want the animation to complete even if interrupted
//     },
//     duration: 0.8,
//     ease: 'power1.inOut',
//     onComplete: updateScrollState // Check boundaries after animation completes
//   })
// }

// const scrollToPrev = () => {
//   const container = scrollContainerRef.current

//   // 1. Add check and console log
//   if (!container || !canScrollPrev) {
//     console.log("scrollToPrev: Container ref is null, returning.")
//     return
//   }

//   const { scrollLeft, clientWidth } = container
//   const step = 340;

//   // Calculate the previous position, making sure we don't scroll past 0
//   let prevScrollPosition = scrollLeft - step

//   if (prevScrollPosition < 0) {
//     prevScrollPosition = 0
//   }

// //   console.log(`scrollToPrev: Current: ${scrollLeft}, Step: ${step}, Prev Target: ${prevScrollPosition}`)

//   // Scroll animation
//   gsap.to(container, {
//     scrollTo: {
//       x: prevScrollPosition,
//       autoKill: false,
//     },
//     duration: 0.8,
//     ease: 'power1.inOut',
//     onComplete: updateScrollState // Check boundaries after animation completes
//   })
// }
//   return (
//     <div className="flex flex-col">
//       <div className="flex flex-col items-center capitalize">
//         <div className="capitalize">
//           <h2 className="-mb-5 pl-10 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-20 sm:text-[30px] md:-mb-10 md:pl-[90px] md:text-[40px] lg:-mb-13 lg:pl-[100px] lg:text-[55px]">
//             our
//           </h2>

//           <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
//             Process
//           </h1>
//           <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">
//             is Everything
//           </h2>

//           <button onClick={scrollToNext} className="h-10 w-10">
//             {' '}
//             next
//           </button>
//           <button onClick={scrollToPrev} className="h-10 w-10">
//             {' '}
//             previous
//           </button>
//         </div>
//       </div>

//       <div
//         ref={scrollContainerRef}
//         className="hide-scrollbar flex w-[90vw] flex-nowrap gap-5 self-center overflow-x-scroll pt-10"
//       >
//         {processWithImgSrc.map((item) => (
//           <ProcessCard
//             img_src={item['img_src']}
//             isFlip={item['isFlip']}
//             title={item['title']}
//             para={item['para']}
//             extraClass="w-80 flex-none"
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Process
