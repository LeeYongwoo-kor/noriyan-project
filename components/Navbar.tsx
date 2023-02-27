import { navHeight, phonenumber, tabletSize } from "@constants/common";
import { faSmile, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "@libs/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CurrentPositionType, IPositionInfo, NavbarTypes } from "types";
import NavbarMobile from "./NavbarMobile";

type NavbarProps = {
  position: IPositionInfo;
  screenWidth: number | null;
  children: React.ReactNode;
};

const navbar: NavbarTypes[] = [
  "about",
  "notice",
  "menu",
  "photoGallery",
  "access",
  "info",
];

const navbarJp: Record<NavbarTypes, string> = {
  home: "",
  about: "概要",
  notice: "お知らせ",
  menu: "メニュー",
  photoGallery: "ギャラリー",
  access: "アクセス",
  info: "店舗情報",
};

function getNavbarJpName(navBar: NavbarTypes) {
  return navbarJp[navBar];
}

export default function Navbar({
  position,
  screenWidth,
  children,
}: NavbarProps) {
  const positionMap = navbar.reduce((acc, pos, idx, arr) => {
    const next: NavbarTypes | undefined = arr[idx + 1];
    const start: number = position[pos] - navHeight;
    const end: number = next ? position[next] - navHeight : Infinity;
    return { ...acc, [pos]: { start, end } };
  }, {});

  const [showNavBar, setShowNavBar] = useState(false);
  const [currPosition, setCurrPosition] = useState<NavbarTypes>("home");
  const [showNavBarMobile, setShowNavBarMobile] = useState(true);
  const { scrollY } = useScroll();

  const handleClickNav = (components: NavbarTypes) => {
    const movePosition = position[components];

    window.scroll({
      top: movePosition,
      behavior: "smooth",
    });
  };

  const handleClickSmile = () => {
    setShowNavBarMobile((prev) => !prev);
  };

  useMotionValueEvent(scrollY, "change", (scroll) => {
    setShowNavBar(scroll >= 100);

    const currentPosition = Object.entries(positionMap).find(
      ([_, { start, end }]) => {
        return scroll >= start && scroll < end;
      }
    ) as CurrentPositionType | undefined;

    setCurrPosition(currentPosition ? currentPosition[0] : "home");
  });

  return (
    <nav className="relative inset-0 w-full md:pt-10">
      <div
        className={cls(
          "sticky top-0 px-2 mx-auto md:px-6 z-20",
          showNavBar
            ? "bg-[#eeeeee] transition ease-linear duration-150 shadow-xl bg-opacity-95"
            : "bg-transparent invisible sm:visible"
        )}
      >
        <div className="flex items-center justify-between mx-auto h-14 md:h-20 max-w-7xl">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-3 rounded-md text-main focus:outline-none"
              aria-controls="mobile-smile"
              aria-expanded="false"
              onClick={handleClickSmile}
            >
              <span className="sr-only">Open main menu</span>
              <span
                className={cls(
                  showNavBarMobile ? "text-darkmain block" : "hidden"
                )}
              >
                <FontAwesomeIcon size="xl" icon={faSmileWink} />
              </span>
              <span className={cls(showNavBarMobile ? "hidden" : "block")}>
                <FontAwesomeIcon size="xl" icon={faSmile} />
              </span>
            </button>
          </div>
          <div className="flex items-center justify-center flex-1 md:items-stretch md:justify-start">
            <div className="flex items-center flex-shrink-0">
              <svg
                onClick={() => handleClickNav("home")}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 843 843"
                className="cursor-pointer w-14 h-14 md:w-16 md:h-16"
              >
                <image
                  x="83"
                  y="72"
                  width="678"
                  height="678"
                  xlinkHref="data:img/png;base64,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"
                />
              </svg>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div
                className={cls(
                  "flex items-end h-full space-x-1 lg:space-x-4 text-sm lg:text-base xl:text-lg font-semibold font-mincho",
                  showNavBar ? "text-black" : "text-white"
                )}
              >
                {navbar.map((name: NavbarTypes, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => handleClickNav(name)}
                    className={cls(
                      "px-4 py-1.5 rounded-xl transition-colors",
                      currPosition.indexOf(name) > -1
                        ? "text-white bg-highlight hover:bg-darkmain"
                        : "hover:bg-highlight hover:text-white"
                    )}
                  >
                    {getNavbarJpName(name)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0 font-murecho">
            <div className="relative ml-3">
              <div>
                <span className="md:ml-3">
                  <Link
                    href={`tel:${phonenumber}`}
                    className="inline-flex flex-col items-center px-4 py-2 font-medium text-white transition-colors border border-transparent rounded-md shadow-sm cursor-pointer bg-highlight hover:bg-darkmain focus:outline-none"
                  >
                    <div className="hidden text-xs md:block">
                      ご予約・お問い合わせ
                    </div>
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
                      <div className="hidden ml-2 text-2xl md:block">
                        {phonenumber.slice(0, 3) +
                          "-" +
                          phonenumber.slice(3, 6) +
                          "-" +
                          phonenumber.slice(6)}
                      </div>
                    </div>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
      {screenWidth && screenWidth < tabletSize ? (
        <NavbarMobile
          position={position}
          isShow={showNavBarMobile}
          callbackScrollMove={handleClickNav}
        />
      ) : null}
    </nav>
  );
}
