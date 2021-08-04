import React from 'react'
import { NavLink } from 'react-router-dom'

import image from "../assets/img/bg-cosmos.webp";
import img_404 from "../assets/404.svg";

import classes from "./Home.module.scss";

const Page404 = () => {
    return (
        <main>
      <section className="h-screen relative">
        <img
          src={image}
          alt="cosmos background"
          className="absolute object-cover w-full h-full"
        />
        <div className={classes.stars}></div>
        <div className={classes.stars2}></div>
        <div className={classes.stars3}></div>
        <div className="p-3 pt-16 md:mt-4 lg:p-14 lg:pt-48 container mx-auto relative">
    <div class="flex-1 min-h-full min-w-full rounded-3xl bg-glass-color1-strong shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div class="w-full md:w-1/2">
            <div class="mb-10 md:mb-20 text-white font-light">
                <h1 class="font-black uppercase text-3xl lg:text-5xl text-pink-500 mb-10">You seem to be lost!</h1>
                <p class="text-lg">The page you're looking for isn't available.</p>
                <p class="text-lg">Try searching again or use the Go Back button below.</p>
            </div>
            <div class="mb-20 md:mb-0">
            <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
                Go Back
          </NavLink>
            </div>
        </div>
        <div class="w-full md:w-1/2 text-center">
            <img src={img_404} alt="404" />
        </div>
    </div>
        </div>
      </section>
    </main>
    )
}

export default Page404
