"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import slider1 from "../public/slider/slider-1.jpg";
import slider2 from "../public/slider/slider-2.jpg";
import slider3 from "../public/slider/slider-3.jpg";
import slider4 from "../public/slider/slider-4.jpg";
import slider5 from "../public/slider/slider-5.jpg";
import slider6 from "../public/slider/slider-6.png";
import slider7 from "../public/slider/slider-7.jpg";
import Image from "next/image";

const images = [slider1, slider2, slider3, slider4, slider5, slider6, slider7];

export default function slider() {
  return (
    <div>
      <div className="relative w-full">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay,  Navigation]}
          className="rounded-lg shadow-lg "
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`Slide ${index}`}
                className="w-full  object-cover rounded-lg"
                layout="responsive"
                width={500}
                height={300} />
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx>{`
        :global(.swiper-button-prev),
        :global(.swiper-button-next) {
          position: ;
          top: 18%; /* Move buttons to the top */
          z-index: 10;
          color: blue; /* Button color */
        }
      `}</style>
        
      </div>
    </div>
  );
}
