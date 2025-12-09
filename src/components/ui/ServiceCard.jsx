export default function ServiceCard({
  icon,
  title,
  extraClass,
  isActive = false,
}) {
  return (
    <div
      style={
        isActive
          ? {
              transform: "translateY(-70px)", // Move up by 30px when active
              transition: "transform 0.3s ease-in-out", // Optional: Add smooth transition
            }
          : {}
      }
      className={`flex w-52 -rotate-12 p-5 flex-col items-start gap-10 rounded-2xl -ml-5 ${isActive ? "bg-hero-combo" : "glass card-gradient"} ${extraClass}`}
    >
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
        <img src={icon} alt="" className="w-8 h-8" />
      </div>
      
      <h3 className="text-white text-lg font-light leading-snug">{title}</h3>
    </div>
  );
}
