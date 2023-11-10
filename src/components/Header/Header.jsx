import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/icons/logo-new-cropped.png";
import { NavLink, Link } from "react-router-dom";
import userImgMask from "../../assets/team/abhijay_maskable.png";
import avatar from "../../assets/icons/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { ImLocation, ImLocation2 } from "react-icons/im";
import LocationModal from "../common/LocationModal";
import { locations } from "../../assets/data/locations";
import Modal from "../common/Modal";
import AppointmentForm from "../Forms/AppointmentForm";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLoggedInUserAsync,
  selectUserInfo,
} from "../../store/user/userSlice";
import { getToken, setToken } from "../../utils/HelperFunctions";
import { selectUserChecked, signOutAsync } from "../../store/auth/authSlice";

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
  const { token, loading, user } = useSelector((state) => state.auth);
  //initial user value
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

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (auth) {
  //     console.log(auth.userId);
  //     fetchLoggedInUserAsync(auth.userId);
  //   }
  // }, [dispatch, auth]);

  // const user = getToken();

  const [openModal, setOpenModal] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setOpenModal(true), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  // Function to handle location selection
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleSearchInputChange = (event) => {
    const searchText = event.target.value;
    setSearchInput(searchText);

    // Filter locations based on the search input
    const filtered = locations.filter((location) =>
      location.city.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredLocations(filtered);
  };

  const clearSearch = () => {
    setSearchInput("");
    setFilteredLocations([]);
  };
  const onModalClose = () => {
    setIsLocationModalOpen(false);
  };

  return (
    <>
      <header className="header flex items-center" ref={headerRef}>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* ================= logo ============ */}
            <div className="w-[180px]">
              <img
                src={logo}
                className="w-full"
                alt="Logo"
                onClick={() => {
                  dispatch(signOutAsync());
                }}
              />
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

            <div className="flex items-center gap-4 transition-all">
              <div className="flex items-center">
                <div
                  className="bg-primaryColor text-black sm:text-[16px] py-2 px-3 leading-7 font-[600] cursor-pointer flex items-center gap-1 rounded-[50px]"
                  onClick={() => setOpenModal(true)}
                >
                  <span className="text-white">Book an Appointment</span>
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className="bg-yellowColor text-black sm:text-[16px] py-2 px-3 leading-7 font-[600]  cursor-pointer flex items-center gap-1 rounded-[50px]"
                  onClick={() => setIsLocationModalOpen(true)}
                >
                  <ImLocation
                    className="cursor-pointer text-black"
                    onClick={() => setIsLocationModalOpen(true)}
                  />
                  <span className="hidden sm:block">
                    {selectedLocation ? selectedLocation.city : "Select City"}
                  </span>
                </div>
              </div>

              {isLocationModalOpen && (
                <LocationModal
                  close={onModalClose}
                  allLocations={locations}
                  open={isLocationModalOpen}
                  filteredLocations={filteredLocations}
                  searchInput={searchInput}
                  onSearchInputChange={handleSearchInputChange}
                  onLocationSelect={handleLocationSelect}
                  onClearSearch={clearSearch}
                />
              )}

              {user ? (
                <div className="">
                  <h2>fname:{user.fname}</h2>
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
                <Link to="/login">
                  <button className="bg-primaryColor text-sm sm:text-base p-1 sm:py-2 sm:px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                    Login
                  </button>
                </Link>
              )}

              <span className="md:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </header>
      <Modal
        open={openModal}
        close={() => {
          setOpenModal(false);
        }}
        title={`Book an Appointment`}
      >
        <div className="w-[600px]">
          <AppointmentForm />
        </div>
      </Modal>
    </>
  );
}
