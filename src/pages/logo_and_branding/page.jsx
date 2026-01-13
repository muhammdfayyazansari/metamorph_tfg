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

const LogoAndBranding = () => {
  return (
    <>
    {/* 🔹 SEO META TAGS FOR LOGO & BRANDING PAGE */}
<Helmet>
  <title>Professional Logo & Brand Identity Design | Metamorph Solutions</title>

  <meta
    name="description"
    content="Get expert logo and brand identity design, branding strategy, and visual identity services from Metamorph Solutions to elevate your business brand."
  />

  <link
    rel="canonical"
    href="https://metamorph.solutions/logo-and-branding"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Professional Logo & Brand Identity Design | Metamorph Solutions"
  />
  <meta
    property="og:description"
    content="Get expert logo and brand identity design, branding strategy, and visual identity services from Metamorph Solutions to elevate your business brand."
  />
  <meta
    property="og:url"
    content="https://metamorph.solutions/logo-and-branding"
  />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Professional Logo & Brand Identity Design | Metamorph Solutions"
  />
  <meta
    name="twitter:description"
    content="Get expert logo and brand identity design, branding strategy, and visual identity services from Metamorph Solutions to elevate your business brand."
  />
</Helmet>

      <Hero />
      <ScrollReveal>
        <HeroBottomText />
      </ScrollReveal>
      {/* <Brands /> */}
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      {/* <UiUx /> */}
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

export default LogoAndBranding
