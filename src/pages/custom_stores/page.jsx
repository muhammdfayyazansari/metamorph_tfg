import React, { Suspense } from 'react'
import { Helmet } from "react-helmet-async";
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
     
     {/* 🔹 SEO META TAGS FOR CUSTOM STORES PAGE */}
<Helmet>
  <title>Custom Online Store Design & Development Portfolio | Metamorph</title>

  <meta
    name="description"
    content="See how Metamorph Solutions built a custom online store with optimized UX, secure checkout, and scalable architecture for long-term eCommerce growth."
  />

  <link
    rel="canonical"
    href="https://metamorph.solutions/custom-stores"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Custom Online Store Design & Development Portfolio | Metamorph"
  />
  <meta
    property="og:description"
    content="See how Metamorph Solutions built a custom online store with optimized UX, secure checkout, and scalable architecture for long-term eCommerce growth."
  />
  <meta
    property="og:url"
    content="https://metamorph.solutions/custom-stores"
  />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Custom Online Store Design & Development Portfolio | Metamorph"
  />
  <meta
    name="twitter:description"
    content="See how Metamorph Solutions built a custom online store with optimized UX, secure checkout, and scalable architecture for long-term eCommerce growth."
  />
</Helmet>

      <ScrollReveal>
        <Overview />
      </ScrollReveal>
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

      <ScrollReveal>
        <Faqs />
      </ScrollReveal>
    </div>
  )
}

export default CustomStoresPage
