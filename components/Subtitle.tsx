export default function Subtitle({ text }: any) {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <hr className="h-5 border-t-[3px] border-main w-36" />
      <h2 className="text-4xl font-extrabold">{text}</h2>
    </div>
  );
}
