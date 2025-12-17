import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import ProcessCard from '../ui/ProcessCard' // Assuming this component exists

// Register ScrollToPlugin globally for GSAP usage
gsap.registerPlugin(ScrollToPlugin)

// --- Data for the Banners ---
// Using a more meaningful array for the technology items
const techItems = [
  { name: 'wordpress', icon: '/images/icons/wordpress.svg' },
  { name: 'Shopify', icon: '/images/icons/shopify.svg' },
  { name: 'React', icon: '/images/icons/react.svg' },
  { name: 'wordpress', icon: '/images/icons/wordpress.svg' },
  { name: 'Shopify', icon: '/images/icons/shopify.svg' },
  { name: 'React', icon: '/images/icons/react.svg' },
  { name: 'wordpress', icon: '/images/icons/wordpress.svg' },
  { name: 'Shopify', icon: '/images/icons/shopify.svg' },
  { name: 'React', icon: '/images/icons/react.svg' },
  // { name: 'Next.js', icon: '/images/icons/wordpress.svg' },
  // { name: 'GSAP', icon: '/images/icons/wordpress.svg' },
  // { name: 'Tailwind CSS', icon: '/images/icons/wordpress.svg' },
  // { name: 'TypeScript', icon: '/images/icons/wordpress.svg' },
  // { name: 'Node.js', icon: '/images/icons/wordpress.svg' },
  // { name: 'Figma', icon: '/images/icons/wordpress.svg' },
]

/**
 * Custom hook to manage infinite horizontal scrolling for a given container.
 * @param {React.RefObject} containerRef - Ref of the scrollable container.
 * @param {string} direction - 'left' (scrolls to the end) or 'right' (scrolls to the start).
 * @param {number} speed - Duration in seconds for the scroll to complete one cycle.
 */
const useInfiniteScroll = (containerRef, direction = 'left', speed = 60) => {
  useGSAP(
    () => {
      const container = containerRef.current
      if (!container) return

      // The target scroll amount is the exact width of the ORIGINAL content (the first half)
      const content = container.firstChild
      if (!content) return

      // The total content width is duplicated (Content + Content). We scroll the width of one Content block.
      const contentWidth = content.scrollWidth / 2

      // Define the target scroll position and start position based on direction
      const startX = direction === 'left' ? 0 : contentWidth
      const targetX = direction === 'left' ? contentWidth : 0

      // 1. Instantly set the starting position before the animation begins
      gsap.set(container, { scrollLeft: startX })

      // 2. Create the infinite animation
      gsap.to(container, {
        scrollLeft: targetX,
        duration: speed,
        ease: 'none', // Essential for linear, smooth speed
        repeat: -1, // Infinite loop
        // When the animation completes, instantly jump back to the start position.
        onRepeat: () => {
          gsap.set(container, { scrollLeft: startX })
        },
      })
    },
    { scope: containerRef, dependencies: [direction, speed] }
  )
}

// Component for the individual card item (Replaces your inline JSX)
const CardItem = ({ name, icon }) => (
  <div className="flex-none">
    {/* Use whitespace-nowrap here to ensure the text doesn't wrap */}
    <div className="bg-hero-combo flex items-center gap-3 rounded-full px-5 py-3 font-medium whitespace-nowrap capitalize">
      {/* <div className="button-gradient flex items-center gap-3 rounded-full px-5 py-3 font-medium whitespace-nowrap capitalize"> */}

      <img src={icon} alt={`${name} icon`} className="h-8 w-8 object-contain" />
      <span>{name}</span>
    </div>
  </div>
)

