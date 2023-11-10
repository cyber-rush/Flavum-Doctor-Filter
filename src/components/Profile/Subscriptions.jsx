import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

export default function Subscriptions({ sub }) {
  return (
    <div className="container pt-4">
      <h1 className="py-2 text-2xl font-semibold">Subscription settings</h1>
      {/* <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}

      <hr className="mt-4 mb-8" />
      <p className="py-2 text-xl font-semibold">Current Subscription</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-gray-600">
          Your current plan is :{" "}
          <span className={`font-semibold text-xl text-${sub.color}`}>
            {sub.plan}
          </span>{" "}
          expires on
          <span className="text-textColor text-xl">
            {" "}
            {new Date().toJSON().slice(0, 10)}
          </span>
        </p>
        <button
          onClick={() => {
            toast.error("You cannot change your primary email");
          }}
          className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2"
        >
          Change
        </button>
      </div>

      <hr className="mt-4 mb-8" />
    </div>
  );
}
