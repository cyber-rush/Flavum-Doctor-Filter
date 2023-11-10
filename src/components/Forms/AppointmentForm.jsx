import DoctorCard from "../Doctors/DoctorCard";

export default function AppointmentForm({ doctor }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-h-[650px] sm:max-h-none">
        {doctor && (
          <div className="">
            <DoctorCard doctor={doctor} showButtons={false} />
          </div>
        )}
        <div className="bg-white p-3 mt-2 rounded-md w-full shadow-2xl shadow-blue-200 text-sm sm:text-base">
          <h2 className="py-2 font-medium"> Patient Details</h2>
          <div>
            <form noValidate>
              <div className="space-y-4">
                <label className="block" htmlFor="name">
                  <p className="text-gray-800">Name</p>
                  <input
                    className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-rose-400 focus:ring-1"
                    type="text"
                    placeholder="Enter your name"
                  />
                </label>
                <label className="block" htmlFor="name">
                  <p className="text-gray-800">Contact Number</p>
                  <input
                    className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-rose-400 focus:ring-1"
                    type="tel"
                    placeholder="Enter your mobile number"
                  />
                </label>
                <label className="block" htmlFor="name">
                  <p className="text-gray-800">Request</p>
                  <textarea
                    className="h-24 w-full rounded-md border bg-white px-2 py-2 outline-none ring-rose-400 focus:ring-1"
                    type="text"
                    placeholder="Type your request here..."
                    defaultValue={""}
                  />
                </label>
                <div className="flex gap-4">
                  <button className="w-full rounded-full bg-blueColor 800 p-2 font-semibold text-white">
                    Call (+91 - 8130028150)
                  </button>
                  <button className="w-full rounded-full bg-primaryColor 800 p-2 font-semibold text-white">
                    Book Free Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
