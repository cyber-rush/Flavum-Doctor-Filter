import { lazy } from "react";
import { Link, useNavigate } from "react-router-dom";
import image01 from "../assets/icons/image01.png";
import image02 from "../assets/icons/image02.png";
import image03 from "../assets/icons/image03.png";

import { BsArrowRight } from "react-icons/bs";
const About = lazy(() => import("../components/About/About"));
const TeamSlider = lazy(() => import("../components/Testimonial/TeamSlider"));

// import About from "../components/About/About";
import hero_bg from "../assets/images/home_bg.webp";
import { homeIcons } from "../assets/data/homeIcons";
// import TeamSlider from "../components/Testimonial/TeamSlider";
import { riskAssessment } from "../assets/data/riskAssessment";
import kc_home from "../assets/icons/kc_home.png";
import { knowledgeCentre } from "../assets/data/knowledgeCentre";

import diagnostic_centre from "../assets/partners/Diagnostic center.webp";
import general_health from "../assets/partners/General Health Center.webp";
import gynaecology_centre from "../assets/partners/Gynaecology Center.webp";
import hospital from "../assets/partners/Hospital.webp";
import oncology_centre from "../assets/partners/Oncology Center.webp";
import palliative_care from "../assets/partners/Palliative Care Center.webp";
import { Helmet } from "react-helmet";
import { Suspense } from "react";
import Loading from "../components/Loading/Loading";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* =========== hero section ========= */}

      <section
        className="hero__section pt-[60px] 2xl:h-[800px] mt-0"
        style={{ backgroundImage: `url(${hero_bg})` }}
      >
        <Helmet>
          <title>Flavum HealthTech | Home</title>
          <meta
            name="description"
            content="Flavum Healthtech is India’s first preventive healthcare platform focusing on early detection of Cancer. At Flavum we are on a mission to build an asset light oncological ecosystem for creating awareness around cancer-screening, diagnosis, treatment, follow up, post care surveillance and palliative care."
          />
          <meta name="keywords" content="cancer, flavum" />
        </Helmet>
        <div className=" px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-end">
            {/*  ============== hero content ========= */}

            <div className="lg:w-[570px] backdrop-blur-sm rounded-lg">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] sm:text-right">
                {/* We help patients live a healthy, longer life. */}
                ‌Empower, Detect, Conquer.
              </h1>
              <p className="text__para sm:text-[20px] bg-white/80 sm:bg-white/70 text-black font-bold sm:text-right p-2 rounded-xl">
                Flavum HealthTech is leading the way in redefining cancer care
                through its innovative, asset-light oncology ecosystem. We are
                changing the way cancer care is delivered, encompassing
                everything from awareness and screening to diagnosis, treatment,
                second opinions, and post-care surveillance, all with a primary
                focus on early detection. Flavum HealthTech integrates a network
                of trusted healthcare professionals, advanced diagnostic
                centers, premier institutions, and compassionate palliative care
                centers seamlessly to deliver the best quality of care with a
                proactive approach that sets standards for early detection and
                comprehensive care.
              </p>
              {/* <button className="btn">Request an Appointment</button> */}
            </div>
            {/* =========== hero content ========== */}
          </div>
        </div>
      </section>
      {/* =========== hero section end ========= */}

      <section className="bg-rose-50 mt-0">
        <div className="container">
          <div className="lg:mx-[200px]">
            <h2 className="heading text-center">Who are we?</h2>
            <p className="text__para text-center font-medium">
              Flavum HealthTech is India’s first preventive healthcare platform
              focusing on early detection of Cancer. At Flavum we are on a
              mission to build an asset light oncological ecosystem for creating
              awareness around cancer-screening, diagnosis, treatment, follow
              up, post care surveillance and palliative care.
            </p>
          </div>
          <div className="my-12 grid gap-x-8 gap-y-8 sm:gap-y-20 grid-cols-2 lg:grid-cols-6 transform transition duration-900">
            {homeIcons.map((item, index) => (
              <div
                onClick={() => navigate(item.link)}
                key={index}
                className="flex flex-col items-center cursor-pointer md:px-0"
              >
                <img src={item.icon} className="h-22 w-22 hover:scale-125" />
                <p className="font-semibold text-sm sm:text-base text-center mt-5">
                  {item.display}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ============== services =========== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Patient-Centered Medical Excellence
            </h2>
            <p className="text__para text-center font-medium">
              Our unwavering dedication is towards patient-centered medical
              excellence and wellbeing, providing top-notch care with compassion
              and expertise every step of the way.
            </p>
          </div>
          {/* <div className="flex flex-wrap items-center justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"></div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="sm:py-[30px] sm:px-5">
              <div className="flex items-center justify-center">
                <img src={image01} alt="doctor doodle" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-heaingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor mt-4 text-center font-medium">
                  Efficiently connect with medical experts in your area.
                </p>
                <Link
                  to="/coming-soon"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <hr className="md:hidden" />
            <div className="sm:py-[30px] sm:px-5">
              <div className="flex items-center justify-center">
                <img src={image02} alt="doctor doodle" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-heaingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor mt-4 text-center font-medium">
                  Ensure hassle-free navigation for your convenience.
                </p>
                <Link
                  to="/coming-soon"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <hr className="md:hidden" />

            <div className="sm:py-[30px] sm:px-5">
              <div className="flex items-center justify-center">
                <img src={image03} alt="doctor doodle" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor mt-4 text-center font-medium">
                  Schedule an appointment with an expert for timely treatment.
                </p>
                <Link
                  to="/coming-soon"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========  cancer risk assessment cards ========= */}

      <section className="py-20 bg-gradient-to-r from-flavumColor to-flavumColor2 ">
        <div className="container flex items-center justify-center">
          <div className="mx-auto grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
            {riskAssessment.map((item, index) => (
              <div
                key={index}
                className="bg-rose-50 rounded-3xl py-8 max-h-[400px] max-w-[400px] md:h-[400px] md:w-[400px] flex flex-col justify-around items-center px-12 space-y-5"
              >
                <h1 className="heading text-3xl font-extrabold text-center w-72">
                  {item.title}
                </h1>
                <p className="font-medium text-center text-[17px]">
                  {item.body}
                </p>
                <button className="font-bold text-lg text-flavumColor px-4 py-1 rounded-3xl hover:bg-gradient-to-r from-flavumColor to-flavumColor2  border-flavumColor border-2 bg-white hover:border-inherit hover:text-white bg-none">
                  <Link to={item.link}>Know more</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========  cancer risk assessment cards end ========= */}

      {/* ============== services end =========== */}

      {/* ======== about section start ========== */}
      <About />
      {/* ======== about section end ========== */}

      {/* ========== knowledge centre ========== */}

      <section>
        <div className="container">
          <div className="flex justify-center gap-[50px] flex-col lg:flex-row">
            <div className="lg:w-1/2 flex flex-col items-start sm:px-12 space-y-12">
              <h1 className="heading mt-10 text-center lg:text-left">
                Knowledge Centre
              </h1>
              <p className="text-[18px] leading-7 text-textColor font-medium mt-4 text-left">
                Knowledge is power. Be informed, your every question around
                cancer is answered through our AI based knowledge centre. The
                information presented in our knowledge centre has been sourced
                from various evidence based studies. Feel free to contact us to
                know more regarding our data policy.
              </p>
              <button
                onClick={() => {
                  navigate("/knowledge-centre");
                }}
                className="font-bold text-lg text-flavumColor px-4 py-1 rounded-3xl hover:bg-gradient-to-r from-flavumColor to-flavumColor2  border-flavumColor border-2 bg-white hover:border-inherit hover:text-white bg-none"
              >
                Know more
              </button>
            </div>
            <div className="sm:px-12 grid grid-cols-2 md:grid-cols-3 lg:w-1/2 gap-x-8 md:gap-x-16">
              {knowledgeCentre.slice(0, 6).map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate("/knowledge-centre")}
                  className="bg-gradient-to-b py-6 from-white to-rose-50 pl-2 flex flex-col justify-center items-center gap-3 rounded-xl cursor-pointer hover:scale-105"
                >
                  <img src={kc_home} className="rounded-full" />
                  <div className="flex flex-col justify-center items-center gap-1">
                    <span className="text-center w-full px-2 text-sm font-bold">
                      {item.title}
                    </span>
                    <span className="text-xs">{item.questions} questions</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== our partners =========== */}
      <section className="bg-rose-50 mt-0">
        <div className="container">
          <div className="lg:mx-[200px] mx-auto">
            <h1 className="heading text-center">Our Partners</h1>
            <p className="text__para text-center font-medium my-10">
              Our partnerships are the foundation of Flavum's success. We are
              extremely proud to be able to collaborate with doctors,
              innovators, experts, and communities that share our mission and
              values. These strategic alliances provide us with cutting-edge
              technologies and unparalleled expertise. The essence of
              partnership is sharing. It is marked by respect for one another,
              role divisions, rights to information, accountability, competence,
              and value accorded to individual input. We drive innovation,
              strive for exceptional results and aim for equity in health.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-5">
              <img src={general_health} className="w-96" />
              <img src={oncology_centre} className="w-96" />
              <img src={gynaecology_centre} className="w-96" />
              <img src={diagnostic_centre} className="w-96" />
              <img src={hospital} className="w-96" />
              <img src={palliative_care} className="w-96" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== our partners end =========== */}

      {/* ============== our team ============= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Team</h2>
            <p className="text__para text-center">
              A well-seasoned team of Doctors, Engineers, Educators, and
              Designers setting new standards in the industry.
            </p>
          </div>
          <Suspense fallback={<Loading />}>
            <TeamSlider />
          </Suspense>
        </div>
      </section>
      {/* ============== our team end ============= */}
    </>
  );
}
