import { phonenumber } from "@constants/common";
import Link from "next/link";
import { useState } from "react";
import { CommonProps } from "types/CommonProps";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import Slider from "./Slider";
import Subtitle from "./Subtitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Notice({ innerRef }: CommonProps) {
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const getIndex = (childIndex: number) => {
    setImageIndex(childIndex);
  };
  return (
    <article ref={innerRef} className="w-full min-h-fit">
      <h1 className="hidden">お知らせ</h1>
      <Subtitle text="NOTICE" />
      <div className="flex flex-col items-center justify-center md:flex-row bg-slate-100">
        <div className="relative md:flex pt-8 md:p-8 w-full sm:w-5/6 h-112 sm:h-128 mobile:px-4 md:h-[40rem] md:flex-3">
          <Slider component="notice" callback={getIndex} intervalTimer={5000} />
        </div>
        {imageIndex !== null ? (
          <div className="relative flex flex-col self-start p-8 md:pt-24 flex-2">
            {imageIndex === 0 ? (
              <>
                <h2 className="mb-5 text-2xl font-bold md:mb-8">
                  お持ち帰り用の<span className="text-darkmain">卵サンド</span>
                  のご予約を承っております。
                </h2>
                <div>
                  <p className="mb-2 text-base font-bold md:text-lg md:mb-4 text-slate-700 font-mincho">
                    のりやん食堂では、自家製の卵サンドをお持ち帰りいただけます。
                    新鮮な卵をたっぷりと使用することで、フワッフワの食感に仕上がっております。
                    ぜひ、一度ご賞味ください。
                  </p>
                </div>
                <div>
                  <p className="mb-5 text-xs font-medium md:text-sm md:mb-8 text-highlight">
                    ※前日までご予約をお願いします。
                  </p>
                </div>
                <div className="w-full">
                  <Link
                    href={`tel:${phonenumber}`}
                    className="inline-flex flex-col items-center w-full px-4 py-4 font-medium text-white transition-colors border border-transparent rounded-md shadow-sm cursor-pointer bg-highlight hover:bg-darkmain focus:outline-none focus:ring-2 focus:ring-darkmain focus:ring-offset-2"
                  >
                    <div className="flex items-center justify-center">
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
                      <div className="ml-2 text-lg">ご予約の方はこちら</div>
                    </div>
                  </Link>
                </div>
              </>
            ) : null}
            {imageIndex === 1 ? (
              <>
                <h2 className="mb-5 text-2xl font-bold md:mb-8">
                  毎月新鮮な<span className="text-darkmain">季節料理</span>
                  をご用意しております。
                </h2>
                <div>
                  <p className="mb-2 text-base font-bold md:text-lg md:mb-4 text-slate-700 font-mincho">
                    当店では、毎月旬の食材を使用した季節料理を提供しています。
                    地元の食材にこだわり、素材の旨味を最大限に引き出す料理をご提供し、お客様にご満足いただける食堂を目指しています。
                    是非、当店で美味しいお食事をお楽しみください。
                  </p>
                </div>
                <div>
                  <p className="mb-5 text-xs font-medium md:text-sm md:mb-8 text-highlight">
                    ※売り切れる場合がございます。
                  </p>
                </div>
                <div className="flex items-center justify-center w-full">
                  <Link
                    href="https://www.instagram.com/kurumamichi.noriyan/"
                    target={"_blank"}
                    className="inline-flex flex-col items-center justify-center w-full px-4 py-4 font-medium text-white transition-colors border border-transparent rounded-md shadow-sm cursor-pointer bg-highlight hover:bg-darkmain focus:outline-none focus:ring-2 focus:ring-darkmain focus:ring-offset-2"
                  >
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        className="text-white"
                        size="2x"
                        icon={faInstagram}
                      />
                      <div className="ml-2 text-lg">最新の情報ははこちら</div>
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
