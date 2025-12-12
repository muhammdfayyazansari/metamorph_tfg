import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children, delay = 0, direction = "bottom" }) => {
  const elementRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const element = elementRef.current;
        if (!element) return;

        const animations = {
          bottom: { y: 100, x: 0 },
          top: { y: -100, x: 0 },
          left: { y: 0, x: -100 },
          right: { y: 0, x: 100 },
        };

        const startAnimation = animations[direction] || animations.bottom;

        gsap.set(element, {
          opacity: 0,
          ...startAnimation,
        });

        gsap.to(element, {
          opacity: 1,
          x: 0,
          y: 0,
          delay,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        });
      }, elementRef); // 👈 context scoped to this element

      return () => ctx.revert(); // 👈 full cleanup
    },
    { dependencies: [delay, direction] }
  );

  return <div ref={elementRef}>{children}</div>;
};

export default ScrollReveal;



























// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollReveal = ({ children, delay = 0, direction = "bottom" }) => {
//   const elementRef = useRef(null);

//   useGSAP(
//     () => {
//       const element = elementRef.current;
//       if (!element) return;

//       const animations = {
//         bottom: { y: 100, x: 0 },
//         top: { y: -100, x: 0 },
//         left: { y: 0, x: -100 },
//         right: { y: 0, x: 100 },
//       };

//       const startAnimation = animations[direction] || animations.bottom;

//       gsap.set(element, {
//         opacity: 0,
//         ...startAnimation,
//       });

//       gsap.to(element, {
//         opacity: 1,
//         x: 0,
//         y: 0,
//         delay,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: element,
//           start: "top 85%",
//           end: "top 60%",
//           toggleActions: "play none none none",
//         },
//       });
//     },
//     { scope: elementRef } // <- context + cleanup
//   );

//   return <div ref={elementRef}>{children}</div>;
// };

// export default ScrollReveal;





























// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollReveal = ({ children, delay = 0, direction = "bottom" }) => {
//   const elementRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     const element = elementRef.current;
//     if (!element) return;

//     // Define start positions
//     const animations = {
//       bottom: { y: 100, x: 0 },
//       top: { y: -100, x: 0 },
//       left: { y: 0, x: -100 },
//       right: { y: 0, x: 100 },
//     };

//     const startAnimation = animations[direction] || animations.bottom;

//     // Set initial state
//     gsap.set(element, {
//       opacity: 0,
//       ...startAnimation,
//     });

//     // Create scroll-triggered animation
//     animationRef.current = gsap.to(element, {
//       opacity: 1,
//       y: 0,
//       x: 0,
//       duration: 1,
//       delay,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: element,
//         start: "top 85%",
//         end: "top 60%",
//         toggleActions: "play none none none",
//       },
//     });

//     // ✅ Proper cleanup
//     return () => {
//       if (animationRef.current) {
//         animationRef.current.scrollTrigger?.kill();
//         animationRef.current.kill();
//       }
//     };
//   }, [delay, direction]);

//   return <div ref={elementRef}>{children}</div>;
// };

// export default ScrollReveal;
