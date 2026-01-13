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

const DigitalMarketingPage = () => {
  return (
    <>
    {/* 🔹 SEO META TAGS FOR DIGITAL MARKETING PAGE */}
<Helmet>
  <title>Top Digital Marketing Services | Metamorph Solutions</title>

  <meta
    name="description"
    content="Boost your brand with Metamorph Solutions’ digital marketing services—SEO, PPC, social media, content marketing, and performance-driven campaigns."
  />

  <link
    rel="canonical"
    href="https://metamorph.solutions/digital-marketing"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Top Digital Marketing Services | Metamorph Solutions"
  />
  <meta
    property="og:description"
    content="Boost your brand with Metamorph Solutions’ digital marketing services—SEO, PPC, social media, content marketing, and performance-driven campaigns."
  />
  <meta
    property="og:url"
    content="https://metamorph.solutions/digital-marketing"
  />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Top Digital Marketing Services | Metamorph Solutions"
  />
  <meta
    name="twitter:description"
    content="Boost your brand with Metamorph Solutions’ digital marketing services—SEO, PPC, social media, content marketing, and performance-driven campaigns."
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

export default DigitalMarketingPage
