import signupImg from "../assets/icons/logo-new.png";
import avatar from "../assets/icons/avatar-icon.png";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createUserAsync, selectError } from "../store/auth/authSlice";
import toast from "react-hot-toast";
import { getToken } from "../utils/HelperFunctions";
const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const error = useSelector(selectError);
  const token = getToken();

  if (error) {
    // toast.error("User already exists");
  }

  // const [formData, setFormData] = useState({
  //   fname: "",
  //   lname: "",
  //   mobile: "",
  //   email: "",
  //   password: "",
  //   // photo: selectedFile,
  //   photo: "selectedFile",
  //   gender: "",
  //   role: "",
  //   gender:"",
  // });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    //later we will use cloudinary to upload images
    const imageURL = URL.createObjectURL(file);
    setPreviewURL(imageURL);
    console.log("imageURL", imageURL);
    setSelectedFile(file);
    console.log("file", file);
  };

  // const submitHandler = async (event) => {
  //   event.preventDefault();
  // };

  const onSubmit = (data) => {
    // console.log(data);

    dispatch(
      createUserAsync({
        fname: data.fname,
        lname: data.lname,
        phone: data.phone,
        email: data.email,
        password: data.password,
        photo: "selectedFile",
        gender: data.gender,
        role: data.role,
      })
    );
    console.log({
      fname: data.fname,
      lname: data.lname,
      phone: data.phone,
      email: data.email,
      password: data.password,
      photo: "selectedFile",
      gender: data.gender,
      role: data.role,
    });
    // reset();
  };

  const socialSignup = () => {
    return null;
  };

  if (token) return <Navigate to="/"></Navigate>;
  return (
    <section className="px-5 xl:px-0 py-10">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* ===============img box ==========*/}
          <div className="hidden lg:block rounded-l-lg row-span-1">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>
          {/*======= Sign up form ============*/}
          <div className="rounded-l-lg lg:pl-16 py-10 row-span-1">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-7">
              Create an <span className="text-primaryColor">account..!</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-5 mb-7">
              <button
                onClick={socialSignup}
                className="group h-12 px-6 border-2 border-gray-300 rounded-full"
              >
                <div className="relative flex items-center space-x-4 justify-center">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className=" w-5"
                    alt="google logo"
                  />
                  <span
                    className="block w-max font-semibold tracking-wide text-textColor"
                    onClick={() => {
                      toast.success("Successfully toasted!");
                    }}
                  >
                    Sigup with Google
                  </span>
                </div>
              </button>
              <button
                onClick={socialSignup}
                className="group h-12 px-6 border-2 border-gray-300 rounded-full "
              >
                <div className="relative flex items-center space-x-4 justify-center">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 48 48"
                    version="1.1"
                  >
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-200.000000, -160.000000)"
                        fill="#4460A0"
                      >
                        <path
                          d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                          id="Facebook"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <span className="block w-max font-semibold tracking-wide text-textColor">
                    Sigup with Facebook
                  </span>
                </div>
              </button>
            </div>

            <div className="relative mb-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100 text-gray-500">
                  Or register using Email
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="mb-5">
                  <label htmlFor="fname" className="form__label ml-4 ">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    {...register("fname", {
                      required: "First Name is required",
                      minLength: { value: 3, message: "Min. length is 3" },
                    })}
                    // value={formData.fname}
                    // onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
                  />
                  <span className="text-primaryColor ml-3">
                    {errors.fname?.message}
                  </span>
                </div>

                <div className="mb-5">
                  <label htmlFor="lname" className="form__label ml-4 ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Last Name"
                    {...register("lname", {
                      required: "Last Name is required",
                      minLength: { value: 3, message: "Min. length is 3" },
                    })}
                    // value={formData.lname}
                    // onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
                  />
                  <span className="text-primaryColor ml-3">
                    {errors.lname?.message}
                  </span>
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="phone" className="form__label ml-4 ">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your Phone number"
                  {...register("phone", {
                    required: "Your phone number is required",
                    pattern: {
                      value:
                        "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
                      message: "Incorrect phone number",
                    },
                  })}
                  // value={formData.mobile}
                  // onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
                />
                <span className="text-primaryColor ml-3">
                  {errors.phone?.message}
                </span>
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="form__label ml-4 ">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email address"
                  {...register("email", {
                    required: "Your Email is required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "Email is not valid",
                    },
                  })}
                  // value={formData.email}
                  // onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
                />
                <span className="text-primaryColor ml-3">
                  {errors.email?.message}
                </span>
              </div>
              <div className="mb-5 relative">
                <label htmlFor="password" className="form__label ml-4 ">
                  Password
                </label>
                <input
                  type={showPassword ? "password" : "text"}
                  placeholder="Enter your Password"
                  // value={formData.password}
                  name="password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: `Your password must contain atleast 8 characters, 1 uppercase, 1 lowercase and 1 number, can also contain special characters`,
                    },
                  })}
                  // onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
                />
                <span className="text-primaryColor ml-3">
                  {errors.password?.message}
                </span>
                <div
                  className="absolute right-3 top-10 cursor-pointer form__label mb-0"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className=" text-2xl font-extralight" />
                  ) : (
                    <AiOutlineEye className="text-2xl font-extralight" />
                  )}
                </div>
              </div>

              <div className="mb-5 grid grid-cols-2 items-center justify-between">
                <div className="flex flex-col">
                  <label className="text-headingColor font-bold text-[16px] leading-7 ">
                    Are you a:
                    <select
                      // name="role"
                      // value={formData.role}
                      {...register("role", {
                        required: "Select your role",
                      })}
                      className="text-textColor font-semibold text-[15px] leading-7 px-4
                   py-3 focus:outline-none "
                      // onChange={handleInputChange}
                    >
                      <option disabled value="">
                        Select
                      </option>
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                    </select>
                  </label>
                  <span className="font-normal text-primaryColor mt-2  ml-3">
                    {errors.role?.message}
                  </span>
                </div>
                <div className="flex flex-col">
                  <label className="text-headingColor font-bold text-[16px] leading-7  ">
                    Gender:
                    <select
                      {...register("gender", {
                        required: "Select your gender",
                      })}
                      className="text-textColor font-semibold text-[15px] leading-7 px-4
                   py-3 focus:outline-none"
                    >
                      <option disabled value="">
                        Select
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                  <span className="text-primaryColor font-normal mt-2 ml-3">
                    {errors.gender?.message}
                  </span>
                </div>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img
                    src={previewURL || avatar}
                    alt="Selected Avatar"
                    className="w-full rounded-full"
                  />
                </figure>
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    // type="text"
                    // name="photo"
                    {...register("photo")}
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg"
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

              <div className="mt-7">
                <button
                  type="submit"
                  // disabled={loading}
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  Sign up
                  {/* {loading ? "Please wait..." : "Sign Up"} */}
                </button>
              </div>
              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
