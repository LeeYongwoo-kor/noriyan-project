import Image from "next/image";
import React, { useState, ComponentProps } from "react";

interface CustomImageProps extends ComponentProps<typeof Image> {
  alt: string;
  sizes?: string;
}

function CustomImage({ alt, sizes, ...props }: CustomImageProps) {
  const [src, setSrc] = useState(props?.src);

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      onError={() =>
        setSrc(`${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/noriyan_logo.jpg`)
      }
      placeholder="blur"
      blurDataURL={`/static/blur_placeholder_image.jpg`}
      sizes={
        sizes
          ? sizes
          : "(min-width: 1024px) 100vw, (min-width: 640px) 75vw, 66vw"
      }
    />
  );
}

export default React.memo(CustomImage);
