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
    <div className="relative flex flex-col w-full py-10">
      <div className="absolute top-0 right-0 pt-48">
        <div className="relative h-[900px] w-[900px] overflow-x-hidden overflow-y-auto">
          <img
            className="absolute bottom-0 -right-78 object-contain "
            src="/images/service_bg.webp"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full py-10 gap-32">
        <div className="capitalize">
          <h2 className="text-4xl pl-[84px] -mb-10">we provide</h2>
          <h1 className="text-9xl font-semibold">services</h1>
        </div>

        <div className="flex py-10">
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

      <div className="w-full text-center">
        <div className="relative flex justify-center items-center w-full h-[800px]  overflow-hidden">
          <img
            className="absolute top-0 left-0 h-[750px] object-contain "
            src="/images/gradient_bg.webp"
          />
          <h1 className="text-9xl text-center">video</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
