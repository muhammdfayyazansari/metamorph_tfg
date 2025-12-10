import ServiceCard from "../ui/ServiceCard";

const Services = () => {
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
    <div className="relative flex flex-col w-full py-10 lg:pt-20">
      <div className="absolute top-0 right-0 pt-48">
        <div className="relative  overflow-x-hidden overflow-y-auto">
          <img
            className="absolute bottom-0 -right-78 object-contain "
            src="/images/service_bg.webp"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full pt-10 gap-10 lg:gap-28">
        <div className="capitalize">
          <h2 className="text-[20px] pl-10 -mb-5 leading-none tracking-[-0.04em] sm:text-[30px] sm:pl-20 sm:-mb-8 md:text-[40px] md:pl-[90px] md:-mb-10 lg:text-[55px] lg:pl-[100px] lg:-mb-13  ">we provide</h2>
          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">services</h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:py-10 space-y-3">
          {servicesWithImgSrc.map((s_card, index) => {
            return (
              <ServiceCard
                icon={"/images/icons/" + s_card["img_src"] + ".svg"}
                title={s_card["title"]}
                isActive={index===2}
              />
            );
          })}
        </div>

        <div className="flex items-center justify-center w-full pt-10">
          <button className="button-gradient">Have a Project</button>
        </div>
      </div>

      <div className="h-full w-full text-center">
        <div className="relative flex justify-center items-center w-full h-96 md:h-[800px] lg:h-[800px] overflow-hidden">
          <img
            className="absolute top-0 left-0 h-full lg:h-[750] lg:w-auto lg:object-cover "
            src="/images/gradient_bg.webp"
          />
          {/* <h1 className="text-9xl text-center">video</h1> */}
          <div className="glass card-gradient p-8 rounded-4xl m-6 lg:mx-16">
            <img src="/images/metaphor.gif" alt=""  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
