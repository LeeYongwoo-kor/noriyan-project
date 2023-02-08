import { IMenu } from "@data/menu";
import {
  faIceCream,
  faUtensils,
  faWineGlass,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "@libs/utils";
import React, { useEffect, useMemo, useState } from "react";
import MenuAllDisplay from "./MenuAllDisplay";
import MenuSpecial from "./MenuSpecial";
import Subtitle from "./Subtitle";

interface ISubMenu {
  food: number;
  drink: number;
  dessert: number;
}

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

function Menu({ innerRef, menu }: any) {
  const category: string[] = ["food", "drink", "dessert"];
  const categoryIcon: IconDefinition[] = [faUtensils, faWineGlass, faIceCream];
  const subArr = useMemo(() => getSubArr(menu), []);

  const [selectedKinds, setSelectedKinds] = useState<number>(0);
  // key: index of category array
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
    const copyState = [...showMore];
    copyState[selectedKinds][selectedSub[category[selectedKinds]]] = true;
    setShowMore(copyState);
  };

  useEffect(() => {
    console.log("This is useEffect!");
    setSubMenu(() =>
      menu?.filter(
        (item: IMenu) =>
          item?.sub ===
          subArr[selectedKinds][selectedSub[category[selectedKinds]]]
      )
    );
  }, [selectedKinds, selectedSub]);

  return (
    <article ref={innerRef} className="w-full min-h-fit">
      <MenuSpecial />
      <Subtitle text="ALL MENU" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center w-full space-x-2">
          {category.map((kinds, idx) => (
            <button
              onClick={() => handleClickKinds(idx)}
              className={cls(
                "px-4 py-2 text-lg font-bold transition-colors border shadow-sm w-36 hover:text-white rounded-2xl hover:bg-main focus:outline-none [&>svg]:hover:text-white",
                selectedKinds === idx
                  ? "text-white bg-highlight border-transparent"
                  : "border-main border-2 [&>svg]:text-darkmain"
              )}
              key={idx}
            >
              <FontAwesomeIcon
                className={cls("mr-3")}
                size="1x"
                icon={categoryIcon[idx]}
              />
              {kinds.toLocaleUpperCase()}
            </button>
          ))}
        </div>
        <div className="w-full">
          <ul>
            <li className="my-8 space-x-3 space-y-3 text-sm">
              {subArr[selectedKinds]?.map((subItem: string, idx: number) => (
                <button
                  onClick={() => handleClickSub(selectedKinds, idx)}
                  className={cls(
                    "border px-6 h-10 rounded-xl",
                    selectedSub[category[selectedKinds]] === idx
                      ? "text-white bg-main"
                      : "hover:bg-slate-200"
                  )}
                  key={idx}
                >
                  {subItem}
                </button>
              ))}
            </li>
          </ul>
          <ul className="grid w-full grid-cols-2 gap-8">
            {showMore[selectedKinds][selectedSub[category[selectedKinds]]]
              ? subMenu?.map((dish: IMenu) => (
                  <MenuAllDisplay key={dish.id} dish={dish} />
                ))
              : subMenu
                  ?.slice(0, showMax)
                  .map((dish: IMenu) => (
                    <MenuAllDisplay key={dish.id} dish={dish} />
                  ))}
          </ul>
          {!showMore[selectedKinds][selectedSub[category[selectedKinds]]] &&
          subMenu?.length > showMax ? (
            <div
              onClick={handleClickShowMore}
              className="flex items-center justify-center w-full mt-8 cursor-pointer h-14 bg-slate-200 hover:bg-slate-300 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="ml-3 text-lg text-slate-400">Show more</div>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default React.memo(Menu);
