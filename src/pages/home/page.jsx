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
