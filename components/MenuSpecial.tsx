import Slider from "./Slider";
import Subtitle from "./Subtitle";

export default function MenuSpecial() {
  return (
    <>
      <Subtitle text="SPECIAL MENU" />
      <div className="h-[44rem]">
        <Slider component="menu" width="48" height="34" />
      </div>
    </>
  );
}
