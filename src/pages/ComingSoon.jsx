import { Helmet } from "react-helmet";
import Logo from "../assets/icons/logo_crop.png";
export default function ComingSoon() {
  return (
    <div className="text-black w-full px-5 background-animate bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-200 via-rose-200 to-yellow-100 bg-no-repeat bg-coverl h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>Flavum HealthTech | Coming Soon</title>
        <meta name="description" content="Coming soon..." />
      </Helmet>
      <div className="flex flex-col items-center">
        <div className="text-center space-y-5">
          <h1 className="text-[45px] sm:text-[50px] md:text-[60px] ">
            {/* We are <b>Almost</b> there! */}
            Coming soon...
          </h1>
          {/* <p className="text-xl md:text-2xl">
          Stay tuned for something amazing!!!
        </p> */}
        </div>
        <div className="grid grid-cols-1 gap-10 mt-10 lg:mt-10">
          <div className="bg-transparent text-center">
            <img src={Logo} />
          </div>
        </div>
      </div>
    </div>
  );
}
