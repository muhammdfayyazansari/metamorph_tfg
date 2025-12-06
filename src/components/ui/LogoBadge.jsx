import Image from "next/image";


export default function LogoBadge({
  src,
  alt,
  width = 120,
  height = 40,
}) {
  return (
    <div className="opacity-80 hover:opacity-100 transition-all duration-300">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
