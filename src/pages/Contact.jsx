import { useForm } from "react-hook-form";
import cancer1 from "../assets/icons/cancer-1.png";
import cancer2 from "../assets/icons/cancer-2.png";
import { Link } from "react-router-dom";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaFacebookF } from "react-icons/fa";

const socialLinks = [
  {
    path: "https://www.instagram.com/flavumhealth/",
    icon: (
      <BsInstagram className="w-6 h-6 mx-3 transition-colors duration-300 transform hover:text-primaryColor" />
    ),
  },
  {
    path: "https://www.facebook.com/flavumhealth/",
    icon: (
      <FaFacebookF className="w-5 h-6 mx-3 transition-colors duration-300 transform hover:text-primaryColor" />
    ),
  },
  {
    path: "https://wa.me/+917396744187",
    icon: (
      <BsWhatsapp className="w-6 h-6 mx-3 transition-colors duration-300 transform hover:text-primaryColor" />
    ),
  },
  {
    path: "https://www.linkedin.com/company/flavum-HealthTech/",
    icon: (
      <RiLinkedinFill className="w-7 h-7 mx-3 transition-colors duration-300 transform hover:text-primaryColor" />
    ),
  },
  {
    path: "https://twitter.com/FlavumH",
    icon: (
      <RiTwitterXFill className="w-6 h-6 mx-3 transition-colors duration-300 transform hover:text-primaryColor" />
    ),
  },
];

const Contact = () => {
  const [iframeHeight, setIframeHeight] = useState("710px");

  useEffect(() => {
    const handleMessage = (event) => {
      const { data } = event;
      if (typeof data === "string") {
        const iframeData = data.split("|");
        if (iframeData.length === 2) {
          const zfPerma = iframeData[0];
          const zfIframeNewHeight = `${parseInt(iframeData[1], 10) + 15}px`;

          const iframe = document.getElementById("contactFormIframe");

          if (
            iframe.src.indexOf("formperma") > 0 &&
            iframe.src.indexOf(zfPerma) > 0
          ) {
            const prevIframeHeight = iframe.style.height;

            if (prevIframeHeight !== zfIframeNewHeight) {
              setIframeHeight(zfIframeNewHeight);
            }
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <section className="min-h-screen bg-white mt-0">
      <Helmet>
        <title>Flavum HealthTech | Contact</title>
        <meta
          name="description"
          content="Get in touch with Flavum HealthTech and reach out to our dedicated team for inquiries, feedback, or any information you need. We're here to assist you with all your questions and support your journey towards early cancer detection and prevention."
        />
      </Helmet>
      <div className="container p-0 mx-auto">
        <div className="lg:flex lg:items-start mx-auto">
          <div className="lg:w-1/2 lg:mx-10">
            {/* <h1 className="text-2xl font-semibold text-gray-800 capitalize  lg:text-3xl">
              Let’s talk
            </h1>
            <p className="mt-4 text-gray-500">
              Ask us everything and we would love to hear from you! We are here
              to solve all your doubts and queries. Feel free to drop them here.
            </p> */}
            <div>
              <iframe
                id="contactFormIframe"
                src="https://forms.zohopublic.in/flavumhealthtech/form/ContactUs/formperma/giIdXGffugWyHU4EPIjRP57AU7Fcr4sSpBxBi0dZXQQ?zf_rszfm=1"
                style={{
                  border: "none",
                  height: iframeHeight,
                  width: "100%",
                  transition: "all 0.5s ease",
                }}
              />
            </div>
          </div>
          <div className="sm:mt-12 px-6 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-2/5 h-2/5"
              src={cancer1}
              alt=""
            />
            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-center -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 mx-2 text-primaryColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="mx-2 text-gray-700  w-72">
                  <strong>Registered Address:</strong> 458 A, Bari Co Operative
                  Colony, Bokaro Steel City, Bokaro, Jharkhand, India - 827010
                </span>
                <span className="mx-2 text-gray-700  w-72">
                  <strong>Operational Address:</strong> GROUND FLOOR BLK-F, SHOP
                  NO 15, MOTI NAGAR, NEAR POLICE BEAT BOX, New Delhi - 110015
                </span>
              </p>

              <p className="flex items-center -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 mx-2 text-primaryColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <a
                  href="mailto:grievance@flavumhealth.com"
                  className="mx-2 text-gray-700 truncate w-72"
                >
                  grievance@flavumhealth.com
                </a>
                <a
                  href="mailto:tech@flhealth.in"
                  className="mx-2 text-gray-700 truncate w-72"
                >
                  tech@flhealth.in
                </a>
              </p>
              <p className="flex items-center -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-8 md:h-8 mx-2 text-primaryColor "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+917396744187"
                  className="mx-2 text-gray-700 truncate w-72"
                >
                  +91 - 7396744187
                </a>
              </p>
            </div>

            <div className="mt-6 md:mt-8 w-full">
              <h3 className="text-gray-600 text-center">
                <b>Follow us</b>
              </h3>
              <div className="flex mt-4 -mx-1.5 justify-center items-center">
                {socialLinks.map((item, index) => (
                  <Link to={item.path} key={index} target="_blank">
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
