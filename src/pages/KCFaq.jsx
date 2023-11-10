import React, { useState } from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { faqData } from "../assets/data/kc";
import { Helmet } from "react-helmet";

export default function KCFaq() {
  const [openSectionIndex, setOpenSectionIndex] = useState(0);
  const { id } = useParams();
  const faqIndex = parseInt(id - 1);

  const toggleSection = (index) => {
    setOpenSectionIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const isSectionOpen = (index) => openSectionIndex === index;

  const navigate = useNavigate();

  const currentSection = faqData[faqIndex];

  if (!currentSection) {
    return <Navigate to="*" replace={true}></Navigate>;
  }

  const { title, ques } = currentSection;

  return (
    <>
      <section className="bg-[#fff9ea]">
        <Helmet>
          <title>Flavum HealthTech | Knowledge Centre</title>
          <meta
            name="description"
            content="Knowledge is power. Be informed, your every question around cancer is answered through our AI based knowledge centre. The information presented in our knowledge centre has been sourced from various evidence based studies. Feel free to contact us to know more regarding our data policy."
          />
        </Helmet>
        <div className="container px-6 mx-auto relative">
          <button
            onClick={() => {
              navigate("/knowledge-centre");
            }}
            className="flex gap-2 text-xl absolute -top-5 sm:-top-12 md:-top-5 lg:-top-12"
          >
            <span className="mt-[5px]">
              <IoChevronBackCircleSharp />
            </span>
            Back
          </button>
          <div className="py-7 flex flex-col sm:flex-row justify-center sm:items-start gap-7">
            <h1 className="heading text-center text-primaryColor border-b-2 sm:border-b-0 pb-5 sm:border-r-2 border-gray-500 sm:pr-20 sm:mr-20">
              {title}
            </h1>
            <div>
              <h1 className="heading text-center">Knowledge Centre</h1>
              <span className="w-2/3 sm:w-full h-2 bg-irisBlueColor rounded-full block ml-[80px] sm:ml-[20px] mt-[-4px]"></span>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container px-6 mx-auto">
          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12 max-w-[400px]">
              <h1 className="text-2xl font-semibold">Table of Content</h1>
              <div className="mt-4 space-y-4 lg:mt-8 flex flex-col items-start">
                {ques.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => toggleSection(index)}
                    className="block text-irisBlueColor text-start hover:underline focus:outline-none"
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              {ques.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleSection(index)}
                    className="flex items-center focus:outline-none"
                  >
                    {isSectionOpen(index) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-6 h-6 text-yellowColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-6 h-6 text-yellowColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                    <h1 className="mx-4 text-xl text-gray-700 text-star">
                      {item.question}
                    </h1>
                  </button>
                  {isSectionOpen(index) && (
                    <div className="flex mt-8 md:mx-10">
                      <span className="border border-irisBlueColor" />
                      <p className="max-w-3xl px-4 text-gray-500">
                        {item.answer}
                      </p>
                    </div>
                  )}
                  <hr className="my-8 border-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
