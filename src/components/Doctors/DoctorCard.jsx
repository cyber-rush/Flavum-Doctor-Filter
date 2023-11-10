// import starIcon from "../../assets/images/star.png";
import { Link, useNavigate } from "react-router-dom";
import { HiStar } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

export default function DoctorCard({ doctor, showButtons }) {
  const {
    id,
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    totalPatients,
    hospital,
    location,
  } = doctor;

  const navigate = useNavigate();
  const path = `doctors/${id}`;
  return (
    <div className="w-full rounded-xl p-2 shadow-2xl shadow-blue-200 bg-white">
      <div className="">
        <div className="flex justify-start gap-5 relative">
          <div className="">
            <div className="mx-auto flex h-20 w-20 sm:h-[90px] sm:w-[90px] items-center justify-center rounded-full bg-blue-100 p-4">
              <img src={photo} />
            </div>
          </div>
          <div className="text-center lg:text-left flex flex-col justify-around">
            <h2 className="sm:text-xl text-left font-bold text-zinc-700">
              {name}
            </h2>
            <span className="p-2 w-fit text-sm sm:text-base font-semibold text-irisBlueColor bg-[#CCF0F3] rounded">
              {specialization}
            </span>
          </div>
          {
            <span className="bg-yellowColor text-black text-xs p-1 px-2 flex items-center gap-1 rounded-full absolute bottom-0 right-0">
              <ImLocation />
              {doctor.location}
            </span>
          }
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="text-xs w-full mt-1 sm:mt-4 grid grid-cols-4 ml-1 lg:grid-cols-6 gap-1">
            {Array.from({ length: 4 }).map((item, index) => (
              <span
                key={index}
                className="p-1 bg-gray-200 rounded-lg mx-1 h-6 text-ellipsis"
              >
                Special {index + 1}
              </span>
            ))}
          </div>
        </div>

        <div className="text-xs sm:text-base">
          <div className="ml-1 my-2 sm:ml-2 sm:my-3 grid grid-cols-3 gap-6 text-center lg:text-left">
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-zinc-700">{totalPatients}+</p>
              <p className="font-semibold text-zinc-700">Total Patients</p>
            </div>
            <div className="flex flex-col justify-center items-center font-bold">
              <p className=" text-zinc-700 text-center">{15}+ years</p>
              <p className="font-semibold text-zinc-700">Experience</p>
            </div>
            <div>
              <span className="flex justify-center items-center gap-1">
                <p className="font-bold text-zinc-700">{avgRating}</p>
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </span>
              <p className="font-semibold text-zinc-700">Avg. Rating</p>
            </div>
          </div>
          {showButtons && (
            <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
              <button className="w-full rounded-xl border-2 text- border-blueColor bg-white p-[0.5px] sm:px-3 sm:py-2 font-semibold text-blueColor hover:bg-blueColor hover:text-white">
                Call (+91 - 8130028150)
              </button>
              <button
                onClick={() => {
                  navigate(`${id} `);
                }}
                className="w-full rounded-xl border-2 border-rose-500 bg-white p-[0.5px] sm:px-3 sm:py-2 font-semibold text-primaryColor hover:bg-primaryColor hover:text-white"
              >
                Book Appointment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
