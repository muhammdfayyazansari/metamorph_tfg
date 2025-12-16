import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// import { Draggable } from 'gsap/Draggable' // Keeping import just in case, but core logic removed
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(useGSAP, Draggable, ScrollTrigger)
gsap.registerPlugin(useGSAP, ScrollTrigger)
// Define the array of project images
const images = [
  '/images/mobile.webp', // Image 1
  '/images/mobile.webp', // Image 1
  '/images/mobile.webp', // Image 1
  // '/images/robot.webp', // Image 2 (Change these URLs for visual distinction!)
  // '/images/people_2.webp', // Image 3
]

const FeaturedProjects = () => {
  // State to track which image is currently visible
  const [currentIndex, setCurrentIndex] = useState(1)

  // 1. Create state to track the hover status
  const [isHovered, setIsHovered] = useState({left:false, right:false});

  // 2. Define the image sources
  const defaultSrc = '/images/icons/chevron.svg';
  const hoverSrc = '/images/icons/chev_up.svg';

  // Calculate next and previous index with looping
  const nextIndex = (currentIndex + 1) % images.length
  const prevIndex = (currentIndex - 1 + images.length) % images.length

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
      gsap.fromTo(
        currentImageRef.current,
        // { opacity: 0 , y: -50},
        {
          y: '-50%',
          scale: 0,
          opacity: 0,
          // y: '0%', // Moves to center position
          // scale: 1, // Grows to 100% size
          // opacity: 1, // Fades in
          // duration: 0.8,
          // ease: 'power3.inOut',
        },
        // {
        //   y: '0%', // Moves to center position
        //   scale: 1, // Grows to 100% size
        //   opacity: 1, // Fades in
        //   duration: 0.6,
        //   ease: 'power3.inOut',
        // }
        {
          y: '0%',
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: currentImageRef.current,
            start: 'top 80%', // when element enters viewport
            once: true, // 🔥 animate only once
            // once: false
          },
        }
        // { opacity: 1, y: 0, duration: 0.5 }
      )
    },
    { scope: containerRef, dependencies: [currentIndex] }
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
          <h3 className="font-medium">Deep Seek</h3>
          <h3 className="font-medium">Landing page</h3>
        </div>

        <div className="-mb-10 flex h-full w-full items-center justify-center gap-2 px-3">
          {/* Small Screen Previous Button */}

          <div className="gradient-border rotate-180 cursor-pointer rounded-lg p-px lg:hidden">
            <div className="cursor-pointer rounded-lg">
              <button
                onClick={prevImage} // Hooked to state update
                className="bg-hero-combo cursor-pointer rounded-lg p-2"
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
                src={images[currentIndex]}
                alt={`Project Image ${currentIndex + 1}`}
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
                className="bg-hero-combo cursor-pointer rounded-lg p-2"
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
              Deep Seek <br />
              Landing page
            </h3>
            <Link
              to={'case-study'}
              className="button-gradient-sky gradient-border cursor-pointer rounded-[13.8px] p-px"
            >
              <button className="bg-hero-combo cursor-pointer rounded-[13.8px] p-3">
                case study
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
              onMouseEnter={() => setIsHovered(prev => ({...prev, left:!prev['left'] }))}
              onMouseLeave={() => setIsHovered(prev => ({...prev, left:!prev['left'] }))}
              className="gradient-border rotate-180 cursor-pointer rounded-2xl p-0.5"
            >
              <div className="cursor-pointer rounded-2xl">
                <button
                  onClick={prevImage} // Hooked to state update
                  // 4. Conditionally set the background class based on state
                  className={` ${
                    isHovered['left'] ? 'bg-white' : 'bg-hero-combo'
                  }  cursor-pointer rounded-2xl p-3 `}
                >
                  <img
                    className={`h-4 w-5  ${
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
              onMouseEnter={() => setIsHovered(prev => ({...prev, right:!prev['right'] }))}
              onMouseLeave={() => setIsHovered(prev => ({...prev, right:!prev['right'] }))}
              className="gradient-border cursor-pointer rounded-2xl p-0.5"
            >
              <div className="cursor-pointer rounded-2xl">
                <button
                  onClick={nextImage} // Hooked to state update
                  // 4. Conditionally set the background class based on state
                  className={` ${
                    isHovered['right'] ? 'bg-white' : 'bg-hero-combo'
                  }  cursor-pointer rounded-2xl p-3 `}
                >
                  <img
                    className={`h-4 w-5  ${
                      isHovered['right'] ? 'rotate-90' : ''
                    }`}
                    // 5. Conditionally set the src based on state
                    src={isHovered['right'] ? hoverSrc : defaultSrc}
                    alt="Next"
                  />
                </button>
              </div>
            </div>


            {/* Next Button (Right Chevron) - Hooked up */}
            {/* <div className="gradient-border cursor-pointer rounded-2xl p-0.5">
              <div className="cursor-pointer rounded-2xl">
                <button
                  onClick={nextImage} // Hooked to state update
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

           
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects

// import { Link } from 'react-router-dom'
// import { useEffect, useRef, useState } from 'react'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import { Draggable } from 'gsap/Draggable' // Import the Draggable plugin

// gsap.registerPlugin(useGSAP, Draggable)
// // Define the array of project images
// const images = [
//   '/images/mobile.webp',
//   '/images/mobile.webp',
//   '/images/mobile.webp',
// ]

// const FeaturedProjects = () => {
//   // State to track which image is currently visible
//   const [currentIndex, setCurrentIndex] = useState(0)
//   // Calculate the index of the next image to be prepared
//   const nextIndex = (currentIndex + 1) % images.length

//   // Refs for the component boundary and the two dynamic wrappers
//   const containerRef = useRef(null)
//   const currentWrapperRef = useRef(null) // The image that is visible and draggable
//   const nextWrapperRef = useRef(null) // The image that is hidden and ready to enter

//   const draggableRef = useRef(null) // Reference to the Draggable instance
//   const isAnimating = useRef(false) // Guard to prevent overlapping animations

//   const { contextSafe } = useGSAP({ scope: containerRef })

//   // --- Core Animation Function (Next Slide) ---
//   const triggerTransition = contextSafe(() => {
//     if (isAnimating.current) return
//     isAnimating.current = true
//     draggableRef.current?.disable() // Disable dragging immediately

//     const tl = gsap.timeline({
//       onComplete: () => {
//         // State update resets the elements instantly via useEffect
//         setCurrentIndex(nextIndex)
//       },
//     })

//     // Current Image (y: 0, scale: 1, opacity: 1) animates OUT:
//     tl.to(
//       currentWrapperRef.current,
//       {
// y: '100%', // Moves down and off-screen
// scale: 0.0, // Shrinks to 0% size
// opacity: 0, // Fades out
// duration: 0.8,
// ease: 'power3.inOut',
//       },
//       0
//     )

//     // Next Image (y: -100%, scale: 0, opacity: 0) animates IN:
//     tl.to(
//       nextWrapperRef.current,
//       {
// y: '0%', // Moves to center position
// scale: 1, // Grows to 100% size
// opacity: 1, // Fades in
// duration: 0.8,
// ease: 'power3.inOut',
//       },
//       0
//     )
//   })

//   // --- GSAP Setup and Draggable Initialization ---
//   useGSAP(
//     () => {
//       // 1. Initial Setup for the "Next" wrapper (hidden, above viewport)
//       gsap.set(nextWrapperRef.current, {
// y: '-100%',
// scale: 0,
// opacity: 0,
// zIndex: 20,
//       })
//       // 2. Initial Setup for the "Current" wrapper (visible)
//       gsap.set(currentWrapperRef.current, {
//         zIndex: 10,
//         y: 0,
//         scale: 1,
//         opacity: 1,
//       })

//       // 3. Create Draggable on the CURRENT image wrapper
//       draggableRef.current = Draggable.create(currentWrapperRef.current, {
//         type: 'y',
//         bounds: { minY: 0 }, // Restrict dragging upwards
//         inertia: false,

//         onDragEnd: function () {
//           // If dragged down past 150px, trigger the transition
//           if (this.y > 150) {
//             triggerTransition()
//           } else {
//             // Snap back to the starting position (y: 0) if drag wasn't far enough
//             gsap.to(this.target, { y: 0, duration: 0.3, ease: 'power2.out' })
//           }
//         },
//         // While dragging, we can optionally link the 'next' image's entry animation
//         // to the drag amount for a more interactive feel.
//         onDrag: function () {
//           const dragProgress = Math.min(1, this.y / 150)

//           // Partially reveal the next image based on drag progress
//           gsap.set(nextWrapperRef.current, {
//             y: `${-100 + dragProgress * 100}%`, // Moves from -100% towards 0%
//             scale: dragProgress * 0.5, // Scales up slightly as it's revealed
//             opacity: dragProgress, // Fades in
//           })
//         },
//       })[0]
//     },
//     { scope: containerRef }
//   )

//   // --- Cleanup/Reset Logic after State Change ---
//   useEffect(() => {
//     if (!isAnimating.current) return

//     // 1. Reset the element that just finished animating (now the 'current' element)
//     // Set it back to its starting state (visible, centered, full size)
//     gsap.set(currentWrapperRef.current, {
//       y: 0,
//       scale: 1,
//       opacity: 1,
//       clearProps: 'transform', // Clear all GSAP-applied transforms
//     })

//     // 2. Reset the element that just entered (now the 'next' element)
//     // Set it back to its waiting state (hidden, small, above viewport)
//     gsap.set(nextWrapperRef.current, {
//       y: '-100%',
//       scale: 0,
//       opacity: 0,
//     })

//     // Re-enable interactions
//     draggableRef.current?.enable()
//     draggableRef.current?.update(true)
//     isAnimating.current = false
//   }, [currentIndex])

//   // Common styling for the image containers
//   const wrapperClass =
//     'absolute  h-[350px] object-contain sm:h-[450px] md:h-[500px] lg:h-[650px] lg:pl-20 flex items-center justify-center pointer-events-none'
//   const imgClass =
//     ' h-[350px] object-contain sm:h-[450px] md:h-[500px] lg:h-[650px] lg:pl-20 object-contain pointer-events-auto cursor-grab active:cursor-grabbing'
//   const buttonClass =
//     'px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition-colors disabled:bg-gray-400'
//   return (
//     <div className="relative mb-48 flex w-full flex-col items-center justify-center overflow-hidden lg:pt-0 xl:pt-20">
//       <div className="absolute bottom-0 mr-5 w-[150vw] sm:w-[110vw] md:sm:w-[120vw] lg:-mr-10 lg:w-screen">
//         <img
//           className="h-full w-full object-contain"
//           src="/images/bg_images/featured_bg_1.webp"
//         />
//       </div>
//       <div className="z-10 flex w-full flex-col items-center sm:gap-10">
//         <div className="capitalize">
//           <h2 className="-mb-5 pr-13 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pr-24 sm:text-[30px] md:-mb-10 md:pr-28 md:text-[40px] lg:-mb-13 lg:pr-33 lg:text-[55px]">
//             featured
//           </h2>
//           <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
//             Projects
//           </h1>
//         </div>
//         <div className="flex flex-col items-center justify-center pt-5 text-center text-xl sm:text-4xl lg:hidden">
//           <h3 className="font-medium">Deep Seek</h3>
//           <h3 className="font-medium">Landing page</h3>
//         </div>
//         <div className="-mb-10 flex h-full w-full items-center justify-center gap-2 px-5">
//           {/* for small screen */}

//           <div className="block pb-10 lg:hidden">
//             <div className="gradient-border z-10 rotate-180 rounded-lg p-px">
//               <div className="rounded-[calc(0.5rem-1px)]">
//                 <button className="bg-hero-combo rounded-[calc(0.5rem-1px)] p-2 lg:p-3">
//                   <img
//                     className="h-3 w-4 rotate-180 object-contain lg:h-4 lg:w-5"
//                     src="/images/icons/chevron.svg"
//                     alt="chevron"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* <div className="-mb-16">
//             <img
//               //   className="h-[300px] object-contain lg:h-[600px]"
//               className="h-[350px] object-contain sm:h-[450px] md:h-[500px] lg:h-[650px] lg:pl-20"
//               src="/images/mobile.webp"
//               alt=""
//             />
//           </div> */}

//           <div className="flex h-[350px] object-contain sm:h-[450px] md:h-[500px] lg:h-[650px] lg:pl-20 flex-col items-center justify-center bg-blue-500">
//             {/* Main Slider Container (Viewable area) */}

//               {/* NEXT Image Wrapper (Positioned above, hidden) */}
//               <div ref={nextWrapperRef} className={wrapperClass}>
//                 <img
//                   src={images[nextIndex]}
//                   alt={`Image ${nextIndex + 1}`}
//                   className={imgClass}
//                 />
//               </div>

//               {/* CURRENT Image Wrapper (Visible, Draggable) */}
//               <div ref={currentWrapperRef} className={wrapperClass}>
//                 <img
//                   src={images[currentIndex]}
//                   alt={`Image ${currentIndex + 1}`}
//                   className={imgClass}
//                 />
//               </div>

//             {/* Controls */}
//             <button
//               onClick={triggerTransition}
//               disabled={isAnimating.current}
//               className={buttonClass +" hidden"}
//             >
//               Next Image
//             </button>
//           </div>

//           <div className="block pb-10 lg:hidden">
//             <div className="gradient-border rotate-180 rounded-lg p-px lg:hidden">
//               <div className="rounded-[calc(0.5rem-1px)]">
//                 <button className="bg-hero-combo rounded-[calc(0.5rem-1px)] p-2 lg:p-3">
//                   <img
//                     className="h-3 w-4 lg:h-4 lg:w-5"
//                     src="/images/icons/chevron.svg"
//                     alt="chevron"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* for large screen */}
//       <div className="absolute bottom-0 z-10 w-full">
//         <div className="hidden h-full w-full items-end justify-between p-10 lg:flex">
//           <div className="flex flex-col items-start justify-center gap-5">
//             <h3 className="text-3xl font-medium">
//               Deep Seek <br />
//               Landing page
//             </h3>
//             <Link
//               to={'case-study'}
//               className="button-gradient-sky gradient-border cursor-pointer rounded-[13.8px] p-px"
//             >
//               <button className="bg-hero-combo cursor-pointer rounded-[13.8px] p-3">
//                 case study
//               </button>
//             </Link>
//           </div>
//           <div className="flex gap-3">
//             {/* <div className="rounded-lg bg-linear-to-t from-[#51D1F4] to-[#74288F] p-px"> */}
//             <div className="gradient-border rotate-180 rounded-lg p-0.5">
//               <div className="rounded-[calc(0.5rem-1px)]">
//                 <button className="bg-hero-combo rounded-[calc(0.5rem-1px)] p-3">
//                   <img
//                     className="h-4 w-5"
//                     src="/images/icons/chevron.svg"
//                     alt="chevron"
//                   />
//                 </button>
//               </div>
//             </div>
//             <div className="gradient-border rounded-lg p-0.5 cursor-pointer hover:bg-green-50"
//              onClick={triggerTransition}
//             >
//               <div className="rounded-[calc(0.5rem-1px)] cursor-pointer z-10 hover:bg-green-50">
//                 <button className="bg-hero-combo rounded-[calc(0.5rem-1px)] p-3 cursor-pointer z-10 hover:bg-green-50">
//                   <img
//                     className="h-4 w-5"
//                     src="/images/icons/chevron.svg"
//                     alt="chevron"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="w-full text-center">
//         <div className="relative flex justify-center items-center w-full h-[800px]  overflow-hidden">
//           <img
//             className="absolute top-0 left-0 h-[750px] object-contain "
//             src="/images/gradient_bg.webp"
//           />
//           <h1 className="text-9xl text-center">video</h1>
//         </div>
//       </div> */}
//     </div>
//   )
// }

// export default FeaturedProjects

// import { Link } from 'react-router-dom'

// const FeaturedProjects = () => {
//   const servicesWithImgSrc = [
//     {
//       img_src: 'branding_and_logos',
//       title: 'Branding and Logos',
//       // icon: "/images/icons/branding_and_logos.svg", // Example placeholder
//     },
//     {
//       img_src: 'motion_design',
//       title: 'Motion Design',
//     },
//     {
//       img_src: 'ui_ux_design',
//       title: 'UI/UX Design',
//     },
//     {
//       img_src: 'digital_marketing',
//       title: 'Digital Marketing',
//     },
//     {
//       img_src: '2d_3d_animations',
//       title: '2D/3D Animations',
//     },
//   ]
//   return (
//     <div className="relative mb-48 flex w-full flex-col items-center justify-center overflow-hidden lg:pt-0 xl:pt-20">
//       <div className="absolute bottom-0 mr-5 w-[150vw] sm:w-[110vw] md:sm:w-[120vw] lg:-mr-10 lg:w-screen">
//         <img
//           className="h-full w-full object-contain"
//           src="/images/bg_images/featured_bg_1.webp"
//         />
//       </div>
//       <div className="z-10 flex w-full flex-col items-center sm:gap-10">
//         <div className="capitalize">
//           <h2 className="-mb-5 pr-13 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pr-24 sm:text-[30px] md:-mb-10 md:pr-28 md:text-[40px] lg:-mb-13 lg:pr-33 lg:text-[55px]">
//             featured
//           </h2>
//           <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
//             Projects
//           </h1>
//         </div>
//         <div className="flex flex-col items-center justify-center pt-5 text-center text-xl sm:text-4xl lg:hidden">
//           <h3 className="font-medium">Deep Seek</h3>
//           <h3 className="font-medium">Landing page</h3>
//         </div>
//         <div className="-mb-10 flex h-full w-full items-center justify-center gap-2 px-5">
//           {/* for small screen */}

//           <div className="block pb-10 lg:hidden">
//             <div className="gradient-border z-10 rotate-180 rounded-lg p-px">
//               <div className="rounded-[calc(0.5rem-1px)]">
//                 <button className="bg-hero-combo rounded-[calc(0.5rem-1px)] p-2 lg:p-3">
//                   <img
//                     className="h-3 w-4 rotate-180 object-contain lg:h-4 lg:w-5"
//                     src="/images/icons/chevron.svg"
//                     alt="chevron"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="-mb-16">
//             <img
//               //   className="h-[300px] object-contain lg:h-[600px]"
//               className="h-[350px] object-contain sm:h-[450px] md:h-[500px] lg:h-[650px] lg:pl-20"
//               src="/images/mobile.webp"
//               alt=""
//             />
//           </div>
//           <div className="block pb-10 lg:hidden">
//             <div className="gradient-border rotate-180 rounded-lg p-px lg:hidden">
//               <div className="rounded-[calc(0.5rem-1px)]">
//                 <button className="bg-hero-combo rounded-[calc(0.5rem-1px)] p-2 lg:p-3">
//                   <img
//                     className="h-3 w-4 lg:h-4 lg:w-5"
//                     src="/images/icons/chevron.svg"
//                     alt="chevron"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* for large screen */}
//       <div className="absolute bottom-0 z-10 w-full">
//         <div className="hidden h-full w-full items-end justify-between p-10 lg:flex">
//           <div className="flex flex-col items-start justify-center gap-5">
//             <h3 className="text-3xl font-medium">
//               Deep Seek <br />
//               Landing page
//             </h3>
//             <Link
//               to={'case-study'}
//               className="button-gradient-sky gradient-border cursor-pointer rounded-[13.8px] p-px"
//             >
//               <button className="bg-hero-combo cursor-pointer rounded-[13.8px] p-3">
//                 case study
//               </button>
//             </Link>
//           </div>
//           <div className="flex gap-3">
//             {/* <div className="rounded-lg bg-linear-to-t from-[#51D1F4] to-[#74288F] p-px"> */}
//             <div className="gradient-border rotate-180 rounded-lg p-0.5">
//               <div className="rounded-[calc(0.5rem-1px)]">
//                 <button className="bg-hero-combo rounded-[calc(0.5rem-1px)] p-3">
//                   <img
//                     className="h-4 w-5"
//                     src="/images/icons/chevron.svg"
//                     alt="chevron"
//                   />
//                 </button>
//               </div>
//             </div>
//             <div className="gradient-border rounded-lg p-0.5">
//               <div className="rounded-[calc(0.5rem-1px)]">
//                 <button className="bg-hero-combo rounded-[calc(0.5rem-1px)] p-3">
//                   <img
//                     className="h-4 w-5"
//                     src="/images/icons/chevron.svg"
//                     alt="chevron"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="w-full text-center">
//         <div className="relative flex justify-center items-center w-full h-[800px]  overflow-hidden">
//           <img
//             className="absolute top-0 left-0 h-[750px] object-contain "
//             src="/images/gradient_bg.webp"
//           />
//           <h1 className="text-9xl text-center">video</h1>
//         </div>
//       </div> */}
//     </div>
//   )
// }

// export default FeaturedProjects
