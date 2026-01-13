import Faqs from '../../components/Faqs'
import { Helmet } from "react-helmet-async";
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

const AnimationsPage = () => {
  return (
    <>
    {/* 🔹 SEO META TAGS FOR ANIMATION SERVICES PAGE */}
<Helmet>
  <title>2D & 3D Animation Services | Metamorph Solutions</title>

  <meta
    name="description"
    content="Metamorph Solutions offers professional animation services, including 2D and 3D animated videos, motion design, and visual storytelling to boost engagement."
  />

  <link
    rel="canonical"
    href="https://metamorph.solutions/animations"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="2D & 3D Animation Services | Metamorph Solutions"
  />
  <meta
    property="og:description"
    content="Metamorph Solutions offers professional animation services, including 2D and 3D animated videos, motion design, and visual storytelling to boost engagement."
  />
  <meta
    property="og:url"
    content="https://metamorph.solutions/animations"
  />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="2D & 3D Animation Services | Metamorph Solutions"
  />
  <meta
    name="twitter:description"
    content="Metamorph Solutions offers professional animation services, including 2D and 3D animated videos, motion design, and visual storytelling to boost engagement."
  />
</Helmet>

      <Hero />
      <ScrollReveal>
        <HeroBottomText />
      </ScrollReveal>
      <ScrollReveal>
        <MotionGraphics />
      </ScrollReveal>
      <ScrollReveal>
        <Faqs />
      </ScrollReveal>

      {/* <Brands /> */}
      {/* <Services /> */}
      {/* <UiUx /> */}

      {/* <Animation /> */}

      {/* <FeaturedProjects />
            <Technology />
            <People /> */}
    </>
  )
}

export default AnimationsPage
