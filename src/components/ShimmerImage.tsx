import { useState } from "react";

interface ShimmerImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function ShimmerImage({ src, alt, className = "", imgClassName = "", priority = false }: ShimmerImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-brand/5 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-brand/10 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? undefined : "lazy"}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
      />
    </div>
  );
}
