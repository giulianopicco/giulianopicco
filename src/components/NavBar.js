import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navBarStyles = "fixed w-full z-50 top-0 text-white";
  const navBarStylesScrolled = "fixed w-full z-50 top-0 text-white gradient";
  const navBarDrawer =
    "flex items-center p-1 text-pink-800 hover:text-indigo-500 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out";
  const navBarDrawerScrolled =
    "flex items-center p-1 text-gray-200 hover:text-indigo-500 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out";
  const navBarActionButton =
    "mx-auto lg:mx-0 hover:underline text-white-800  font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out gradient";
  const navBarActionButtonScrolled =
    "mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out";

  const changeNavBarStyle = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", changeNavBarStyle);

  // var navMenuDiv = document.getElementById("nav-content");
  // var navMenu = document.getElementById("nav-toggle");

  const navMenuDiv = useRef();
  const navMenu = useRef();

  console.log(navMenuDiv);
  console.log(navMenu);

  document.onclick = check;
  function check(e) {
    var target = e && e.target;

    //Nav Menu
    if (!checkParent(target, navMenuDiv.current)) {
      // click NOT on the menu
      if (checkParent(target, navMenu.current)) {
        // click on the link
        if (navMenuDiv.current.classList.contains("hidden")) {
          navMenuDiv.current.classList.remove("hidden");
        } else {
          navMenuDiv.current.classList.add("hidden");
        }
      } else {
        // click both outside link and outside menu, hide menu
        navMenuDiv.current.classList.add("hidden");
      }
    }
  }
  function checkParent(t, elm) {
    while (t.parentNode) {
      if (t == elm) {
        return true;
      }
      t = t.parentNode;
    }
    return false;
  }

  return (
    <nav
      id="header"
      className={!scrolled ? navBarStyles : navBarStylesScrolled}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            MAX
          </NavLink>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            ref={navMenu}
            className={!scrolled ? navBarDrawer : navBarDrawerScrolled}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-gray-900 lg:bg-transparent text-white p-4 lg:p-0 z-20"
          id="nav-content"
          ref={navMenuDiv}
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            {/* <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white font-bold no-underline"
                href="#"
              >
                Active
              </a>
            </li> */}
            <li className="mr-3">
              <NavLink
                to="/post"
                activeClassName="text-red-100 bg-pink-700"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-white no-underline hover:text-indigo-200 hover:text-underline"
              >
                Blog Posts
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                to="/project"
                activeClassName="text-red-100 bg-pink-700"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-white no-underline hover:text-indigo-200 hover:text-underline"
              >
                Projects
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                to="/about"
                activeClassName="text-red-100 bg-pink-700"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-white no-underline hover:text-indigo-200 hover:text-underline"
              >
                About me!
              </NavLink>
            </li>
          </ul>
          <button
            id="navAction"
            className={
              !scrolled ? navBarActionButton : navBarActionButtonScrolled
            }
          >
            Contact Me
          </button>
        </div>
        {/* <div className="inline-flex py-3 px-3 my-6">
          {" "}
          <SocialIcon
            url="https://github.com/giulianopicco"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/max-giuliano-picco-432572171/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div> */}
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default NavBar;
