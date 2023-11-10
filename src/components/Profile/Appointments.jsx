import { useState } from "react";
import ReactPaginate from "react-paginate";
import toast from "react-hot-toast";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Appointments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const appointmentsData = [
    {
      bookingDate: "07 February, 2024",
      orderId: "62345231143",
      image:
        "https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg",
      description: "dummy description",
      doctorName: "Jane Doeson",
      consultation: "Virtual",
      fees: "199.00",
      status: "Paid",
    },
    {
      bookingDate: "07 March, 2022",
      orderId: "62345231143",
      image:
        "https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg",
      description: "dummy description",
      doctorName: "Jane Doeson",
      consultation: "Virtual",
      fees: "199.00",
      status: "Paid",
    },
    {
      bookingDate: "07 March, 2024",
      orderId: "62345231143",
      image:
        "https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg",
      description: "dummy description",
      doctorName: "Jane Doeson",
      consultation: "Virtual",
      fees: "199.00",
      status: "Paid",
    },
    {
      bookingDate: "07 February, 2022",
      orderId: "9999999999",
      image:
        "https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg",
      description: "Fever and cough",
      doctorName: "Raj yadav",
      consultation: "Offline",
      fees: "59.00",
      status: "Pending",
    },
    {
      bookingDate: "07 December, 2021",
      orderId: "9999999999",
      image:
        "https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg",
      description: "Fever and cough",
      doctorName: "Raj yadav",
      consultation: "Offline",
      fees: "199.00",
      status: "Paid",
    },
    {
      bookingDate: "07 December, 2022",
      time: "07 PM",
      orderId: "9999999999",
      image:
        "https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg",
      description: "Fever and cough",
      doctorName: "Raj yadav",
      consultation: "Offline",
      fees: "199.00",
      status: "Pending",
    },
  ];

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleConsultationChange = () => {
    toast.success("Consultation changed successfully");
  };

  let filteredAppointments = appointmentsData.filter((appointment) => {
    return (
      appointment.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.bookingDate
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      appointment.doctorName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      appointment.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  filteredAppointments.sort(
    (a, b) => new Date(b.bookingDate) - new Date(a.bookingDate)
  );

  const offset = currentPage * itemsPerPage;
  const currentAppointments = filteredAppointments.slice(
    offset,
    offset + itemsPerPage
  );

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const isUpcomingAppointment = (appointment) => {
    const bookingDate = new Date(appointment.bookingDate);
    const currentDate = new Date();
    return bookingDate > currentDate;
  };

  const navigate = useNavigate();
  const bookAppointment = () => {
    navigate("/doctors");
  };
  const hasUpcomingAppointments = currentAppointments.some((appointment) =>
    isUpcomingAppointment(appointment)
  );
  return (
    <div className="container mx-auto p-4">
      <h1 className="py-2 text-2xl font-semibold mb-4">My Appointments</h1>
      <hr className="my-4" />

      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setShowUpcoming(true)}
          className={`py-2 px-4 ${
            showUpcoming
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
          } rounded-lg transition duration-300 hover:bg-blue-700 hover:text-white`}
        >
          Upcoming Appointments
        </button>
        <button
          onClick={() => setShowUpcoming(false)}
          className={`py-2 px-4 ${
            !showUpcoming
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
          } rounded-lg transition duration-300 hover:bg-blue-700 hover:text-white`}
        >
          All Appointments
        </button>
      </div>

      {showUpcoming ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentAppointments.length === 0 ? (
            <div className="w-full p-4 shadow-lg bg-white rounded-xl text-center">
              <p className="text-gray-600">
                You don't have any upcoming appointments.
              </p>
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={bookAppointment}
              >
                Book an Appointment
              </button>
            </div>
          ) : (
            currentAppointments
              .filter((appointment) => isUpcomingAppointment(appointment))
              .map((appointment, index) => (
                <div key={index} className="shadow-lg bg-white rounded-xl">
                  <img
                    className="h-48 w-full object-cover object-center rounded-t-lg"
                    src={appointment.image}
                    alt="Doctor's Image"
                  />
                  <div className="p-4">
                    <p className="text-lg mb-2  font-medium text-gray-700">
                      {appointment.doctorName}
                    </p>
                    <p className="text-sm mb-2  font-medium text-gray-500">
                      Senior Editor
                    </p>
                    <p className="mb-2 text-sm font-medium text-gray-500">
                      Date: {appointment.bookingDate}
                    </p>
                    <p className="mb-2 text-sm font-medium text-gray-500">
                      Time: {appointment.time || "Not specified"}
                    </p>
                    <p className="mb-2 text-sm font-medium text-gray-500">
                      Fee: {appointment.fees}
                    </p>
                    <p className="mb-2 text-sm font-medium text-gray-500">
                      Description: {appointment.description}
                    </p>
                    <div className="flex space-x-2 mt-4">
                      <button className="flex-1 rounded-lg border-2 bg-white px-4 py-2 border-primaryColor hover:bg-primaryColor hover:text-white font-medium text-gray-500">
                        Message
                      </button>
                      <button className="flex-1 rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white">
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      ) : (
        <div className="w-full">
          <div className="mb-4 flex items-center justify-between">
            <div className="relative flex w-full max-w-2xl items-center">
              <BsSearch className="absolute left-2 block h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="search"
                value={searchQuery}
                onChange={handleSearchQueryChange}
                className="h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2"
                placeholder="Search by Appointment ID, Date, Doctor's Name"
              />
            </div>
            <button
              type="button"
              className="relative inline-flex cursor-pointer items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 focus:shadow"
            >
              Filter
            </button>
          </div>

          <div className="overflow-x-auto rounded-xl bg-white px-6 shadow-lg">
            <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
              <thead className="border-b lg:table-header-group">
                <tr className="">
                  <th className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                    Booking Date
                  </th>
                  <th className="whitespace-normal py-4 text-sm font-medium text-gray-800 sm:px-3">
                    Appoinment ID
                  </th>
                  <th className="whitespace-normal py-4 text-sm font-medium text-gray-800 sm:px-3">
                    Description
                  </th>
                  <th className="whitespace-normal py-4 text-sm font-medium text-gray-800 sm:px-3">
                    Doctor
                  </th>

                  <th className="whitespace-normal py-4 text-sm font-medium text-gray-800 sm:px-3">
                    Consultation Type
                  </th>
                  <th className="whitespace-normal py-4 text-sm font-medium text-gray-800 sm:px-3">
                    Fees (Rs)
                  </th>
                  <th className="whitespace-normal py-4 text-sm font-medium text-gray-800 sm:px-3">
                    Payment Status
                  </th>
                  <th className="whitespace-normal py-4 text-sm font-medium text-gray-800 sm:px-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white lg:border-gray-300">
                {currentAppointments.map((appointment, index) => (
                  <tr key={index}>
                    <td
                      className={`py-4 text-sm ${
                        isUpcomingAppointment(appointment)
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      {isUpcomingAppointment(appointment) ? (
                        <span className="text-gray-600">
                          <span className="bg-yellow-300 text-black px-2 rounded-full mr-1 animate-pulse">
                            Upcoming:
                          </span>
                          {appointment.bookingDate}
                        </span>
                      ) : (
                        appointment.bookingDate
                      )}
                    </td>

                    <td className="whitespace-no-wrap py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                      {appointment.orderId}
                    </td>
                    <td className="whitespace-no-wrap py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                      {appointment.description}
                    </td>

                    <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                      {appointment.doctorName}
                    </td>
                    <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                      {appointment.consultation}
                    </td>
                    <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
                      {appointment.fees}
                      <span
                        className={`mt-1 ml-auto block w-fit whitespace-nowrap rounded-full px-2 py-0.5 text-center text-xs lg:hidden ${
                          appointment.status === "paid"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td className="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                      <span
                        className={`ml-2 mr-3 whitespace-nowrap rounded-full px-2 py-0.5 text-${
                          appointment.status === "paid"
                            ? "purple-800"
                            : "blue-800"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td className="whitespace-no-wrap py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                      {appointment.consultation === "Offline" && (
                        <button
                          className="mt-1 px-2 py-1 text-xs font-medium text-white bg-purple-600 rounded-full"
                          onClick={() => handleConsultationChange(index)}
                        >
                          Pay Now
                        </button>
                      )}
                      {appointment.consultation === "Virtual" && (
                        <button
                          disabled
                          className="mt-1 px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-full"
                          onClick={() => handleConsultationChange(index)}
                        >
                          Download Bill
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showUpcoming || filteredAppointments.length <= itemsPerPage ? null : (
        <div className="w-full flex justify-center mt-6">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={Math.ceil(filteredAppointments.length / itemsPerPage)}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex space-x-2"}
            previousLinkClassName={
              "px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            }
            nextLinkClassName={
              "px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            }
            pageLinkClassName={
              "px-3 py-1 text-blue-500 rounded cursor-pointer hover:bg-blue-100"
            }
            activeLinkClassName={"bg-blue-300 text-white"}
            disabledClassName={"text-gray-400 cursor-not-allowed"}
          />
        </div>
      )}
    </div>
  );
}
