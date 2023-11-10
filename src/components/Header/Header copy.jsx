import React, { useEffect, useRef } from "react";
import logo from "../../assets/icons/logo-new-cropped.png";
import { NavLink, Link } from "react-router-dom";
import userImgMask from "../../assets/team/abhijay_maskable.png";
import avatar from "../../assets/icons/avatar-icon.png";

import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/knowledge-centre",
    display: "Knowledge Centre",
  },
  {
    path: "/pricing",
    display: "Pricing",
  },
  {
    path: "/team",
    display: "Team",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

export default function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ================= logo ============ */}
          <div className="w-[180px]">
            <img src={logo} className="w-full" alt="Logo" />
          </div>

          {/* ========== menu ================ */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ========= nav right ========= */}
          <div className="flex items-center gap-4">
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

            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
