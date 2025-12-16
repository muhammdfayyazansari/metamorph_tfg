import { useState } from 'react'

export default function ChevronButtons() {
  const [isHovered, setIsHovered] = useState({ left: false, right: false })
  const defaultSrc = '/images/icons/chevron.svg'
  const hoverSrc = '/images/icons/chev_up.svg'
  return (
    <div className="flex w-full justify-center gap-3">

        <div
          // 3. Attach event handlers to update state
          onMouseEnter={() =>
            setIsHovered((prev) => ({ ...prev, left: !prev['left'] }))
          }
          onMouseLeave={() =>
            setIsHovered((prev) => ({ ...prev, left: !prev['left'] }))
          }
          className="gradient-border rotate-180 cursor-pointer rounded-2xl p-0.5"
        >
          <div className="cursor-pointer rounded-2xl">
            <button
              // onClick={handlePrev} // Hooked to state update
              // 4. Conditionally set the background class based on state
              className={` ${
                isHovered['left'] ? 'bg-white' : 'bg-hero-combo'
              } cursor-pointer rounded-2xl p-3`}
            >
              <img
                className={`h-4 w-5 ${isHovered['left'] ? 'rotate-90' : ''}`}
                // 5. Conditionally set the src based on state
                src={isHovered['left'] ? hoverSrc : defaultSrc}
                alt="Next"
              />
            </button>
          </div>
        </div>



      <div
        onMouseEnter={() =>
          setIsHovered((prev) => ({ ...prev, right: !prev['right'] }))
        }
        onMouseLeave={() =>
          setIsHovered((prev) => ({ ...prev, right: !prev['right'] }))
        }
        className="gradient-border cursor-pointer rounded-2xl p-0.5"
      >
        <div className="cursor-pointer rounded-2xl">
          <button
            // onClick={handleNext}
            className={` ${
              isHovered['right'] ? 'bg-white' : 'bg-hero-combo'
            } cursor-pointer rounded-2xl p-3`}
          >
            <img
              className={`h-4 w-5 ${isHovered['right'] ? 'rotate-90' : ''}`}
              src={isHovered['right'] ? hoverSrc : defaultSrc}
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
