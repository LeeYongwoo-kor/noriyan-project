import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { IMenu } from "../data/menu";
import { cls } from "../libs/utils";
import Slider from "./Slider";
import Subtitle from "./Subtitle";

interface ISubMenu {
  food: number;
  drink: number;
  dessert: number;
}

const dayToMillsec = 86400000;
const decision = 7;
const showMax = 8;

function isNewArrival(regdate: string) {
  try {
    const currDate = new Date().getTime();
    const regDate = new Date(regdate).getTime();
    const elapsedTime = (currDate - regDate) / dayToMillsec;

    if (elapsedTime < decision) {
      return true;
    }

    return false;
  } catch (err) {
    console.warn("フォーマットが間違っています。", err);
    return false;
  }
}

function getSubArr(menu: IMenu[]): string[][] {
  const subMenu = menu?.reduce((acc: string[][], curr: IMenu) => {
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

  return subMenu;
}

function Menu({ innerRef, menu }: any) {
  // 1. ふりふきだいこん明太クリーム
  // 2. からすみみち
  // 3. 天然ぶり刺身
  // 4. とんぺい焼き
  // 5. ピーザ
  // 6. ビーフ？
  const [selectedKinds, setSelectedKinds] = useState<number>(0);
  // key: index of category array
  const [selectedSub, setSelectedSub] = useState<ISubMenu>({
    food: 0,
    drink: 0,
    dessert: 0,
  });
  const [subMenu, setSubMenu] = useState<IMenu[] | []>([]);
  const [showMore, setShowMore] = useState(false);

  const category: string[] = ["food", "drink", "dessert"];

  const subArr = useMemo(() => getSubArr(menu), []);

  const handleClickKinds = (idx: number) => {
    setSelectedKinds(idx);
  };

  const handleClickSub = (selectedKinds: number, idx: number) => {
    setSelectedSub((prev) => ({ ...prev, [category[selectedKinds]]: idx }));
  };

  const handleclickShowMore = () => {
    setShowMore(true);
  };

  // const selectedSubMemo = useMemo<ISubMenu>(
  //   () => ({
  //     food: selectedSub.food,
  //     drink: selectedSub.drink,
  //     dessert: selectedSub.dessert,
  //   }),
  //   [selectedSub.food, selectedSub.drink, selectedSub.dessert]
  // );

  useEffect(() => {
    setSubMenu(() =>
      menu?.filter(
        (item: IMenu) =>
          item?.sub ===
          subArr[selectedKinds][selectedSub[category[selectedKinds]]]
      )
    );
  }, [selectedSub, selectedKinds]);

  return (
    <article ref={innerRef} className="w-full min-h-fit">
      <Subtitle text="SPECIAL MENU" />
      <div className="h-[44rem]">
        <Slider component="menu" width="48" height="34" />
      </div>
      <Subtitle text="ALL MENU" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center w-full space-x-2">
          {category.map((kinds, idx) => (
            <button
              onClick={() => handleClickKinds(idx)}
              className={cls(
                "px-4 py-2 text-lg font-bold transition-colors border shadow-sm w-36 hover:text-white rounded-2xl hover:bg-main focus:outline-none",
                selectedKinds === idx
                  ? "text-white bg-highlight border-transparent"
                  : "border-main border-2"
              )}
              key={idx}
            >
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
            {showMore
              ? subMenu?.map((dish: IMenu) => (
                  <li className="flex" key={dish.id}>
                    <div className="relative h-48 w-44 aspect-square">
                      <Image
                        alt={dish.name}
                        className="object-cover w-full rounded-3xl"
                        src={dish.imageUrl}
                        fill
                        priority={true}
                      />
                    </div>
                    <div className="p-10">
                      <div className="mb-5 text-xl font-semibold">
                        {dish.name}
                      </div>
                      <div className="text-lg font-medium text-main">
                        ￥{dish.price}（税込）
                      </div>
                      {isNewArrival(dish.regdate) ? (
                        <div>This is NewArrival</div>
                      ) : null}
                    </div>
                  </li>
                ))
              : subMenu?.slice(0, showMax).map((dish: IMenu) => (
                  <li className="flex" key={dish.id}>
                    <div className="relative h-48 w-44 aspect-square">
                      <Image
                        alt={dish.name}
                        className="object-cover w-full rounded-3xl"
                        src={dish.imageUrl}
                        fill
                        priority={true}
                      />
                    </div>
                    <div className="p-10">
                      <div className="mb-5 text-xl font-semibold">
                        {dish.name}
                      </div>
                      <div className="text-lg font-medium text-main">
                        ￥{dish.price}（税込）
                      </div>
                      {isNewArrival(dish.regdate) ? (
                        <div>This is NewArrival</div>
                      ) : null}
                    </div>
                  </li>
                ))}
          </ul>
          {!showMore && subMenu?.length > showMax ? (
            <div
              onClick={handleclickShowMore}
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
