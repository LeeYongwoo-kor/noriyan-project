import { cls } from "@libs/utils";
import React from "react";

type SubtitleProps = {
  text: string;
  color?: "WHITE" | "BLACK";
  description?: string[];
  children?: React.ReactNode;
};

function Subtitle({
  text,
  color = "BLACK",
  description,
  children,
}: SubtitleProps) {
  return (
    <div className="relative flex flex-col items-center justify-center mt-16 mb-8 md:mt-20 md:mb-10 font-poppins">
      <hr className="h-5 border-t-[3px] border-main w-40" />
      <div className="relative">
        <h2
          className={cls(
            "relative z-10 text-3xl md:text-4xl font-extrabold",
            color === "WHITE" ? "text-white" : "text-black"
          )}
        >
          {text}
        </h2>
        <h2 className="absolute text-3xl font-bold md:text-4xl opacity-10 whitespace-nowrap inset-1">
          {text}
        </h2>
        <h2 className="absolute text-3xl font-bold md:text-4xl opacity-5 whitespace-nowrap inset-2">
          {text}
        </h2>
      </div>
      {description && description.length !== 0 ? (
        <div className="flex flex-col items-center justify-center w-5/6 mt-4 font-mincho">
          {description.map((sentence: string, idx) => (
            <h3
              key={idx}
              className="text-xs font-semibold text-center text-gray-600 sm:text-sm md:text-base"
            >
              {sentence}
            </h3>
          ))}
        </div>
      ) : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}

export default React.memo(Subtitle);
