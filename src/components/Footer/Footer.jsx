import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo_crop.png";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const socialLinks = [
  {
    path: "https://www.instagram.com/flavumhealth/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.facebook.com/flavumhealth/",
    icon: <BsFacebook className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://wa.me/+917396744187",
    icon: <BsWhatsapp className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/company/flavum-HealthTech/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://twitter.com/FlavumH",
    icon: <RiTwitterXFill className="group-hover:text-white w-4 h-5" />,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <>
      <footer className="shadow-lg bg-rose-50">
        <div className="container py-5 ">
          <div className="flex flex-wrap justify-between gap-4 -mx-4">
            <div className="w-full md:w-1/4 px-4">
              <div className="p-4">
                <div className="flex content-between sm:items-center">
                  <img src={logo} alt="" className="h-22 w-2/3 sm:w-full" />
                </div>

                <div className="flex items-left justify-start gap-3 mt-0 ml-3">
                  {socialLinks.map((link, index) => (
                    <Link
                      to={link.path}
                      key={index}
                      target="_blank"
                      className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center
                     justify-center group hover:bg-primaryColor hover:border-none"
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/4 px-4">
              <div className="p-4">
                <h2 className="text-2xl md:text-[20px] leading-6 md:leading-[30px] font-[700] mb-4 md:mb-6 text-headingColor text-left">
                  About Us:
                </h2>
                <p>
                  <strong>Flavum HealthTech Pvt. Ltd., </strong>
                  <br />
                  At Flavum, we are firm advocates of fair and proactive
                  healthcare. Make a proactive choice for your health –
                  subscribe to our preventive and early detection services to
                  protect against cancer.
                </p>
              </div>
            </div>

            <div className="px-4">
              <div className="p-4 flex flex-col items-center justify-center">
                <div className="text-bold text-left md:text-center">
                  <h3 className="text-2xl md:text-[20px] leading-6 md:leading-[30px] font-[700] mb-4 md:mb-6 text-headingColor ">
                    Contact
                  </h3>
                  <a
                    href="mailto:grievance@flavumhealth.com"
                    className="text-lg hover:underline text-gray-600 "
                  >
                    grievance@flavumhealth.com
                  </a>
                  <br />
                  <a
                    href="mailto:tech@flhealth.in"
                    className="text-lg hover:underline text-gray-600 "
                  >
                    tech@flhealth.in
                  </a>
                  <br />
                  {/* <a
                    href="tel:+917396744187"
                    className="text-lg hover:underline text-gray-600 "
                  >
                    +91 - 7396744187
                  </a>
                  <br /> */}
                  <Link
                    to="/contact"
                    className="text-lg hover:underline text-gray-600 font-semibold"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>

            <div className="px-4">
              <div className="p-4 flex flex-col items-center justify-center">
                <div className="text-bold">
                  <h3 className="text-2xl md:text-[20px] leading-6 md:leading-[30px] font-[700] mb-4 md:mb-6 text-headingColor text-left md:text-center">
                    Download our app
                  </h3>

                  <div className="bg-white flex items-center border rounded-lg px-4 py-2 w-52 mt-5 cursor-pointer">
                    <FaGooglePlay className="w-7 md:w-8 text-2xl md:text-3xl" />
                    <div className="text-left ml-3">
                      <p className="text-xs text-gray-800">Coming Soon on</p>
                      <p className="text-sm md:text-base">Google Play Store</p>
                    </div>
                  </div>
                  <div className="bg-white flex items-center border rounded-lg px-4 py-2 w-52 mt-2 cursor-pointer">
                    <FaApple className="w-7 md:w-8 text-2xl md:text-3xl" />
                    <div className="text-left ml-3">
                      <p className="text-xs text-gray-800">Coming Soon on</p>
                      <p className="text-sm md:text-base">Apple Store</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-1 text-xs sm:text-sm px-5 text-gray-100 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>© {year} developed by Flavum HealthTech. All rights reserved.</p>
            <div className="flex gap-3 items-center">
              <span
                className="cursor-pointer hover:underline underline-offset-1"
                onClick={() => {
                  navigate("/terms-and-conditions");
                }}
              >
                Terms & Conditions
              </span>
              <div className="w-[1px] h-[20px] bg-gray-100"></div>
              <span
                className="cursor-pointer hover:underline underline-offset-1"
                onClick={() => {
                  navigate("/privacy-policy");
                }}
              >
                Privacy Policy
              </span>
              <div className="w-[0.5px] h-[20px] bg-gray-100"></div>
              <span
                className="cursor-pointer hover:underline underline-offset-1"
                onClick={() => {
                  navigate("/refund-policy");
                }}
              >
                Refund Policy
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
