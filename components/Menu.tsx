import { IMenu } from "@data/menu";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faIceCream } from "@fortawesome/free-solid-svg-icons/faIceCream";
import { faUtensils } from "@fortawesome/free-solid-svg-icons/faUtensils";
import { faWineGlass } from "@fortawesome/free-solid-svg-icons/faWineGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "@libs/utils";
import Link from "next/link";
import React, { RefObject, useEffect, useMemo, useState } from "react";
import MenuAllDisplay from "./MenuAllDisplay";
import MenuSpecial from "./MenuSpecial";
import Subtitle from "./Subtitle";

interface ISubMenu {
  food: number;
  drink: number;
  dessert: number;
}

type MenuProps = {
  innerRef: RefObject<HTMLElement> | undefined;
  menu: IMenu[];
  callbackPosition: () => void;
};

const showMax = 6;

function getSubArr(menu: IMenu[]): string[][] {
  const subArr = menu?.reduce((acc: string[][], curr: IMenu) => {
    const currCategory = curr["category"];
    if (!acc[currCategory]) {
      acc[currCategory] = [curr["sub"]];
      return acc;
    }

    if (acc[currCategory].includes(curr["sub"])) {
      return acc;
    }

    acc[currCategory].push(curr["sub"]);
    return [...(acc || [])];
  }, []);

  return subArr;
}

function getInitialShowStatus(subArr: string[][]): boolean[][] {
  const menuStatus = subArr?.map((data) => {
    return Array.from({ length: data.length }, () => false);
  });

  return menuStatus;
}

function Menu({ innerRef, menu, callbackPosition }: MenuProps) {
  const category: string[] = ["food", "drink", "dessert"];
  const description: string[] = [
    "のりやん食堂の様々な手作り料理とお酒をぜひお楽しみください。",
    "※ 売り切れの場合もございますので、最新情報は以下のメニューサイトからご確認ください。",
  ];
  const categoryIcon: IconDefinition[] = [faUtensils, faWineGlass, faIceCream];
  const subArr = useMemo(() => getSubArr(menu), [menu]);

  const [shouldRender, setShouldRender] = useState(false);
  const [selectedKinds, setSelectedKinds] = useState<number>(0);
  const [selectedSub, setSelectedSub] = useState<ISubMenu>({
    food: 0,
    drink: 0,
    dessert: 0,
  });
  const [subMenu, setSubMenu] = useState<IMenu[] | []>([]);
  const [showMore, setShowMore] = useState<boolean[][]>(() =>
    getInitialShowStatus(subArr)
  );

  const handleClickKinds = (kinds: number) => {
    setSelectedKinds(kinds);
  };

  const handleClickSub = (kinds: number, sub: number) => {
    setSelectedSub((prev) => ({
      ...prev,
      [category[kinds]]: sub,
    }));
  };

  const handleClickShowMore = () => {
    setShowMore((prevShowMore) => {
      const copyState = [...prevShowMore];
      const selectedCategory = category[selectedKinds] as keyof ISubMenu;
      copyState[selectedKinds][selectedSub[selectedCategory]] = true;
      return copyState;
    });
    setShouldRender((prev) => !prev);
  };

  useEffect(() => {
    const selectedCategory = category[selectedKinds] as keyof ISubMenu;
    setSubMenu(
      menu?.filter(
        (item: IMenu) =>
          item?.sub === subArr[selectedKinds][selectedSub[selectedCategory]]
      )
    );
    setShouldRender((prevShouldRender) => !prevShouldRender);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKinds, selectedSub]);

  useEffect(() => {
    if (innerRef?.current) {
      callbackPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRender]);

  return (
    <article ref={innerRef} className="w-full md:overflow-hidden min-h-fit">
      <h1 className="hidden">メニュー</h1>
      <MenuSpecial />
      <Subtitle text="ALL MENU" description={description}>
        <Link
          href="https://dining-menu.com/menu_system/sample_menu3/top.php?sc=215036&n=0&r=1Y/"
          target={"_blank"}
          className="inline-flex flex-col items-center px-4 py-2 font-medium transition-colors border-2 rounded-md shadow-sm cursor-pointer border-slate-400 hover:bg-slate-200"
          aria-label="Go find out about the sell-out information"
        >
          <p className="flex items-center justify-center text-xs sm:text-sm md:text-base text-slate-400 font-murecho">
            売り切れの情報確認へ
          </p>
        </Link>
      </Subtitle>
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex justify-center w-full space-x-0.5 text-sm font-bold sm:space-x-2 md:text-lg"
          role="group"
        >
          {category.map((kinds, idx) => (
            <button
              onClick={() => handleClickKinds(idx)}
              className={cls(
                "flex justify-center items-center px-4 py-2 transition-colors border shadow-sm w-40 hover:text-white rounded-2xl mobile:hover:bg-highlight focus:outline-none [&>svg]:hover:text-white",
                selectedKinds === idx
                  ? "text-white bg-darkmain border-transparent"
                  : "border-highlight border-2 [&>svg]:text-darkmain"
              )}
              key={idx}
            >
              <FontAwesomeIcon
                className={cls("mr-2 md:mr-3")}
                size="1x"
                icon={categoryIcon[idx]}
              />
              {kinds.toLocaleUpperCase()}
            </button>
          ))}
        </div>
        <div className="w-full">
          <ul>
            <li className="mt-1 space-x-2 space-y-2 overflow-x-auto text-xs mobile:mt-2 md:mt-4 no-scroll whitespace-nowrap mobile:whitespace-normal sm:text-sm">
              {subArr[selectedKinds]?.map((subItem: string, idx: number) => (
                <button
                  onClick={() => handleClickSub(selectedKinds, idx)}
                  className={cls(
                    "border px-6 h-10 rounded-xl font-medium",
                    selectedSub[category[selectedKinds] as keyof ISubMenu] ===
                      idx
                      ? "text-white bg-darkmain border-transparent"
                      : subItem === "おすすめ" || subItem === "季節物"
                      ? "border-highlight text-darkmain hover:bg-slate-200"
                      : "hover:bg-slate-200 text-slate-700 border-slate-300"
                  )}
                  key={idx}
                >
                  {subItem}
                </button>
              ))}
            </li>
          </ul>
          {subArr[selectedKinds]?.length > 3 ? (
            <div className="mt-1 text-xs text-slate-300 mobile:hidden">
              ※スライド操作で選択できます。
            </div>
          ) : null}
          <ul className="grid w-full grid-cols-2 gap-2 mt-7 mobile:grid-cols-3 md:grid-cols-2 md:gap-8">
            {showMore[selectedKinds][
              selectedSub[category[selectedKinds] as keyof ISubMenu]
            ]
              ? subMenu?.map((dish: IMenu) => (
                  <MenuAllDisplay key={dish.id} dish={dish} />
                ))
              : subMenu
                  ?.slice(0, showMax)
                  ?.map((dish: IMenu) => (
                    <MenuAllDisplay key={dish.id} dish={dish} />
                  ))}
          </ul>
          {!showMore[selectedKinds][
            selectedSub[category[selectedKinds] as keyof ISubMenu]
          ] && subMenu?.length > showMax ? (
            <div
              onClick={handleClickShowMore}
              className="flex items-center justify-center w-full mt-4 cursor-pointer md:mt-6 h-14 bg-slate-200 hover:bg-slate-300 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="ml-3 text-sm sm:text-base md:text-lg text-slate-400">
                Show more
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default React.memo(Menu);
