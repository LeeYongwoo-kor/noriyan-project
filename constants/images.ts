interface IImageProps {
  src: string;
  alt: string;
}

interface IPhotoGalleryProps extends IImageProps {
  id: string;
}

interface ISpecialMenuProps extends IPhotoGalleryProps {
  nameJp: string;
  nameEng: string;
  price: number;
  description: string;
}

interface ISlider {
  notice: [IImageProps, IImageProps];
  menu: [
    ISpecialMenuProps,
    ISpecialMenuProps,
    ISpecialMenuProps,
    ISpecialMenuProps,
    ISpecialMenuProps,
    ISpecialMenuProps,
    ISpecialMenuProps,
    ISpecialMenuProps,
    ISpecialMenuProps
  ];
}

interface IAbout {
  top: IImageProps;
  bottom: [IImageProps, IImageProps, IImageProps, IImageProps];
}

interface IInfo {
  top: IImageProps;
  cover: IImageProps;
  seat: IImageProps;
  bottom: [IImageProps, IImageProps, IImageProps, IImageProps, IImageProps];
}

interface IImage {
  main: [IImageProps, IImageProps];
  slider: ISlider;
  about: IAbout;
  info: IInfo;
  photoGallery: [
    IPhotoGalleryProps,
    IPhotoGalleryProps,
    IPhotoGalleryProps,
    IPhotoGalleryProps,
    IPhotoGalleryProps,
    IPhotoGalleryProps,
    IPhotoGalleryProps,
    IPhotoGalleryProps
  ];
}

