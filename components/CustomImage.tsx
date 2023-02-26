import Image from "next/image";
import { useState } from "react";

export default function CustomImage({ alt, ...props }: any) {
  const [src, setSrc] = useState(props?.src);

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      onError={() => setSrc("/assets/not_found.jpg")}
      placeholder="blur"
      blurDataURL="/assets/blur_placeholder_image.jpg"
    />
  );
}
