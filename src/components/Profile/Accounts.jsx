import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useSelector } from "react-redux";
import { PATIENT } from "../../assets/data/roles";
import { Link } from "react-router-dom";

export default function Accounts({ userInfo }) {
  console.log("user: ", userInfo);
  const { email, phone } = userInfo;
  const { loading } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="py-2 text-2xl font-semibold mb-4">Account settings</h1>
        {/* <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
        <hr className="mt-4 mb-8" />
        <p className="py-2 text-xl font-semibold">Email Address</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600">
            Your email address is {email && <strong>{email}</strong>}
          </p>
          <button
            onClick={() => {
              toast.error(<b>You cannot change your primary email</b>);
            }}
            className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2"
          >
            Change
          </button>
        </div>
        <hr className="mt-4 mb-8" />
        <p className="py-2 text-xl font-semibold">Phone Number</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600">
            Your registered phone number is{" "}
            <strong>+91 {phone ? phone : "XXXXXXXXXX"}</strong>
          </p>
          <button className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
            Change
          </button>
        </div>

        <hr className="mt-4 mb-8" />
        <p className="py-2 text-xl font-semibold">Password</p>
        <div className="flex items-center">
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
            {/* Current Password */}
            <label htmlFor="current-password">
              <span className="text-sm text-gray-500">Current Password</span>
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type={showPassword ? "text" : "password"} // Toggle input type
                  id="current-password"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="***********"
                />
              </div>
            </label>

            {/* New Password */}
            <label htmlFor="new-password">
              <span className="text-sm text-gray-500">New Password</span>
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type={showPassword ? "text" : "password"} // Toggle input type
                  id="new-password"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="***********"
                />
              </div>
            </label>
          </div>

          <button
            onClick={() => setShowPassword(!showPassword)}
            className="bg-transparent border-none cursor-pointer outline-none p-2 mt-4"
          >
            {showPassword ? (
              <BiSolidHide className="w-6 h-6 text-gray-600" />
            ) : (
              <BiSolidShow className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
        <p className="mt-2">
          Can't remember your current password.{" "}
          <Link
            to="/forgot-password"
            className="text-sm font-semibold text-blue-600 underline decoration-2"
            href="#"
          >
            Recover Account
          </Link>
        </p>
        <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">
          Save Password
        </button>
        <hr className="mt-4 mb-8" />
        <div className="mb-10">
          <p className="py-2 text-xl font-semibold">Two-Step Authentication</p>
          <p className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Verification Required
          </p>
          <p className="mt-2">
            To enhance the security of your account, we require two-step
            authentication. Please follow the steps below:
          </p>
          <ol className="mt-2 ml-6 list-decimal">
            <li>
              Enter the code sent to your registered email or mobile number.
            </li>
            <li>
              Follow the instructions in the email or SMS to complete the
              verification process.
            </li>
          </ol>
          <button className="bg-blue-500 mt-4 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 ease-in-out">
            Enable Two-Factor Authentication
          </button>
        </div>
      </div>
    </>
  );
}
