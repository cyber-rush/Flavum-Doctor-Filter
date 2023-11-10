import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "Swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  engineeringTeam,
  financeTeam,
  foundersTeam,
  marketingTeam,
} from "../../assets/data/team";
import { useNavigate } from "react-router-dom";

export default function TeamSlider() {
  const navigate = useNavigate();
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
        {[
          ...foundersTeam,
          ...engineeringTeam,
          ...marketingTeam,
          ...financeTeam,
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => {
                navigate("/team");
              }}
              className="rounded-xl h-52 bg-white cursor-pointer hover:bg-rose-50"
            >
              <div className="flex items-center gap-[13px] ">
                <div className="h-[208px] w-[208px] rounded-l-lg">
                  <img
                    src={item.image}
                    alt="team"
                    className="object-cover h-full w-full bg-cover rounded-l-lg "
                  />
                </div>
                <div>
                  <h4 className="text-[22px] leading-[30px] font-semibold text-headingcolor">
                    {item.name}
                  </h4>
                  <p className="">{item.designation}</p>
                </div>
              </div>
              {/* <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                "I have taken medical services from them.They treat so well and
                they are providing the best medical services."
              </p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
