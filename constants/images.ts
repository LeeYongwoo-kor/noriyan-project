interface IImageProps {
  src: string;
  alt: string;
}

interface IPhotoGalleryProps extends IImageProps {
  id: string;
}

interface ISlider {
  notice: [IImageProps, IImageProps];
  menu: [
    IImageProps,
    IImageProps,
    IImageProps,
    IImageProps,
    IImageProps,
    IImageProps
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
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_01.jpg`,
        alt: `special_menu_image_01`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_02.jpg`,
        alt: `special_menu_image_02`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_03.jpg`,
        alt: `special_menu_image_03`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_04.jpg`,
        alt: `special_menu_image_04`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_05.jpg`,
        alt: `special_menu_image_05`,
      },
      {
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/food_restaurant_06.jpg`,
        alt: `special_menu_image_06`,
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
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/about_restaurant_04.jpg`,
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
        src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/about_restaurant_03.jpg`,
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
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/photo_restaurant_07.jpg`,
      alt: `photo_image_07`,
    },
    {
      id: `008`,
      src: `${process.env.NEXT_PUBLIC_CLOUD_FRONT_DOMAIN}/photo_restaurant_08.jpg`,
      alt: `photo_image_08`,
    },
  ],
};
