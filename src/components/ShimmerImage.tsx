import { useState, useCallback } from "react";

interface ShimmerImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function ShimmerImage({ src, alt, className = "", imgClassName = "", priority = false }: ShimmerImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // useCallback ref: fires when the DOM node mounts. If the browser already
  // has the image in its cache, img.complete is true at this point — the
  // onLoad event won't fire again, so we imperatively mark it loaded here.
  const imgRef = useCallback((node: HTMLImageElement | null) => {
    if (node && node.complete && node.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className={`relative overflow-hidden bg-brand/5 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-brand/10 animate-pulse" />
      )}
      <img
        ref={imgRef}
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
