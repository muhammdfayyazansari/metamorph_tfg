import { ReactNode } from "react";
import clsx from "clsx";

export default function Heading({
  children,
  size = "lg",
  gradient = false,
  className,
}) {
  const sizes = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-5xl",
    xl: "text-7xl",
  };

  return (
    <h1
      className={clsx(
        sizes[size],
        gradient &&
          "bg-linear-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-red)] bg-clip-text text-transparent",
        "font-bold leading-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}
