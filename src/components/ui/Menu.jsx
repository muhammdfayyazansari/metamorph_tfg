"use client";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        className="cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* ☰ */}
        <img className="object-contain w-12" src="/images/navbar.svg" />
      </button>

      {/* Overlay */}
      {open && (
        // <div className="
        //   fixed inset-0 z-50
        //   bg-linear-to-br from-[var(--color-accent-purple)] to-[var(--color-accent-red)]
        //   fade-in
        // ">
        <div className="fixed inset-0 z-50 fade-in bg-hero-combo">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl"
          >
            ✕
          </button>

          {/* Menu Content */}
          <nav className="
            h-full w-full flex flex-col justify-center
            px-10 space-y-6 text-white
            animate-slide
          ">
            <a href="#" className="text-4xl font-light hover:opacity-80 underline-offset-4 hover:underline decoration-2">
              Home
            </a>

            <a href="#" className="text-4xl font-light hover:opacity-80 underline-offset-4 hover:underline">
              Services
            </a>

            <a href="#" className="text-4xl font-light hover:opacity-80 underline-offset-4 hover:underline">
              Portfolio
            </a>

            <a href="#" className="text-4xl font-light hover:opacity-80 underline-offset-4 hover:underline">
              About us
            </a>

            <a href="#" className="text-4xl font-light hover:opacity-80 underline-offset-4 hover:underline">
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
