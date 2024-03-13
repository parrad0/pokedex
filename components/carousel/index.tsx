"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { AspectRatio } from "../ui/aspect-ratio";

const Carousel = ({ urls, ratio } : any) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="rounded"
    >
      {urls?.map((url : any) => (
        <SwiperSlide key={url.url}>
          <AspectRatio ratio={ratio}>
            <Image
              fill
              className="h-full w-full object-cover overflow-hidden"
              src={url.url}
              alt={url.altText}
            />
          </AspectRatio>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
