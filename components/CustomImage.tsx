import Image from "next/image";
import React, { useState, ComponentProps } from "react";

interface CustomImageProps extends ComponentProps<typeof Image> {
  alt: string;
}

function CustomImage({ alt, ...props }: CustomImageProps) {
  const [src, setSrc] = useState(props?.src);

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      onError={() => setSrc("/assets/noriyan_logo.jpg")}
      placeholder="blur"
      blurDataURL="/assets/blur_placeholder_image.jpg"
      sizes="(min-width: 1024px) 100vw, 
        (min-width: 769px) 80vw, 
        66vw"
    />
  );
}

export default React.memo(CustomImage);
