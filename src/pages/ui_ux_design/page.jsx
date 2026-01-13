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

const UiUxDesignPage = () => {
  return (
    <>
    {/* 🔹 SEO META TAGS FOR UI & UX DESIGN PAGE */}
<Helmet>
  <title>Professional UI & UX Design Agency | Metamorph Solutions</title>

  <meta
    name="description"
    content="Get professional UI/UX design solutions from Metamorph Solutions to improve usability, engagement, and user satisfaction for web and mobile applications."
  />

  <link
    rel="canonical"
    href="https://metamorph.solutions/ui-ux-design"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Professional UI & UX Design Agency | Metamorph Solutions"
  />
  <meta
    property="og:description"
    content="Get professional UI/UX design solutions from Metamorph Solutions to improve usability, engagement, and user satisfaction for web and mobile applications."
  />
  <meta
    property="og:url"
    content="https://metamorph.solutions/ui-ux-design"
  />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Professional UI & UX Design Agency | Metamorph Solutions"
  />
  <meta
    name="twitter:description"
    content="Get professional UI/UX design solutions from Metamorph Solutions to improve usability, engagement, and user satisfaction for web and mobile applications."
  />
</Helmet>

      <Hero />
      <ScrollReveal>
        <HeroBottomText />
      </ScrollReveal>
      {/* <Brands /> */}
      {/* <Services /> */}
      <ScrollReveal>
        <UiUx />
      </ScrollReveal>
      {/* <MotionGraphics /> */}

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

export default UiUxDesignPage
