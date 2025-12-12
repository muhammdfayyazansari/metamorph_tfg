import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Brands = () => {
    const logos = [
        "/images/ecwid_logo.svg",
        "/images/shopify_logo.svg",
        "/images/volusion_logo.svg",
        "/images/woocommerce_logo.svg",
    ];

    // Duplicate the logos array once for the seamless loop
    const doubledLogos = [...logos, ...logos];

    // Define the desired width in pixels
    const CARD_WIDTH = 250; 
    
    // Define dimensions based on the logo container classes:
    // mx-10 (since 40px margin is mx-10 in Tailwind) -> 20px left, 20px right = 40px total margin
    const CARD_MARGIN_X = 40; 
    
    // The total space occupied by one logo item, including its margins
    const TOTAL_CARD_WIDTH = CARD_WIDTH + (CARD_MARGIN_X * 2); // 250 + 80 = 330px

    // Refs for GSAP scoping and element manipulation
    const marqueeContainerRef = useRef(null);
    const marqueeContentRef = useRef(null);

    useGSAP(() => {
        const content = marqueeContentRef.current;
        if (!content) return;

        // Calculate the distance to slide: Width of the original set of logos.
        // This is the CRITICAL value that must be EXACTLY the width of the first set of logos.
        const slideDistance = logos.length * TOTAL_CARD_WIDTH;

        // Apply GSAP animation to the content container
        gsap.fromTo(
            content,
            { x: 0 },
            { 
                x: -slideDistance, // Moves left by the width of the original set
                duration: 25, // Increased duration for a smooth, slow linear scroll (as requested 10-15 seconds, setting slightly higher)
                ease: "none", // ESSENTIAL: Ensures constant speed for a perfect loop
                repeat: -1
            }
        );

    }, { scope: marqueeContainerRef, dependencies: [logos.length] });

    // Calculate the total required width for the inner container (doubled logos)
    const innerContentWidth = doubledLogos.length * TOTAL_CARD_WIDTH;

    return (
        // Outer section for layout and overflow hidden
        <section 
            ref={marqueeContainerRef} 
            className="relative mx-auto w-full overflow-hidden mt-10"
        >
            {/* Marquee Content (The moving element) */}
            <div 
                ref={marqueeContentRef}
                // Set the total width required to hold all doubled logos
                style={{ width: `${innerContentWidth}px` }} 
                className="flex items-start flex-nowrap"
            >
                {doubledLogos.map((path, index) => (
                    <div 
                        key={index} 
                        // FIX: Apply the fixed 250px width and flex-none to ensure the calculation is correct
                        // FIX: Changed 'mx-6' (12px margin) to 'mx-10' to match the CARD_MARGIN_X = 40 (20px left, 20px right)
                        className="flex-none w-[250px] mx-10" 
                    >
                        <div className="py-4 rounded-xl flex items-center justify-center w-full">
                            <img src={path} alt={`Logo ${index}`} className="w-full mx-auto h-16 object-contain" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Brands;


// import { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(useGSAP);

// const Brands = () => {
//     const logos = [
//         "/images/ecwid_logo.svg",
//         "/images/shopify_logo.svg",
//         "/images/volusion_logo.svg",
//         "/images/woocommerce_logo.svg",
//     ];

//     const marqueeRef = useRef(null);
//     const doubledLogos = [...logos, ...logos];

//     // Define fixed dimensions for consistent calculation
//     const LOGO_WIDTH = 160; // w-40
//     const LOGO_GAP = 20;    // equivalent of space-x-5

//     useGSAP(() => {
//         const marqueeElement = marqueeRef.current;
//         if (!marqueeElement) return;

//         // Calculate the distance: Total width of the original set of logos + all their gaps.
//         const totalLogos = logos.length;
        
//         // Total distance to slide is the width of the original set including internal spacing.
//         // (4 logos * 160px) + (4 spaces * 20px) = 640 + 80 = 720px
//         const slideDistance = (totalLogos * LOGO_WIDTH) + (totalLogos * LOGO_GAP);

//         // Calculate the total required width for the inner container (doubled logos)
//         // (8 logos * 160px) + (8 spaces * 20px) = 1280 + 160 = 1440px
//         // We will use this to set the inner container width.
//         const innerWidth = (doubledLogos.length * LOGO_WIDTH) + (doubledLogos.length * LOGO_GAP);


//         // Set the actual animation
//         gsap.to(marqueeElement, {
//             x: `-${slideDistance}px`, // Slide left by the width of the original set
//             duration: 15, // Time for one loop (adjust speed here)
//             ease: "linear",
//             repeat: -1, 
//             // Important for seamless: When the repeat happens, it instantly jumps back to x: 0
//             // and the animation continues, creating the illusion of infinite scroll.
//         });

//     }, { scope: marqueeRef, dependencies: [logos.length] }); 

//     return (
//         // OUTER CONTAINER: Handles overflow hiding
//         // We remove 'justify-around' as it prevents linear sliding.
//         <div className="overflow-x-hidden w-full p-6 lg:py-8 lg:px-16">
//             <div 
//                 ref={marqueeRef}
//                 // INNER CONTAINER: Moves left
//                 // Using flex-nowrap and setting the total calculated width is critical.
//                 // Using 'gap-5' (20px) instead of 'space-x-5' for better calculation consistency.
//                 className="flex flex-nowrap gap-5 items-center" 
//                 style={{ width: `${innerWidth}px` }} 
//             >
//                 {/* Render the doubled list of logos */}
//                 {doubledLogos.map((path, index) => (
//                     <div key={index} className="flex-none w-40">
//                         <img src={path} alt={path + index} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Brands;




// const Brands = () => {
//   const logos = [
//     "/images/ecwid_logo.svg",
//     "/images/shopify_logo.svg",
//     "/images/volusion_logo.svg",
//     "/images/woocommerce_logo.svg",
//   ];

//   return (
//     // <div className="flex items-baseline flex-nowrap overflow-x-scroll hide-scrollbar space-x-5 w-full justify-around p-6 lg:py-8 lg:px-16">
//     <div className="flex items-baseline flex-nowrap overflow-x-scroll hide-scrollbar space-x-5 w-full justify-around p-6 lg:py-8 bg-accent-gold">
//       {logos.map((path, index) => {
//         return (
//           <div className="flex-none w-40">
//             <img src={path} alt={path + index} />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Brands;