const Technology = () => {
  // Refs for the two scrolling rows
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)

  // Apply the infinite scroll hook to the first row (Left Scroll: 0 -> Max)
  // Very slow scroll, e.g., 50 seconds per loop
  useInfiniteScroll(row1Ref, 'left', 70)

  // Apply the infinite scroll hook to the second row (Right Scroll: Max -> 0)
  // Very slow scroll, e.g., 70 seconds per loop, using a different speed creates a nice effect
  useInfiniteScroll(row2Ref, 'right', 70)

  // The content section that is duplicated
  const LoopingContent = (
    <div className="flex gap-5">
      {/* Original content */}
      {techItems.map((item, index) => (
        <CardItem key={`original-${index}`} name={item.name} icon={item.icon} />
      ))}
      {/* Duplication for seamless scroll reset */}
      {techItems.map((item, index) => (
        <CardItem
          key={`duplicate-${index}`}
          name={item.name}
          icon={item.icon}
        />
      ))}
    </div>
  )

  // Your original ProcessCard data (kept but not used for the infinite scroll part)
  const processWithImgSrc = [
    // ... (Your ProcessCard data here) ...
  ]

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-20">
      {/* --- Background Image (unchanged) --- */}
      <div className="absolute top-0 -left-35 z-10 md:top-20 lg:top-0">
        <img
          className="h-200 w-150 object-contain md:h-200 md:w-150 lg:h-full lg:w-full"
          src="/images/bg_images/technology_bg_3.webp"
        />
      </div>

      {/* --- Title Section (unchanged) --- */}
      <div className="z-10 flex flex-col items-center pt-20 capitalize lg:pt-48">
        <div className="capitalize">
          <h2 className="-mb-5 pl-11 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-21 sm:text-[30px] md:-mb-10 md:pl-24 md:text-[40px] lg:-mb-13 lg:pl-29 lg:text-[55px]">
            our
          </h2>
          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
            Technology
          </h1>
          <h2 className="-mt-2 pr-19 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:pr-31 sm:text-[30px] md:-mt-5 md:pr-39 md:text-[40px] lg:-mt-6 lg:pr-48 lg:text-[55px]">
            & Tools
          </h2>
        </div>
      </div>

      {/* --- Infinite Scrolling Banners --- */}
      <div className="relative flex w-full flex-col items-center gap-10 overflow-hidden pb-48">
        {/* 1. First Row: Scroll Left (0 -> Max) */}
        <div
          ref={row1Ref}
          className="hide-scrollbar flex w-screen overflow-x-scroll"
        >
          {LoopingContent}
        </div>

        {/* 2. Second Row: Scroll Right (Max -> 0) */}
        <div
          ref={row2Ref}
          className="hide-scrollbar flex w-screen overflow-x-scroll"
        >
          {LoopingContent}
        </div>

        <div className="linear-three absolute right-0 z-10 h-50 w-40 rotate-180"></div>
      </div>
      {/* The ProcessCard section from the previous context is now missing, 
                you might want to place it here if it was intended to remain */}
    </div>
  )
}

export default Technology

// <div className="flex flex-col ">
// <div className="flex flex-col items-center capitalize">
//   <div className="">
//     <h2 className="text-4xl pl-[84px] -mb-10">our</h2>
//     <h1 className="text-9xl font-semibold">Technology</h1>
//     <h2 className="text-end text-4xl -mt-5">& Tools</h2>
//   </div>
// </div>

//   <div className="flex self-center flex-nowrap overflow-x-scroll gap-5 w-[90vw] hide-scrollbar pt-10">
//     {processWithImgSrc.map((item) => (
//       <ProcessCard
//         img_src={item["img_src"]}
//         isFlip={item["isFlip"]}
//         title={item["title"]}
//         para={item["para"]}
//         extraClass="w-80 flex-none"
//       />
//     ))}
//   </div>
// </div>

// import ProcessCard from '../ui/ProcessCard'

