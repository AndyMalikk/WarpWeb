import { React, useState, useEffect } from "react";
import Button from "./Button";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  {
    /* Onclick event sets state of sidebarVisible to true or false*/
  }

  function toggleSideBar() {
    setSidebarVisible(() => !sidebarVisible);
  }

  {
    /*USEEFFECT will check if page is scrolled, if it is it will set darker tone for the NAVBAR */
  }
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`bg-transparent fixed top-0 w-full ${scrolled ? "bg-primary" : "bg-transparent"}`}>
      {/*SIDEBAR*/}
      <ul
        id="sidebar"
        className={`fixed top-0 right-0 h-[100vh] w-full sm:w-[350px] z-50 bg-black-blur shadow-sm nav-text flex-col items-start justify-start backdrop-blur-md
        ${
          /*IF sidebarVisible = true the sidebar becomes visible*/
          sidebarVisible ? "flex" : "hidden"
        }`}
      >
        <li
          onClick={toggleSideBar}
          className="h-[75px] mr-auto"
        >
          <a
            href="#"
            className="nav-a"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 -960 960 960"
              width="28px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>
        <li className="h-[75px]">
          <a
            href="#"
            className="nav-a"
          >
            O mně
          </a>
        </li>
        <li className="h-[75px] w-full">
          <a
            href="#"
            className="nav-a"
          >
            Portfolio
          </a>
        </li>
        <li className="h-[75px] w-full">
          <a
            href="#"
            className="nav-a"
          >
            Služby
          </a>
        </li>
        <li className="h-[75px]">
          <a
            href="#"
            className="nav-a"
          >
            <Button
              label="Kontaktovat"
              className="button"
            />
          </a>
        </li>
      </ul>
      {/*DESKTOP*/}
      <ul className="nav-text w-full sticky top-0 h-[75px] list-none flex justify-end items-center max-w-[1440px] m-auto ">
        <li className=" mr-auto">
          <a
            href="#"
            className="nav-a"
          >
            <img
              src="./imgs/warp-logo.png"
              alt=""
              className="logo"
            />
          </a>
        </li>
        <li className=" nav-li">
          <a
            href="#"
            className="nav-a"
          >
            O mně
          </a>
        </li>
        <li className="nav-li">
          <a
            href="#"
            className="nav-a"
          >
            Portfolio
          </a>
        </li>
        <li className=" nav-li">
          <a
            href="#"
            className="nav-a"
          >
            Služby
          </a>
        </li>
        <li className=" nav-li">
          <a
            href="#"
            className="nav-a"
          >
            <Button
              label="Kontaktovat"
              className="button"
            />
          </a>
        </li>
        <li
          onClick={toggleSideBar}
          className=""
        >
          <a
            href="#"
            className="nav-a lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 -960 960 960"
              width="28px"
              fill="#e8eaed"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
