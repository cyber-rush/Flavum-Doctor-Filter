// import aboutImg from "../../assets/images/about.png";
import { Link } from "react-router-dom";
import userImg from "../../assets/team/abhijay.jpeg";
import doctor from "../../assets/icons/doctor-rushing.png";
import mascot from "../../assets/icons/mascot.png";

const About = () => {
  return (
    <section className="bg-rose-50 mt-0">
      <div className="container">
        <div className="flex justify- items-center md:gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/*----------- about img -----------*/}
          <div className="ml-10  relative sm:w-3/4 lg:w-1/2 xl:w-[770px] order--2 lg:order-1]">
            <img
              src={mascot}
              className="h-96 sm:h-[30rem] w-full sm:w-[30rem] bg-cover"
              alt=""
            />
            <div
              className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%]
              lg:right-[-22]"
            >
              {/* <img src={doctor} className="h-[5rem] w-[5rem]" alt="" /> */}
            </div>
          </div>
          {/*-------------about content---------*/}
          <div className="w-full lg:w-1/2 xl:w-[670px] sm:px-12 order-1 lg:order-2">
            <h2 className="heading mt-10">
              Flavum gives 'wings' to your healthcare needs
            </h2>
            <p className="text-[18px] leading-7 text-textColor font-medium mt-4 text-left">
              Flavum, where courage and compassion reign, an incredible woman.
              The name <strong>"Flavum"</strong> itself holds a profound
              significance. Flavum's name resonates beyond mere phonetics – A
              mirror that reflects her essence in all its shades. Flavum
              connects the attitude of{" "}
              <strong>“I take charge of my own health”</strong> to institutions
              that matter. As the sun continues to rise despite life's trials,
              bringing new beginnings, her name reminds us never to give up and
              face everything with a smile. Flavum's story is a golden thread in
              the fabric of life, reminding us that being strong and kind can
              make a big difference. Flavum stands as a reminder that every
              individual possesses the power to illuminate the world.
            </p>
            {/* <p className="text_para mt-[30px]">
              our best is something we strive for each day, caring for our
              patients-not looking back at what we accomplished but towards what
              we can do tomorrow. providing the best. Lorem ipsum dolor set
              amet, consectetur adipisicing elit. Aliquid, modi?{" "}
            </p> */}
            <Link to="/">
              <button className="btn">Learn More </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