// const Technology = () => {
//     const processWithImgSrc = [
//         {
//             img_src: '/images/process_1.webp',
//             title: 'Initiate the Morph',
//             para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
//             isFlip: false,
//         },
//         {
//             img_src: '/images/process_2.webp',
//             title: 'Visualize & Design',
//             para: 'Bring us your boldest ideas. We’ll craft sleek, futuristic visuals that align perfectly with your brand’s mission and forward-thinking identity.',
//             isFlip: true,
//         },
//         {
//             img_src: '/images/process_3.webp',
//             title: 'Development',
//             para: 'Your designs morph into interactive, scalable digital solutions—built to perform, impress, and grow with you.',
//             isFlip: false,
//         },
//         {
//             img_src: '/images/process_4.webp',
//             title: 'UI/UX Design',
//             para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
//             isFlip: false,
//         },
//         {
//             img_src: '/images/process_4.webp',
//             title: 'UI/UX Design',
//             para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
//             isFlip: false,
//         },
//         {
//             img_src: '/images/process_4.webp',
//             title: 'UI/UX Design',
//             para: 'Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.',
//             isFlip: false,
//         },
//     ]
//     return (
//         // <div className="flex flex-col ">
//         // <div className="flex flex-col items-center capitalize">
//         //   <div className="">
//         //     <h2 className="text-4xl pl-[84px] -mb-10">our</h2>
//         //     <h1 className="text-9xl font-semibold">Technology</h1>
//         //     <h2 className="text-end text-4xl -mt-5">& Tools</h2>
//         //   </div>
//         // </div>

//         //   <div className="flex self-center flex-nowrap overflow-x-scroll gap-5 w-[90vw] hide-scrollbar pt-10">
//         //     {processWithImgSrc.map((item) => (
//         //       <ProcessCard
//         //         img_src={item["img_src"]}
//         //         isFlip={item["isFlip"]}
//         //         title={item["title"]}
//         //         para={item["para"]}
//         //         extraClass="w-80 flex-none"
//         //       />
//         //     ))}
//         //   </div>
//         // </div>

//         <div className="relative flex w-full flex-col items-center justify-center gap-20">
//             <div className="absolute top-0 md:top-20 lg:top-0 -left-35 z-10">
//                 <img
//                     // className="object-contain h-85 w-85 md:h-[500px] md:w-[500px] lg:h-full lg:w-full"
//                     className="object-contain h-200 w-150 md:h-200 md:w-150 lg:h-full lg:w-full"
//                     // src="/images/bg_images/technology_bg.webp"
//                     src="/images/bg_images/technology_bg_3.webp"
//                 />
//             </div>

//             <div className="z-10 flex flex-col items-center pt-20 lg:pt-48 capitalize">
//                 <div className="capitalize">
//                     <h2 className="-mb-5 pl-11 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-21 sm:text-[30px] md:-mb-10 md:pl-24 md:text-[40px] lg:-mb-13 lg:pl-29 lg:text-[55px]">
//                         our
//                     </h2>

//                     <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
//                         Technology
//                     </h1>
//                     <h2 className="-mt-2 pr-19 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:pr-31 sm:text-[30px] md:-mt-5 md:pr-39 md:text-[40px] lg:-mt-6 lg:pr-48 lg:text-[55px]">
//                         & Tools
//                     </h2>
//                 </div>
//             </div>

//             <div className="flex w-full flex-col items-center gap-10 pb-48">
//                 <div className="hide-scrollbar flex w-[90vw] gap-5 overflow-x-scroll">
//                     {Array.from('fayyaz ansari').map((item) => {
//                         return (
//                             <div className="flex-none">
//                                 <div className="bg-hero-combo flex items-center gap-3 rounded-full px-5 py-3 font-medium capitalize">
//                                     <img
//                                         src="/images/icons/wordpress.svg"
//                                         alt="wordpress icon"

//                                     />
//                                     <p>Shopify</p>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 <div className="hide-scrollbar flex w-[90vw] gap-5 overflow-x-scroll">
//                     {Array.from('fayyaz ansari').map((item) => {
//                         return (
//                             <div className="flex-none">
//                                 <div className="bg-hero-combo flex items-center gap-3 rounded-full px-5 py-3 font-medium capitalize">
//                                     <img
//                                         src="/images/icons/wordpress.svg"
//                                         alt="wordpress icon"

//                                     />
//                                     <p>Shopify</p>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Technology
