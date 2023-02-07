import Image from "next/image";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { IMenu } from "../data/menu";
import { cls } from "../libs/utils";
import Slider from "./Slider";
import Subtitle from "./Subtitle";

interface IMenuStatus {
  kinds: number;
  sub: number;
  showMore: boolean;
}

interface IMenuSelected {
  kinds: number;
  sub: number;
}

interface IMenuState {
  selected: IMenuSelected;
  showStatus: IMenuStatus[];
}

const dayToMillsec = 86400000;
const decision = 7;
const showMax = 6;

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

function getInitialMenuStatus(subArr: string[][]) {
  const menuStatus = subArr?.reduce(
    (menuObj: IMenuStatus[], kinds: string[], kindsIdx: number) => {
      const menu = kinds?.reduce(
        (kindsObj: IMenuStatus[], subName: string, subIdx: number) => {
          const subObj: IMenuStatus = {
            kinds: kindsIdx,
            sub: subIdx,
            // selected: subIdx === 0 ? true : false,
            showMore: false,
          };

          return [...(kindsObj || []), subObj];
        },
        []
      );

      return [...(menuObj || []), ...menu];
    },
    []
  );

  return menuStatus;
}

function reducer(state: IMenuState, action: any) {
  switch (action.type) {
    case "CHANGE_KINDS":
      return {
        ...state,
        selected: {
          ...state.selected,
          kinds: action.idx,
        },
      };
    case "CHANGE_SUB":
      return {
        ...state,
        selected: {
          ...state.selected,
          sub: action.idx,
        },
      };
    case "SHOW_MORE":
      return {
        ...state,
        menuStatus: state.menuStatus.map((menu: IMenuStatus) =>
          menu.kinds === action?.kinds && menu.sub === action?.sub
            ? { ...menu, showMore: true }
            : menu
        ),
      };
    default:
      return state;
  }
}

function Menu({ innerRef, menu }: any) {
  const category: string[] = ["food", "drink", "dessert"];
  const subArr = useMemo(() => getSubArr(menu), []);

  const initialState = {
    selected: { kinds: 0, sub: 0 },
    showStatus: getInitialMenuStatus(subArr),
  };

  // const [selectedKinds, setSelectedKinds] = useState<number>(0);
  // const [showMore, setShowMore] = useState(false);
  const [subMenu, setSubMenu] = useState<IMenu[] | []>([]);

  const [menuState, dispatch] = useReducer(reducer, initialState);
  const { kinds, sub } = menuState.selected;
  const { showStatus } = menuState;

  // const handleClickKinds = (idx: number) => {
  //   setSelectedKinds(idx);
  // };

  const handleClickKinds = useCallback((idx: number) => {
    dispatch({
      type: "CHANGE_KINDS",
      idx,
    });
  }, []);

  // const handleClickSub = (selectedKinds: number, idx: number) => {
  //   setSelectedSub((prev) => ({ ...prev, [category[selectedKinds]]: idx }));
  // };

  const handleClickSub = useCallback((idx: number) => {
    dispatch({
      type: "CHANGE_SUB",
      idx,
    });
  }, []);

  // const handleclickShowMore = () => {
  //   setShowMore(true);
  // };

  const handleClickShowMore = useCallback(() => {
    dispatch({
      type: "SHOW_MORE",
      kinds,
      sub,
    });
  }, [kinds, sub]);

  // const selectedSubMemo = useMemo<ISubMenu>(
  //   () => ({
  //     food: selectedSub.food,
  //     drink: selectedSub.drink,
  //     dessert: selectedSub.dessert,
  //   }),
  //   [selectedSub.food, selectedSub.drink, selectedSub.dessert]
  // );

  useEffect(() => {
    const { showMore } = showStatus?.find(
      (data) => data.kinds === kinds && data.sub === sub
    );

    if (showMore) {
      setSubMenu(() =>
        menu?.filter((item: IMenu) => item?.sub === subArr[kinds][sub])
      );
    } else {
      setSubMenu(() =>
        menu
          ?.filter((item: IMenu) => item?.sub === subArr[kinds][sub])
          .slice(0, showMax)
      );
    }
  }, [kinds, sub]);

  return (
    <article ref={innerRef} className="w-full min-h-fit">
      <Subtitle text="SPECIAL MENU" />
      <div className="h-[44rem]">
        <Slider component="menu" width="48" height="34" />
      </div>
      <Subtitle text="ALL MENU" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center w-full space-x-2">
          {category.map((kindsName, idx) => (
            <button
              onClick={() => handleClickKinds(idx)}
              className={cls(
                "px-4 py-2 text-lg font-bold transition-colors border shadow-sm w-36 hover:text-white rounded-2xl hover:bg-main focus:outline-none",
                kinds === idx
                  ? "text-white bg-highlight border-transparent"
                  : "border-main border-2"
              )}
              key={idx}
            >
              {kindsName.toLocaleUpperCase()}
            </button>
          ))}
        </div>
        <div className="w-full">
          <ul>
            <li className="my-8 space-x-3 space-y-3 text-sm">
              {subArr[kinds]?.map((subItem: string, idx: number) => (
                <button
                  onClick={() => handleClickSub(idx)}
                  className={cls(
                    "border px-6 h-10 rounded-xl",
                    sub === idx ? "text-white bg-main" : "hover:bg-slate-200"
                  )}
                  key={idx}
                >
                  {subItem}
                </button>
              ))}
            </li>
          </ul>
          <ul className="grid w-full grid-cols-2 gap-8">
            {subMenu?.map((dish: IMenu) => (
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
                  <div className="mb-5 text-xl font-semibold">{dish.name}</div>
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
          {subMenu?.length > showMax ? (
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
