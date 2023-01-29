import Image from "next/image";
import { images } from "../constants/images";
import { ubuntu } from "../fonts/fonts";
import { cls } from "../libs/utils";
import { Kinds } from "../pages";

export default function Subtitle({ component }: Kinds) {
  const { nameJp, nameEn, path, alt } = images.subtitle[component];
  return (
    <div className="relative h-32 select-none bg-slate-200">
      <Image src={path} alt={alt} fill className="object-cover opacity-50" />
      <div className="flex flex-col justify-center h-full mx-auto indent-8 max-w-7xl">
        <div className="flex flex-col space-y-2 w-fit">
          <h1 className="text-5xl">{nameJp}</h1>
          <h2 className={cls("text-2xl", ubuntu.className)}>&nbsp; {nameEn}</h2>
        </div>
      </div>
    </div>
  );
}
