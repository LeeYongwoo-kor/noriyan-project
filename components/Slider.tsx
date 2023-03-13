import { images } from "@constants/images";
import { useInterval } from "@hooks/useInterval";
import { cls } from "@libs/utils";
import { AnimatePresence, motion, wrap } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type SliderProps = {
  component: "notice" | "menu";
  intervalTimer?: number | undefined;
  isCover?: boolean;
  callback?: (index: number) => void;
};

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

export default function Slider({
  component,
  intervalTimer,
  isCover = false,
  callback,
}: SliderProps) {
  const swipeTimer = 400;
  const sliders = images?.slider[component];
  const [[page, direction], setPage] = useState([0, 0]);
  const [waiting, setWaiting] = useState(false);
  const imageIndex = wrap(0, sliders.length, page);

  useEffect(() => {
    if (callback) {
      callback(imageIndex);
    }
  }, [callback, imageIndex]);

  const paginate = (newDirection: number) => {
    if (waiting) {
      return;
    }
    setWaiting(true);
    setPage([page + newDirection, newDirection]);
    setTimeout(() => {
      setWaiting(false);
    }, swipeTimer);
  };

  useInterval(() => {
    if (intervalTimer) {
      paginate(1);
    }
  }, intervalTimer);

  return (
    <div className="relative w-full h-full">
      <div
        className={cls(
          `relative flex mx-auto overflow-hidden max-w-7xl h-full bg-transparent`
        )}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="absolute w-full h-full overflow-hidden border-2 border-opacity-50 border-slate-300 rounded-4xl"
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
              src={sliders[imageIndex]?.src}
              alt={
                sliders[imageIndex]?.alt
                  ? sliders[imageIndex]?.alt
                  : "Slider Image"
              }
              fill
              quality={75}
              priority={true}
              draggable={false}
              className={cls(
                "z-10 sm:border-transparent sm:border-2 rounded-4xl",
                isCover ? "object-cover" : "object-scale-down"
              )}
              sizes="(min-width: 1024px) 100vw, 
              (min-width: 640px) 75vw, 
              66vw"
            />
            {!isCover ? (
              <Image
                src={sliders[imageIndex]?.src}
                alt={
                  sliders[imageIndex]?.alt
                    ? sliders[imageIndex]?.alt
                    : "Slider Image"
                }
                fill
                priority={true}
                quality={5}
                draggable={false}
                className="z-0 object-fill border border-transparent blur-2xl rounded-4xl"
                sizes="(min-width: 1024px) 100vw, 
              (min-width: 640px) 75vw, 
              66vw"
              />
            ) : null}
          </motion.div>
        </AnimatePresence>
        <svg
          onClick={() => paginate(-1)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute z-10 flex items-center justify-center text-white -translate-y-1/2 cursor-pointer opacity-60 hover:opacity-100 w-14 h-14 inset-y-1/2 left-3"
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
          className="absolute z-10 flex items-center justify-center text-white -translate-y-1/2 cursor-pointer opacity-60 hover:opacity-100 w-14 h-14 inset-y-1/2 right-3"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
        <div className="absolute bottom-0 z-10 w-full -translate-x-1/2 inset-x-1/2">
          <div className="flex items-center justify-center my-5 space-x-1">
            {[...Array(sliders?.length)].map((_, idx) => (
              <div
                key={idx}
                className={cls(
                  "aspect-square rounded-full border border-slate-100 w-5 cursor-pointer opacity-60",
                  idx === imageIndex
                    ? "bg-main opacity-100"
                    : "bg-slate-300 hover:opacity-100"
                )}
                onClick={() => paginate(idx - imageIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
