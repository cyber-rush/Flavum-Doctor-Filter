import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginUserAsync } from "../store/auth/authSlice";
import Loading from "../components/Loading/Loading";
import { useEffect } from "react";

export default function Login() {
  // const [formData, setFormData] = useState({ emailOrPhone: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const { loading, token, user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const storedMobileOrEmail = localStorage.getItem("emailOrPhone");
    const storedPassword = localStorage.getItem("password");

    if (storedMobileOrEmail && storedPassword) {
      setValue("emailOrPhone", storedMobileOrEmail);
      setValue("password", storedPassword);
      // setFormData({
      //   emailOrPhone: storedMobileOrEmail,
      //   password: storedPassword,
      // });
      setRememberMe(true); // Update the state for the checkbox
    }
  }, []);

  const socialLogin = () => {
    return null;
  };

  const onSubmit = (data) => {
    console.log(data);
    if (rememberMe) {
      localStorage.setItem("emailOrPhone", data.emailOrPhone);
      localStorage.setItem("password", data.password);
    }
    dispatch(
      loginUserAsync({
        emailOrPhone: data.emailOrPhone,
        password: data.password,
      })
    );
    // reset();
  };

  if (loading && token) return <Loading />;
  else if (token) {
    return <Navigate to="/"></Navigate>;
  } else
    return (
      <section className="px-5 lg:px-0">
        <div className="w-full mx-auto rounded-xl shadow-2xl max-w-lg py-5 px-3 sm:p-10">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-5">
            Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
          </h3>
          <h3 className="text-headingColor font-semibold text-xl text-center  mb-5">
            - Log in with your Email -
          </h3>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 md:py-0 md:px-0"
          >
            <div className="mb-5">
              <label htmlFor="emailOrPhone" className="form__label ml-4">
                Email address / Mobile
              </label>
              <input
                type="text"
                placeholder="Enter your Email or Phone number"
                {...register("emailOrPhone", {
                  required: "Your email or phone number is required",
                })}
                className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
                required
              />
              <span className="text-primaryColor ml-3">
                {errors.emailOrPhone?.message}
              </span>
            </div>

            <div className="mb-5 relative">
              <label htmlFor="password" className="form__label ml-4 ">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                {...register("password", {
                  required: "Your Password is required",
                })}
                className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
                required
              />
              <span className="text-primaryColor ml-3">
                {errors.password?.message}
              </span>
              <div
                className="absolute right-3 bottom-4 cursor-pointer form__label mb-0"
                onClick={handleClickShowPassword}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="text-2xl font-extralight" />
                ) : (
                  <AiOutlineEye className="text-2xl font-extralight" />
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-5 mx-2 gap-5">
              <span className="text-textColor">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={() => {
                    setRememberMe(!rememberMe);
                  }}
                />{" "}
                Remember me
              </span>
              <span className=" text-textColor text-center">
                <Link
                  to="/forgot-password"
                  className="text-primaryColor font-medium ml-1"
                >
                  Forgot password?
                </Link>
              </span>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
              >
                Login
              </button>
            </div>
            <p className="mt-5 text-textColor text-center">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="text-primaryColor font-medium ml-1"
              >
                Register
              </Link>{" "}
              with email.
            </p>
          </form>
          <div className="sm:mt-5 grid space-y-4 sm:p-4">
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
