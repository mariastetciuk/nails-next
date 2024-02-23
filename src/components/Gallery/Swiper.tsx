"use client";
import { gallery } from "@/data/navList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/style/swiper.css";
const Gallery = () => {
  return (
    <section
      id="gallery"
      className=" pt-8"
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 1,
          stretch: 0,
          depth: 100,
          modifier: 3,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          
        }}
        pagination={{el: '.swiper-pagination', clickable: true}}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className=" h-[300px]"
      >
        {gallery.map(({ id, src }) => (
          <SwiperSlide key={id} className="min-h-[300px]">
            <Image src={src} alt="thumbnail" width={250} height={300} className=" rounded-lg"/>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"> </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
};

// const Gallery = () => {
//   const [thumbSwipper, setThumbSwipper] = useState<any>(null);
//   useEffect(()=> {
//     console.log(thumbSwipper)
//   }, [thumbSwipper])

//   return (
//     <section
//       id="gallery"
//       className="container pb-8 pt-4 md:pb-10 lg:pb-[60px] relative"
//     >
//       <Swiper
//         spaceBetween={10}
//         navigation={true}
//         thumbs={thumbSwipper ? { swiper: thumbSwipper }: undefined}
//         modules={[Navigation, Thumbs, FreeMode]}
//         className=""
//       >
//         {gallery.map(({ id, src }) => (
//           <SwiperSlide key={id} className="" >
//             <Image
//               src={src}
//               alt="thumbnail"
//               width={400}
//               height={400}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <Swiper
//       onSwiper={setThumbSwipper}
//       spaceBetween={10}
//       slidesPerView={4}
//       freeMode={true}
//       watchSlidesProgress={true}
//       modules={[FreeMode, Navigation, Thumbs]}
//       className="mySwiper">
//         {gallery.map(({ id, src }) => (
//           <SwiperSlide key={id} className="" >
//             <Image
//               src={src}
//               alt="thumbnail"
//               width={200}
//               height={200}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };
export default Gallery;

// "use client";
// import React, { useState } from 'react';
// import { Navigation, Thumbs } from "swiper/modules";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import { gallery } from '@/data/navList';
// import Image from 'next/image';

// const Gallery = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
//   return (
// <div>
// <Swiper
//         spaceBetween={10}
//         navigation
//         thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
//         modules={[Navigation, Thumbs]}
//       >
//        {gallery.map(({ id, src }) => (
//         <SwiperSlide key={id} className="">
//             <Image src={src} alt="thumbnail" width={250} height={400} className=" rounded-lg"/>
//           </SwiperSlide>
//        ))}
//       </Swiper>

//       <Swiper
//         onSwiper={setThumbsSwiper}
//         spaceBetween={5}
//         slidesPerView={3}
//         freeMode={true}
//         modules={[Navigation, Thumbs]}
//         watchSlidesProgress={true}
//         navigation={true}
//       >
//        {gallery.map(({ id, src }) => (
//            <SwiperSlide key={id} className="">
//      <Image src={src} alt="thumbnail" width={100} height={100} className=" rounded-lg"/>
//            </SwiperSlide>
//         ))}
//       </Swiper>
// </div>
//   );

// }


// export default Gallery;
