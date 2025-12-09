export default function PeopleCard({
  img_src = "",
  title = "",
  subTitle = "",
  para = "",
  extraClass = "",
  isFlip = false,
}) {
  return (
    <div
      className={`flex ${isFlip ? "flex-row-reverse" : "flex-row"} items-stretch justify-center p-6 gap-10 ${extraClass}`}
    >
      <div className="block w-1/3">
        <img
          className="object-contain w-full h-full rounded-xl"
          src={img_src}
          alt={title}
        />
      </div>
      <div className=" flex flex-col justify-center gap-3  p-8 glass card-gradient rounded-3xl w-full">
        <div>
          <h1 className="text-2xl font-medium">{title}</h1>
          <h3 className="text-lg font-light text-white/50">{subTitle}</h3>
        </div>
        <div className="flex justify-between gap-10">
          <p className="text-white/50 font-light  w-2/3">{para}</p>
          <div className="flex flex-col justify-center items-center">
            <img
              className="object-contain w-48 rounded-xl"
              src={"/images/icons/rating.svg"}
              alt={"rating"}
            />
            <img
              className="object-contain w-full h-full rounded-xl"
              src={"/images/icons/inverted_comma.svg"}
              alt={"inverted_comma"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
