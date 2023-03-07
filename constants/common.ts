export const PHONE_NUMBER = "0529376252";
export const EMAIL = "aoidayo210@gmail.com";
export const NAV_HEIGHT = 400;
export const NAVBAR_MOBILE_HEIGHT = 64;
export const TABLET_SIZE = 769;
export const DAY_TO_MILLISECOND = 86400000;
export const DECISION = 21;

export function getJpCurrency(price: number) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(price);
}
