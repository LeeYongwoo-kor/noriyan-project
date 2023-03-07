import { IMenu } from "@data/menu";

export async function loadMenu() {
  const res = await fetch(`${process.env.URL}/api/menu`);
  const menu: IMenu[] = await res.json();

  return menu;
}
