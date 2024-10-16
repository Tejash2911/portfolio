import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const Navbar = () => {
  const navigate = useNavigate();
  const [navbarBlur, setNavbarBlur] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavbarBlur(true);
    } else {
      setNavbarBlur(false);
    }
  }

  var showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");
    ham[0].classList.toggle("showNavbar");
  };

  var hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarBlur ? "Navbar backdrop:blur-xl bg-[#01111a8d]" : "Navbar"}>
      <h1 title="Reload" onClick={() => navigate("/")} className="Logo">
        TC
      </h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li onClick={hideMenu}>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/About">
            <BsPerson /> About
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/Resume">
            <CgFileDocument /> Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
