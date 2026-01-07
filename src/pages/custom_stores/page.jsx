import React, { Suspense } from 'react'
import ScrollReveal from '../../components/animations/ScrollReveal'
import Faqs from '../../components/Faqs'
import Overview from './components/Overview'
import BrandIdentity from './components/BrandIdentity'

// Lazy load below-the-fold content to optimize initial bundle size
const EnterprisePlatform = React.lazy(() => import('./components/EnterprisePlatform'))
const BusinessFoundation = React.lazy(() => import('./components/BusinessFoundation'))
const AdminCapabilities = React.lazy(() => import('./components/AdminCapabilities'))
const EliteSellers = React.lazy(() => import('./components/EliteSellers'))
const BestSuitedFor = React.lazy(() => import('./components/BestSuitedFor'))
const InvestingIn = React.lazy(() => import('./components/InvestingIn'))

const CustomStoresPage = () => {
  return (
    <div className="min-h-screen pt-24 text-white bg-custom-stores overflow-x-hidden hide-scrollbar">
      <ScrollReveal>
        <Overview />
      </ScrollReveal>

      {/* BrandIdentity has internal ScrollReveal, so we leave it as is or wrap it lightly. 
          Given user request "whole page animated", wrapping it ensures the container itself fades in. */}
      {/* However, standard practice if it has internal is to let internal handle it OR wrap container. 
          Let's wrap the container for consistency. */}
      <ScrollReveal>
        <BrandIdentity />
      </ScrollReveal>

      <Suspense fallback={<div className="h-40" />}>
        <ScrollReveal>
          <EnterprisePlatform />
        </ScrollReveal>

        <ScrollReveal>
          <BusinessFoundation />
        </ScrollReveal>

        <ScrollReveal>
          <AdminCapabilities />
        </ScrollReveal>

        <ScrollReveal>
          <EliteSellers />
        </ScrollReveal>

        <ScrollReveal>
          <BestSuitedFor />
        </ScrollReveal>
        
        <ScrollReveal>
          <InvestingIn />
        </ScrollReveal>
      </Suspense>

      {/* <div className="container-section py-20">
         <div className="glass card-gradient p-10 rounded-2xl text-center">
            <h2 className="text-3xl font-semibold mb-4 text-clip-two">Coming Soon</h2>
            <p className="opacity-70">We are currently crafting beautiful store experiences. Stay tuned for updates!</p>
         </div>
      </div> */}

      <ScrollReveal>
        <Faqs />
      </ScrollReveal>
    </div>
  )
}

export default CustomStoresPage
