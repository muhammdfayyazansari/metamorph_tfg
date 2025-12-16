import { useEffect, useEffectEvent, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function FaqsCard({
  extraClass,
  title,
  isActive = false,
  onClick,
  isHovered,
  setIsHovered,
  itemIndex,
}) {
  const contentRef = useRef(null)
  const targetHeightRef = useRef(null) // New ref to store the calculated height

  // 2. Define the image sources
  const defaultSrc = '/images/icons/chevron.svg'
  const hoverSrc = '/images/icons/chev_up.svg'
  useEffect(() => {
    const contentElement = contentRef.current
    // 1. Set height to 'auto' to calculate the full height
    contentElement.style.height = 'auto'
    // 2. Capture the scroll height (the full content height)
    const targetHeight = contentElement.scrollHeight
    // 3. Store the height for later use (optional, but good practice)
    targetHeightRef.current = targetHeight
    // 4. Set height back to 0 (or whatever it was before 'auto') to prepare for the animation start
    // Note: We only need to do this if the initial state was 0.
    // Since we are setting initial state via style prop, we can skip this for now,
    // but ensure the initial height is correctly set to 0 when inactive.

    // If the component mounts with isActive=true, the inline style handles it.
    // If it transitions from inactive, the previous GSAP call left it at height: 0.
    if (isActive) {
      // **Robust Expand Animation:**
      gsap.fromTo(
        contentElement,
        { height: 0, opacity: 0 }, // Start state (ensure it starts correctly)
        {
          height: targetHeight, // Animate to the specific scrollHeight
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          onComplete: () => {
            // Set height to 'auto' after animation completes for responsiveness
            contentElement.style.height = 'auto'
          },
        }
      )
    } else {
      // **Collapse Animation:**
      // Use the current height (or the target height if stored) as the start value
      gsap.fromTo(
        contentElement,
        { height: targetHeight, opacity: 1 },
        {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.inOut',
          // No onComplete needed here, as height: 0 is the final state.
        }
      )
    }
  }, [isActive])

  return (
    <div
      className={`${isActive ? 'bg-hero-combo' : 'glass card-gradient'} flex max-w-[760px] flex-row items-start justify-between gap-5 rounded-xl p-5`}
    >
      <div className="flex flex-col gap-5">
        <h3 className="text-lg font-semibold sm:text-xl lg:text-2xl">
          {title}
        </h3>
        {/* Animated Content */}
        <div
          ref={contentRef}
          className="overflow-hidden"
          // Crucial: Set initial state correctly based on isActive
          // If isActive is true on mount, the transition doesn't run, so 'auto' is needed.
          // If isActive is false on mount, height: 0 is needed.
          style={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
        >
          <p className="font-light text-white/70">
            We provide branding, web and UI/UX design, social media content, and
            custom creative solutions for digital and print.
          </p>
        </div>
      </div>

      {/* <div className="gradient-border rotate-180 cursor-pointer rounded-[13.8px] p-px">
        <button
          onClick={onClick}
          className={`cursor-pointer rounded-[13.8px] p-3 ${isActive ? 'bg-white' : 'bg-hero-combo rotate-180'}`}
        >
        </button>
      </div> */}

      <div
        onMouseEnter={() =>
          setIsHovered((prev) => {
            const arr = [...prev]
            arr[itemIndex] = 1
            return arr
          })
        }
        onMouseLeave={() =>
          setIsHovered((prev) => {
            const arr = [...prev]
            arr[itemIndex] = 0
            return arr
          })
        }
        className="gradient-border rotate-180 cursor-pointer rounded-[13.8px] p-px"
      >
        <button
          onClick={onClick}
          className={`cursor-pointer rounded-[13.8px] p-3 ${isActive ? `rotate-180 ${isHovered ? 'bg-hero-combo' : 'bg-white'} ` : `${isHovered ? 'bg-white' : 'bg-hero-combo'}`}`}
        >
          {isActive ? (
            <img
              // className="h-4 w-7 object-contain"
              className={`h-4 w-7 ${isHovered ? 'rotate-270' : ''}`}
              src={
                isHovered
                  ? '/images/icons/chevron.svg'
                  : `/images/icons/chev_up.svg`
              }
              alt="chevron"
            />
          ) : (
            <img
              className={`h-4 w-7 ${isHovered ? '' : 'rotate-270'}`}
              src={
                isHovered
                  ? `/images/icons/chev_up.svg`
                  : '/images/icons/chevron.svg'
              }
              alt="chevron"
            />
          )}
        </button>
      </div>
    </div>
  )
}

// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'

// export default function FaqsCard({
//   extraClass,
//   title,
//   isActive = false,
//   onClick,
// }) {
//   const contentRef = useRef(null)
//   useEffect(() => {
//     if (isActive) {
//       gsap.to(contentRef.current, {
//         height: 'auto',
//         opacity: 1,
//         duration: 0.6,
//         ease: 'power3.out',
//       })
//     } else {
//       gsap.to(contentRef.current, {
//         height: 0,
//         opacity: 0,
//         duration: 0.4,
//         ease: 'power2.inOut',
//       })
//     }
//   }, [isActive])

//   return (
//     <div
//       className={`${isActive ? 'bg-hero-combo' : 'glass card-gradient'} flex max-w-[760px] flex-row items-start justify-between gap-5 rounded-xl p-5`}
//     >
//       <div className="flex flex-col gap-5">
//         <h3 className="text-lg font-semibold sm:text-xl lg:text-2xl">
//           {title}
//         </h3>
//         {/* {isActive && (
//           <p className="font-light">
//             We provide branding, web and UI/UX design, social media content, and
//             custom creative solutions for digital and print.
//           </p>
//         )} */}
//         {/* Animated Content */}
//         <div
//           ref={contentRef}
//           className="overflow-hidden"
//           style={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
//         >
//           <p className="font-light text-white/70">
//             We provide branding, web and UI/UX design, social media content, and
//             custom creative solutions for digital and print.
//           </p>
//         </div>
//       </div>

// <div className="gradient-border rotate-180 rounded-[13.8px] p-px cursor-pointer">
//   <button
//     onClick={onClick}
//     className={`rounded-[13.8px] cursor-pointer p-3 ${isActive ? 'bg-white' : 'bg-hero-combo rotate-180'}`}
//   >
//     {isActive ? (
//       <img
//         className="h-4 w-7 object-contain"
//         src="/images/icons/chev_up.svg"
//         alt="chevron"
//       />
//     ) : (
//       <img
//         className="h-4 w-7 rotate-270"
//         src="/images/icons/chevron.svg"
//         alt="chevron"
//       />
//     )}
//   </button>
// </div>
//     </div>
//   )
// }
