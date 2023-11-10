import { useDebugValue, useState } from "react";
import { GiIndiaGate } from "react-icons/gi";
import avatar from "../../assets/icons/avatar-icon.png";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateDoctorAsync } from "../../store/user/userSlice";

export default function Profile({ userInfo }) {
  const [previewURL, setPreviewURL] = useState("");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const { role, id, address } = userInfo;
  // console.log("userInfo", userInfo);
  const isDoctor = role === "doctor";
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    //later we will use cloudinary to upload images
    const imageURL = URL.createObjectURL(file);
    setPreviewURL(imageURL);
    setSelectedFile(file);
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  const handleEditForm = () => {
    setValue("fname", userInfo.fname);
    setValue("lname", userInfo.lname);
    setValue("gender", userInfo.gender);
    setValue("phone", userInfo.phone);
    setValue("city", address?.city);
    setValue("zipcode", address?.zipcode);
    setValue("addressLine", address?.addressLine);
    setValue("state", address?.state);
  };

  useEffect(() => {
    handleEditForm();
  }, []);

  const dateformat = (data) => {
    const { day, month, year } = data;
    let dateString = "";
    console.log("day", day, !isNaN(day));
    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      return (dateString = `${year}-${month}-${day}`);
    }
    return dateString;
  };

  const bloodTypehandler = (data) => {
    const bloodtype = "";
    if (data.bloodType === "Select Blood Group") {
      return bloodtype;
    }
    return data.bloodType;
  };

  const onSubmit = (data) => {
    console.log(data, "date", dateformat(data), "id", id);
    dispatch(
      updateDoctorAsync({
        id,
        fname: data.fname,
        lname: data.lname,
        bloodType: bloodTypehandler(data),
        dob: dateformat(data),
        address: {
          city: data.address,
          state: data.state,
          zipcode: data.zipcode,
          addressLine: data.addressLine,
        },
      })
    );
    console.log({
      id,
      fname: data.fname,
      lname: data.lname,
      bloodType: bloodTypehandler(data),
      dob: dateformat(data),
      address: {
        city: data.address,
        state: data.state,
        zipcode: data.zipcode,
        addressLine: data.addressLine,
      },
    });
    // reset();
  };

  return (
    <>
      <div className="container pt-4">
        <h1 className="py-2 text-2xl font-semibold">Profile Settings</h1>

        <hr className="mt-4" />
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="relative border border-gray-100 space-y-3 py-6 rounded-md "
        >
          <p className="py-2 text-xl">Profile Photo</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            <div className="flex flex-between gap-3 items-center">
              <p className="">Your current Avatar : </p>
              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img
                    src={previewURL || avatar}
                    alt="Selected Avatar"
                    className="w-full rounded-full"
                  />
                </figure>
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    id="customFile"
                    {...register("profilePicture")}
                    onChange={handleFileInputChange}
                    accept=".jpg , .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
                  bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer "
                  >
                    Upload Photo
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-between sm:gap-3 items-center justify-center gap-[90px] pl-20 sm:pl-0">
              <button className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
                Change
              </button>
              <button className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
                Remove
              </button>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label>First Name</label>
              <input
                type="text"
                {...register("fname", {
                  required: "First Name is required",
                })}
                placeholder="Your Name"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                {...register("lname", {
                  required: "First Name is required",
                })}
                placeholder="Last Name"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label>Gender</label>
              <input
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 capitalize"
                {...register("gender", {
                  required: "First Name is required",
                })}
                disabled
              />
              {/* <select
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              // defaultValue="Select gender"
              disabled
              {...register("gender", {
                required: "First Name is required",
              })}
            >
              <option value="Select gender" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>

              <option value="others">Others</option>
            </select> */}
            </div>
            <div>
              <label>Blood Group</label>
              <select
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                defaultValue="Select Blood Group"
                {...register("bloodType")}
              >
                <option value="Select Blood Group" disabled>
                  Select Blood Group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="AB-">Others</option>
              </select>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            <div>
              <label>phone Number</label>
              <div className="flex items-center mt-2">
                <div className="w-1/4">
                  <div
                    className="h-12 w-full rounded-md bg-gray-100 px-3 flex items-center"
                    style={{ pointerEvents: "none" }}
                  >
                    +91
                  </div>
                </div>
                <div className="w-3/4">
                  <input
                    type="number"
                    step="0.01"
                    {...register("phone", {
                      required: "First Name is required",
                    })}
                    placeholder="0000000000"
                    disabled
                    className="h-12 w-full rounded-md bg-gray-100 px-3 "
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="md:col-span-2">
                <label className="block">Date of Birth</label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                    defaultValue="Day"
                    {...register("day", {
                      required: "Select Day",
                    })}
                  >
                    <option value="Day" disabled>
                      Day
                    </option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  {errors.day?.message}
                  <select
                    className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                    defaultValue="Month"
                    {...register("month", {
                      required: "Select Month",
                    })}
                  >
                    <option value="Month" disabled>
                      Month
                    </option>
                    {months.map((month, index) => (
                      <option key={index} value={index + 1}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                    defaultValue="Year"
                    {...register("year", {
                      required: "Select Year",
                    })}
                  >
                    <option value="Year" disabled>
                      Year
                    </option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label>House Number, Street, Area</label>
            <input
              type="text"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              placeholder="Enter address"
              {...register("addressLine")}
            ></input>
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                placeholder="City"
                {...register("city")}
                className="mt-2 h-12 rounded-md bg-gray-100 px-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                {...register("state")}
                placeholder="State"
                className="mt-2 h-12 rounded-md bg-gray-100 px-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="zip">Zip Code</label>
              <input
                type="number"
                id="zip"
                {...register("zipcode")}
                placeholder="6-digit Zip Code"
                className="mt-2 h-12 rounded-md bg-gray-100 px-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="country">Country</label>
              <div className="relative mt-2">
                <input
                  type="text"
                  id="country"
                  {...register("country")}
                  value="India"
                  readOnly
                  className="h-12 w-full pr-12 rounded-md bg-gray-100 px-3"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <GiIndiaGate className="h-5 w-5 text-gray-500" />
                </span>
              </div>
            </div>
          </div>

          <div className="pr-2 flex gap-2 items-center justify-start">
            <div className="checkbox relative mt-5 ml-4">
              <input
                type="checkbox"
                id="checkbox1"
                defaultChecked=""
                {...register("terms", {
                  required: "Please check the checkbox to continue",
                })}
                className="mx-2"
              />
              <label htmlFor="checkbox1 flex">
                I agree to the
                <a href="#" target="_blank" className="text-blue-600">
                  {" "}
                  Terms and Conditions
                </a>
                <span className="text-red-400">{errors.terms?.message}</span>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
            >
              Save
            </button>
          </div>
        </form>

        {isDoctor ? (
          <>
            <button
              type="button"
              className="bg-blue-500 rounded p-2 text-center font-semibold text-white flex items-center justify-center mb-2"
              onClick={() => setShowAdditionalFields(!showAdditionalFields)}
            >
              {showAdditionalFields ? (
                <>
                  Hide Professional Details <FaChevronUp className="ml-2" />
                </>
              ) : (
                <>
                  Add Professional Details <FaChevronDown className="ml-2" />
                </>
              )}
            </button>
          </>
        ) : null}

        {showAdditionalFields && (
          <>
            <form>
              <div className="grid gap-3 md:grid-cols-2 py3 mt-3">
                <div>
                  <label>Clinic Name</label>
                  <input
                    type="text"
                    placeholder="Clinic Name"
                    className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                  />
                </div>
                <div>
                  <label>Clinic Address</label>
                  <input
                    type="text"
                    placeholder="Add clinic address"
                    className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                  />
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2 py-3">
                <div>
                  <label>Education</label>
                  <input
                    type="text"
                    placeholder="Your Education"
                    className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                  />
                </div>
                <div>
                  <label>Doctor License number</label>
                  <input
                    type="text"
                    placeholder="License number"
                    className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                  />
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2 py-3">
                <div>
                  <label>Experience</label>
                  <input
                    type="text"
                    placeholder="Your total years of experience"
                    className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                  />
                </div>
                <div>
                  <label>Specialization</label>
                  <input
                    type="text"
                    placeholder="add your specialization"
                    className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                  />
                </div>
              </div>

              <div>
                <label>About</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about yourself"
                  className="mt-2 h-40 w-full rounded-md bg-gray-100 px-3"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white mb-3"
                >
                  Save Professional Details
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}
