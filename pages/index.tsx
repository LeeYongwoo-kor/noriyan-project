import About from "@components/About";
import Access from "@components/Access";
import Footer from "@components/Footer";
import HeadMeta from "@components/HeadMeta";
import Info from "@components/Info";
import Loading from "@components/Loading";
import Max7XLScreen from "@components/Max7XLScreen";
import Navbar from "@components/Navbar";
import Notice from "@components/Notice";
import PhotoGallery from "@components/PhotoGallery";
import { IMenu } from "@data/menu";
import { useDebounce } from "@hooks/useDebounce";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { IPositionInfo } from "types";

const Main = dynamic(() => import("@components/Main"), {
  suspense: true,
  ssr: false,
  loading: () => <Loading />,
});

const Menu = dynamic(() => import("@components/Menu"), {
  suspense: true,
  ssr: false,
  loading: () => <Loading />,
});

type HomeProps = {
  menu: IMenu[];
};

const opts: AddEventListenerOptions & EventListenerOptions = { passive: true };

function Home({ menu }: HomeProps) {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [positionInfo, setPositionInfo] = useState<IPositionInfo>({
    home: 0,
    about: 0,
    notice: 0,
    menu: 0,
    photoGallery: 0,
    info: 0,
    access: 0,
  });

  const aboutRef = useRef<HTMLInputElement | null>(null);
  const noticeRef = useRef<HTMLInputElement | null>(null);
  const menuRef = useRef<HTMLInputElement | null>(null);
  const photoGalleryRef = useRef<HTMLInputElement | null>(null);
  const accessRef = useRef<HTMLInputElement | null>(null);
  const infoRef = useRef<HTMLInputElement | null>(null);

  const handleCallbackMenu = useCallback(() => {
    setPositionInfo(() => ({
      home: 0,
      about: aboutRef.current?.offsetTop || 0,
      notice: noticeRef.current?.offsetTop || 0,
      menu: menuRef.current?.offsetTop || 0,
      photoGallery: photoGalleryRef.current?.offsetTop || 0,
      access: accessRef.current?.offsetTop || 0,
      info: infoRef.current?.offsetTop || 0,
    }));
  }, []);

  const handleResize = useCallback(() => {
    setPositionInfo(() => ({
      home: 0,
      about: aboutRef.current?.offsetTop || 0,
      notice: noticeRef.current?.offsetTop || 0,
      menu: menuRef.current?.offsetTop || 0,
      photoGallery: photoGalleryRef.current?.offsetTop || 0,
      access: accessRef.current?.offsetTop || 0,
      info: infoRef.current?.offsetTop || 0,
    }));
    setScreenWidth(window && window.innerWidth);
  }, []);

  const debouncedHandleResize = useDebounce(handleResize, 500);

  useEffect(() => {
    debouncedHandleResize();

    window.addEventListener("resize", debouncedHandleResize, opts);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize, opts);
    };
  }, [
    aboutRef,
    noticeRef,
    menuRef,
    photoGalleryRef,
    accessRef,
    infoRef,
    positionInfo.menu,
  ]);

  return (
    <>
      <HeadMeta
        title="車道のりやん食堂 | 居酒屋 | 家庭料理"
        description="車道のりやん食堂で美味しいお料理とお酒をご賞味ください。"
        image=""
        url={`${process.env.NEXT_PUBLIC_URL}`}
      />
      <main className="font-murecho bg-[#ffffff] select-none">
        <div id="wrapper" className="relative w-full">
          <Navbar position={positionInfo} screenWidth={screenWidth}>
            <Main position={positionInfo} />
            <div className="sm:h-[56rem] md:h-[53rem] h-[31rem]"></div>
            <Max7XLScreen>
              <About innerRef={aboutRef} />
              <Notice innerRef={noticeRef} />
            </Max7XLScreen>
            <div className="w-full mt-32 mb-10 bg-fixed bg-left bg-no-repeat xl:bg-center bg-mobile sm:bg-auto xl:bg-cover h-96 sm:h-120 boss-image"></div>
            <Max7XLScreen>
              <Menu
                innerRef={menuRef}
                menu={menu}
                callbackPosition={handleCallbackMenu}
              />
            </Max7XLScreen>
            <PhotoGallery innerRef={photoGalleryRef} />
            <Max7XLScreen>
              <Access innerRef={accessRef} />
              <Info innerRef={infoRef} />
            </Max7XLScreen>
            <Footer />
          </Navbar>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.URL}/api/menu`);
  const menu: IMenu[] = await res.json();

  return {
    props: {
      menu,
    },
    revalidate: 86400,
  };
}

export default Home;
