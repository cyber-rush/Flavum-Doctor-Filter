import { Suspense, lazy, useState } from "react";
import { doctors } from "../../assets/data/doctors";
import Testimonial from "../../components/Testimonial/Testimonial";
import CardLoading from "../../components/Loading/CardLoading";
import Loading from "../../components/Loading/Loading";
import Modal from "../../components/common/Modal";
import { Button, Dropdown, Placeholder } from "rsuite";
import AppointmentForm from "../../components/Forms/AppointmentForm";
import FilterData from "../../components/Filter/FilterData";
const DoctorCard = lazy(() => import("../../components/Doctors/DoctorCard"));


const localities = ['Bangalore', 'Pune', 'Mumbai', 'Delhi'];
const priceRanges = ['₹0 to ₹500', '₹500 to ₹700', '₹700 to ₹1000', '₹1000 to ₹1500', '₹1500+'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const genders = ['Any Gender', 'Male', 'Female'];
const specialists = ['Oncologist', 'Dermatologist', 'Gynecologist'];

export default function Doctors() {

  const [openModal, setOpenModal] = useState(false);

  const handleDropdownClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container flex items-center justify-center text-center">
          <Dropdown title="Locality" onClick={handleDropdownClick} >
            {
              localities.map((item, index) => (
                <Dropdown.Item key={index}>{item}</Dropdown.Item>
              ))
            }
          </Dropdown>
          <Dropdown title="Availability" onClick={handleDropdownClick} >
            {days.map((item, index) => (
              <Dropdown.Item key={index}>{item}</Dropdown.Item>
            ))}
          </Dropdown>
          <Dropdown title="Price-Range" onClick={handleDropdownClick} >
            {
              priceRanges.map((item, index) => (
                <Dropdown.Item key={index}>{item}</Dropdown.Item>
              ))
            }
          </Dropdown>
          <Dropdown title="Gender" onClick={handleDropdownClick} >
            {
              genders.map((item, index) => (
                <Dropdown.Item key={index}>{item}</Dropdown.Item>
              ))
            }
          </Dropdown>
          <Dropdown title="Specialist" onClick={handleDropdownClick} >
            {
              specialists.map((item, index) => (
                <Dropdown.Item key={index}>{item}</Dropdown.Item>
              ))
            }
          </Dropdown>
        </div>

        <Modal
          open={openModal}
          close={() => {
            setOpenModal(false);
          }}
          title='Filter'
        >
          <FilterData openModal={openModal} setOpenModal={setOpenModal} />
        </Modal>

      </section>

      <section className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Suspense fallback={<Loading />}>
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} showButtons={true} />
            ))}
          </Suspense>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          {/* <Testimonial /> */}
        </div>
      </section>
    </>
  );
}
