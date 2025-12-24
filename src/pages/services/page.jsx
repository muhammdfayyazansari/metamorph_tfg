import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
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

  useGSAP(() => {
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
  }, { scope: containerRef }) // Use containerRef for scoping
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
        className="fixed top-1/2 right-0 z-50 hidden -translate-y-1/2  bg-transparent p-2 pr-0 md:block"
      >
        {/* Changed from 'bg-black/50' to 'glass card-gradient' for transparency/subtle effect */}
        <div className="glass card-gradient flex flex-col items-center justify-around space-y-15 rounded-l-2xl p-3">
          {sectionData.map((item) => (
            <div
              key={item.id}
              data-target={item.id}
              onClick={() => handleNavClick(item.id)}
              className="nav-icon relative transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:opacity-0 before:content-[''] hover:before:opacity-100"
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
