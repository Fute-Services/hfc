
import { useEffect, useState, useRef } from "react";

import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

// import { RiArrowGoBackFill } from "react-icons/ri";
// import { TfiBackRight } from "react-icons/tfi";

// ---------- Types ----------
interface ImageType {
  src: string;
  /** 320px strip thumbnail; the full-size render is megabytes. */
  thumb?: string;
  title?: string;
}

// ---------- Replace these imports with your actual images ----------
import interior1 from "../../assets/gallery/interior1.webp";
import interior2 from "../../assets/gallery/interior2.webp";
import interior3 from "../../assets/gallery/interior3.webp";
import interior4 from "../../assets/gallery/interior4.webp";
import interior5 from "../../assets/gallery/interior5.webp";
import interior6 from "../../assets/gallery/interior6.webp";
import interior7 from "../../assets/gallery/interior7.webp";
import interior8 from "../../assets/gallery/interior8.webp";
import interior9 from "../../assets/gallery/interior9.webp";
import interior10 from "../../assets/gallery/interior10.webp";
import interior11 from "../../assets/gallery/interior11.webp";
import interior12 from "../../assets/gallery/interior12.webp";
import interior13 from "../../assets/gallery/interior13.webp";
import interior14 from "../../assets/gallery/interior14.webp";
import interior15 from "../../assets/gallery/interior15.webp";
import interior16 from "../../assets/gallery/interior16.webp";
import interior17 from '../../assets/entrance_tower/gallery_new/Citadel_Lobby_HI-RES.jpg'


import exterior1 from "../../assets/gallery/exterior1.webp";
import exterior2 from "../../assets/gallery/exterior2.webp";
import exterior3 from "../../assets/gallery/exterior3.webp";
import exterior4 from "../../assets/gallery/exterior4.webp";
import exterior5 from "../../assets/gallery/exterior5.png";
import exterior6 from "../../assets/gallery/exterior6.webp";
import exterior7 from "../../assets/gallery/exterior7.webp";
import exterior8 from "../../assets/gallery/exterior8.webp";
import exterior9 from "../../assets/gallery/exterior9.webp";
import exterior10 from "../../assets/gallery/exterior10.jpg";
import exterior11 from "../../assets/gallery/exterior11.webp";
import exteriortwr1 from "../../assets/gallery/exteriortwr1.webp";
import exteriortwr2 from "../../assets/gallery/exteriortwr2.webp";
import exteriortwr3 from "../../assets/gallery/exteriortwr3.webp";
import exteriortwr4 from "../../assets/gallery/exteriortwr4.webp";
import exteriortwr5 from "../../assets/gallery/exteriortwr5.webp";
import exteriortwr6 from "../../assets/gallery/exteriortwr6.webp";
import exteriortwr7 from "../../assets/gallery/exteriortwr7.webp";
import exteriortwr8 from '../../assets/entrance_tower/gallery_new/Cam_01_Building_facade.webp';
import exteriortwr9 from '../../assets/entrance_tower/gallery_new/Cam01_Grandstand_worm_eye.webp';
import exteriortwr10 from '../../assets/entrance_tower/gallery_new/Cam02_Grandstand_close_up.webp';
import exteriortwr11 from '../../assets/entrance_tower/gallery_new/Cam02_Night_Close-up.webp'
// import exteriortwr12 from '../../assets/entrance_tower/Grandstand_interface.jpg';
// import exteriortwr13 from '../../assets/entrance_tower/Atheletica_interface.jpg';
// import exteriortwr14 from '../../assets/entrance_tower/Pavilion_interface.jpg';


import exterior12 from '../../assets/gallery/Stadia Elevation Cam.webp';
import exterior16 from '../../assets/gallery/Stadia22.webp'
import exterior17 from '../../assets/gallery/STADIA222.webp'

import { IoReturnUpBackOutline } from "react-icons/io5";
import sports1 from "../../assets/gallery/sports1.webp";
import sports2 from "../../assets/gallery/sports2.webp";
import sports3 from "../../assets/gallery/sports3.webp";
import sports4 from "../../assets/gallery/sports4.webp";
import sports5 from "../../assets/gallery/sports5.webp";
import sports6 from "../../assets/gallery/sports6.webp";
import sports7 from "../../assets/gallery/sports7.webp";

