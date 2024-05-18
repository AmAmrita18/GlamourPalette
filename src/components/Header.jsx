import { useEffect, useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logobeauty (2).png";
import menu from "/MENU.png";

import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const Header = ({ transparent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full bg-transparent   ${transparent && "bg-[#1E1E1E82]"}`}
    >
      <div className="flex justify-between items-center w-[80%] max-w-[1200px]  py-8 mx-auto">
        <ul className="md:flex items-center hidden lg:gap-x-14 md:gap-x-8  gap-4 md:text-[17px] text-[15px] text-white leading-5">
          <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive && "font-extrabold"}`}
            >
              HOME
            </NavLink>
          </li>
          <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
            <NavLink
              to="/about"
              className={({ isActive }) => `${isActive && "font-extrabold"}`}
            >
              ABOUT
            </NavLink>
          </li>
        </ul>
        <div className="lg:ml-[9rem]">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="lg:w-[80px] lg:h-[80px] md:w-[70px] md:h-[70px] w-[60px] h-[60px]  object-cover"
              width={80}
              height={80}
              loading="lazy"
            />
          </Link>
        </div>

        <ul className="md:flex  items-center hidden lg:gap-x-14 md:gap-x-8  gap-4 md:text-[17px] text-[15px] text-white leading-5">
          <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
            <NavLink
              to="/properties"
              className={({ isActive }) => `${isActive && "font-extrabold"}`}
            >
              SERVICES
            </NavLink>
          </li>
          <li className="transition-all duration-700 ease-in-out   hover:scale-95 ">
              <NavLink
                to="/blog"
                className={({ isActive }) => `${isActive && "font-extrabold"}`}
              >
                BLOG
              </NavLink>
            </li>
          <div>
            <NavLink to="/contacts">
              <img src={menu} width={60} height={60} alt="" />
            </NavLink>
          </div>
        </ul>

        <div className="md:hidden flex justify-center items-center">
          <div
            onClick={toggleMenu}
            className="text-[#FFFFFF] cursor-pointer focus:outline-none"
          >
            {isMenuOpen ? (
              <IoIosCloseCircle onClick={toggleMenu} className="w-10 h-10 " />
            ) : (
              <FaBars onClick={toggleMenu} className="w-6 h-6" />
            )}
          </div>
        </div>

        <div
          className={`space-y-4 w-[85%]  rounded-2xl max-w-[1200px] mx-auto px-4 md:hidden mt-16 py-32 bg-[#937D64] opacity-95 ${
            isMenuOpen ? "block fixed top-14 right-0 left-0" : "hidden"
          }`}
        >
          <ul className=" flex flex-col items-center  lg:gap-x-14 md:gap-x-8  gap-8 md:text-[17px] text-[15px] font-[700] text-white leading-5">
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink
                to="/"
                className={({ isActive }) => `${isActive && "text-underline"}`}
              >
                HOME
              </NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink
                to="/about"
                className={({ isActive }) => `${isActive && "text-underline"}`}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink
                to="/properties"
                className={({ isActive }) => `${isActive && "text-underline"}`}
              >
                SERVICES
              </NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink
                to="/blog"
                className={({ isActive }) => `${isActive && "text-underline"}`}
              >
                BLOG
              </NavLink>
            </li>

            <NavLink to="/contacts">
              <img src={menu} width={60} height={60} alt="" />
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
