import { AnimatePresence, motion, wrap } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { images } from "../constants/images";
import { cls } from "../libs/utils";
import { Kinds } from "../pages";

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

export default function Slider({ component }: Kinds) {
  const sliders = images.slider[component];
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, sliders.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative w-full">
      <div className="relative flex mx-auto overflow-hidden max-w-[48rem] h-[34rem] bg-zinc-800">
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
          className="absolute z-10 flex items-center justify-center w-10 h-10 text-black cursor-pointer white-circle inset-y-1/2 left-3"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          onClick={() => paginate(1)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute z-10 flex items-center justify-center w-10 h-10 text-black cursor-pointer white-circle inset-y-1/2 right-3"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
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
    </div>
  );
}