// 320px thumbnails for the strip — the full-size renders are megabytes each
import interior1_t from "../../assets/gallery/thumbs/interior1.webp";
import interior2_t from "../../assets/gallery/thumbs/interior2.webp";
import interior3_t from "../../assets/gallery/thumbs/interior3.webp";
import interior4_t from "../../assets/gallery/thumbs/interior4.webp";
import interior5_t from "../../assets/gallery/thumbs/interior5.webp";
import interior6_t from "../../assets/gallery/thumbs/interior6.webp";
import interior7_t from "../../assets/gallery/thumbs/interior7.webp";
import interior8_t from "../../assets/gallery/thumbs/interior8.webp";
import interior9_t from "../../assets/gallery/thumbs/interior9.webp";
import interior10_t from "../../assets/gallery/thumbs/interior10.webp";
import interior11_t from "../../assets/gallery/thumbs/interior11.webp";
import interior12_t from "../../assets/gallery/thumbs/interior12.webp";
import interior13_t from "../../assets/gallery/thumbs/interior13.webp";
import interior14_t from "../../assets/gallery/thumbs/interior14.webp";
import interior15_t from "../../assets/gallery/thumbs/interior15.webp";
import interior16_t from "../../assets/gallery/thumbs/interior16.webp";
import interior17_t from "../../assets/gallery/thumbs/interior17.webp";
import exterior1_t from "../../assets/gallery/thumbs/exterior1.webp";
import exterior2_t from "../../assets/gallery/thumbs/exterior2.webp";
import exterior3_t from "../../assets/gallery/thumbs/exterior3.webp";
import exterior4_t from "../../assets/gallery/thumbs/exterior4.webp";
import exterior5_t from "../../assets/gallery/thumbs/exterior5.webp";
import exterior6_t from "../../assets/gallery/thumbs/exterior6.webp";
import exterior7_t from "../../assets/gallery/thumbs/exterior7.webp";
import exterior8_t from "../../assets/gallery/thumbs/exterior8.webp";
import exterior9_t from "../../assets/gallery/thumbs/exterior9.webp";
import exterior10_t from "../../assets/gallery/thumbs/exterior10.webp";
import exterior11_t from "../../assets/gallery/thumbs/exterior11.webp";
import exteriortwr1_t from "../../assets/gallery/thumbs/exteriortwr1.webp";
import exteriortwr2_t from "../../assets/gallery/thumbs/exteriortwr2.webp";
import exteriortwr3_t from "../../assets/gallery/thumbs/exteriortwr3.webp";
import exteriortwr4_t from "../../assets/gallery/thumbs/exteriortwr4.webp";
import exteriortwr5_t from "../../assets/gallery/thumbs/exteriortwr5.webp";
import exteriortwr6_t from "../../assets/gallery/thumbs/exteriortwr6.webp";
import exteriortwr7_t from "../../assets/gallery/thumbs/exteriortwr7.webp";
import exteriortwr8_t from "../../assets/gallery/thumbs/exteriortwr8.webp";
import exteriortwr9_t from "../../assets/gallery/thumbs/exteriortwr9.webp";
import exteriortwr10_t from "../../assets/gallery/thumbs/exteriortwr10.webp";
import exteriortwr11_t from "../../assets/gallery/thumbs/exteriortwr11.webp";
import exterior12_t from "../../assets/gallery/thumbs/exterior12.webp";
import exterior16_t from "../../assets/gallery/thumbs/exterior16.webp";
import exterior17_t from "../../assets/gallery/thumbs/exterior17.webp";
import sports1_t from "../../assets/gallery/thumbs/sports1.webp";
import sports2_t from "../../assets/gallery/thumbs/sports2.webp";
import sports3_t from "../../assets/gallery/thumbs/sports3.webp";
import sports4_t from "../../assets/gallery/thumbs/sports4.webp";
import sports5_t from "../../assets/gallery/thumbs/sports5.webp";
import sports6_t from "../../assets/gallery/thumbs/sports6.webp";
import sports7_t from "../../assets/gallery/thumbs/sports7.webp";
import { MdNavigateBefore, MdNavigateNext, MdPause, MdPlayArrow } from "react-icons/md";


