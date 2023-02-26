import { IMenu } from "@data/menu";
import CustomImage from "./CustomImage";

type MenuAllDisplayProps = {
  dish: IMenu;
};

const dayToMillsec = 86400000;
const decision = 14;

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

function getJpCurrency(price: number) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(price);
}

export default function MenuAllDisplay({ dish }: MenuAllDisplayProps) {
  return (
    <li className="flex flex-col items-center justify-start md:flex-row">
      <div className="relative w-full h-48 sm:w-44 aspect-square">
        <CustomImage
          alt={dish.name}
          className="object-cover w-full rounded-3xl"
          src={dish.imageUrl}
          fill
        />
      </div>
      <div className="px-3 py-4 font-semibold md:px-6 md:py-10 lg:px-10">
        <div>
          <div className="text-base font-bold sm:text-lg lg:text-xl">
            {dish.name}
          </div>
          {dish.recommendation > 0 ? (
            <span className="mr-0.5 text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-main text-white rounded-full">
              人気
            </span>
          ) : null}
          {isNewArrival(dish.regdate) ? (
            <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-500 text-white rounded-full">
              NEW
            </span>
          ) : null}
        </div>
        <div className="mt-1.5 md:mt-4 text-main">
          <span className="text-sm sm:text-base md:text-lg">
            {getJpCurrency(dish.price)}
          </span>
          <span className="text-xs font-medium">（税込）</span>
        </div>
      </div>
    </li>
  );
}
