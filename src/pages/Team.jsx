import { useState } from "react";
import Departments from "../components/Team/Departments";
import {
  foundersTeam,
  engineeringTeam,
  marketingTeam,
  financeTeam,
} from "../assets/data/team";
import { Helmet } from "react-helmet";

export default function Team() {
  const [tab, setTab] = useState("founders");

  return (
    <>
      <section className="bg-rose-50">
        <Helmet>
          <title>Flavum HealthTech | Team</title>
          <meta
            name="description"
            content="A well-seasoned team of Doctors, Engineers, Educators, and Designers
            setting new standards in the industry."
          />
        </Helmet>
        <div className="container px-6 mx-auto text-center pb-12">
          <h2 className="heading capitalize">Meet our team</h2>
          <p className="max-w-2xl mx-auto my-6 text-center text__para">
            A well-seasoned team of Doctors, Engineers, Educators, and Designers
            setting new standards in the industry.
          </p>
          <div className="flex items-center justify-center pb-10">
            <div className="flex flex-col sm:flex-row items-center p-1 border border-textColor rounded-xl mx-auto">
              <button
                onClick={() => {
                  setTab("founders");
                }}
                className={`${
                  tab === "founders" && "text-white bg-primaryColor"
                } px-10 w-full py-2 mx-4 text-sm font-medium text-textColor capitalize  md:py-3 hover:bg-primaryColor hover:text-white rounded-xl md:px-12`}
              >
                founders
              </button>
              <button
                onClick={() => {
                  setTab("engineering");
                }}
                className={` ${
                  tab === "engineering" && "text-white bg-primaryColor"
                } px-10 w-full py-2 mx-4 text-sm font-medium text-textColor capitalize transition-colors duration-300 md:py-3 hover:bg-primaryColor hover:text-white rounded-xl md:mx-8 md:px-12`}
              >
                engineering
              </button>
              <button
                onClick={() => {
                  setTab("marketing");
                }}
                className={`${
                  tab === "marketing" && "text-white bg-primaryColor"
                } px-10 w-full py-2 mx-4 text-sm font-medium text-textColor capitalize transition-colors duration-300 md:py-3 focus:outline-none hover:bg-primaryColor hover:text-white rounded-xl md:px-12`}
              >
                marketing
              </button>
              <button
                onClick={() => {
                  setTab("finance");
                }}
                className={`${
                  tab === "finance" && "text-white bg-primaryColor"
                } px-10 w-full py-2 mx-4 text-sm font-medium text-textColor capitalize  md:py-3 hover:bg-primaryColor hover:text-white rounded-xl md:px-12`}
              >
                finance
              </button>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3"> */}
          <div className="mt-8 xl:mt-16 flex flex-col md:flex-row justify-center gap-10">
            {tab === "founders" && <Departments team={foundersTeam} />}
            {tab === "engineering" && <Departments team={engineeringTeam} />}
            {tab === "marketing" && <Departments team={marketingTeam} />}
            {tab === "finance" && <Departments team={financeTeam} />}
          </div>
        </div>
      </section>
    </>
  );
}
