"use client";
import style from "./_swiper.module.scss";
import Home from "../../../public/images/homeBanner.png";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const Swipers = () => {
  return (
    <>
      <section className={style.slider}>
        <div className="container-fluid p-0">
          <Swiper
            rewind={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay ]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="row">
                <div className="col-lg-6 p-0">
                  <div className={style.image}>
                    <Image
                      src={Home}
                      width={100}
                      height={100}
                      alt="home banner"
                    />
                  </div>
                </div>
                <div className="col-lg-6 p-0">
                  <div className={style.content}>
                    <h1>
                      Unlock your home’s potential: order free color chips
                      online.
                    </h1>
                    <div className={style.slide}>
                      <Link className={style.slidelink} href="#">
                        BROWSE COLORS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-lg-6 p-0">
                  <div className={style.image}>
                    <Image
                      src={Home}
                      width={100}
                      height={100}
                      alt="home banner"
                    />
                  </div>
                </div>
                <div className="col-lg-6 p-0">
                  <div className={style.content}>
                    <h1>
                      Unlock your home’s potential: order free color chips
                      online.
                    </h1>
                    <div className={style.slide}>
                      <Link className={style.slidelink} href="#">
                        BROWSE COLORS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-lg-6 p-0">
                  <div className={style.image}>
                    <Image
                      src={Home}
                      width={100}
                      height={100}
                      alt="home banner"
                    />
                  </div>
                </div>
                <div className="col-lg-6 p-0">
                  <div className={style.content}>
                    <h1>
                      Unlock your home’s potential: order free color chips
                      online.
                    </h1>
                    <div className={style.slide}>
                      <Link className={style.slidelink} href="#">
                        BROWSE COLORS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Swipers;
