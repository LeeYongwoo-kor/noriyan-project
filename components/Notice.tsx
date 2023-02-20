import Link from "next/link";
import { useState } from "react";
import { CommonProps } from "types/CommonProps";
import Slider from "./Slider";
import Subtitle from "./Subtitle";

export default function Notice({ innerRef }: CommonProps) {
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const getIndex = (childIndex: number) => {
    setImageIndex(childIndex);
  };
  return (
    <article ref={innerRef} className="w-full min-h-fit font-mincho">
      <Subtitle text="NOTICE" />
      <div className="flex items-center justify-center">
        <div className="flex p-8 h-[40rem] flex-1">
          <Slider component="notice" callback={getIndex} />
        </div>
        {imageIndex !== null ? (
          <div className="relative flex flex-col self-start flex-1 p-8 pt-16">
            {imageIndex === 0 ? (
              <>
                <h2 className="mb-8 text-4xl font-black">
                  お持ち帰り用の<span className="text-darkmain">卵サンド</span>
                  の<br />
                  ご予約を承っております。
                </h2>
                <div>
                  <p className="mb-8 text-lg font-semibold text-gray-600">
                    のりやん食堂では、自家製の卵サンドをお持ち帰りいただけます。
                    <br />
                    新鮮な卵をたっぷりと使用することで、フワッフワの食感に仕上がっております。
                    <br />
                    ぜひ、一度ご賞味ください。
                  </p>
                </div>
                <div>
                  <Link
                    href={`tel:000`}
                    className="inline-flex flex-col items-center px-4 py-2 font-medium text-white transition-colors border border-transparent rounded-md shadow-sm cursor-pointer bg-highlight hover:bg-darkmain focus:outline-none focus:ring-2 focus:ring-darkmain focus:ring-offset-2"
                  >
                    <div className="self-start text-sm font-bold">
                      予約はこちら
                    </div>
                    <div className="flex items-center justify-center text-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="hidden text-2xl md:block">
                        &nbsp;052-937-6252
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
