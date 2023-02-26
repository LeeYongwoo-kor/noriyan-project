import About from "@components/About";
import Access from "@components/Access";
import Footer from "@components/Footer";
import Info from "@components/Info";
import Loading from "@components/Loading";
import Max7XLScreen from "@components/Max7XLScreen";
import Navbar from "@components/Navbar";
import Notice from "@components/Notice";
import PhotoGallery from "@components/PhotoGallery";
import { IMenu } from "@data/menu";
import { useDebounce } from "@hooks/useDebounce";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { IPositionInfo } from "types";

function isMobile(userAgent: string) {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );
}

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

function Home({ userAgent, menu }: any) {
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

  const handleCallbackMenu = () => {
    setPositionInfo(() => ({
      home: 0,
      about: aboutRef.current?.offsetTop || 0,
      notice: noticeRef.current?.offsetTop || 0,
      menu: menuRef.current?.offsetTop || 0,
      photoGallery: photoGalleryRef.current?.offsetTop || 0,
      access: accessRef.current?.offsetTop || 0,
      info: infoRef.current?.offsetTop || 0,
    }));
  };

  const handleResize = () => {
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
  };

  const debouncedHandleResize = useDebounce(handleResize, 500);

  useEffect(() => {
    debouncedHandleResize();

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
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
      <Head>
        <title>車道のりやん食堂</title>
        <meta name="description" content="車道のりやん食堂" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <main className="font-murecho bg-[#ffffff] select-none">
        <div id="wrapper" className="relative w-full">
          <Navbar position={positionInfo} screenWidth={screenWidth}>
            {/* <Suspense fallback={<div>Loading</div>}> */}
            <Main position={positionInfo} />
            {/* </Suspense> */}
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

// export const getServerSideProps = ({ req }: any) => {
//   const userAgent = req.headers["user-agent"];
//   return { props: { userAgent } };
// };

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/menu");
  const menu: IMenu[] = await res.json();

  return {
    props: {
      menu,
    },
    revalidate: 86400,
  };
}

export default Home;
