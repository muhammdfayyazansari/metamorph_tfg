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
import MotionGraphics from './components/OtherCaseStudies'
import Animation from './components/Animation'
import OtherCaseStudies from './components/OtherCaseStudies'
import ScrollReveal from '../../components/animations/ScrollReveal'

const CaseStudyPage = () => {
  return (
    <div className="case-study-bg">
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      {/* 
      <HeroBottomText /> */}
      {/* <Brands /> */}
      <ScrollReveal>
        <UiUx />
      </ScrollReveal>
      <ScrollReveal>
        <OtherCaseStudies />
      </ScrollReveal>

      {/* <Animation /> */}

      {/* <FeaturedProjects />
            <Technology />
            <People /> */}

      {/* <Faqs /> */}
    </div>
  )
}

export default CaseStudyPage
