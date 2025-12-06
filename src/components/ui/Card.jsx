

export default function Card({ children, className }) {
  return (
    <div
      className={`glass rounded-2xl p-6 border border-white/10 fade-in ${className}`}
    >
      {children}
    </div>
  );
}