export const images: IImage = {
  main: [
    {
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/main_restaurant_2_hosei.jpg`,
      alt: `main_image_01`,
    },
    {
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/main_restaurant_3_hosei.jpg`,
      alt: `main_image_02`,
    },
  ],
  slider: {
    notice: [
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/notice_restaurant_01.jpg`,
        alt: `notice_image_01`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/notice_restaurant_02.jpg`,
        alt: `notice_image_02`,
      },
    ],
    menu: [
      {
        id: "001",
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_011.jpg`,
        alt: "黒毛和牛ロースステーキ",
        nameJp: "黒毛和牛ロースステーキ",
        nameEng: "Japanese Black Beef Steak",
        price: 2500,
        description:
          "これは一度食べていただきたい、のりやんのおすすめメニューです。とにかく口に運んだ瞬間にとろける、しかし脂っこくはない。味がついておりますので、お塩だけでお召し上がりください。",
      },
      {
        id: "002",
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_022.jpg`,
        alt: "ナシゴレン",
        nameJp: "ナシゴレン",
        nameEng: "Nasi Goreng (Indonesian Fried Rice)",
        price: 950,
        description:
          "パクチーにミント、そしてライム。香辛料が程よく効いた、インドネシア風ライスです。〆に大人気！上にのっている、半熟目玉焼きを割って、お召し上がりください。",
      },
      {
        id: "003",
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_033.jpg`,
        alt: "からすみ餅",
        nameJp: "からすみ餅",
        nameEng: "Karasumi Mochi",
        price: 1200,
        description:
          "やわらかく仕上げたからすみをきめ細やかなのし餅でくるみました。ほんのりと焼色がつくほどに焙って仕上げました。",
      },
      {
        id: "004",
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_044.jpg`,
        alt: "里芋のキッシュ",
        nameJp: "里芋のキッシュ",
        nameEng: "Sweet Potato Kish",
        price: 600,
        description:
          "ほくほくの里芋がたっぷり入ったキッシュです。小麦粉は一切使わず、生クリームと卵だけで作っておりますので、ぷるぷる、そしてふわふわの食感です。",
      },
      {
        id: "005",
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_055.jpg`,
        alt: "地鶏ステーキジンジャーソース",
        nameJp: "地鶏ステーキジンジャーソース",
        nameEng: "Ginger Sauce Chicken Steak",
        price: 950,
        description:
          "しっとりとしたもも肉とパリッと焼き上げた皮、自家製のジンジャーソースでさっぱりと。お肉は食べたいけど、軽めがいい方はぜひ。",
      },
      {
        id: "006",
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_066.jpg`,
        alt: "グリーンカレー",
        nameJp: "グリーンカレー",
        nameEng: "Green Curry",
        price: 1200,
        description:
          "辛すぎず、クリーミーすぎない味付けで、サラッと仕上げました。タイ料理が苦手な方も召し上がれます。柔らかく調理した鶏肉もご一緒に。",
      },
      {
        id: "007",
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_077.jpg`,
        alt: "明太クリームチーズ大根",
        nameJp: "明太クリームチーズ大根",
        nameEng: "Mentai Cream Cheese Radish",
        price: 750,
        description:
          "お出汁×チーズ。合うんです。優しい味のふろふき大根に、まろやかな明太クリームがマッチします。ぜひ一度お試しください。",
      },
      {
        id: "008",
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_088.jpg`,
        alt: "締めパフェ",
        nameJp: "締めパフェ",
        nameEng: "Dessert Parfait",
        price: 950,
        description:
          "中には季節ごとに変わるアイスや、ゼリー、上には抹茶ティラミス。少し大きめですのでシェアしても大丈夫です。まさに、「デザートは別腹」な一品です。",
      },
      {
        id: "009",
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_099.jpg`,
        alt: "ミルクティーシャーベット",
        nameJp: "ミルクティーシャーベット",
        nameEng: "Milk Tea Sharbet",
        price: 500,
        description:
          "お腹いっぱいでも、食べられるさっぱりとしたデザートです。香り高いTWGの紅茶を使い、クリームでまろやかさもプラスしました。",
      },
    ],
  },
  about: {
    top: {
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/about_restaurant_top.jpg`,
      alt: `about_top_image_01`,
    },
    bottom: [
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/about_restaurant_004.jpg`,
        alt: `about_bottom_image_01`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/about_restaurant_02.jpg`,
        alt: `about_bottom_image_02`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/about_restaurant_01.jpg`,
        alt: `about_bottom_image_03`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/about_restaurant_003.jpg`,
        alt: `about_bottom_image_04`,
      },
    ],
  },
  info: {
    top: {
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/info_restaurant_top.jpg`,
      alt: `info_top_image`,
    },
    cover: {
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/info_restaurant_cover.jpg`,
      alt: `info_cover_image`,
    },
    seat: {
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/info_restaurant_seat01.jpg`,
      alt: `info_seat_map`,
    },
    bottom: [
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/info_restaurant_01.jpg`,
        alt: `info_bottom_image_01`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/info_restaurant_02.jpg`,
        alt: `info_bottom_image_02`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/info_restaurant_03.jpg`,
        alt: `info_bottom_image_03`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/info_restaurant_04.jpg`,
        alt: `info_bottom_image_04`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/info_restaurant_05.jpg`,
        alt: `info_bottom_image_05`,
      },
    ],
  },
  photoGallery: [
    {
      id: `001`,
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/photo_restaurant_01.jpg`,
      alt: `photo_image_01`,
    },
    {
      id: `002`,
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/photo_restaurant_02.jpg`,
      alt: `photo_image_02`,
    },
    {
      id: `003`,
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/photo_restaurant_03.jpg`,
      alt: `photo_image_03`,
    },
    {
      id: `004`,
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/photo_restaurant_04.jpg`,
      alt: `photo_image_04`,
    },
    {
      id: `005`,
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/photo_restaurant_05.jpg`,
      alt: `photo_image_05`,
    },
    {
      id: `006`,
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/photo_restaurant_06.jpg`,
      alt: `photo_image_06`,
    },
    {
      id: `007`,
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/photo_restaurant_09.jpg`,
      alt: `photo_image_07`,
    },
    {
      id: `008`,
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/photo_restaurant_08.jpg`,
      alt: `photo_image_08`,
    },
  ],
};
