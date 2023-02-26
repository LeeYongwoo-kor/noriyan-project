import { navHeight } from "@constants/common";
import { faBullhorn, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "@libs/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { CurrentPositionType, IPositionInfo, NavbarTypes } from "types";

type NavbarMobileProps = {
  position: IPositionInfo;
  isShow: boolean;
  callbackScrollMove: (components: NavbarTypes) => void;
};

const navbarMobile: NavbarTypes[] = [
  "notice",
  "menu",
  "photoGallery",
  "access",
  "info",
];

export default function NavbarMobile({
  position,
  isShow,
  callbackScrollMove,
}: NavbarMobileProps) {
  const positionMap = navbarMobile.reduce((acc, pos, idx, arr) => {
    const next: NavbarTypes | undefined = arr[idx + 1];
    const start: number = position[pos] - navHeight;
    const end: number = next ? position[next] - navHeight : Infinity;
    return { ...acc, [pos]: { start, end } };
  }, {});

  const [currPosition, setCurrPosition] = useState<NavbarTypes>("home");
  const { scrollY } = useScroll();

  const handleClickNav = (components: NavbarTypes) => {
    callbackScrollMove(components);
  };

  useMotionValueEvent(scrollY, "change", (scroll) => {
    const currentPosition = Object.entries(positionMap).find(
      ([_, { start, end }]) => {
        return scroll >= start && scroll < end;
      }
    ) as CurrentPositionType | undefined;

    setCurrPosition(currentPosition ? currentPosition[0] : "home");
  });

  return (
    <div className={cls("md:hidden")}>
      <nav
        className={cls(
          "fixed bottom-0 z-20 flex w-full pt-2 pb-2 text-xs text-white divide-x divide-main justify-evenly bg-darkmain",
          isShow ? "animate-fadein visible" : "animate-fadeout invisible"
        )}
      >
        <button
          onClick={() => handleClickNav("notice")}
          className={cls(
            "flex flex-col flex-grow justify-between items-center space-y-2 transition-colors",
            currPosition.indexOf("notice") > -1
              ? "text-yellow-300"
              : "hover:text-white"
          )}
        >
          <FontAwesomeIcon size="2x" icon={faBullhorn} />
          <span>お知らせ</span>
        </button>
        <button
          onClick={() => handleClickNav("menu")}
          className={cls(
            "flex flex-col flex-grow justify-between items-center space-y-2 transition-colors",
            currPosition.indexOf("menu") > -1
              ? "text-yellow-300"
              : "hover:text-white"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 15 15"
            className="w-6 h-6"
          >
            <path
              id="path11774"
              d="M3.5,0l-1,5.5c-0.1464,0.805,1.7815,1.181,1.75,2L4,14c-0.0384,0.9993,1,1,1,1s1.0384-0.0007,1-1L5.75,7.5  c-0.0314-0.8176,1.7334-1.1808,1.75-2L6.5,0H6l0.25,4L5.5,4.5L5.25,0h-0.5L4.5,4.5L3.75,4L4,0H3.5z M12,0  c-0.7364,0-1.9642,0.6549-2.4551,1.6367C9.1358,2.3731,9,4.0182,9,5v2.5c0,0.8182,1.0909,1,1.5,1L10,14c-0.0905,0.9959,1,1,1,1  s1,0,1-1V0z"
            />
          </svg>
          <span>メニュー</span>
        </button>
        <button
          onClick={() => handleClickNav("photoGallery")}
          className={cls(
            "flex flex-col flex-grow justify-between items-center space-y-2 transition-colors",
            currPosition.indexOf("photoGallery") > -1
              ? "text-yellow-300"
              : "hover:text-white"
          )}
        >
          <FontAwesomeIcon size="2x" icon={faImages} />
          <span>ギャラリー</span>
        </button>
        <button
          onClick={() => handleClickNav("access")}
          className={cls(
            "flex flex-col flex-grow justify-between items-center space-y-2 transition-colors",
            currPosition.indexOf("access") > -1
              ? "text-yellow-300"
              : "hover:text-white"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          <span>アクセス</span>
        </button>
        <button
          onClick={() => handleClickNav("info")}
          className={cls(
            "flex flex-col flex-grow justify-between items-center space-y-2 transition-colors",
            currPosition.indexOf("info") > -1
              ? "text-yellow-300"
              : " hover:text-white"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
            <path
              fillRule="evenodd"
              d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z"
              clipRule="evenodd"
            />
          </svg>
          <span>店舗情報</span>
        </button>
      </nav>
    </div>
  );
}
