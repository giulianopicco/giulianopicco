import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <nav id="header" class="fixed w-full z-30 top-0 text-white gradient">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div class="pl-4 flex items-center">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            MAX
          </NavLink>
        </div>
        <div class="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              class="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-white p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            {/* <li class="mr-3">
              <a
                class="inline-block py-2 px-4 text-white font-bold no-underline"
                href="#"
              >
                Active
              </a>
            </li> */}
            <li class="mr-3">
              <NavLink
                to="/post"
                activeClassName="text-red-100 bg-red-700"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-white no-underline hover:text-gray-800 hover:text-underline"
              >
                Blog Posts
              </NavLink>
            </li>
            <li class="mr-3">
              <NavLink
                to="/project"
                activeClassName="text-red-100 bg-red-700"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-white no-underline hover:text-gray-800 hover:text-underline"
              >
                Projects
              </NavLink>
            </li>
            <li class="mr-3">
              <NavLink
                to="/about"
                activeClassName="text-red-100 bg-red-700"
                className="inline-flex items-center py-3 px-3 my-6 rounded text-white no-underline hover:text-gray-800 hover:text-underline"
              >
                About me!
              </NavLink>
            </li>
          </ul>
          <button
            id="navAction"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Action
          </button>
        </div>
        <div className="inline-flex py-3 px-3 my-6">
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
        </div>
      </div>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default NavBar;
