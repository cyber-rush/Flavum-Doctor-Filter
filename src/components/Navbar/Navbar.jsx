import React, { useState, useEffect } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo_crop.png";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { useRef } from "react";
import { Slant as Hamburger } from "hamburger-react";
import { getToken } from "../../utils/HelperFunctions";
import avatar from "../../assets/icons/avatar-icon.png";
import { signOutAsync } from "../../store/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const links = [
  // {
  //   name: "Doctors",
  //   submenu: true,
  //   sublinks: [
  //     {
  //       sublink: [
  //         { name: "All Doctors", link: "/coming-soon" },
  //         { name: "Breast Cancer Specialist", link: "/coming-soon" },
  //         { name: "Cervical Cancer Specialist", link: "/coming-soon" },
  //       ],
  //     },
  //   ],
  // },
  {
    name: "For Patients",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { name: "Search Doctors", link: "/doctors" },
          { name: "Book Appointments", link: "/book-appointment" },
          {
            name: "My Appointments",
            link: "/my-appointments",
          },
          { name: "Nearby Clinics", link: "/doctors" },
        ],
      },
    ],
  },
  // https://flavumhealth.zohobookings.in/#/customer/flavumhealthtechprivatelimited/my-appointment
  {
    name: "Our Company",
    submenu: true,
    sublinks: [
      {
        sublink: [
          { name: "Team", link: "/team" },
          { name: "Contact Us", link: "/contact" },
          // { name: "Test", link: "/test" },
          // { name: "Services", link: "/services" },
          // { name: "Terms and Conditions", link: "/terms-and-conditions" },
          // { name: "Privacy Policy", link: "/privacy-policy" },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const headerRef = useRef(null);
  const { loading, user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shadow-2xl");
      } else {
        headerRef.current.classList.remove("shadow-2xl");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <nav
      ref={headerRef}
      className="backdrop-blur-lg bg-white sm:bg-white/90 sticky top-0 z-[50] transition-all transform duration-700 w-full"
    >
      <div className="flex items-center font-medium justify-around relative">
        <div id="google_translate_element"></div>
        <div
          // onClick={closeMobileMenu}
          // onClick={() => {
          //   dispatch(signOutAsync());
          //   navigate("/login");
          // }}
          className="z-50 px-5 py-1 md:p-5 md:w-auto w-full flex justify-between items-center"
        >
          <Link onClick={closeMobileMenu} to="/" className="w-[180px]">
            <img src={Logo} className="w-full" alt="Logo" />
          </Link>

          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={30}
              duration={0.7}
            />
            {/* {open ? <IoMdClose /> : <IoMdMenu />} */}
          </div>
        </div>

        <ul className="md:flex hidden items-center">
          <li>
            <NavLink
              to="/"
              className="py-4 px-3 inline-block hover:text-primaryColor hover:bg-rose-50 rounded-lg [&.active]:text-primaryColor"
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <Link
              to="/coming-soon"
              className="py-7 px-3 inline-block hover:text-primaryColor "
              onClick={closeMobileMenu}
            >
              Find a Doctor
            </Link>
          </li> */}
          <li>
            <NavLink
              to="/knowledge-centre"
              className={`py-4 px-3 inline-block hover:text-primaryColor hover:bg-rose-50 rounded-lg [&.active]:text-primaryColor `}
            >
              Knowledge Centre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="py-4 px-3 inline-block hover:text-primaryColor hover:bg-rose-50 rounded-lg [&.active]:text-primaryColor"
            >
              Services
            </NavLink>
          </li>

          {links.map((link, index) => (
            <div key={index}>
              <div className="px-3  text-left md:cursor-pointer group ">
                <h1
                  className="py-4 px-3 flex justify-between items-center md:pr-0 pr-5 group hover:text-primaryColor hover:bg-rose-50 rounded-lg"
                  onClick={() => {
                    heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("");
                    setSubHeading("");
                  }}
                >
                  {link.name}
                  <span className="text-xl md:hidden inline">
                    {heading === link.name ? (
                      <LuChevronUp />
                    ) : (
                      <LuChevronDown />
                    )}
                  </span>
                  <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <LuChevronDown />
                  </span>
                </h1>
                {link.submenu && (
                  <div>
                    <div className="z-[50] absolute top-20 hidden group-hover:md:block hover:md:block ">
                      <div className="py-3">
                        <div
                          className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                        ></div>
                      </div>
                      <div className="bg-white p-5 grid grid-cols-1 gap-10 shadow-md rounded-lg">
                        {link.sublinks.map((mysublinks, index) => (
                          <div key={index}>
                            {mysublinks.sublink.map((slink, idx) => (
                              <li
                                key={idx}
                                className="text-md text-gray-600 my-2.5 p-2 hover:text-primaryColor hover:bg-rose-50 rounded-xl"
                              >
                                <Link to={slink.link}>
                                  <div>
                                    <h3>{slink.name}</h3>
                                    <h3>{slink.description}</h3>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Mobile menus */}
              <div
                className={`
              ${heading === link.name ? "md:hidden" : "hidden"}
              `}
              >
                {/* sublinks */}
                {link.sublinks.map((slinks, index) => (
                  <div key={index}>
                    <h1
                      onClick={() =>
                        setSubHeading(
                          slinks.name === subHeading ? "" : slinks.name
                        )
                      }
                      className="pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                    >
                      {slinks.name}
                    </h1>
                    {slinks.sublink.map((slink, idx) => (
                      <li key={idx} className="py-3 pl-14">
                        <NavLink
                          to={slink.link}
                          onClick={handleLinkClick}
                          className={`[&.active]:text-primaryColor`}
                        >
                          {slink.name}
                        </NavLink>
                      </li>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {token && user ? (
            <div className="flex items-center gap-3 capitalize">
              <h2>{user.fname}</h2>
              <Link to="/user">
                <figure className="w-[45px] h-[45px] rounded-full cursor-pointer">
                  <img
                    src={avatar}
                    className="w-full rounded-full"
                    alt="user"
                  />
                </figure>
              </Link>
            </div>
          ) : (
            <li>
              <Link
                to="/login"
                className="bg-primaryColor text-sm sm:text-base p-1 sm:py-2 sm:px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
              >
                Login
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile nav */}
        <ul
          // closeMobileMenu={closeMobileMenu}
          className={`md:hidden bg-white fixed w-full top-0 overflow-y-clipbottom-0 py-24 pl-4 duration-500 h-screen ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={`py-7 px-3 inline-block hover:text-primaryColor w-full [&.active]:text-primaryColor `}
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <Link
              to="/doctors"
              className="py-7 px-3 inline-block hover:text-primaryColor w-full"
              onClick={closeMobileMenu}
            >
              Find a Doctor
            </Link>
          </li> */}

          <li>
            <NavLink
              to="/knowledge-centre"
              className={`py-7 px-3 inline-block hover:text-primaryColor w-full [&.active]:text-primaryColor`}
              onClick={closeMobileMenu}
            >
              Knowledge Centre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctors"
              className={`py-7 px-3 inline-block hover:text-primaryColor w-full [&.active]:text-primaryColor `}
              onClick={closeMobileMenu}
            >
              Doctors
            </NavLink>
          </li>

          {links.map((link, index) => (
            <div key={index}>
              <div className="px-3 text-left md:cursor-pointer group">
                <h1
                  className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
                  onClick={() => {
                    heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("");
                    setSubHeading("");
                  }}
                >
                  {link.name}
                  <span className="text-xl md:hidden inline">
                    {heading === link.name ? (
                      <LuChevronUp />
                    ) : (
                      <LuChevronDown />
                    )}
                  </span>
                  <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <LuChevronDown />
                  </span>
                </h1>
                {link.submenu && (
                  <div>
                    <div className="z-[50] absolute top-20 hidden group-hover:md:block hover:md:block ">
                      <div className="py-3">
                        <div
                          className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                        ></div>
                      </div>
                      <div className="bg-white p-5 grid grid-cols-1 gap-10 shadow-md rounded-lg">
                        {link.sublinks.map((mysublinks, index) => (
                          <div key={index}>
                            {mysublinks.sublink.map((slink, idx) => (
                              <li
                                key={idx}
                                className="text-md text-gray-600 my-2.5 p-2"
                              >
                                <Link
                                  to={slink.link}
                                  className={`hover:text-primaryColor hover:bg-gray-200 w-full  `}
                                >
                                  <div>
                                    <h3>{slink.name}</h3>
                                    <h3>{slink.description}</h3>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Mobile menus */}
              <div
                className={`
              ${heading === link.name ? "md:hidden" : "hidden"}
              `}
              >
                {/* sublinks */}
                {link.sublinks.map((slinks, index) => (
                  <div key={index}>
                    <h1
                      onClick={() =>
                        setSubHeading(
                          slinks.name === subHeading ? "" : slinks.name
                        )
                      }
                      className="pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                    >
                      {slinks.name}
                    </h1>
                    {slinks.sublink.map((slink, idx) => (
                      <li key={idx} className="py-3 pl-14">
                        <Link to={slink.link} onClick={handleLinkClick}>
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div
            onClick={closeMobileMenu}
            className="flex justify-between pt-5 pr-7"
          >
            {user ? (
              <>
                <div
                  onClick={() => {
                    dispatch(signOutAsync());
                  }}
                >
                  <Link
                    to="/login"
                    className="bg-primaryColor text-sm sm:text-base p-1 sm:py-2 sm:px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
                  >
                    Logout
                  </Link>
                </div>
                <div className="">
                  <Link to="/user">
                    <figure className="w-[45px] h-[45px] rounded-full cursor-pointer">
                      <img
                        src={avatar}
                        className="w-full rounded-full"
                        alt="user"
                      />
                    </figure>
                  </Link>
                </div>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="bg-primaryColor text-sm sm:text-base p-1 sm:py-2 sm:px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
                >
                  Login
                </Link>
              </li>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
