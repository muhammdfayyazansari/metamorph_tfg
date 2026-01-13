import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// const PageTitle = ({ baseTitle = "Metamorph" }) => {
const PageTitle = ({ baseTitle = 'Metamorph' }) => {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.replace('/', '')

    // Route-to-title mapping
    const titles = {
      '': 'Metamorph | Home',
      about: 'About Metamorph',
      faqs: 'Metamorph FAQS',
      contact: 'Metamorph | Contact Form',
    }

    // Find title by route or use fallback
    const pageTitle =
      titles[path] ||
      `${baseTitle} | ${
        path.charAt(0).toUpperCase() + path.slice(1).replaceAll('-', ' ')
      }`

    document.title = pageTitle
  }, [location])

  return null // This component doesn't render anything
}

export default PageTitle
