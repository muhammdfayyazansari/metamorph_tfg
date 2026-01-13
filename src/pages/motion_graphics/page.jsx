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

const MotionGraphicsPage = () => {
  return (
    <>
    {/* 🔹 SEO META TAGS FOR MOTION GRAPHICS PAGE */}
<Helmet>
  <title>Motion Graphics, Animation & Visual Content Services | Metamorph Solutions</title>

  <meta
    name="description"
    content="Explore motion graphics, animated visuals, and animation services with Metamorph Solutions for dynamic digital content that captivates your audience."
  />

  <link
    rel="canonical"
    href="https://metamorph.solutions/motion-graphics"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Motion Graphics, Animation & Visual Content Services | Metamorph Solutions"
  />
  <meta
    property="og:description"
    content="Explore motion graphics, animated visuals, and animation services with Metamorph Solutions for dynamic digital content that captivates your audience."
  />
  <meta
    property="og:url"
    content="https://metamorph.solutions/motion-graphics"
  />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Motion Graphics, Animation & Visual Content Services | Metamorph Solutions"
  />
  <meta
    name="twitter:description"
    content="Explore motion graphics, animated visuals, and animation services with Metamorph Solutions for dynamic digital content that captivates your audience."
  />
</Helmet>

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
