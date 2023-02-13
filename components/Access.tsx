import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faTrainSubway, faWalking } from "@fortawesome/free-solid-svg-icons";

import Subtitle from "./Subtitle";
import Image from "next/image";

export default function Access({ innerRef }: any) {
  const [thisNavigator, setNavigator] = useState<string[]>(["ja", "ja"]);

  useEffect(() => {
    const language: string | undefined = navigator?.language;

    if (language) {
      const languageSplits = language.split("-");
      setNavigator(
        languageSplits.length > 1
          ? [languageSplits[0], languageSplits[1]]
          : [languageSplits[0], languageSplits[0]]
      );
    }
  }, []);

  return (
    <article ref={innerRef} className="w-full min-h-fit">
      <Subtitle
        text="ACCESS"
        description={[
          "名古屋駅から接近しやすいところにお店があります。",
          "沢山のお客様のご来店をお待ちしております。",
        ]}
      />
      <div className="w-full">
        <div className="relative hidden overflow-hidden h-0 pb-[50%] sm:block">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5484.908676762326!2d136.9251555885441!3d35.17292260757658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600371319b5aab7f%3A0xbc7b858318f7c0e5!2z6LuK6YGT44Gu44KK44KE44KT6aOf5aCC!5e0!3m2!1s${thisNavigator[0]}!2s${thisNavigator[1]}!4v1676041624166!5m2!1s${thisNavigator[0]}!2s${thisNavigator[1]}`}
            width="800"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute w-full h-full"
          ></iframe>
        </div>
      </div>
      <div className="relative w-full sm:hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52178.97377219232!2d136.86677429675197!3d35.17691986846774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600371319b5aab7f%3A0xbc7b858318f7c0e5!2z6LuK6YGT44Gu44KK44KE44KT6aOf5aCC!5e0!3m2!1sko!2sjp!4v1673533486214!5m2!1sko!2sjp"
          height="440"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
      <div className="flex items-center justify-center py-8 mt-8 text-xl font-semibold text-slate-700 font-kosugi rounded-xl bg-slate-200">
        <div className="flex flex-col justify-center space-y-3">
          <p className="mb-5 text-3xl">
            <span className="mr-3 text-slate-700">
              <FontAwesomeIcon size="xl" icon={faTrainSubway} />
            </span>
            地下鉄でお越しの方
          </p>
          <p className="flex items-center">
            <span className="relative inline-block w-8 h-8 mr-2">
              <Image
                src="https://norisang-project.s3.ap-northeast-1.amazonaws.com/sakura-dori_logo.png"
                alt="higashi-yama_logo"
                fill
                className="object-fill"
                draggable={false}
                priority={true}
              />
            </span>
            桜通線「車道駅」1番出口より
            <span className="mx-2">
              <FontAwesomeIcon size="1x" icon={faWalking} />
            </span>
            徒歩1分
          </p>
          <p className="flex items-center">
            <span className="relative inline-block w-8 h-8 mr-2">
              <Image
                src="https://norisang-project.s3.ap-northeast-1.amazonaws.com/higashi-yama_logo.png"
                alt="higashi-yama_logo"
                fill
                className="object-fill"
                draggable={false}
                priority={true}
              />
            </span>
            東山線「千種駅」1番出口より
            <span className="mx-2">
              <FontAwesomeIcon size="1x" icon={faWalking} />
            </span>
            徒歩8分
          </p>
        </div>
      </div>
    </article>
  );
}
