import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { initialTabs as tabs } from "../data/ingredients";
import Slider from "./Slider";
import Subtitle from "./Subtitle";

function Menu({ innerRef, menu }: any) {
  // 1. ふりふきだいこん明太クリーム
  // 2. からすみみち
  // 3. 天然ぶり刺身
  // 4. とんぺい焼き
  // 5. ピーザ
  // 6. ビーフ？
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedKinds, setSelectedKinds] = useState(0);
  const [selectedSub, setSelectedSub] = useState(0);

  const category = ["FOOD", "DRINK", "DESSERT"];

  const subArr = menu?.reduce((acc, curr) => {
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

  const handleClickSub = (idx: number) => {
    setSelectedSub(idx);
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
              className="px-4 py-2 text-lg font-bold text-white transition-colors border border-transparent shadow-sm w-36 rounded-2xl bg-highlight hover:bg-darkmain focus:outline-none focus:ring-2 focus:ring-darkmain focus:ring-offset-2"
              key={idx}
            >
              {kinds}
            </button>
          ))}
        </div>
        <div>
          <ul>
            <div>
              {subArr[selectedKinds]?.map((subItem, idx) => (
                <button
                  onClick={() => handleClickSub(idx)}
                  className="border w-28 rounded-xl"
                  key={idx}
                >
                  {subItem}
                </button>
              ))}
            </div>
            <div className="grid w-full max-w-full grid-cols-2 gap-8">
              {menu
                ?.filter(
                  (item) => item?.sub === subArr[selectedKinds][selectedSub]
                )
                .map((dish) => (
                  <div className="flex" key={dish.id}>
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
                    </div>
                  </div>
                ))}
            </div>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </article>
  );
}

export default React.memo(Menu);
