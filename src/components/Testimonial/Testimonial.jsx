import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "Swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import patientAvatar from "../../assets/images/patient-avatar.png";
import patientAvatar from "../../assets/team/abhijay_maskable.png";
import { HiStar } from "react-icons/hi";

export default function Testimonial() {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // loop={true}
        breakpoints={{
          640: {
            slidesperView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {Array.from({ length: 7 }).map((item, index) => (
          <SwiperSlide key={index}>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img
                  src={patientAvatar}
                  alt="patient"
                  className="h-14 w-14 rounded-lg"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingcolor">
                    Customer
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                "I have taken medical services from them.They treat so well and
                they are providing the best medical services."
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
