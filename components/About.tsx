import { images } from "@constants/images";
import Image from "next/image";
import { CommonProps } from "types/CommonProps";
import Subtitle from "./Subtitle";

export default function About({ innerRef }: CommonProps) {
  return (
    <article ref={innerRef} className="w-full min-h-fit">
      <div className="flex flex-col items-center justify-center">
        <Subtitle text="ABOUT" />
        <div className="relative w-full h-52">
          <Image
            src={images?.about?.top?.src}
            alt={images?.about?.top?.alt}
            fill
            className="object-cover"
            quality={100}
            draggable={false}
          />
        </div>
        <div className="w-full px-8 py-14 md:px-0 md:w-160 font-mincho">
          <p className="inline-block font-extrabold text-xl3clamp text-darkmain">
            のりやん食堂へようこそ
          </p>
          <div className="mt-4 space-y-3 font-semibold text-gray-600">
            <p>夫婦二人で経営します、小料理屋です。</p>
            <p>
              和食をメインに、鉄板焼きや、旬のお刺身、
              洋食、韓国料理、アジアン等もございます。
              種類豊富なカクテルや日本酒もご用意しております。
            </p>
            <p>
              店主の地元での愛称「のりやん」を
              <br />
              店名に親しみやすさを感じていただけるお店を目指して参ります。
            </p>
            <p>
              ふらっと立ち寄り、 少しのお料理と、 美味しいお酒を一杯。
              かしこまらず、
              <br />
              落ち着いた雰囲気の中で、「のりやん」の
              作る様々な家庭料理とお酒をお楽しみください。
            </p>
          </div>
        </div>
        <div className="grid w-full sm:auto-cols-fr sm:grid-flow-col sm:grid-cols-3 gap-2 sm:gap-5 h-[36rem] sm:h-[26rem]">
          <div className="relative w-full col-span-2">
            <Image
              src={images?.about?.bottom[0]?.src}
              alt={images?.about?.bottom[0]?.alt}
              fill
              className="object-cover"
              quality={100}
              draggable={false}
            />
          </div>
          <div className="relative w-full">
            <Image
              src={images?.about?.bottom[1]?.src}
              alt={images?.about?.bottom[1]?.alt}
              fill
              className="object-cover"
              quality={100}
              draggable={false}
            />
          </div>
          <div className="relative w-full">
            <Image
              src={images?.about?.bottom[2]?.src}
              alt={images?.about?.bottom[2]?.alt}
              fill
              className="object-cover"
              quality={100}
              draggable={false}
            />
          </div>
          <div className="relative w-full col-span-2 sm:row-span-2">
            <Image
              src={images?.about?.bottom[3]?.src}
              alt={images?.about?.bottom[3]?.alt}
              fill
              className="object-cover"
              quality={100}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
