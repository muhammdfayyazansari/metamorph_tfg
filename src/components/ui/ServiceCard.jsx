export default function ServiceCard({
  icon,
  title,
  extraClass,
  isActive = false,
}) {
  return (
    <div
      className={`flex w-70 lg:w-52 -rotate-12 p-5 flex-col items-start gap-10 rounded-2xl -ml-5 transition-transform duration-300 ease-in-out cursor-pointer ${isActive ? "bg-hero-combo -translate-y-10 lg:-translate-y-20" : "glass card-gradient"} ${extraClass}`}
    >
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
        <img src={icon} alt="" className="w-8 h-8" />
      </div>
      
      <h3 className="text-white text-lg font-light leading-snug">{title}</h3>
    </div>
  );
}
