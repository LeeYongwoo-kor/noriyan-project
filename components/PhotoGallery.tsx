import { images } from "@constants/images";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Subtitle from "./Subtitle";

interface IPhoto {
  id: string;
  src: string;
  alt: string;
}

const overlayVars = {
  basicColor: { backgroundColor: "rgba(0, 0, 0, 0)" },
  animateColor: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
};

export default function PhotoGallery({ innerRef }: any) {
  const [selectedPhoto, setSelectedPhoto] = useState<IPhoto | undefined | null>(
    null
  );

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedPhoto]);

  const handleClickPhoto = (photoId: string) => {
    const selectedImage = images.photoGallery.find(
      (image) => image.id === photoId
    );
    setSelectedPhoto(selectedImage);
  };
  return (
    <>
      <AnimatePresence>
        {selectedPhoto ? (
          <motion.div
            onClick={() => setSelectedPhoto(null)}
            className="absolute left-0 z-20 w-full h-full bg-red-700"
            variants={overlayVars}
            initial="basicColor"
            animate="animateColor"
            exit="basicColor"
          >
            <motion.div
              layoutId={selectedPhoto?.id}
              className="fixed w-[96%] top-photoMobile left-[2%] md:w-2/3 md:left-[16%] lg:w-1/2 md:top-photo lg:left-1/4 bg-shallowBlack"
            >
              <div className="relative w-full h-128">
                <Image
                  src={selectedPhoto?.src}
                  alt={selectedPhoto?.alt}
                  fill
                  className="object-contain"
                  quality={100}
                  draggable={false}
                  priority={true}
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <article
        ref={innerRef}
        className="w-full px-3 pt-1 pb-16 mt-16 bg-scroll bg-center bg-no-repeat bg-cover shadow-md sm:pb-32 sm:bg-fixed lg:px-8 min-h-fit photogallery"
      >
        <div className="mx-auto max-w-7xl">
          <Subtitle text="PHOTO GALLERY" color="WHITE" />
          <div className="mt-8 grid w-full gap-2 grid-cols-2 h-[60rem] sm:h-[72rem] lg:grid-cols-4 lg:h-172 [&>div]:cursor-pointer">
            {images.photoGallery.map((photo) => (
              <motion.div
                onClick={() => handleClickPhoto(photo.id)}
                key={photo.id}
                whileHover={{ scale: 1.05 }}
                layoutId={photo.id}
                className="relative"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  quality={100}
                  draggable={false}
                  priority={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
