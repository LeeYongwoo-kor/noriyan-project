import Image from "next/image";
import Subtitle from "./Subtitle";

export default function About({ innerRef }: any) {
  return (
    <article ref={innerRef} className="w-full min-h-fit">
      <div className="flex flex-col items-center justify-center">
        <Subtitle text="ABOUT" />
        <div className="relative w-full h-56">
          <Image
            src="https://norisang-project.s3.ap-northeast-1.amazonaws.com/about_restaurant_top.jpg"
            alt="about_image_top"
            fill
            className="object-cover"
            quality={100}
            draggable={false}
            priority={true}
          />
        </div>
        <div className="m-16 font-mincho w-144">
          <p className="inline-block text-3xl font-bold text-darkmain">
            のりやん食堂へようこそ
          </p>
          <p className="mt-8 text-lg font-semibold text-gray-600">
            夫婦二人で経営します、小料理屋です。
            <br />
            和食をメインに、鉄板焼きや、旬のお刺身、 韓国料理等もございます。
            種類豊富なカクテルや日本酒もご用意しております。
            店主の地元での愛称「のりやん」を店名に
            親しみやすさを感じていただけるお店を目指して参ります。
            <br />
            ふらっと立ち寄り、 少しのお料理と、 美味しいお酒を一杯。
            かしこまらず、落ち着いた雰囲気の中で、「のりやん」の作る様々な家庭料理とお酒をお楽しみください。
          </p>
        </div>
        <div className="grid w-full grid-flow-col grid-cols-3 gap-5 h-[26rem]">
          <div className="relative w-full row-span-2">
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
          <div className="relative w-full row-span-2">
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
        </div>
      </div>
    </article>
  );
}
