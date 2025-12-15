import ServiceCard from '../ui/ServiceCard'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const Services = () => {
  const servicesWithImgSrc = [
    {
      img_src: 'branding_and_logos',
      title: 'Branding and Logos',
      // icon: "/images/icons/branding_and_logos.svg", // Example placeholder
    },
    {
      img_src: 'motion_design',
      title: 'Motion Design',
    },
    {
      img_src: 'ui_ux_design',
      title: 'UI/UX Design',
    },
    {
      img_src: 'digital_marketing',
      title: 'Digital Marketing',
    },
    {
      img_src: '2d_3d_animations',
      title: '2D/3D Animations',
    },
  ]

  const { contextSafe } = useGSAP()

  // const handleHoverIn = contextSafe((e) => {
  //   gsap.to(e.currentTarget, {
  //     y: -40, // Moves up by 20 pixels
  //     scale: 1.1,
  //     duration: 0.3,
  //     // ease: 'power2.out',
  //     ease: 'back.out(1.7)',
  //     // rotation: '-12deg',
  //   })

  //   e.currentTarget.classList.remove('glass', 'card-gradient')
  //   e.currentTarget.classList.add('bg-hero-combo')
  //   // console.log(e.currentTarget.classList)
  // })

  // const handleHoverOut = contextSafe((e) => {
  //   gsap.to(e.currentTarget, {
  //     y: 0, // Returns to original position
  //     scale: 1,
  //     duration: 0.3,
  //     // ease: 'power2.inOut',
  //     ease: 'back.out(1.7)',
  //     // rotation: '-12deg',
  //   })
  //   e.currentTarget.classList.add('glass', 'card-gradient')
  //   e.currentTarget.classList.remove('bg-hero-combo')
  // })

  const handleHoverIn = contextSafe((e) => {
    const inner = e.currentTarget.querySelector('.card-inner')

    gsap.to(inner, {
      y: -40,
      scale: 1.1,
      duration: 0.35,
      ease: 'back.out(1.7)',
    })

    inner.classList.remove('glass', 'card-gradient')
    inner.classList.add('bg-hero-combo')
  })

  const handleHoverOut = contextSafe((e) => {
    const inner = e.currentTarget.querySelector('.card-inner')

    gsap.to(inner, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: 'power3.out',
    })

    inner.classList.add('glass', 'card-gradient')
    inner.classList.remove('bg-hero-combo')
  })
  return (
    <div className="relative flex w-full flex-col overflow-hidden py-10 lg:pt-20">
      <div className="absolute -right-70 bottom-150 md:h-200 md:w-200">
        <img
          className="h-full w-full object-contain"
          src="/images/service_bg.webp"
        />
      </div>
      {/* <div className="absolute top-0 -right-100 md:h-200 md:w-200">
        <img
          className="object-contain  object-bottom-right h-full"
          src="/images/bg_images/bg_service_1.webp"
          alt='service_bg_1'
        />
      </div> */}

      {/* <div className="absolute top-0 right-0 pt-48">
        <div className="relative h-[900px] w-[900px] overflow-x-hidden overflow-y-auto">
          <img
            className="absolute -right-78 bottom-0 object-contain"
            src="/images/service_bg.webp"
          />
        </div>
      </div> */}
      <div className="flex w-full flex-col items-center gap-10 pt-10 lg:gap-28">
        <div className="capitalize">
          <h2 className="-mb-5 pl-10 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-20 sm:text-[30px] md:-mb-10 md:pl-[90px] md:text-[40px] lg:-mb-13 lg:pl-[100px] lg:text-[55px]">
            we provide
          </h2>
          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
            services
          </h1>
        </div>

        <div className="flex flex-col space-y-3 lg:flex-row lg:py-10">
          {servicesWithImgSrc.map((s_card, index) => {
            return (
              <ServiceCard
                icon={'/images/icons/' + s_card['img_src'] + '.svg'}
                title={s_card['title']}
                isActive={index === 2}
                onMouseEnter={handleHoverIn}
                onMouseLeave={handleHoverOut}
              />
            )
          })}
        </div>

        <div className="flex w-full items-center justify-center pt-10">
          <button className="button-gradient">Have a Project</button>
        </div>
      </div>

      <div className="h-full w-full text-center">
        <div className="relative flex h-96 w-full items-center justify-center overflow-hidden md:h-[800px] lg:h-[800px]">
          <img
            className="absolute top-0 left-0 h-full lg:h-[750] lg:w-auto lg:object-cover"
            src="/images/gradient_bg.webp"
          />
          {/* <h1 className="text-9xl text-center">video</h1> */}
          <div className="glass card-gradient m-6 rounded-4xl p-8 lg:mx-16">
            <img src="/images/metaphor.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
