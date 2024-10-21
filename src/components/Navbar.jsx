import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="w-full flex items-center justify-between shadow-md fixed z-50 top-0 bg-opacity-80 backdrop-blur-md bg-[#01111a8d] py-1">
      {/* Logo */}
      <h1
        title="Reload"
        onClick={() => navigate("/")}
        className="text-3xl pl-[10%] text-[#9067c6] font-medium cursor-pointer"
      >
        TC
      </h1>

      {/* Hamburger Button */}
      <div
        className="flex flex-col justify-center items-center space-y-1 md:hidden cursor-pointer z-50 pr-10 absolute right-0"
        onClick={toggleMenu}
      >
        <span
          className={`block w-7 h-0.5 bg-gray-300 transition-transform duration-500 ${
            showMenu ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-gray-300 transition-opacity duration-500 ${
            showMenu ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-gray-300 transition-transform duration-500 ${
            showMenu ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </div>

      {/* Links */}
      <ul
        className={`text-xl flex items-center gap-8 pr-[10%] transition-transform duration-500 transform md:transform-none ${
          showMenu
            ? "fixed inset-0 flex flex-col items-center justify-center gap-8 h-screen bg-[#431f47] text-white"
            : "translate-x-full md:translate-x-0"
        }`}
      >
        <li onClick={hideMenu}>
          <Link
            to="/"
            className="flex items-center gap-2 text-[#c2c1c2] hover:text-[#9067c6]"
          >
            <AiOutlineHome /> <span>Home</span>
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link
            to="/About"
            className="flex items-center gap-2 text-[#c2c1c2] hover:text-[#9067c6]"
          >
            <BsPerson /> <span>About</span>
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link
            to="/Project"
            className="flex items-center gap-2 text-[#c2c1c2] hover:text-[#9067c6]"
          >
            <BsCodeSlash /> Projects
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link
            to="/Resume"
            className="flex items-center gap-2 text-[#c2c1c2] hover:text-[#9067c6]"
          >
            <CgFileDocument /> <span>Resume</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
