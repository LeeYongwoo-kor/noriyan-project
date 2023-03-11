import { images } from "@constants/images";
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons/faBabyCarriage";
import { faBanSmoking } from "@fortawesome/free-solid-svg-icons/faBanSmoking";
import { faCarrot } from "@fortawesome/free-solid-svg-icons/faCarrot";
import { faChair } from "@fortawesome/free-solid-svg-icons/faChair";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons/faCreditCard";
import { faEgg } from "@fortawesome/free-solid-svg-icons/faEgg";
import { faParking } from "@fortawesome/free-solid-svg-icons/faParking";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faWifi } from "@fortawesome/free-solid-svg-icons/faWifi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CommonProps } from "types/CommonProps";
import CustomImage from "./CustomImage";
import Subtitle from "./Subtitle";

export default function Info({ innerRef }: CommonProps) {
  return (
    <article ref={innerRef} className="w-full min-h-fit">
      <h1 className="hidden">店舗情報</h1>
      <Subtitle text="INFORMATION" />
      <div className="grid w-full mt-8 h-160 sm:grid-cols-2 sm:h-96">
        <div className="relative w-full">
          <CustomImage
            src={images?.info?.top?.src}
            alt={images?.info?.top?.alt}
            fill
            className="object-cover"
            quality={75}
            draggable={false}
            sizes="608px"
          />
        </div>
        <div className="relative w-full p-10">
          <div className="absolute z-10 space-y-1 text-2xl font-semibold">
            <p className="text-3xl font-bold text-darkmain">営業時間</p>
            <p className="text-2xl">
              毎週 月～土 <span>17:00 ~ 23:00</span>
            </p>
            <p className="text-lg font-medium text-gray-700">
              ※ラストオーダー 22:00
            </p>
            <p className="text-3xl font-bold pt-7 text-darkmain">定休日</p>
            <p className="text-2xl">毎週 日曜日</p>
            <p className="text-lg font-medium text-gray-700">
              ※定休・不定休の場合がございます。
            </p>
          </div>
          <CustomImage
            src={images?.info?.cover?.src}
            alt={images?.info?.cover?.alt}
            fill
            className="object-cover opacity-10"
            quality={75}
            draggable={false}
            sizes="608px"
          />
        </div>
      </div>
      <div className="w-full mt-8">
        <div className="relative overflow-hidden pt-[33%]">
          <CustomImage
            src={images?.info?.seat?.src}
            alt={images?.info?.seat?.alt}
            fill
            className="border-2 border-lightmain"
            quality={75}
            draggable={false}
          />
        </div>
        <div className="flex flex-col items-center justify-center m-5 font-semibold sm:m-8 md:m-12">
          <div>
            <p className="font-semibold text-xl3clamp text-darkmain">
              カウンター９席・テーブル １つ（最大６席）
            </p>
            <p className="font-normal text-lgclamp text-main">
              ※入口は右側となります。
            </p>
            <div className="mt-3 font-semibold text-gray-600 text-clamp font-mincho">
              <p>
                席と席の間の間隔が広く、居心地のいいカウンター席と奥に広いテーブル席のフロアを用意しております。
              </p>
              <p>カウンター席から厨房の調理過程が見える仕組みです。</p>
              <p>どうぞ気兼ねなくご来店ください。</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-full gap-2 h-160 md:grid-cols-3 md:gap-3 md:h-[22rem]">
        <div className="relative w-full">
          <CustomImage
            src={images?.info?.bottom[0]?.src}
            alt={images?.info?.bottom[0]?.alt}
            fill
            className="object-cover"
            quality={75}
            draggable={false}
          />
        </div>
        <div className="relative w-full">
          <CustomImage
            src={images?.info?.bottom[1]?.src}
            alt={images?.info?.bottom[1]?.alt}
            fill
            className="object-cover"
            quality={75}
            draggable={false}
          />
        </div>
        <div className="relative w-full">
          <CustomImage
            src={images?.info?.bottom[2]?.src}
            alt={images?.info?.bottom[2]?.alt}
            fill
            className="object-cover"
            quality={75}
            draggable={false}
          />
        </div>
      </div>
      <div className="grid w-full md:grid-cols-2 gap-2 md:gap-3 mt-2 md:mt-3 h-112 md:h-[22rem]">
        <div className="relative w-full">
          <CustomImage
            src={images?.info?.bottom[3]?.src}
            alt={images?.info?.bottom[3]?.alt}
            fill
            className="object-cover"
            quality={75}
            draggable={false}
          />
        </div>
        <div className="relative w-full">
          <CustomImage
            src={images?.info?.bottom[4]?.src}
            alt={images?.info?.bottom[4]?.alt}
            fill
            className="object-cover"
            quality={75}
            draggable={false}
          />
        </div>
      </div>
      <div className="px-4 py-5 mt-6 md:mt-12 md:px-8 md:py-10 bg-main min-h-fit md:rounded-4xl">
        <div className="grid auto-rows-fr grid-flow-row-dense md:grid-cols-2 gap-3 font-semibold [&>div]:bg-white [&>div]:rounded-4xl [&>div]:px-6 [&>div]:py-3 text-orange-700 text-xs sm:text-sm lg:text-base">
          <div className="flex items-center">
            <FontAwesomeIcon className="mr-3" size="xl" icon={faChair} />
            席料・サービス料は一切頂戴いたしておりません。
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon className="mr-3" size="xl" icon={faWifi} />
            <span className="mr-1 font-bold">Wi-fi</span>ございます。
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon className="mr-3" size="2x" icon={faCarrot} />
            ご要望に応じてお持ち帰りも承っております。
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon className="mr-3" size="2x" icon={faEgg} />
            特製たまごサンドはお持ち帰り限定となります。
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon className="mr-3" size="xl" icon={faPhone} />
            現在、予約は電話予約のみとなります。
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon className="mr-3" size="2x" icon={faBabyCarriage} />
            お子様（未就学児）連れの入店はご遠慮ください。
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon className="mr-3" size="2x" icon={faBanSmoking} />
            店内禁煙です。当店の前に灰皿を用意しております。
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon className="mr-3" size="2x" icon={faParking} />
            専用駐車場はございません。向かいのコインパーキングをお使いください。
          </div>
        </div>
      </div>
      <div className="relative w-[95%] px-2 py-12 mx-auto mt-12 md:mt-16 md:mb-16 mb-8 border-2 md:w-4/5 border-lightmain">
        <div className="absolute left-0 flex justify-center w-full mx-auto -top-4">
          <div className="z-10 px-8 text-base font-medium bg-white md:text-xl text-darkmain">
            <FontAwesomeIcon className="mr-2" size="1x" icon={faCreditCard} />
            決済情報
          </div>
        </div>
        <div className="relative overflow-hidden pt-[55%]">
          <CustomImage
            src={`${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/payment_info.png`}
            alt="payment_info"
            fill
            quality={75}
            draggable={false}
          />
        </div>
      </div>
    </article>
  );
}
