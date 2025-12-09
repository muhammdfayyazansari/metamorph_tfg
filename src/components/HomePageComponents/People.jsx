import PeopleCard from "../ui/PeopleCard";

const People = () => {
  const peopleWithImgSrc = [
    {
      img_src: "/images/people_1.webp",
      title: "Sophia M.",
      subTitle: " — United States",
      para: "We offer comprehensive design and development services to help businesses establish a strong online presence and deliver exceptional digital experiences. Our expert team of designers, developers, and strategists work collaboratively to create visually stunning, user-friendly, and technically robust solutions that align with your business goals.",
      isFlip: false,
    },
    {
      img_src: "/images/people_2.webp",

      title: "Sophia M.",
      subTitle: " — United States",
      para: "We offer comprehensive design and development services to help businesses establish a strong online presence and deliver exceptional digital experiences. Our expert team of designers, developers, and strategists work collaboratively to create visually stunning, user-friendly, and technically robust solutions that align with your business goals.",
      isFlip: true,
    },
  ];
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center capitalize">
        <div className="">
          <h2 className="text-4xl pl-[84px] -mb-10">What</h2>
          <h1 className="text-9xl font-semibold">People</h1>
          <h2 className="text-end text-4xl -mt-5">Say</h2>
        </div>
      </div>

      <div className="flex p-10 w-full flex-col self-center gap-5  pt-10">
        {peopleWithImgSrc.map((item) => (
          <PeopleCard
            img_src={item["img_src"]}
            isFlip={item["isFlip"]}
            title={item["title"]}
            subTitle={item["subTitle"]}
            para={item["para"]}
            extraClass=""
          />
        ))}
      </div>

      <div className="flex justify-center w-full gap-3">
        <button className="bg-hero-combo rounded-xl p-3 rotate-180">
          <img
            className="h-4 w-5"
            src="/images/icons/chevron.svg"
            alt="chevron"
            srcset=""
          />
        </button>
        <button className="bg-hero-combo rounded-xl p-3">
          <img
            className="h-4 w-5"
            src="/images/icons/chevron.svg"
            alt="chevron"
            srcset=""
          />
        </button>
      </div>
    </div>
  );
};

export default People;
