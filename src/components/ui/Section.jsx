
export default function Section({ children, className }) {
  return (
    <section className={`py-20 fade-in ${className || ""}`}>
      {children}
    </section>
  );
}
