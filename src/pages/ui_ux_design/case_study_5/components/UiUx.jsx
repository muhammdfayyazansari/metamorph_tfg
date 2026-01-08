const UiUx = () => {
  return (
    <div className="relative flex w-full flex-col py-10">
      {/* This asset is \"perfect at its place\" as per user request */}
      <div className="absolute top-0 right-0 z-0 flex justify-end md:h-200 md:w-200">
        <img
          className="h-full object-contain"
          src="/images/bg_images/logos_branding_bg.webp"
          alt="background decoration"
        />
      </div>

      {/* service_bg.webp removed from here to be moved before \"Other Case Studies\" section */}
    </div>
  )
}

export default UiUx
