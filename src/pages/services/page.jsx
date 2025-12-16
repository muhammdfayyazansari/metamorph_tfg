// import React, { useEffect, useLayoutEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// // ... (Your component imports) ...
// import Faqs from '../../components/Faqs'
// import Services from './components/Services'
// import Hero from './components/Hero'
// import HeroBottomText from './components/HeroBottomText'
// import UiUx from './components/UiUx'
// import MotionGraphics from './components/MotionGraphics'
// import Animation from './components/Animation'

// // --- Section Data ---
// const sectionData = [
//   // IMPORTANT: The first ID here is what we will use to anchor the nav bar's start visibility.
//   {
//     id: 'services-section',
//     component: Services,
//     title: 'Branding and Logos',
//     icon_src: 'branding_and_logos',
//   },
//   {
//     id: 'uiux-section',
//     component: UiUx,
//     title: 'UI/UX Design',
//     icon_src: 'ui_ux_design',
//   },
//   {
//     id: 'motion-graphics-section',
//     component: MotionGraphics,
//     title: 'Motion Design',
//     icon_src: 'motion_design',
//   },
//   {
//     id: 'animation-section',
//     component: Animation,
//     title: '2D/3D Animations',
//     icon_src: '2d_3d_animations',
//   },
// ]

// const ServicesPage = () => {
//   const containerRef = useRef(null)
//   const navRef = useRef(null)
//   // 🚨 FIX: Switched from useEffect to useLayoutEffect 🚨

//   useLayoutEffect(() => {
//     const navElement = navRef.current

//     if (sectionData.length === 0 || !navElement) return

//     const firstSectionId = sectionData[0].id

//     const lastSectionId = sectionData[sectionData.length - 1].id

//     // --- 1. Initial State: Hide the navigation bar synchronously ---

//     // This ensures opacity: 0 is set before the browser paints.

//     gsap.set(navElement, { opacity: 0 })

//     // We can also create a GSAP context for better cleanup, but using the cleanup function is fine.

//     // --- 2. Navigation Bar Visibility Trigger ---

//     ScrollTrigger.create({
//       trigger: `#${firstSectionId}`,

//       scroller: 'body',

//       start: 'top top',

//       end: `#${lastSectionId} bottom-=100`,

//       onToggle: ({ isActive }) => {
//         gsap.to(navElement, {
//           opacity: isActive ? 1 : 0,

//           duration: 0.5,

//           ease: 'power2.inOut',
//         })
//       },
//     })

//     // --- 3. Section Highlighting Logic ---

//     const updateActiveNav = (id) => {
//       if (!navRef.current) return

//       navRef.current.querySelectorAll('.nav-icon').forEach((icon) => {
//         icon.classList.remove('is-active')
//       })

//       const activeIcon = navRef.current.querySelector(
//         `.nav-icon[data-target='${id}']`
//       )

//       if (activeIcon) {
//         activeIcon.classList.add('is-active')
//       }
//     }

//     sectionData.forEach((section) => {
//       ScrollTrigger.create({
//         trigger: `#${section.id}`,

//         scroller: 'body',

//         start: 'top center+=100',

//         end: 'bottom center+=100',

//         onEnter: () => updateActiveNav(section.id),

//         onEnterBack: () => updateActiveNav(section.id),
//       })
//     })

//     // Cleanup function

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     }
//   }, []) // Empty dependency array means it runs once on mount

//   // --- Click Handler for Smooth Scroll (Remains the same) ---

//   const handleNavClick = (id) => {
//     gsap.to(window, {
//       duration: 1,

//       scrollTo: {
//         y: `#${id}`,

//         offset: 0,
//       },

//       ease: 'power2.inOut',
//     })
//   }

//   return (
//     <div ref={containerRef} className="min-h-screen">
//       <Hero />
//       <HeroBottomText />

