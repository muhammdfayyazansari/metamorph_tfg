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

const MotionGraphicsPage = () => {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <HeroBottomText />
      </ScrollReveal>
      {/* <Brands /> */}
      {/* <Services /> */}
      <ScrollReveal>
        {/* <UiUx /> */}
        <MotionGraphics />
      </ScrollReveal>

      {/* <Animation /> */}

      {/* <FeaturedProjects />
            <Technology />
            <People /> */}
      <ScrollReveal>
        <Faqs />
      </ScrollReveal>
    </>
  )
}

export default MotionGraphicsPage
