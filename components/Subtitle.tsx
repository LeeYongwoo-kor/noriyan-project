import { cls } from "@libs/utils";
import React from "react";

type SubtitleProps = {
  text: string;
  color?: "WHITE" | "BLACK";
  description?: string[];
  children?: React.ReactNode;
};

export default function Subtitle({
  text,
  color = "BLACK",
  description,
  children,
}: SubtitleProps) {
  return (
    <div className="relative flex flex-col items-center justify-center mt-24 mb-12 font-poppins">
      <hr className="h-5 border-t-[3px] border-main w-40" />
      <div className="relative">
        <h2
          className={cls(
            "relative z-10 text-4xl font-extrabold",
            color === "WHITE" ? "text-white" : "text-black"
          )}
        >
          {text}
        </h2>
        <h2 className="absolute text-4xl font-bold opacity-10 whitespace-nowrap inset-1">
          {text}
        </h2>
        <h2 className="absolute text-4xl font-bold opacity-5 whitespace-nowrap inset-2">
          {text}
        </h2>
      </div>
      {description && description.length !== 0 ? (
        <div className="flex flex-col items-center justify-start w-full mt-4 font-mincho">
          {description.map((sentence: string, idx) => (
            <p key={idx} className="font-semibold text-gray-600 text-md">
              {sentence}
            </p>
          ))}
        </div>
      ) : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
