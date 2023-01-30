import { AnimatePresence, motion, wrap } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { images } from "../constants/images";
import { useInterval } from "../libs/useInterval";
import { cls } from "../libs/utils";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 1,
    };
  },
};

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Slider({ component, width, height }: any) {
  const timer = 3000;
  const sliders = images.slider[component];
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, sliders.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useInterval(() => {
    paginate(1);
  }, timer);

  const notice = ["image1", "image2", "image3", "image4", "image5"];

  return (
    <div className="relative w-full">
      <div
        className={cls(
          `relative flex mx-auto overflow-hidden max-w-[${width}rem] h-[${height}rem] bg-zinc-800`
        )}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="absolute w-full h-full"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: "tween",
                duration: 0.4,
              },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipeConfidenceThreshold = 10000;
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <Image
              src={sliders[imageIndex]}
              alt="slider_image"
              fill
              quality={100}
              draggable={false}
              priority={true}
            />
          </motion.div>
          <motion.img />
        </AnimatePresence>
        <svg
          onClick={() => paginate(-1)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute z-10 flex items-center justify-center text-white cursor-pointer opacity-60 hover:opacity-100 w-14 h-14 inset-y-1/2 left-1"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          onClick={() => paginate(1)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute z-10 flex items-center justify-center text-white cursor-pointer opacity-60 hover:opacity-100 w-14 h-14 inset-y-1/2 right-1"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex items-center justify-center my-5 space-x-1">
        {[...Array(sliders?.length)].map((_, idx) => (
          <div
            key={idx}
            className={cls(
              "aspect-square rounded-full w-7 cursor-pointer",
              idx === imageIndex ? "bg-main" : "bg-slate-500"
            )}
            onClick={() => paginate(idx - imageIndex)}
          ></div>
        ))}
      </div>
      <div className="flex items-center justify-center h-24 text-2xl">
        {notice[imageIndex]}
      </div>
    </div>
  );
}
