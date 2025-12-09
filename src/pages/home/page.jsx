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
            <HeroBottomText />

            <Brands />
            <Services />
            <FeaturedProjects />
            <Process />
            <Technology />
            <People />

            <Faqs />
        </>
    )
}

export default Home
