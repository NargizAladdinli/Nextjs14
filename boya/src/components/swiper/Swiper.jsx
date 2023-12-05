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
        <div className={style.border}></div>
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
                    <img src="https://s3-alpha-sig.figma.com/img/56cb/e7c4/dba411efe246c6380f9be3209ff8059b?Expires=1702252800&Signature=MIc05KN9mrWeWDwGxWJboslcHMgzUfVG2ZO9eHKUD8Hm~bsv1-5vC6n~0yRHP7OKG6aT5q-HiOL5ipVtkaE5QoQ6Et8AzU5fz5aTO3vs~wRWhiGI-QiVZ0hgcYDB9gfHRywX5zc4Ty53ylXpwLeXgDsdCNf~FCIKowzEUAIynJ5fDQoRAclvDqc7D42tL8UQGCwC2ZkVmmhS70cJKNtQUwabqop1NjWrJunPJibmsy70V79XFhs9SJcwKCNoI9xxTMZMp83Plwkf3-ipzTFato-f54w9dfR1LpOVscMI~JMtCOyp8tO7fX8rYuKQCJx2GwP4EKmc~~8iFdZBN91STA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
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
                    <img src="https://s3-alpha-sig.figma.com/img/56cb/e7c4/dba411efe246c6380f9be3209ff8059b?Expires=1702252800&Signature=MIc05KN9mrWeWDwGxWJboslcHMgzUfVG2ZO9eHKUD8Hm~bsv1-5vC6n~0yRHP7OKG6aT5q-HiOL5ipVtkaE5QoQ6Et8AzU5fz5aTO3vs~wRWhiGI-QiVZ0hgcYDB9gfHRywX5zc4Ty53ylXpwLeXgDsdCNf~FCIKowzEUAIynJ5fDQoRAclvDqc7D42tL8UQGCwC2ZkVmmhS70cJKNtQUwabqop1NjWrJunPJibmsy70V79XFhs9SJcwKCNoI9xxTMZMp83Plwkf3-ipzTFato-f54w9dfR1LpOVscMI~JMtCOyp8tO7fX8rYuKQCJx2GwP4EKmc~~8iFdZBN91STA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
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
                    <img src="https://s3-alpha-sig.figma.com/img/56cb/e7c4/dba411efe246c6380f9be3209ff8059b?Expires=1702252800&Signature=MIc05KN9mrWeWDwGxWJboslcHMgzUfVG2ZO9eHKUD8Hm~bsv1-5vC6n~0yRHP7OKG6aT5q-HiOL5ipVtkaE5QoQ6Et8AzU5fz5aTO3vs~wRWhiGI-QiVZ0hgcYDB9gfHRywX5zc4Ty53ylXpwLeXgDsdCNf~FCIKowzEUAIynJ5fDQoRAclvDqc7D42tL8UQGCwC2ZkVmmhS70cJKNtQUwabqop1NjWrJunPJibmsy70V79XFhs9SJcwKCNoI9xxTMZMp83Plwkf3-ipzTFato-f54w9dfR1LpOVscMI~JMtCOyp8tO7fX8rYuKQCJx2GwP4EKmc~~8iFdZBN91STA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
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
