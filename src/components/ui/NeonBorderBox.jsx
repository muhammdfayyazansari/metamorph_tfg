
export default function NeonBorderBox({ children, className }) {
  return (
    <div className={`border-neon rounded-xl p-6 fade-in ${className}`}>
      {children}
    </div>
  );
}
