import KnowledgeCentreCard from "../components/KnowledgeCentre/KnowledgeCentreCard";
import { knowledgeCentre } from "../assets/data/knowledgeCentre";
import { useNavigate } from "react-router-dom";
import KCSearch from "../components/Search/KCSearch";
import { GrCircleInformation } from "react-icons/gr";
import { Helmet } from "react-helmet";

export default function KnowledgeCentre() {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-rose-50">
        <Helmet>
          <title>Flavum HealthTech | Knowledge Centre</title>
          <meta
            name="description"
            content="Knowledge is power. Be informed, your every question around cancer is answered through our AI based knowledge centre. The information presented in our knowledge centre has been sourced from various evidence based studies. Feel free to contact us to know more regarding our data policy."
          />
        </Helmet>
        <div className="container text-center">
          <h2 className="heading">Flavum Knowledge Centre</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between relative">
            <KCSearch />
          </div>
        </div>
      </section>

      <section className="container pt-10">
        <div className="p-4 mb-5 bg-yellow-100 flex gap-5 rounded-md">
          <span className="text-yellowColor text-[20px] leading-6 font-semibold mt-1">
            <GrCircleInformation className="text-gray-500" />
          </span>
          <p className="text-[16px] leading-6 font-medium text-textColor">
            The information presented in our knowledge centre have been sourced
            from various evidence based studies. The major information sources
            are{" "}
            <strong>
              Pubmed, American Cancer Society, NCCN, National Cancer Institute,
              WHO Globocan, and many others.
            </strong>{" "}
            Feel free to{" "}
            <strong
              onClick={() => {
                navigate("/contact");
              }}
              className="underline underline-offset-2 cursor-pointer"
            >
              Contact us
            </strong>{" "}
            to know more regarding our data policy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {knowledgeCentre.map((item, index) => (
            <KnowledgeCentreCard item={item} key={index} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