//       {/* --- Fixed Navigation Bar Element --- */}
//       <div
//         ref={navRef}
//         className="fixed top-1/2 right-4 z-50 block -translate-y-1/2 rounded-2xl p-2 shadow-xl"
//       >
//         <div className="glass card-gradient flex flex-col items-center justify-around gap-6 rounded-xl px-3 py-5">
//           {sectionData.map((item) => (
//             <div
//               key={item.id}
//               data-target={item.id}
//               onClick={() => handleNavClick(item.id)}
//               className="nav-icon relative cursor-pointer transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:opacity-0 before:content-[''] hover:before:opacity-100"
//               title={item.title}
//             >
//               <div className="is-active:bg-white/80 rounded-full bg-transparent p-3 transition-all duration-500">
//                 <img
//                   className="h-5 w-5 object-contain"
//                   src={'/images/icons/' + item['icon_src'] + '.svg'}
//                   alt={item['title']}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* --- END Fixed Navigation Bar --- */}

//       <main>
//         {sectionData.map((section) => {
//           const SectionComponent = section.component

//           return (
//             <section
//               key={section.id}
//               id={section.id}
//               className="min-h-[80vh] py-20"
//             >
//               <SectionComponent />
//             </section>
//           )
//         })}
//       </main>

//       <Faqs />
//     </div>
//   )
// }

// export default ServicesPage

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// Import your components
import Faqs from '../../components/Faqs'
import Services from './components/Services'
import Hero from './components/Hero'
import HeroBottomText from './components/HeroBottomText'
import UiUx from './components/UiUx'
import MotionGraphics from './components/MotionGraphics'
import Animation from './components/Animation'
import ScrollReveal from '../../components/animations/ScrollReveal'

// --- Section Data (Mapping content to nav) ---
const sectionData = [
  {
    id: 'services-section',
    component: Services,
    title: 'Branding and Logos',
    icon_src: 'branding_and_logos',
  },
  {
    id: 'uiux-section',
    component: UiUx,
    title: 'UI/UX Design',
    icon_src: 'ui_ux_design',
  },
  {
    id: 'motion-graphics-section',
    component: MotionGraphics,
    title: 'Motion Design',
    icon_src: 'motion_design',
  },
  {
    id: 'animation-section',
    component: Animation,
    title: '2D/3D Animations',
    icon_src: '2d_3d_animations',
  },
  // We can track Faqs too if desired, but we'll stick to the main services for now.
]

