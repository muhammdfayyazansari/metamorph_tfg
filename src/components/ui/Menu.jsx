'use client'
import { useState } from 'react'

export default function Menu() {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* Menu Toggle Button */}
            <button className="cursor-pointer" onClick={() => setOpen(true)}>
                {/* ☰ */}
                <img
                    className="w-6 object-contain md:w-8 lg:w-12"
                    src="/images/navbar.svg"
                />
            </button>

            {/* Overlay */}
            {open && (
                // <div className="
                //   fixed inset-0 z-50
                //   bg-linear-to-br from-[var(--color-accent-purple)] to-[var(--color-accent-red)]
                //   fade-in
                // ">
                <div className="fade-in bg-hero-combo fixed inset-0 z-40">
                    <img
                        src="/images/logo.svg"
                        className="absolute left-6 lg:left-16 top-6 lg:top-8 w-28 object-contain md:w-40 lg:w-48 xl:w-52 2xl:w-66"
                    />

                    {/* Close button */}
                    <button
                        onClick={() => {
                            console.log('closing nav ==> ')
                            setOpen(false)
                        }}
                        className="w-6 object-contain md:w-8 lg:w-12 absolute right-6 lg:right-16 top-10 lg:top-12 z-50 cursor-pointer text-white"
                    >
                        {/* ✕ */}
                        <img
                            src="/images/icons/cross_icon.svg"
                            alt="close button"
                        />
                    </button>

                    {/* Menu Content */}
                    <nav className="animate-slide flex h-full w-full flex-col justify-center space-y-8 p-6 lg:px-16 text-white pt-16">
                        <a
                            href="#"
                            className="text-4xl font-light decoration-2 underline-offset-4 hover:underline hover:opacity-80"
                        >
                            Home
                        </a>

                        <a
                            href="#"
                            className="text-4xl font-light underline-offset-4 hover:underline hover:opacity-80"
                        >
                            Services
                        </a>

                        <a
                            href="#"
                            className="text-4xl font-light underline-offset-4 hover:underline hover:opacity-80"
                        >
                            Portfolio
                        </a>

                        <a
                            href="#"
                            className="text-4xl font-light underline-offset-4 hover:underline hover:opacity-80"
                        >
                            About us
                        </a>

                        <a
                            href="#"
                            className="text-4xl font-light underline-offset-4 hover:underline hover:opacity-80"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            )}
        </>
    )
}
