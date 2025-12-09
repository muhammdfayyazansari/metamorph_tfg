import ProcessCard from "../ui/ProcessCard";

const Process = () => {
  const processWithImgSrc = [
    {
      img_src: "/images/process_1.webp",
      title: "Initiate the Morph",
      para: "Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.",
      isFlip: false,
    },
    {
      img_src: "/images/process_2.webp",
      title: "Visualize & Design",
      para: "Bring us your boldest ideas. We’ll craft sleek, futuristic visuals that align perfectly with your brand’s mission and forward-thinking identity.",
      isFlip: true,
    },
    {
      img_src: "/images/process_3.webp",
      title: "Development",
      para: "Your designs morph into interactive, scalable digital solutions—built to perform, impress, and grow with you.",
      isFlip: false,
    },
    {
      img_src: "/images/process_4.webp",
      title: "UI/UX Design",
      para: "Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.",
      isFlip: false,
    },
    {
      img_src: "/images/process_4.webp",
      title: "UI/UX Design",
      para: "Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.",
      isFlip: false,
    },
    {
      img_src: "/images/process_4.webp",
      title: "UI/UX Design",
      para: "Start by connecting with us. Share your vision through our contact form or book a call. We’re ready to explore your goals and ignite the transformation.",
      isFlip: false,
    },
  ];
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center capitalize">
        <div className="">
          <h2 className="text-4xl pl-[84px] -mb-10">our</h2>
          <h1 className="text-9xl font-semibold">Process</h1>
          <h2 className="text-end text-4xl -mt-5">is Everything</h2>
        </div>
      </div>

      <div className="flex self-center flex-nowrap overflow-x-scroll gap-5 w-[90vw] hide-scrollbar pt-10">
        {processWithImgSrc.map((item) => (
          <ProcessCard
            img_src={item["img_src"]}
            isFlip={item["isFlip"]}
            title={item["title"]}
            para={item["para"]}
            extraClass="w-80 flex-none"
          />
        ))}
      </div>
    </div>
  );
};

export default Process;
