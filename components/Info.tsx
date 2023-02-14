import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBabyCarriage,
  faParking,
  faCreditCard,
  faShopSlash,
  faBan,
  faBanSmoking,
  faWifi,
  faEgg,
  faChair,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Subtitle from "./Subtitle";

export default function Info({ innerRef }: any) {
  return (
    <article ref={innerRef} className="w-full min-h-fit">
      <Subtitle text="INFORMATION" />
      <div className="grid w-full grid-cols-2 mt-8 h-[28rem]">
        <div className="relative w-full">
          <Image
            src="https://norisang-project.s3.ap-northeast-1.amazonaws.com/about_restaurant_04.jpg"
            alt="about_image_04"
            fill
            className="object-cover"
            quality={100}
            draggable={false}
            priority={true}
          />
        </div>
        <div className="relative w-full p-10">
          <div className="absolute z-10 space-y-1 text-2xl font-semibold">
            <p className="text-4xl font-bold text-darkmain">営業時間</p>
            <p className="text-3xl">
              毎週 月～土 <span>17:00 ~ 23:00</span>
            </p>
            <p className="text-lg font-medium text-gray-700">
              ※ラストオーダー 22:00
            </p>
            <p className="text-4xl font-bold pt-7 text-darkmain">定休日</p>
            <p className="text-3xl">毎週 日曜日</p>
            <p className="text-lg font-medium text-gray-700">
              ※定休・不定休の場合がございます。
            </p>
          </div>
          <Image
            src="https://norisang-project.s3.ap-northeast-1.amazonaws.com/about_restaurant_01.jpg"
            alt="about_image_01"
            fill
            className="object-cover opacity-10"
            quality={100}
            draggable={false}
            priority={true}
          />
        </div>
      </div>
      <div className="w-full mt-8">
        <div className="relative overflow-hidden pt-[33%]">
          <Image
            src="https://norisang-project.s3.ap-northeast-1.amazonaws.com/info_restaurant_seat01.jpg"
            alt="info_seat"
            fill
            className="border-2 border-lightmain"
            quality={100}
            draggable={false}
            priority={true}
          />
        </div>
        <div className="flex flex-col items-center justify-center m-12 font-semibold font-mincho">
          <div>
            <p className="text-3xl font-bold text-darkmain">
              カウンター８席・テーブル １つ（最大６席）
            </p>
            <p className="text-xl text-main">※入口は右側となります。</p>
            <div className="text-lg text-gray-500">
              <p>
                席と席の間の間隔が広く、居心地のいいカウンター席と奥に広いテーブル席のフロアを用意しております。
              </p>
              <p>カウンター席から厨房の調理過程が見える仕組みです。</p>
              <p>どうぞ気兼ねなくご来店ください。</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-3 gap-3 h-[24rem]">
        <div className="relative w-full">
          <Image
            src="https://norisang-project.s3.ap-northeast-1.amazonaws.com/about_restaurant_04.jpg"
            alt="about_image_04"
            fill
            className="object-cover"
            quality={100}
            draggable={false}
            priority={true}
          />
        </div>
        <div className="relative w-full">
          <Image
            src="https://norisang-project.s3.ap-northeast-1.amazonaws.com/about_restaurant_02.jpg"
            alt="about_image_02"
            fill
            className="object-cover"
            quality={100}
            draggable={false}
            priority={true}
          />
        </div>
        <div className="relative w-full">
          <Image
            src="https://norisang-project.s3.ap-northeast-1.amazonaws.com/about_restaurant_01.jpg"
            alt="about_image_01"
            fill
            className="object-cover"
            quality={100}
            draggable={false}
            priority={true}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-3 h-[24rem] mt-3">
        <div className="relative w-full">
          <Image
            src="https://norisang-project.s3.ap-northeast-1.amazonaws.com/about_restaurant_03.jpg"
            alt="about_image_03"
            fill
            className="object-cover"
            quality={100}
            draggable={false}
            priority={true}
          />
        </div>
        <div className="relative w-full">
          <Image
            src="https://norisang-project.s3.ap-northeast-1.amazonaws.com/about_restaurant_04.jpg"
            alt="about_image_04"
            fill
            className="object-cover"
            quality={100}
            draggable={false}
            priority={true}
          />
        </div>
      </div>
      <div className="px-8 py-10 mt-16 min-h-fit bg-main rounded-3xl">
        <div className="grid grid-cols-2 gap-3 break-keep font-semibold [&>div]:bg-white [&>div]:rounded-4xl [&>div]:text-darkmain">
          <div className="flex items-center px-8 py-4 bg-white">
            <FontAwesomeIcon
              className="mr-0.5"
              size="2x"
              icon={faBabyCarriage}
            />
            <FontAwesomeIcon className="mr-3" size="2x" icon={faBan} />
            お子様（未就学児）連れの入店はご遠慮ください。
          </div>
          <div className="flex items-center px-8 py-4 bg-highlight">
            <FontAwesomeIcon className="mr-3" size="2x" icon={faBanSmoking} />
            店内禁煙です。当店の前に灰皿を用意しております。
          </div>
          <div className="flex items-center px-8 py-4 bg-green-600">
            <FontAwesomeIcon className="mr-3" size="2x" icon={faEgg} />
            現在、お持ち帰りは特製たまごサンドのみとなります。
          </div>
          <div className="flex items-center px-8 py-4 bg-green-600">
            <FontAwesomeIcon className="mr-3" size="xl" icon={faPhone} />
            現在、予約は電話予約のみとなります。
          </div>
          <div className="flex items-center px-8 py-4 bg-green-600">
            <FontAwesomeIcon className="mr-3" size="2x" icon={faParking} />
            専用駐車場はございません。向かいのコインパーキングをお使いください。
          </div>
          <div className="flex items-center px-8 py-4 bg-green-600">
            <FontAwesomeIcon className="mr-3" size="xl" icon={faShopSlash} />
            現在、お店の貸切はお断りしております。団体予約は承っておりますので、ぜひご利用ください。
          </div>
          <div className="flex items-center px-8 py-4 bg-green-600">
            <FontAwesomeIcon className="mr-3" size="xl" icon={faChair} />
            席料・サービス料は一切頂戴いたしておりません。
          </div>
          <div className="flex items-center px-8 py-4 bg-green-600">
            <FontAwesomeIcon className="mr-3" size="xl" icon={faWifi} />
            <span className="mr-2 text-xl">Wi-fi</span>あります。
          </div>
        </div>
      </div>
      <div className="relative w-3/4 px-2 py-12 mx-auto my-24 border-2 border-lightmain">
        <div className="absolute left-0 flex justify-center w-full mx-auto -top-4">
          <div className="z-10 px-8 text-2xl font-medium bg-white font-kosugi text-darkmain">
            <FontAwesomeIcon className="mr-2" size="1x" icon={faCreditCard} />
            決済情報
          </div>
        </div>
        <div className="relative overflow-hidden pt-[55%]">
          <Image
            src="https://norisang-project.s3.ap-northeast-1.amazonaws.com/payment_info.png"
            alt="info_seat"
            fill
            quality={100}
            draggable={false}
            priority={true}
          />
        </div>
      </div>
    </article>
  );
}