const ServicesPage = () => {
  const containerRef = useRef(null)
  const navRef = useRef(null)

  // useEffect(() => {
  //   // --- Removed Background Color Animation Logic ---
  //   // The main container background will now be managed by your CSS theme.

  //   // --- Section Highlighting Logic ---
  //   const updateActiveNav = (id) => {
  //     if (!navRef.current) return;
  //     // 1. Remove 'is-active' from all icons
  //     navRef.current.querySelectorAll('.nav-icon').forEach(icon => {
  //       icon.classList.remove('is-active');
  //     });
  //     // 2. Add 'is-active' to the target icon
  //     const activeIcon = navRef.current.querySelector(`.nav-icon[data-target='${id}']`);
  //     if (activeIcon) {
  //       activeIcon.classList.add('is-active');
  //     }
  //   };

  //   // Create ScrollTrigger for each component section
  //   sectionData.forEach((section) => {
  //     ScrollTrigger.create({
  //       trigger: `#${section.id}`,
  //       scroller: 'body',
  //       start: 'top center+=100',
  //       end: 'bottom center+=100',

  //       onEnter: () => updateActiveNav(section.id),
  //       onEnterBack: () => updateActiveNav(section.id),
  //     });
  //   });

  //   // Cleanup function
  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);

  // --- Click Handler for Smooth Scroll ---
  const handleNavClick = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `#${id}`,
        offset: 0,
      },
      ease: 'power2.inOut',
    })
  }

  useEffect(() => {
    if (!navRef.current) return

    gsap.set(navRef.current, {
      autoAlpha: 0, // opacity + visibility
      y: 20,
      pointerEvents: 'none',
    })

    // Show nav when Services section starts
    ScrollTrigger.create({
      trigger: '#services-section',
      start: 'top center',
      onEnter: () => {
        gsap.to(navRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          pointerEvents: 'auto',
        })
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, {
          autoAlpha: 0,
          y: 20,
          duration: 0.4,
          ease: 'power2.in',
          pointerEvents: 'none',
        })
      },
    })

    // --- Existing section highlighting logic ---
    const updateActiveNav = (id) => {
      if (!navRef.current) return

      navRef.current.querySelectorAll('.nav-icon').forEach((icon) => {
        icon.classList.remove('is-active')
      })

      const activeIcon = navRef.current.querySelector(
        `.nav-icon[data-target='${id}']`
      )
      if (activeIcon) activeIcon.classList.add('is-active')
    }

    sectionData.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section.id}`,
        start: 'top center+=100',
        end: 'bottom center+=100',
        onEnter: () => updateActiveNav(section.id),
        onEnterBack: () => updateActiveNav(section.id),
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
  return (
    // containerRef is still useful if you ever want to target the whole page with GSAP later
    <div ref={containerRef} className="min-h-screen">
      <Hero />
      <ScrollReveal>
        <HeroBottomText />
      </ScrollReveal>

      {/* --- REVISED Fixed Navigation Bar (Transparent) --- */}
      <div
        ref={navRef}
        className="fixed top-1/2 right-4 z-50 hidden -translate-y-1/2 rounded-2xl bg-transparent p-2 shadow-xl md:block"
      >
        {/* Changed from 'bg-black/50' to 'glass card-gradient' for transparency/subtle effect */}
        <div className="glass card-gradient flex flex-col items-center justify-around space-y-15 rounded-xl p-3">
          {sectionData.map((item) => (
            <div
              key={item.id}
              data-target={item.id}
              onClick={() => handleNavClick(item.id)}
              className="nav-icon relative cursor-pointer transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:opacity-0 before:content-[''] hover:before:opacity-100"
              title={item.title}
            >
              {/* The div below handles the background highlight for the active state */}
              <div className="is-active:bg-white/80 rounded-lg bg-transparent p-2 transition-all duration-500">
                <img
                  className="h-8 w-8 object-contain"
                  src={'/images/icons/' + item['icon_src'] + '.svg'}
                  alt={item['title']}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* --- END Fixed Navigation Bar --- */}

      {/* Main Content Sections - Now using sectionData to render and assign IDs */}
      <main>
        {sectionData.map((section) => {
          const SectionComponent = section.component
          return (
            <section key={section.id} id={section.id} className="min-h-[80vh]">
              <SectionComponent />
            </section>
          )
        })}
      </main>

      <Faqs />
    </div>
  )
}

export default ServicesPage

// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
// // // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
// import Faqs from '../../components/Faqs'
// import Brands from '../../components/HomePageComponents/Brands'
// import FeaturedProjects from '../../components/HomePageComponents/FeaturedProjects'
// import People from '../../components/HomePageComponents/People'
// import Process from '../../components/HomePageComponents/Process'
// import Services from './components/Services'
// import Technology from '../../components/HomePageComponents/Technology'
// import Hero from './components/Hero'
// import HeroBottomText from './components/HeroBottomText'
// import UiUx from './components/UiUx'
// import MotionGraphics from './components/MotionGraphics'
// import Animation from './components/Animation'
// import ScrollReveal from '../../components/animations/ScrollReveal'

// const servicesWithImgSrc = [
//   {
//     img_src: 'branding_and_logos',
//     title: 'Branding and Logos',
//     // icon: "/images/icons/branding_and_logos.svg", // Example placeholder
//   },
//   {
//     img_src: 'motion_design',
//     title: 'Motion Design',
//   },
//   {
//     img_src: 'ui_ux_design',
//     title: 'UI/UX Design',
//   },
//   {
//     img_src: 'digital_marketing',
//     title: 'Digital Marketing',
//   },
//   {
//     img_src: '2d_3d_animations',
//     title: '2D/3D Animations',
//   },
// ]

// const ServicesPage = () => {
//   const containerRef = useRef(null)
//   const navRef = useRef(null)

//   useEffect(() => {
//     const mainContainer = containerRef.current

//     // --- 1. Background Color Animation (Optional but smooth) ---
//     const bgTimeline = gsap.timeline()

//     sectionData.forEach((section, index) => {
//       const nextColor =
//         sectionData[index + 1]?.color ||
//         sectionData[sectionData.length - 1].color

//       if (index < sectionData.length - 1) {
//         bgTimeline.to(
//           mainContainer,
//           {
//             backgroundColor: nextColor,
//             duration: 1.0,
//           },
//           section.id
//         )
//       }
//     })

//     if (sectionData.length > 0) {
//       // Set initial background color
//       gsap.set(mainContainer, { backgroundColor: sectionData[0].color })
//     }

//     // Attach the timeline to the scroll
//     ScrollTrigger.create({
//       trigger: mainContainer,
//       scroller: 'body',
//       start: 'top top',
//       end: 'bottom bottom',
//       scrub: 1.5,
//       animation: bgTimeline,
//     })

//     // --- 2. Section Highlighting Logic ---
//     const updateActiveNav = (id) => {
//       if (!navRef.current) return
//       navRef.current.querySelectorAll('.nav-icon').forEach((icon) => {
//         icon.classList.remove('is-active')
//       })
//       const activeIcon = navRef.current.querySelector(
//         `.nav-icon[data-target='${id}']`
//       )
//       if (activeIcon) {
//         activeIcon.classList.add('is-active')
//       }
//     }

//     // Create ScrollTrigger for each component section
//     sectionData.forEach((section) => {
//       ScrollTrigger.create({
//         trigger: `#${section.id}`,
//         scroller: 'body',
//         start: 'top center+=100', // When section is 100px past the center
//         end: 'bottom center+=100',

