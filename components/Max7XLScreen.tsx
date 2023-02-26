type Max7XLScreenProps = {
  children: React.ReactNode;
};

export default function About({ children }: Max7XLScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto md:px-4 lg:px-8 max-w-7xl">
      {children}
    </div>
  );
}
