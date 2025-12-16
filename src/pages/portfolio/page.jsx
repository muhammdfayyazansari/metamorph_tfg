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

const items = [
  {
    id: 1,
    bg_scr: 'g_',
  },
  {
    id: 2,
    bg_scr: 'g_',
  },
  {
    id: 3,
    bg_scr: 'g_',
  },
  {
    id: 4,
    bg_scr: 'g_',
  },
  {
    id: 5,
    bg_scr: 'g_',
  },
]
const PortfolioPage = () => {
  return (
    <>
      <Hero />

      {/* scrolling images */}
      <div className="hide-scrollbar z-20 flex w-full items-center justify-between gap-5 overflow-x-scroll p-6 pt-20 lg:px-16">
        {items.map((item, index) => (
          <div
            key={item.bg_scr + index}
            className={`w-50 min-w-50 ${index === 2 ? '' : 'opacity-40'}`}
          >
            <Card id={item.id} bg={item.bg_scr} />
          </div>
        ))}
      </div>
      <ScrollReveal>
        <HeroBottomText />
      </ScrollReveal>

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

      <ScrollReveal>
        <Faqs />
      </ScrollReveal>
    </>
  )
}

export default PortfolioPage

function Card({ bg, id }) {
  return (
    <div
      className={`glass card-gradient flex h-full w-full items-center justify-center rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.4)]`}
    >
      <img
        className="h-full w-full object-cover"
        src={`/images/gallery/${bg}${id}.webp`}
        alt=""
      />
    </div>
  )
}
