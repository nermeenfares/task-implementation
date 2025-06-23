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
    <footer className="relative bg-gray-50 py-12 space-y-12 px-4 sm:px-8">
      <div className="absolute left-0 top-0 w-[200px] sm:w-[349px] h-[200px] sm:h-[349px] bg-[#c8e1ef] blur-2xl z-0"></div>

      <p
        className={`relative z-10 text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto ${spaceGrotesk.className} text-[#171D2E] opacity-50`}
      >
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod
        Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim
        Veniam, Quis Nostrud Exercitation Ullamco. Lorem Ipsum Dolor Sit Amet,
        Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore
        Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud
        Exercitation Ullamco.
      </p>

      <div className="relative w-full max-w-screen-xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="rounded-xl"
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
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {[...Array(5)].map((_, i) => (
            <SwiperSlide key={i} className="rounded-md overflow-hidden">
              <Image
                className="rounded-md w-full h-auto object-cover"
                width={540}
                height={292}
                alt={`Slide ${i + 1}`}
                src="/assets/images/img.png"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-8 z-10">
          <button className="custom-prev w-8 h-8 flex items-center justify-center">
            <span className="text-gray-600 font-bold text-2xl">←</span>
          </button>
          <button className="custom-next w-8 h-8 flex items-center justify-center">
            <span className="text-gray-600 font-bold text-2xl">→</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
