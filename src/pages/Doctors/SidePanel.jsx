import { useEffect, useState } from "react";
import Modal from "../../components/common/Modal";
import DoctorCard from "../../components/Doctors/DoctorCard";
import AppointmentForm from "../../components/Forms/AppointmentForm";

const SidePanel = ({ doctor }) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpenModal(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
        <div className="flex items-center justify-between">
          <p className="text__para mt-0 font-semibold">Ticket Price</p>
          <span className="text-[16px] leading-7 lg:text-[22px lg:leading-8 text-headingColor font-]">
            Rs.500 ₹
          </span>
        </div>
        <div className="mt-[30px]">
          <p className="text__para mt-0 font-semibold text-headingColor">
            Available Time Slots:
          </p>
          <ul className="mt-3">
            <li className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                Sunday
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                4:00 PM - 9:30 PM
              </p>
            </li>
            <li className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                Tuesday
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                4:00 PM - 9:30 PM
              </p>
            </li>
            <li className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                Wednesday
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                4:00 PM - 9:30 PM
              </p>
            </li>
          </ul>
        </div>

        <button
          className="btn px-2 w-full rounded-md"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Book Appointments
        </button>
      </div>
      <Modal
        open={openModal}
        close={() => {
          setOpenModal(false);
        }}
        title={`Book an Appointment with ${doctor.name}`}
      >
        <AppointmentForm doctor={doctor} />
      </Modal>
    </>
  );
};
export default SidePanel;