// ---------------------------------------------------------------
const tabs = ["Interior", "Elevation", "Landscape"] as const;

export default function GalleryPage() {
  const [paused, setPaused] = useState(false);

  const thumbsRef = useRef<(HTMLDivElement | null)[]>([]);



  const InteriorImages: ImageType[] = [
    { src: interior1, thumb: interior1_t, title: '2BHK Guest Bedroom' },
    { src: interior2, thumb: interior2_t, title: '2BHK Living' },
    { src: interior3, thumb: interior3_t, title: '2BHK Master Bedroom' },
    { src: interior4, thumb: interior4_t, title: '3BHK Balcony' },
    { src: interior5, thumb: interior5_t, title: '3BHK Guest Bedroom' },
    { src: interior6, thumb: interior6_t, title: '3BHK Kids Bedroom' },
    { src: interior7, thumb: interior7_t, title: '3BHK Kitchen' },
    { src: interior8, thumb: interior8_t, title: '3BHK Living & Dining' },
    { src: interior9, thumb: interior9_t, title: '3BHK Master Bedroom' },
    { src: interior10, thumb: interior10_t, title: '4BHK Bathroom' },
    { src: interior11, thumb: interior11_t, title: '4BHK Dining' },
    { src: interior12, thumb: interior12_t, title: '4BHK Guest Bedroom' },
    { src: interior13, thumb: interior13_t, title: '4BHK Kids Bedroom' },
    { src: interior14, thumb: interior14_t, title: '4BHK Living & Dining' },
    { src: interior15, thumb: interior15_t, title: '4BHK Master Bedroom' },
    { src: interior16, thumb: interior16_t, title: '4BHK Study Room' },
    { src: interior17, thumb: interior17_t, title: 'Citadel Lobby' },
  ];

  // Note: three Olympus elevation renders exist in src/assets/gallery
  // (Olympus Elevation.webp, OLYMPUS11.webp, Olympus111.webp) but have never
  // been listed here. Add them if Olympus should appear in this tab.
  const ElevationImages: ImageType[] = [
    { src: exteriortwr1, thumb: exteriortwr1_t, title: 'Greenfield Tower' },
    { src: exteriortwr2, thumb: exteriortwr2_t, title: 'Greenfield Tower' },
    { src: exteriortwr3, thumb: exteriortwr3_t, title: 'Greenfield Tower' },
    { src: exteriortwr4, thumb: exteriortwr4_t, title: 'Citadel Tower' },
    { src: exteriortwr5, thumb: exteriortwr5_t, title: 'Citadel Tower' },
    { src: exteriortwr6, thumb: exteriortwr6_t, title: 'Arcadia Tower' },
    { src: exteriortwr7, thumb: exteriortwr7_t, title: 'Arcadia Tower' },
    { src: exteriortwr8, thumb: exteriortwr8_t, title: 'Pavilion Tower' },
    { src: exteriortwr9, thumb: exteriortwr9_t, title: 'Grandstand Tower' },
    { src: exteriortwr10, thumb: exteriortwr10_t, title: 'Grandstand Tower' },
    { src: exteriortwr11, thumb: exteriortwr11_t, title: 'Grandstand Tower' },
    { src: exterior12, thumb: exterior12_t, title: 'Stadia Tower' },
    { src: exterior16, thumb: exterior16_t, title: 'Stadia Tower' },
    { src: exterior17, thumb: exterior17_t, title: 'Stadia Tower' },

    //  { src: exteriortwr13, title: 'Atheletica Tower' },
    // { src: exteriortwr14, title: 'Pavilion Tower' },
  ];

  const LandscapeImages: ImageType[] = [
    { src: sports1, thumb: sports1_t, title: 'Archery Zone' },
    { src: sports2, thumb: sports2_t, title: 'Badminton Court' },
    { src: sports3, thumb: sports3_t, title: 'Basketball Court' },
    { src: sports4, thumb: sports4_t, title: 'Mini Golf Course' },
    { src: sports5, thumb: sports5_t, title: 'Padel & Pickle Ball Court' },
    { src: sports6, thumb: sports6_t, title: 'Tennis Court' },
    { src: sports7, thumb: sports7_t, title: 'Volleyball Court' },
    { src: exterior3, thumb: exterior3_t, title: 'Leisure Garden' },
    { src: exterior4, thumb: exterior4_t, title: 'Cricket' },
    { src: exterior6, thumb: exterior6_t, title: 'Skate Park' },
    { src: exterior10, thumb: exterior10_t, title: 'Pool View' },
    { src: exterior1, thumb: exterior1_t, title: 'Aerial View from River Side' },
    { src: exterior2, thumb: exterior2_t, title: 'Central Landscape' },
    { src: exterior5, thumb: exterior5_t, title: 'Pool View' },
    { src: exterior7, thumb: exterior7_t, title: 'Sprint Track' },
    { src: exterior8, thumb: exterior8_t, title: 'Play and Learning Garden' },
    { src: exterior9, thumb: exterior9_t, title: 'Pool View ' },
    { src: exterior11, thumb: exterior11_t, title: 'Wellness and Therapy Garden' },
  ];


  const [selectedTab, setSelectedTab] = useState<typeof tabs[number]>("Interior");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [lightboxOpen, setLightboxOpen] = useState(false);

  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const activeThumb = thumbsRef.current[currentIndex];
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  // Get images based on selected tab
  const images =
    selectedTab === "Interior"
      ? InteriorImages
      : selectedTab === "Elevation"
        ? ElevationImages
        : LandscapeImages;



  // 1. Fix the ref setter (Move this outside or use useCallback)
  const setThumbRef = (idx: number) => (el: HTMLDivElement | null) => {
    thumbsRef.current[idx] = el;
  };

  // 2. Optimized Autoplay (Prevents "Double Jumping" after a click)
  useEffect(() => {
    if (lightboxOpen || paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    // This cleanup function is KEY. 
    // It clears the old 7-second timer the moment you click a thumbnail,
    // then starts a fresh 7-second countdown for the new image.
    return () => clearInterval(interval);
  }, [currentIndex, lightboxOpen, paused, images.length]);
  // Adding currentIndex here ensures the timer restarts after every manual click.
  // Optional: autoplay slider
  // useEffect(() => {
  //   if (lightboxOpen) return;
  //   if (paused) return;
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % images.length);
  //   }, 7000);
  //   return () => clearInterval(interval);
  // }, [images.length, lightboxOpen, paused]);

  // const setThumbRef = (idx: number) => (el: HTMLDivElement | null) => {
  //   thumbsRef.current[idx] = el;
  // };

  // Guaranteed-valid current image: protects the render from any out-of-range index.
  const current = images[currentIndex] ?? images[0];

  const handleBack = () => {
    window.history.back();
  }
  return (
    <div className=" w-full h-screen md:overflow-hidden overflow-auto bg-gray-900 flex flex-col gap-5  justify-center items-center p-4">


      {/* {loading && (<div className="absolute inset-0 bg-gray-700 animate-pulse rounded"></div>)}  */}
      <div className="flex justify-center items-center md:justify-start md:items-start w-full md:w-[95%] h-[15%] ">

        <div className="flex  gap-2 h-[50%] w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setSelectedTab(tab);
                setCurrentIndex(0); // reset slider
              }}
              className={`px-4 py-2 rounded font-medium ${selectedTab === tab
                ? "bg-yellow-700 text-black"
                : "border border-white text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>


      </div>



      <div
        onClick={handleBack}
        className="absolute bottom-10 right-2 p-2 bg-white/30 w-[55px] h-[55px] flex items-center justify-center rounded-full z-20 cursor-pointer hover:bg-black/70 transition"
      >
        <IoReturnUpBackOutline size={40} color="white" />
      </div>


      <div className="flex items-center justify-center w-full max-w-[85%] h-[65%]">

        {/* Main Slider */}
        <div className="relative justify-center items-center w-full  flex h-full">

          {/* {images.length > 0 && (
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              loading="lazy"
              // onLoad={() => setLoading(false)}
              onClick={() => setLightboxOpen(true)}
              className="object-contain h-full cursor-zoom-in"
            />
          )} */}
          {images.length > 0 && (
            <img
              key={current.src} // IMPORTANT: The 'key' triggers the animation on every click
              src={current.src}
              alt={current.title}
              loading="lazy"
              onClick={() => setLightboxOpen(true)}
              className="object-contain h-full cursor-zoom-in transition-opacity duration-1000 animate-in fade-in"
              style={{ animation: "fadeIn1 0.8s ease-in-out" }}
            />
          )}

          {/* Show ONLY the title for the current image */}
          <div className="absolute bottom-2 z-[2000] px-4 py-1 rounded-full bg-black/30 backdrop-blur-md shadow">
            <p className="text-white text-sm">{current.title}</p>
          </div>
          {/* -------------------------------------- */}


          {/* <div className="md:absolute bottom-[13.5%] sticky translate-x-10 md:bottom-[24.5%] xl:bottom-[2%] 2xl:bottom-[28.5%] left-1/2 md:-translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md px-10 py-3 shadow-black rounded-full shadow-lg"> */}
          <div className="absolute bottom-10  bg-white/10 backdrop-blur-md rounded-full px-10 py-3 shadow-black rounded-full shadow-lg">
            {/* Back Button */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
              aria-label="Previous image"

              className="text-white text-3xl hover:scale-110 transition"
            >
              <MdNavigateBefore />
            </button>

            {/* Next Button */}
            <button
              onClick={() => setPaused(!paused)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}


              className="text-white text-2xl mx-3 hover:scale-110 transition"
            >
              {paused ? <MdPlayArrow /> : <MdPause />}
            </button>
            {/* PAUSE / PLAY BUTTON */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
              aria-label="Next image"

              className="text-white text-3xl hover:scale-110 transition"
            >
              <MdNavigateNext />
            </button>

          </div>
        </div>

      </div>




      {/* Thumbnails */}
      {/* <div className="flex gap-2 justify-center items-center h-[20%] w-[92%] overflow-x-auto no-scrollbar">
        <div className="flex gap-2 justify-center px-4"> */}
      <div className="w-[92%] overflow-x-auto no-scrollbar h-[20%]">
        <div className="flex gap-2 px-4 w-max">
          {images.map((img, idx) => (
            <div
              key={idx}
              ref={setThumbRef(idx)}
              className="relative w-24 h-24 flex-shrink-0 cursor-pointer"
              // className={`relative w-24 h-20 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-500 ${idx === currentIndex ? "ring-4 ring-yellow-600 scale-110 z-10" : "opacity-40 grayscale-[50%]"
              // }`}
              onClick={(e) => {
                e.stopPropagation();

                setCurrentIndex(idx)
              }}
            >
              <img
                src={img.thumb ?? img.src}
                alt={img.title}
                loading="lazy"
                decoding="async"
                width={96}
                height={96}
                className={`w-24 h-24 object-cover rounded border-2 transition-all duration-500 ease-in-out
            ${idx === currentIndex
                    ? "border-yellow-500 scale-105"
                    : "border-transparent"
                  }`}
              />
            </div>
          ))}
        </div>
      </div>


      {/* Lightbox */}
      {
        lightboxOpen && images.length > 0 && (
          <div className="fade-in-lightbox">
            <Lightbox
              mainSrc={current.src}
              nextSrc={images[(currentIndex + 1) % images.length].src}
              prevSrc={images[(currentIndex - 1 + images.length) % images.length].src}
              imageTitle={current.title}
              onCloseRequest={() => setLightboxOpen(false)}
              onMovePrevRequest={() =>
                setCurrentIndex((currentIndex - 1 + images.length) % images.length)
              }
              onMoveNextRequest={() =>
                setCurrentIndex((currentIndex + 1) % images.length)
              }
              reactModalStyle={{ overlay: { zIndex: 1500, backgroundColor: "rgba(0,0,0,0.9)" }, content: { padding: "30px" }, }}
            /></div>
        )
      }
    </div >
  );
}