//         onEnter: () => updateActiveNav(section.id),
//         onEnterBack: () => updateActiveNav(section.id),
//       })
//     })

//     // Cleanup function
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     }
//   }, [])

//   // --- 3. Click Handler for Smooth Scroll ---
//   const handleNavClick = (id) => {
//     gsap.to(window, {
//       duration: 1,
//       scrollTo: {
//         y: `#${id}`,
//         offset: 0,
//       },
//       ease: 'power2.inOut',
//     })
//   }

//   return (
//     <div ref={containerRef} className="min-h-screen">
//       <Hero />

//       <ScrollReveal>
//         <HeroBottomText />
//       </ScrollReveal>

//       <div
//         ref={navRef}
//         className="sticky top-0 right-0 z-20 flex h-screen w-full items-center justify-end"
//       >
//         <ScrollReveal>
//           <div className="glass card-gradient flex flex-col items-center justify-around gap-6 rounded-tl-2xl rounded-bl-2xl px-3 py-5">
//             {servicesWithImgSrc.map((item, index) => {
//               return (
//                 <div className="rounded-md bg-white p-2">
//                   <img
//                     className="h-5 w-5 object-contain"
//                     src={'/images/icons/' + item['img_src'] + '.svg'}
//                     alt={item['title']}
//                   />
//                 </div>
//               )
//             })}
//           </div>
//         </ScrollReveal>
//       </div>

//       {/* <Brands /> */}

//       <ScrollReveal>
//         <Services />
//       </ScrollReveal>
//       <ScrollReveal>
//         <UiUx />
//       </ScrollReveal>

//       <ScrollReveal>
//         <MotionGraphics />
//       </ScrollReveal>
//       <ScrollReveal>
//         <Animation />
//       </ScrollReveal>

//       {/* <FeaturedProjects />
//             <Technology />
//             <People /> */}

//       <Faqs />
//     </div>
//   )
// }

// export default ServicesPage
