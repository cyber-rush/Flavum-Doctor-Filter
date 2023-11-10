import React from "react";
import KnowledgeCentreCard from "../components/KnowledgeCentre/KnowledgeCentreCard";
import { knowledgeCentre } from "../assets/data/knowledgeCentre";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import KCSearch from "../components/Search/KCSearch";
import { GrCircleInformation } from "react-icons/gr";
import Legal from "../components/Legal/Legal";
import { Helmet } from "react-helmet";

export default function Policies() {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  let title = "";

  switch (path) {
    case "/terms-and-conditions":
      title = "Terms and Conditions";
      break;
    case "/privacy-policy":
      title = "Privacy Policy";
      break;
    case "/refund-policy":
      title = "Refund and Cancellation Policy";
      break;
    case "/cookie-policy":
      title = "Cookie Policy";
      break;
    default:
      return <Navigate to="*"></Navigate>;
  }

  return (
    <>
      {/* bg-[#fff9ea] */}
      <section className="bg-[#fff9ea]">
        <Helmet>
          <title>Flavum HealthTech | Policies</title>
          <meta
            name="description"
            content="Discover Flavum HealthTech's policies, including terms and conditions, privacy policy, and refund policy. Learn about our commitment to transparency, data protection, and customer satisfaction."
          />
        </Helmet>
        <div className="container text-center">
          <h2 className="heading">{title}</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between relative"></div>
        </div>
      </section>

      <section className="container pt-10 content-container">
        <div className="grid grid-cols-1 gap-5 ">
          <Legal data={title} />
        </div>
      </section>
    </>
  );
}
