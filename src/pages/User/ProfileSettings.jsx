import React, { useState } from "react";
import Accounts from "../../components/Profile/Accounts";
import Profile from "../../components/Profile/Profile";
import Appointments from "../../components/Profile/Appointments";
import Billing from "../../components/Profile/Billing";
import Notifications from "../../components/Profile/Notifications";
import Subscriptions from "../../components/Profile/Subscriptions";
import { plans } from "../../assets/data/plans";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLoggedInUserAsync,
  fetchLoggedInDoctorAsync,
  selectUserInfo,
} from "../../store/user/userSlice";
import { useEffect } from "react";
import { signOutAsync } from "../../store/auth/authSlice";
import Loading from "../../components/Loading/Loading";

export default function ProfileSettings() {
  const [tab, setTab] = useState("subscriptions");
  const [mobileTab, setMobileTab] = useState(false);
  const dispatch = useDispatch();
  const { loading, role } = useSelector((state) => state.auth);

  useEffect(() => {
    if (role) {
      if (role === "patient") {
        dispatch(fetchLoggedInUserAsync());
      }
      if (role === "doctor") {
        dispatch(fetchLoggedInDoctorAsync());
      }
    }
  }, [dispatch, role]);

  const userInfo = useSelector(selectUserInfo);

  if (userInfo) {
    console.log(userInfo);
  }

  const user = {
    subscription: "Starter Plan",
  };

  const sub = plans.find((item) => item.plan == user.subscription);

  const profileTabs = [
    {
      display: "subscriptions",
      tab: <Subscriptions sub={sub} />,
    },
    {
      display: "accounts",
      tab: <Accounts userInfo={userInfo} />,
    },
    {
      display: "profile",
      tab: <Profile userInfo={userInfo} />,
    },
    {
      display: "appointments",
      tab: <Appointments />,
    },
    {
      display: "billing",
      tab: <Billing />,
    },
    {
      display: "notifications",
      tab: <Notifications />,
    },
  ];

  const selectedTab = profileTabs.find((item) => item.display === tab);

  if (loading) return <Loading />;
  return (
    <>
      <section className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto pt-0">
        <h1
          className="border-b py-6 heading"
          onClick={() => {
            dispatch(signOutAsync());
          }}
        >
          Profile
        </h1>
        <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
          <div className="relative my-4 w-56 sm:hidden">
            <input
              className="peer hidden"
              type="checkbox"
              checked={mobileTab}
              id="select-1"
            />
            <label
              onClick={() => {
                setMobileTab(!mobileTab);
              }}
              className="flex w-full capitalize cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
            >
              {tab}
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
              {profileTabs.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer capitalize px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white"
                  onClick={() => {
                    setTab(item.display);
                    setMobileTab(!mobileTab);
                  }}
                >
                  {item.display}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 hidden sm:block">
            <ul>
              {profileTabs.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    tab === item.display && "border-l-blue-700 text-blue-700"
                  } mt-5 capitalize cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700`}
                  onClick={() => {
                    setTab(item.display);
                  }}
                >
                  {item.display}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow-2xl ${
              selectedTab.display === "subscriptions"
                ? `border-${sub.color} border-4`
                : "border-2"
            }`}
          >
            {selectedTab && selectedTab.tab}
          </div>
        </div>
      </section>
    </>
  );
}
