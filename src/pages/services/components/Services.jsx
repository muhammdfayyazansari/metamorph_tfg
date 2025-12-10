// import ServiceCard from "../ui/ServiceCard";

import Gallery from "./Gallery";

const Services = () => {
  // const servicesWithImgSrc = [
  //   {
  //     img_src: "branding_and_logos",
  //     title: "Branding and Logos",
  //     // icon: "/images/icons/branding_and_logos.svg", // Example placeholder
  //   },
  //   {
  //     img_src: "motion_design",
  //     title: "Motion Design",
  //   },
  //   {
  //     img_src: "ui_ux_design",
  //     title: "UI/UX Design",
  //   },
  //   {
  //     img_src: "digital_marketing",
  //     title: "Digital Marketing",
  //   },
  //   {
  //     img_src: "2d_3d_animations",
  //     title: "2D/3D Animations",
  //   },
  // ];
  return (
    <div className="relative flex flex-col w-full py-10 lg:pt-20">
      <div className="absolute top-0 left-0 pt-48">
        <div className="relative h-[900px] w-[900px] overflow-x-hidden overflow-y-auto">
          <img
            className="absolute bottom-0 -left-78 object-contain "
            src="/images/service_bg.webp"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full pt-10 gap-10">
        <div className="capitalize">
          <h2 className="text-[20px] pl-11 -mb-5 leading-none tracking-[-0.04em] sm:text-[30px] sm:pl-20 sm:-mb-8 md:text-[40px] md:pl-25 md:-mb-10 lg:text-[55px] lg:pl-30 lg:-mb-13  ">Logos &</h2>
          <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">Branding</h1>
        </div>

        <Gallery />

        <div className="flex items-center justify-center w-full ">
          <button className="button-gradient">View more</button>
        </div>
      </div>

     
    </div>
  );
};

export default Services;
