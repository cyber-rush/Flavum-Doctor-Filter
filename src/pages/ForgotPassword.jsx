import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
  loginUserAsync,
  selectAuth,
  selectLoading,
  selectloggedInUserToken,
} from "../store/auth/authSlice";
import { getToken } from "../utils/HelperFunctions";
import Loading from "../components/Loading/Loading";

export default function ForgotPassword() {
  const [formData, setFormData] = useState({ mobileOrEmail: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { loading, token } = useSelector((state) => state.auth);
  console.log("token", getToken());

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const socialLogin = () => {
    return null;
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      loginUserAsync({
        mobileOrEmail: data.mobileOrEmail,
        password: data.password,
      })
    );
    // reset();
  };

  if (loading) return <Loading />;
  else if (token && auth && userChecked) {
    return <Navigate to="/"></Navigate>;
  } else
    return (
      <section className="px-5 lg:px-0">
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-2xl md:p-10">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
            Reset password
          </h3>
          <h3 className="text-textColor font-semibold text-xl text-center mb-10">
            - Fill up the form to reset the password -
          </h3>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 md:py-0 md:px-0"
          >
            <div className="mb-5">
              <label htmlFor="mobileOrEmail" className="form__label ml-4">
                Email address
              </label>
              <input
                type="text"
                placeholder="Enter your Email or Mobile number"
                {...register("mobileOrEmail", {
                  required: "Your email or mobile number is required",
                })}
                value={formData.mobileOrEmail}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
                required
              />
              <span className="text-primaryColor ml-3">
                {errors.mobileOrEmail?.message}
              </span>
            </div>

            <div className="mt-5">
              <button
                type="submit"
                className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
              >
                Reset password
              </button>
            </div>
            <p className="mt-5 text-textColor text-center">
              Not registered yet?{" "}
              <Link
                to="/register"
                className="text-primaryColor font-medium ml-1"
              >
                Register
              </Link>{" "}
              now
            </p>
          </form>
          <div className="mt-5 grid space-y-4 p-4">
            <div className="relative mb-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <button
              onClick={socialLogin}
              className="group h-12 px-6 border-2 border-gray-300 rounded-full"
            >
              <div className="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className=" w-5"
                  alt="google logo"
                />
                <span className="block w-max font-semibold tracking-wide text-textColor ">
                  Continue with Google
                </span>
              </div>
            </button>
            <button
              onClick={socialLogin}
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
                <span className="block w-max font-semibold tracking-wide text-textColor ">
                  Continue with Facebook
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>
    );
}
