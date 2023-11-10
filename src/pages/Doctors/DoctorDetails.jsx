import { HiStar } from "react-icons/hi";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { doctors } from "../../assets/data/doctors";
import avatar from "../../assets/icons/avatar-icon.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";

export default function DoctorDetails() {
  const [tab, setTab] = useState("about");
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex flex-col sm:flex-row sm:gap-10 items-center sm:items-start gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={avatar} className="w-full" />
              </figure>
              <div className="pt-5 sm:pt-2">
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  {doctor.specialization}
                </span>
                <div className="flex justify-between items-center mt-3">
                  <h3 className="text-headingColor text-[22px] leading-9  font-bold">
                    {doctor.name}
                  </h3>
                  <span className="bg-yellowColor max-w-sm text-black text-xs p-1 px-2 flex items-center gap-1 rounded-full">
                    <ImLocation />
                    {doctor.location}
                  </span>
                </div>

                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    {doctor.avgRating}
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                    ({doctor.totalRating})
                  </span>
                </div>
                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, voluptatem nulla rem officiis, facere, quo doloremque
                  voluptate hic modi soluta commodi neque voluptates! Ipsa,
                  repellat fugit et eligendi necessitatibus saepe!
                </p>
              </div>
            </div>
            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                className={`${
                  tab === "about" && "border-b border-solid border-primaryColor"
                } py-2 px-5 m4-5 text-[16px] leading-7 text-headingColor font-semibold`}
                onClick={() => {
                  setTab("about");
                }}
              >
                About
              </button>
              <button
                className={`${
                  tab === "feedback" &&
                  "border-b border-solid border-primaryColor"
                } py-2 px-5 m4-5 text-[16px] leading-7 text-headingColor font-semibold`}
                onClick={() => {
                  setTab("feedback");
                }}
              >
                Feedback
              </button>
            </div>
            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout doctor={doctor} />}
              {tab === "feedback" && <Feedback doctor={doctor} />}
            </div>
          </div>
          <div>
            <SidePanel doctor={doctor} />
          </div>
        </div>
      </div>
    </section>
  );
}
