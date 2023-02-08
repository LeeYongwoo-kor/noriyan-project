import { IMenu } from "@data/menu";
import Image from "next/image";

type DishProps = {
  dish: IMenu;
};

const dayToMillsec = 86400000;
const decision = 7;

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

export default function MenuAllDisplay({ dish }: DishProps) {
  return (
    <li className="flex">
      <div className="relative h-48 w-44 aspect-square">
        <Image
          alt={dish.name}
          className="object-cover w-full rounded-3xl"
          src={dish.imageUrl}
          fill
          priority={true}
        />
      </div>
      <div className="p-10 font-semibold">
        <div className="mb-5 text-xl">{dish.name}</div>
        <div className=" text-main">
          <span className="text-lg">￥{dish.price}</span>
          <span className="text-sm">（税込）</span>
        </div>
        {isNewArrival(dish.regdate) ? <div>This is NewArrival</div> : null}
      </div>
    </li>
  );
}
