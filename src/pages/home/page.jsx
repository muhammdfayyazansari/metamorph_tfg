// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // Needed for smooth jump scroll

// // Register plugins
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// // Import your components
// import Faqs from '../../components/Faqs';
// import Brands from '../../components/HomePageComponents/Brands';
// import FeaturedProjects from '../../components/HomePageComponents/FeaturedProjects';
// import People from '../../components/HomePageComponents/People';
// import Process from '../../components/HomePageComponents/Process';
// import Services from '../../components/HomePageComponents/Services';
// import Technology from '../../components/HomePageComponents/Technology';
// import Hero from './components/Hero';
// import HeroBottomText from './components/HeroBottomText';

// // Define the section data (IDs, colors, and the component to render)
// const sectionData = [
//   { id: 'brands-section', component: Brands, color: '#102A43', icon: '🎨', title: 'Brands' },
//   { id: 'services-section', component: Services, color: '#334E68', icon: '💻', title: 'Services' },
//   { id: 'projects-section', component: FeaturedProjects, color: '#486581', icon: '▶️', title: 'Projects' },
//   { id: 'process-section', component: Process, color: '#627D98', icon: '⭐', title: 'Process' },
//   { id: 'technology-section', component: Technology, color: '#829AB1', icon: '🎯', title: 'Tech Stack' },
//   { id: 'people-section', component: People, color: '#A5B5C9', icon: '👥', title: 'Team' },
//   { id: 'faqs-section', component: Faqs, color: '#CCD6E1', icon: '❓', title: 'FAQs' },
// ];

// const Home = () => {
//   const containerRef = useRef(null);
//   const navRef = useRef(null);

//   useEffect(() => {
//     const mainContainer = containerRef.current;
    
//     // --- 1. Background Color Animation ---
//     const bgTimeline = gsap.timeline();

//     sectionData.forEach((section, index) => {
//       // Create a background transition point for each section start
//       const nextColor = sectionData[index + 1]?.color || sectionData[sectionData.length - 1].color;
      
//       if (index < sectionData.length - 1) {
//         bgTimeline.to(mainContainer, {
//           backgroundColor: nextColor,
//           duration: 1.0, 
//         }, section.id); 
//       }
//     });

//     ScrollTrigger.create({
//       trigger: mainContainer,
//       scroller: 'body',
//       start: 'top top',
//       end: 'bottom bottom',
//       scrub: 1.5,
//       animation: bgTimeline,
//     });


//     // --- 2. Section Highlighting (Fixed Bar Logic) ---
//     const updateActiveNav = (id) => {
//       // Remove 'is-active' from all
//       navRef.current.querySelectorAll('.nav-icon').forEach(icon => {
//         icon.classList.remove('is-active');
//       });
//       // Add 'is-active' to the target icon
//       const activeIcon = navRef.current.querySelector(`.nav-icon[data-target='${id}']`);
//       if (activeIcon) {
//         activeIcon.classList.add('is-active');
//       }
//     };
    
//     // Create ScrollTrigger for each section to handle icon highlighting
//     sectionData.forEach((section) => {
//       ScrollTrigger.create({
//         trigger: `#${section.id}`,
//         scroller: 'body',
//         start: 'top center+=100', // Trigger when section hits the center of the viewport
//         end: 'bottom center+=100',
        
//         onEnter: () => updateActiveNav(section.id),
//         onEnterBack: () => updateActiveNav(section.id),
//       });
//     });

//     // Initial setup
//     if (sectionData.length > 0) {
//       gsap.set(mainContainer, { backgroundColor: sectionData[0].color });
//       updateActiveNav(sectionData[0].id);
//     }

//     // Cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   // --- 3. Click Handler for Smooth Scroll ---
//   const handleNavClick = (id) => {
//     gsap.to(window, {
//       duration: 1,
//       scrollTo: {
//         y: `#${id}`,
//         offset: 0
//       },
//       ease: 'power2.inOut'
//     });
//   };

//   return (
//     <div ref={containerRef} className="min-h-screen">
      
//       <Hero />
//       <HeroBottomText />

//       {/* Fixed Sidebar Navigation */}
//       <div 
//         ref={navRef}
//         className="fixed left-4 top-1/2 z-50 -translate-y-1/2 rounded-2xl bg-black/50 p-2 shadow-xl hidden md:block" // Hide on small screens
//       >
//         {sectionData.map((section) => (
//           <div 
//             key={section.id} 
//             data-target={section.id} 
//             onClick={() => handleNavClick(section.id)}
//             className="nav-icon my-2 cursor-pointer transition-all duration-300 relative before:content-[''] before:absolute before:inset-0 before:rounded-full before:opacity-0 before:bg-white/30 hover:before:opacity-100"
//           >
//             <div className="p-3 rounded-full bg-transparent is-active:bg-white/80 transition-all duration-500">
//               <span className="text-3xl" title={section.title}>{section.icon}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Dynamic Main Content Sections */}
//       <main>
//         {sectionData.map((section) => {
//           const SectionComponent = section.component;
//           return (
//             <section
//               key={section.id}
//               id={section.id}
//               // Add padding/margin to ensure sections fill enough vertical space
//               className="py-20 min-h-[50vh] text-white" 
//             >
//               <SectionComponent />
//             </section>
//           );
//         })}
//       </main>

//     </div>
//   );
// }

// export default Home;















































import ScrollReveal from '../../components/animations/ScrollReveal'
import Faqs from '../../components/Faqs'
import Brands from '../../components/HomePageComponents/Brands'
import FeaturedProjects from '../../components/HomePageComponents/FeaturedProjects'
import People from '../../components/HomePageComponents/People'
import Process from '../../components/HomePageComponents/Process'
import Services from '../../components/HomePageComponents/Services'
import Technology from '../../components/HomePageComponents/Technology'
import Hero from './components/Hero'
import HeroBottomText from './components/HeroBottomText'

const Home = () => {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <HeroBottomText />
      </ScrollReveal>
      <ScrollReveal>
        <Brands />
      </ScrollReveal>
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedProjects />
      </ScrollReveal>
      <ScrollReveal>
        <Process />
      </ScrollReveal>
      <ScrollReveal>
        <Technology />
      </ScrollReveal>
      <ScrollReveal>
        <People />
      </ScrollReveal>
      <ScrollReveal>
        <Faqs />
      </ScrollReveal>
    </>
  )
}

export default Home
