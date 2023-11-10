import { BsFacebook, BsLinkedin } from "react-icons/bs";

export default function Departments({ team }) {
  return (
    <>
      {team.map((item, index) => (
        <div key={index}>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-60 rounded-full aspect-square"
              src={item.image}
              alt=""
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
              {item.name}
            </h1>
            <p className="mt-2 text-gray-500 capitalize">{item.designation}</p>
            <div className="flex mt-3 -mx-2">
              {item.socialLinks.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link}
                  target="_blank"
                  className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  aria-label={linkIndex === 0 ? "LinkedIn" : "Facebook"}
                >
                  {linkIndex === 0 ? <BsLinkedin /> : <BsFacebook />}
                </a>
              ))}
            </div>
          </div>
          <br />
          <hr className="md:hidden" />
        </div>
      ))}
    </>
  );
}
