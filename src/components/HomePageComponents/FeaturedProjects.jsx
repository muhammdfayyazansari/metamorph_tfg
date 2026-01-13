import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// import { Draggable } from 'gsap/Draggable' // Keeping import just in case, but core logic removed
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(useGSAP, Draggable, ScrollTrigger)
gsap.registerPlugin(useGSAP, ScrollTrigger)
// Define the array of project data
const projects = [
  {
    img: '/images/digitalMarketingCS/sim verified.svg',
    title: 'Sim Verified',
    subtitle: 'Home Page',
  },
  {
    img: '/images/digitalMarketingCS/streamify.svg',
    title: 'Streamify',
    subtitle: 'Mobile App',
  },
  {
    img: '/images/digitalMarketingCS/subshare.svg',
    title: 'Subshare',
    subtitle: 'Landing Page',
  },
  {
    img: '/images/digitalMarketingCS/invader store.svg',
    title: 'Invader Store',
    subtitle: 'Digital Marketplace',
  },
  {
    img: '/images/digitalMarketingCS/invader host.svg',
    title: 'Invader Host',
    subtitle: 'Mobile App',
    className: 'w-full lg:w-32',
  },
  {
    img: '/images/digitalMarketingCS/black horse tyre.svg',
    title: 'Black Horse Tyre',
    subtitle: 'Web Design',
  },
   {
    img: '/images/digitalMarketingCS/bit hoster.svg',
    title: 'BtHoster',
    subtitle: 'Website',
  },
   {
    img: '/images/digitalMarketingCS/anonyeti.svg',
    title: 'Anonyeti',
    subtitle: 'Home Page',
  },
   {
    img: '/images/digitalMarketingCS/fortnite.svg',
    title: 'Fortnite',
    subtitle: 'Web Design',
  },
   {
    img: '/images/digitalMarketingCS/koalabridge.svg',
    title: 'Koala Bridge',
    subtitle: 'Landing Page',
  },
]

