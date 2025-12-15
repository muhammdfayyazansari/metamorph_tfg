import Faqs from '../../components/Faqs'
import Brands from '../../components/HomePageComponents/Brands'
import FeaturedProjects from '../../components/HomePageComponents/FeaturedProjects'
import People from '../../components/HomePageComponents/People'
import Process from '../../components/HomePageComponents/Process'
import Services from './components/Services'
import Technology from '../../components/HomePageComponents/Technology'
import Hero from './components/Hero'
import HeroBottomText from './components/HeroBottomText'
import UiUx from './components/UiUx'
import MotionGraphics from './components/MotionGraphics'
import Animation from './components/Animation'
import ScrollReveal from '../../components/animations/ScrollReveal'

const servicesWithImgSrc = [
  {
    img_src: 'branding_and_logos',
    title: 'Branding and Logos',
    // icon: "/images/icons/branding_and_logos.svg", // Example placeholder
  },
  {
    img_src: 'motion_design',
    title: 'Motion Design',
  },
  {
    img_src: 'ui_ux_design',
    title: 'UI/UX Design',
  },
  {
    img_src: 'digital_marketing',
    title: 'Digital Marketing',
  },
  {
    img_src: '2d_3d_animations',
    title: '2D/3D Animations',
  },
]

const ServicesPage = () => {
  return (
    <>
      <Hero />

      <ScrollReveal>
        <HeroBottomText />
      </ScrollReveal>

      <div className="sticky top-0 right-0 z-20 flex h-screen w-full items-center justify-end">
        <ScrollReveal>
          <div className="glass card-gradient flex flex-col items-center justify-around gap-6 rounded-tl-2xl rounded-bl-2xl px-3 py-5">
            {servicesWithImgSrc.map((item, index) => {
              return (
                <div className="rounded-md bg-white p-2">
                  <img
                    className="h-5 w-5 object-contain"
                    src={'/images/icons/' + item['img_src'] + '.svg'}
                    alt={item['title']}
                  />
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>

      {/* <Brands /> */}

      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <UiUx />
      </ScrollReveal>

      <ScrollReveal>
        <MotionGraphics />
      </ScrollReveal>
      <ScrollReveal>
        <Animation />
      </ScrollReveal>

      {/* <FeaturedProjects />
            <Technology />
            <People /> */}

      <Faqs />
    </>
  )
}

export default ServicesPage
