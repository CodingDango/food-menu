import { useState, useCallback } from "react";
import { cn } from "../lib/utils";
import { Spinner } from "./ui/spinner";

const imageLoadCache = new Set<string>();

interface FoodImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export default function FoodImage({
  className,
  alt,
  src,
  ...props
}: FoodImageProps) {
  const [isLoading, setIsLoading] = useState(() => {
    return src ? !imageLoadCache.has(src) : true;
  });

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    if (src) {
      imageLoadCache.add(src);  
    }
  }, [src]);

  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center justify-center",
        className,
      )}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Spinner />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className={cn(
          "object-contain w-full h-full z-10",
          isLoading
            ? "opacity-0 scale-95"
            : "opacity-100 scale-100 transition-all duration-500 ease-out",
        )}
        {...props}
      />
    </div>
  );
}
