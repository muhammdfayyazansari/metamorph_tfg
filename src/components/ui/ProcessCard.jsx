export default function ProcessCard({
  img_src,
  title="",
  para="",
  extraClass ="",
  isFlip = false,
}) {
  return (
    <div
      className={`flex ${isFlip ? "flex-col-reverse" : "flex-col"} items-center justify-center glass card-gradient rounded-3xl p-6 gap-3 ${extraClass}`}
    >
      <div>
        <img className="object-contain" src={img_src} alt={title} />
      </div>
      <div>
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-white/50 font-light text-sm">
         {para}
        </p>
      </div>
    </div>
  );
}
