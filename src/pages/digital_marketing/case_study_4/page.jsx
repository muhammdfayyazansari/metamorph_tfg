import Hero from './components/Hero'
import UiUx from './components/UiUx'
import OtherCaseStudies from './components/OtherCaseStudies'
import ScrollReveal from '../../../components/animations/ScrollReveal'

const CaseStudyPage = () => {
  return (
    <div className="case-study-bg">
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <UiUx />
      </ScrollReveal>
      <ScrollReveal>
        <OtherCaseStudies />
      </ScrollReveal>
    </div>
  )
}

export default CaseStudyPage
