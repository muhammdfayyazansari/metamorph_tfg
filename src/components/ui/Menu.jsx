'use client'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Menu Toggle Button */}
      <button className="cursor-pointer" onClick={() => setOpen(true)}>
        {/* ☰ */}
        <img className="w-6 object-contain" src="/images/navbar.svg" />
      </button>

      {/* Overlay */}
      {open && (
        // <div className="
        //   fixed inset-0 z-50
        //   bg-linear-to-br from-[var(--color-accent-purple)] to-[var(--color-accent-red)]
        //   fade-in
        // ">
        <div className="fade-in bg-hero-combo fixed inset-0 z-40 h-screen overflow-hidden">
          <Link to="/" className="z-10 cursor-pointer">
            <img
              onClick={() => {
                console.log('closing nav ==> ')
                setOpen(false)
              }}
              src="/images/logo.svg"
              className="w-28 object-contain mt-10 pl-8 md:w-40 lg:w-48 lg:mt-8 lg:pl-16 xl:w-52 2xl:w-66"
            />
          </Link>
          {/* Close button */}
          <button
            onClick={() => {
              console.log('closing nav ==> ')
              setOpen(false)
            }}
            className="absolute top-10 right-6 z-50 w-6 cursor-pointer object-contain text-white md:w-8 lg:top-12 lg:right-16 lg:w-12"
          >
            {/* ✕ */}
            <img src="/images/icons/cross_icon.svg" alt="close button" />
          </button>

          {/* Menu Content */}
          <nav className="animate-slide flex h-full w-full flex-col  space-y-10 pt-20 p-6 text-white lg:px-16 z-10">
            <Link
              onClick={() => {
                setOpen(false)
              }}
              to="/"
              className="text-4xl font-light decoration-2 underline-offset-4 hover:underline hover:opacity-80"
            >
              Home
            </Link>

            <Link
              onClick={() => {
                setOpen(false)
              }}
              to="/services"
              className="text-4xl font-light underline-offset-4 hover:underline hover:opacity-80"
            >
              Services
            </Link>

            <Link
              onClick={() => {
                setOpen(false)
              }}
              to="/portfolio"
              className="text-4xl font-light underline-offset-4 hover:underline hover:opacity-80"
            >
              Portfolio
            </Link>

            <a
              href="#"
              className="text-4xl font-light underline-offset-4 hover:underline hover:opacity-80"
            >
              About us
            </a>

            <Link
              onClick={() => {
                setOpen(false)
              }}
              to="/contact"
              className="text-4xl font-light decoration-2 underline-offset-4 hover:underline hover:opacity-80"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