const FeaturedProjects = () => {
  // State to track which image is currently visible
  const [currentIndex, setCurrentIndex] = useState(0)

  // 1. Create state to track the hover status
  const [isHovered, setIsHovered] = useState({ left: false, right: false })

  // 2. Define the image sources
  const defaultSrc = '/images/icons/chevron.svg'
  const hoverSrc = '/images/icons/chev_up.svg'

  // Calculate next and previous index with looping
  const nextIndex = (currentIndex + 1) % projects.length
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length

  // Refs are now minimal, as complex GSAP transitions are removed/simplified
  const containerRef = useRef(null)
  const currentImageRef = useRef(null)

  // NOTE: The core GSAP setup logic is being simplified/removed below.

  // --- Simplified Navigation Functions (State Update Only) ---
  const nextImage = () => {
    setCurrentIndex(nextIndex)
  }

  const prevImage = () => {
    setCurrentIndex(prevIndex)
  }

  // --- GSAP and Draggable initialization (Removed/Empty) ---
  // If you only want simple state switching, this block can be removed entirely,
  // but I'll keep the hook structure clean for now.
  useGSAP(
    () => {
      // Optionally: Add a simple fade animation here if desired, e.g.:
      // gsap.fromTo(currentImageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
      // gsap.fromTo(
      //   currentImageRef.current,
      //   {
      //     y: '-50%',
      //     scale: 0,
      //     opacity: 0,
      //   },
      //   {
      //     y: '0%',
      //     scale: 1,
      //     opacity: 1,
      //     duration: 0.6,
      //     ease: 'power3.inOut',
      //     scrollTrigger: {
      //       trigger: currentImageRef.current,
      //       start: 'top 80%', 
      //       once: true, 
            
      //     },
      //   }
      // )
      gsap.fromTo(
  currentImageRef.current,
  {
    yPercent: -50,      // ✅ transform-only
    scale: 0,
    opacity: 0,
  },
  {
    yPercent: 0,        // ✅ transform-only
    scale: 1,
    opacity: 1,
    duration: 0.6,
    ease: 'power3.inOut',
    force3D: true,      // ✅ prevents layout recalculation
    scrollTrigger: {
      trigger: currentImageRef.current,
      start: 'top 80%',
      once: true,
    },
  }
)
    },
    { 
      dependencies: [currentIndex]  
      // scope: containerRef, dependencies: [currentIndex] 
    }
  )

  // --- Cleanup/Reset Logic (No longer needed for simple state change, but keeping useEffect structure) ---
  useEffect(() => {
    // If you need to trigger external side effects on image change, do it here.
  }, [currentIndex])

  // Common styling for the image containers
  // We'll use one simple wrapper class and the desired imgClass
  const imgWrapperClass = 'relative flex items-center justify-center' // Removed absolute positioning for simplicity
  const imgClass =
    'h-[350px] object-contain sm:h-[450px] md:h-[500px] lg:h-[650px] lg:pl-20 object-contain' // Removed cursor-grab

  return (
    <div className="relative mb-48 flex w-full flex-col items-center justify-center overflow-hidden lg:pt-0 xl:pt-20">
      <div className="absolute bottom-0 mr-5 w-[150vw] sm:w-[110vw] md:sm:w-[120vw] lg:-mr-10 lg:w-screen">
        <img
          className="h-full w-full object-contain"
          src="/images/bg_images/featured_bg_1.webp"
          alt="Background"
        />
      </div>

      <div className="z-10 flex w-full flex-col items-center sm:gap-10">
        {/* Title Block */}
        <div className="capitalize">
          <h2 className="-mb-5 pr-13 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pr-24 sm:text-[30px] md:-mb-10 md:pr-28 md:text-[40px] lg:-mb-13 lg:pr-33 lg:text-[55px]">
            featured
          </h2>
          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
            Projects
          </h1>
        </div>

        {/* Small Screen Text */}
        <div className="flex flex-col items-center justify-center pt-5 text-center text-xl sm:text-4xl lg:hidden">
          <h3 className="font-medium">{projects[currentIndex].title}</h3>
          <h3 className="font-medium">{projects[currentIndex].subtitle}</h3>
        </div>

        <div className="-mb-10 flex h-full w-full items-center justify-center gap-2 px-3">
          {/* Small Screen Previous Button */}

          <div className="gradient-border rotate-180 cursor-pointer rounded-lg p-px lg:hidden">
            <div className="cursor-pointer rounded-lg">
              <button
                onClick={prevImage} // Hooked to state update
                className="bg-hero-combo cursor-pointer rounded-lg p-2 w-10 h-10 flex items-center justify-center shrink-0"
              >
                <img
                  className="h-4 w-5"
                  src="/images/icons/chevron.svg"
                  alt="Next"
                />
              </button>
            </div>
          </div>

          {/* --- MAIN IMAGE DISPLAY AREA (Cleaned up) --- */}
          <div
            ref={containerRef} // Keep container ref for scope
            className="flex flex-col items-center justify-center"
          >
            <div className={imgWrapperClass}>
              {/* This is the single image element, whose src changes via state */}
              <img
                key={currentIndex} // Using key forces React to re-render the element, useful for simple transitions
                ref={currentImageRef}
                src={projects[currentIndex].img}
                alt={projects[currentIndex].title}
                className={imgClass}
              />
            </div>
          </div>
          {/* --- END MAIN IMAGE DISPLAY AREA --- */}

          {/* Small Screen Next Button */}
          <div className="gradient-border mr-6 cursor-pointer rounded-lg p-px lg:hidden">
            <div className="cursor-pointer rounded-lg">
              <button
                onClick={nextImage} // Hooked to state update
                className="bg-hero-combo cursor-pointer rounded-lg p-2 w-10 h-10 flex items-center justify-center shrink-0"
              >
                <img
                  className="h-4 w-5"
                  src="/images/icons/chevron.svg"
                  alt="Next"
                />
              </button>
            </div>
          </div>
          {/* <div className="block cursor-pointer pb-10 lg:hidden">
            <div className="gradient-border rotate-180 cursor-pointer rounded-lg p-px lg:hidden">
              <div className="rounded-[calc(0.5rem-1px)]">
                <button
                  onClick={nextImage} // Hooked to state update
                  className="bg-hero-combo cursor-pointer rounded-[calc(0.5rem-1px)] p-2 lg:p-3"
                >
                  <img
                    className="h-3 w-4 lg:h-4 lg:w-5"
                    src="/images/icons/chevron.svg"
                    alt="Next"
                  />
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Large Screen Controls */}
      <div className="absolute bottom-0 z-10 w-full">
        <div className="hidden h-full w-full items-end justify-between p-10 lg:flex">
          <div className="flex flex-col items-start justify-center gap-5">
            <h3 className="text-3xl font-medium">
              {projects[currentIndex].title} <br />
              {projects[currentIndex].subtitle}
            </h3>
            <Link
              to={'/case-study'}
              className="button-gradient-sky gradient-border cursor-pointer rounded-[13.8px] p-px"
            >
              <button className="button-gradient cursor-pointer rounded-[13.8px] p-3">
                <span>Case study</span>
              </button>
            </Link>
          </div>

          <div className="flex gap-3">
            {/* Previous Button (Left Chevron) - Hooked up */}
            {/* <div className="gradient-border rotate-180 cursor-pointer rounded-2xl p-0.5">
              <div className="cursor-pointer rounded-2xl">
                <button
                  onClick={prevImage} // Hooked to state update
                  className="bg-hero-combo cursor-pointer rounded-2xl p-3"
                >
                  <img
                    className="h-4 w-5"
                    src="/images/icons/chevron.svg"
                    alt="Next"
                  />
                </button>
              </div>
            </div> */}

            <div
              // 3. Attach event handlers to update state
              onMouseEnter={() =>
                setIsHovered((prev) => ({ ...prev, left: !prev['left'] }))
              }
              onMouseLeave={() =>
                setIsHovered((prev) => ({ ...prev, left: !prev['left'] }))
              }
              className="gradient-border rotate-180 cursor-pointer rounded-2xl p-0.5"
            >
              <div className="cursor-pointer rounded-2xl">
                <button
                  onClick={prevImage} // Hooked to state update
                  // 4. Conditionally set the background class based on state
                  className={` ${
                    isHovered['left'] ? 'bg-white' : 'bg-hero-combo'
                  } cursor-pointer rounded-2xl p-3`}
                >
                  <img
                    className={`h-4 w-5 ${
                      isHovered['left'] ? 'rotate-90' : ''
                    }`}
                    // 5. Conditionally set the src based on state
                    src={isHovered['left'] ? hoverSrc : defaultSrc}
                    alt="Next"
                  />
                </button>
              </div>
            </div>

            <div
              // 3. Attach event handlers to update state
              onMouseEnter={() =>
                setIsHovered((prev) => ({ ...prev, right: !prev['right'] }))
              }
              onMouseLeave={() =>
                setIsHovered((prev) => ({ ...prev, right: !prev['right'] }))
              }
              className="gradient-border cursor-pointer rounded-2xl p-0.5"
            >
              <div className="cursor-pointer rounded-2xl">
                <button
                  onClick={nextImage} // Hooked to state update
                  // 4. Conditionally set the background class based on state
                  className={` ${
                    isHovered['right'] ? 'bg-white' : 'bg-hero-combo'
                  } cursor-pointer rounded-2xl p-3`}
                >
                  <img
                    className={`h-4 w-5 ${
                      isHovered['right'] ? 'rotate-90' : ''
                    }`}
                    // 5. Conditionally set the src based on state
                    src={isHovered['right'] ? hoverSrc : defaultSrc}
                    alt="Next"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects

