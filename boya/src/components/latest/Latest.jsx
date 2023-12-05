"use client";
import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./_latest.module.scss";
import Link from "next/link";

const Latest = () => {
    const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(7);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 7 }).map((_, index) => `Slide ${index + 1}`)
  );


  return (
    <section className={style.latest}>
        <div className="container">
        <h2>latest news</h2>
        </div>
      <div className={style.slide}>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          virtual
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              <Link href="#">
              <div className={style.image}>
                <img src="https://s3-alpha-sig.figma.com/img/be82/60c4/5250e269abd02b8a971207cac2676701?Expires=1702252800&Signature=oPcTXmkDKNxJdUICwfkjWCplRz7dVtB-L1lqwZs2BBQfYi~zIKYtoCf47EI0gsIYvB6KDVlUNlZb~jyvlxoVAae~4pm1PEq0vfLcAbmTZMlNwOGBBpaBCjP6ZgdNov4ugHjwlBJrqe3oEONZ4nxq7xtTgg9K6DyLT3mlKJg~GLCKUJ9veUHq9VtXgHrsMb62I4AXcqdE5XePpmovwAB6l29yEWoJJ4a7VX1dxbWPHiBgLo39ptTY75zSfMG~SieMNjwQz6ZH1VkJZEl-xXNkap9RezD2zwKY0GQnQ0kF~Fzbbr-q5A6uTv9-3nEV4QYXyWs1GcAcFXkRncAZW10g9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={style.title}>
                <h4>August 1, 2023</h4>
                <p>Orci porta non pulvinar</p>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Latest;
