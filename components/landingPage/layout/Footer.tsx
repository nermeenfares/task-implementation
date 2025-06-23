"use client";
import { Space_Grotesk } from "next/font/google";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-gray-50 
 space-y-4 lg:space-y-8"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between w-full h-auto lg:h-[50%]">
        <div className="hidden lg:block mt-6 left-0 w-[349px] h-[349px] bg-[#c8e1ef] blur-2xl"></div>

        <p
          className={`text-center mt-8 sm:mt-16 lg:mt-32 text-sm leading-relaxed max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 ${spaceGrotesk.className} text-base sm:text-lg lg:text-[19px] text-[#171D2E] opacity-50`}
        >
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
          Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad
          Minim Veniam, Quis Nostrud Exercitation Ullamco. Lorem Ipsum Dolor Sit
          Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut
          Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud
          Exercitation Ullamco.
        </p>
      </div>

      <div className="relative px-2 sm:px-4 lg:pl-4 -mt-4 lg:-mt-8">
        <Swiper
          slidesPerView={2}
          spaceBetween={60}
          centeredSlides={false}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          className="h-full w-full sm:w-[95%] lg:w-[90%] overflow-hidden rounded-md"
          style={{
            paddingBottom: "50px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (_, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
        >
          <SwiperSlide style={{ borderRadius: "20px" }}>
            <Image
              width={540}
              className="rounded-md w-full h-auto"
              height={292}
              alt="Img"
              src="/assets/images/img.png"
            />
          </SwiperSlide>
          <SwiperSlide style={{ borderRadius: "20px" }}>
            <Image
              className="rounded-md w-full h-auto"
              width={540}
              height={292}
              alt="Img"
              src="/assets/images/img.png"
            />
          </SwiperSlide>
          <SwiperSlide style={{ borderRadius: "20px" }}>
            <Image
              className="rounded-md w-full h-auto"
              width={540}
              height={292}
              alt="Img"
              src="/assets/images/img.png"
            />
          </SwiperSlide>
          <SwiperSlide style={{ borderRadius: "20px" }}>
            <Image
              className="rounded-md w-full h-auto"
              width={540}
              height={292}
              alt="Img"
              src="/assets/images/img.png"
            />
          </SwiperSlide>
          <SwiperSlide style={{ borderRadius: 20 }}>
            <Image
              className="rounded-md w-full h-auto"
              width={540}
              height={292}
              alt="Img"
              src="/assets/images/img.png"
            />
          </SwiperSlide>
        </Swiper>

        {/* Custom navigation arrows positioned at pagination level */}
        <div className="absolute w-full px-8 sm:px-16 lg:px-28 bottom-[15px] z-10 left-1/2 transform -translate-x-1/2 flex items-center justify-between space-x-4 sm:space-x-6 lg:space-x-8">
          <button className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center">
            <span className="text-gray-600 font-bold text-xl sm:text-2xl lg:text-3xl">
              ←
            </span>
          </button>
          <button className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center">
            <span className="text-gray-600 font-bold text-xl sm:text-2xl lg:text-3xl">
              →
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
