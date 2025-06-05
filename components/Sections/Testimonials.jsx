"use client";
import Image from "next/image";
import img from "@/assets/img/img2.jpg";
import brand from "@/assets/img/brand.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Testimonials() {
  return (
    <>
      <div className="container">
        <hgroup className="text-center max-w-[700px] mx-auto mb-10">
          <h2>Built for today’s ambitious businesses</h2>
          <p className="subtitle">
            Thousands of forward-thinking businesses rely on Brass everyday to
            turbo-charge their business financial operations
          </p>
        </hgroup>
      </div>
      <section className="section section_testimonials">
        <div className="row">
          <div className="p-10 lg:p-20">
            <Swiper
              className="slider_1"
              modules={[EffectFade, Autoplay, Pagination, A11y]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              spaceBetween={8}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => null}
              onSlideChange={() => null}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              <SwiperSlide>
                <artivle className="comment">
                  <div className="comment_desc">
                    “The ease of opening an account completely won me over. The
                    app is very easy to navigate and it’s obvious they have the
                    best insterests of SMEs at heart. I’m proud to call them my
                    bank.”
                  </div>
                  <p className="comment_info">Olakunbi Adedipe, Odu Fashion</p>
                  <Image src={brand} alt="" className="mx-auto " />
                </artivle>
              </SwiperSlide>
              <SwiperSlide>
                <artivle className="comment">
                  <div className="comment_desc">
                    “The ease of opening an account completely won me over. The
                    app is very easy to navigate and it’s obvious they have the
                    best insterests of SMEs at heart. I’m proud to call them my
                    bank.”
                  </div>
                  <p className="comment_info">2Olakunbi Adedipe, Odu Fashion</p>
                  <Image src={brand} alt="" className="mx-auto " />
                </artivle>
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <Image src={img} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
