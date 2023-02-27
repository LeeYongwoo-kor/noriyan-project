export type NavbarTypes =
  | "home"
  | "about"
  | "notice"
  | "menu"
  | "photoGallery"
  | "info"
  | "access";

export type IPositionInfo = {
  home: number;
  about: number;
  notice: number;
  menu: number;
  photoGallery: number;
  info: number;
  access: number;
};

export type ICurrentPosition = {
  start: number;
  end: number;
};

export type CurrentPositionType = [NavbarTypes, ICurrentPosition];
