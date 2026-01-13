import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const Brands = () => {
  const logos = [
    '/images/ecwid_logo.svg',
    '/images/shopify_logo.svg',
    '/images/volusion_logo.svg',
    '/images/woocommerce_logo.svg',
  ]

  // Duplicate the logos array once for the seamless loop
  const doubledLogos = [...logos, ...logos]

  // Define the desired width in pixels
  const CARD_WIDTH = 250

  // Define dimensions based on the logo container classes:
  // mx-10 (since 40px margin is mx-10 in Tailwind) -> 20px left, 20px right = 40px total margin
  const CARD_MARGIN_X = 40

  // The total space occupied by one logo item, including its margins
  const TOTAL_CARD_WIDTH = CARD_WIDTH + CARD_MARGIN_X * 2 // 250 + 80 = 330px

  // Refs for GSAP scoping and element manipulation
  const marqueeContainerRef = useRef(null)
  const marqueeContentRef = useRef(null)

  useGSAP(
    () => {
      const content = marqueeContentRef.current
      if (!content) return

      // Calculate the distance to slide: Width of the original set of logos.
      // This is the CRITICAL value that must be EXACTLY the width of the first set of logos.
      const slideDistance = logos.length * TOTAL_CARD_WIDTH

      // Apply GSAP animation to the content container
      gsap.fromTo(
        content,
        { x: 0 },
        {
          x: -slideDistance, // Moves left by the width of the original set
          duration: 25, // Increased duration for a smooth, slow linear scroll (as requested 10-15 seconds, setting slightly higher)
          ease: 'none', // ESSENTIAL: Ensures constant speed for a perfect loop
          repeat: -1,
        }
      )
    },
    { scope: marqueeContainerRef, dependencies: [logos.length] }
  )

  // Calculate the total required width for the inner container (doubled logos)
  const innerContentWidth = doubledLogos.length * TOTAL_CARD_WIDTH

  return (
    <div className="relative w-full mt-10">
      {/* Outer section for layout and overflow hidden */}
      <section
        ref={marqueeContainerRef}
        className="relative  w-full overflow-hidden"
      >
        {/* Marquee Content (The moving element) */}
        <div
          ref={marqueeContentRef}
          // Set the total width required to hold all doubled logos
          style={{ width: `${innerContentWidth}px` }}
          className="flex flex-nowrap items-start"
        >
          {doubledLogos.map((path, index) => (
            <div
              key={index}
              // FIX: Apply the fixed 250px width and flex-none to ensure the calculation is correct
              // FIX: Changed 'mx-6' (12px margin) to 'mx-10' to match the CARD_MARGIN_X = 40 (20px left, 20px right)
              className="mx-10 w-[250px] flex-none"
            >
              <div className="flex w-full items-center justify-center rounded-xl py-4">
                <img
                  src={path}
                  alt={`Logo ${index}`}
                  className="mx-auto h-16 w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="linear-three absolute right-0 -top-10 z-10 h-50 w-40 rotate-180"></div>
      <div className="linear-three absolute left-0 -top-10 z-10 h-50 w-40"></div>
      <div className="linear-three absolute left-0 bottom-0 z-10 h-50 w-40"></div>
    </div>
  )
}

export default Brands
