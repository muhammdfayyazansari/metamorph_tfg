const FeaturedProjects = () => {
  const servicesWithImgSrc = [
    {
      img_src: "branding_and_logos",
      title: "Branding and Logos",
      // icon: "/images/icons/branding_and_logos.svg", // Example placeholder
    },
    {
      img_src: "motion_design",
      title: "Motion Design",
    },
    {
      img_src: "ui_ux_design",
      title: "UI/UX Design",
    },
    {
      img_src: "digital_marketing",
      title: "Digital Marketing",
    },
    {
      img_src: "2d_3d_animations",
      title: "2D/3D Animations",
    },
  ];
  return (
    <div className="relative flex flex-col items-center justify-center w-full pt-20 gap-10 mb-48">
      <div className="absolute bottom-0  h-96">
        <img
          className="object-contain w-full h-full "
          src="/images/bg_images/featured_bg.webp"
        />
      </div>
      <div className="flex flex-col items-center w-full z-10">
        <div className="capitalize text-end">
          <h2 className="text-4xl pr-[110px] -mb-10">Featured</h2>
          <h1 className="text-9xl font-semibold">Projects</h1>
        </div>

        <div className="flex px-10">
          <img
            className="h-[600px] object-contain"
            src="/images/mobile.webp"
            alt=""
          />
        </div>
      </div>

      <div className="absolute bottom-0 w-full z-10">
        <div className="flex items-end justify-between h-full w-full p-10">
          <div className="flex flex-col items-start justify-center gap-5">
            <h3 className="text-3xl font-medium">
              Deep Seek <br />
              Landing page
            </h3>
            <button className="button-gradient">case study</button>
          </div>
          <div className="flex gap-3">
            <button className="bg-hero-combo rounded-xl p-3 rotate-180">
              <img className="h-4 w-5" src="/images/icons/chevron.svg" alt="chevron" srcset="" />
            </button>
            <button className="bg-hero-combo rounded-xl p-3">
              <img className="h-4 w-5" src="/images/icons/chevron.svg" alt="chevron" srcset="" />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="w-full text-center">
        <div className="relative flex justify-center items-center w-full h-[800px]  overflow-hidden">
          <img
            className="absolute top-0 left-0 h-[750px] object-contain "
            src="/images/gradient_bg.webp"
          />
          <h1 className="text-9xl text-center">video</h1>
        </div>
      </div> */}
    </div>
  );
};

export default FeaturedProjects;
