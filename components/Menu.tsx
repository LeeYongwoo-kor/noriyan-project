import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { initialTabs as tabs } from "../data/ingredients";
import { IMenu } from "../data/menu";
import { cls } from "../libs/utils";
import Slider from "./Slider";
import Subtitle from "./Subtitle";

const dayToMillsec = 86400000;
const decision = 7;

const IsNewArrival = (regdate: string) => {
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
};

function Menu({ innerRef, menu }: any) {
  // 1. ふりふきだいこん明太クリーム
  // 2. からすみみち
  // 3. 天然ぶり刺身
  // 4. とんぺい焼き
  // 5. ピーザ
  // 6. ビーフ？
  const [selectedKinds, setSelectedKinds] = useState(0);
  // key: index of category array
  const [selectedSub, setSelectedSub] = useState({ 0: 0, 1: 0, 2: 0 });

  const category = ["FOOD", "DRINK", "DESSERT"];

  const subArr = menu?.reduce((acc: [string[]], curr: IMenu) => {
    const category = curr["category"];
    if (!acc[category]) {
      acc[category] = [curr["sub"]];
      return acc;
    }

    if (acc[category].includes(curr["sub"])) {
      return acc;
    }

    acc[category].push(curr["sub"]);
    return [...(acc || [])];
  }, []);

  const handleClickKinds = (idx: number) => {
    setSelectedKinds(idx);
  };

  const handleClickSub = (kinds: number, idx: number) => {
    setSelectedSub((prevState) => ({
      ...prevState,
      [kinds]: idx,
    }));
  };

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
              {kinds}
            </button>
          ))}
        </div>
        <div className="w-full">
          <ul>
            <li className="flex flex-wrap m-8 space-x-3 text-sm">
              {subArr[selectedKinds]?.map((subItem, idx) => (
                <button
                  onClick={() => handleClickSub(selectedKinds, idx)}
                  className={cls(
                    "border w-28 rounded-xl",
                    selectedSub[selectedKinds] === idx ? "text-2xl" : ""
                  )}
                  key={idx}
                >
                  {subItem}
                </button>
              ))}
            </li>
          </ul>
          <ul className="grid w-full grid-cols-2 gap-8">
            {menu
              ?.filter(
                (item: IMenu) =>
                  item?.sub ===
                  subArr[selectedKinds][selectedSub[selectedKinds]]
              )
              .slice(0, 8)
              .map((dish: IMenu) => (
                <li className="flex" key={dish.id}>
                  <div className="relative w-44 aspect-square">
                    <Image
                      alt={dish.sub}
                      className="object-cover w-full rounded-3xl"
                      src={dish.imageUrl}
                      fill
                      priority={true}
                    />
                  </div>
                  <div className="p-10">
                    <div className="mb-5 text-xl font-bold">{dish.name}</div>
                    <div className="text-lg font-medium text-main">
                      ￥{dish.price}（税込）
                    </div>
                    {IsNewArrival(dish.regdate) ? (
                      <div>This is NewArrival</div>
                    ) : null}
                  </div>
                </li>
              ))}
          </ul>
          <div className="flex items-center justify-center w-full mt-8 h-14 bg-slate-200 hover:bg-slate-300 rounded-xl">
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
        </div>
      </div>
    </article>
  );
}

export default React.memo(Menu);
