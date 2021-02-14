import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import image from "../bg-cosmos.jpg";
import imgProfile from "../assets/profilepic.png";
import svgWeb from "../assets/programming.svg";
import svgMobile from "../assets/mobilepink.svg";
import svgScrumBoard from "../assets/scrum_pink.svg";

import { motion } from "framer-motion";
import TypeIt from "typeit-react";
import classes from "./Home.module.scss";
import ContactForm from "./ContactForm";

import FadeInWhenVisible from "./ui/FadeInWhenVisible";

const Home = () => {
  const contactForm = useRef();

  const scrollToContactForm = () => {
    window.scrollTo(contactForm.current);
  };

  return (
    <main>
      <section className="h-screen relative">
        <motion.img
          src={image}
          alt="cosmos background image"
          className="absolute object-cover w-full h-full"
        />
        <div className={classes.stars}></div>
        <div className={classes.stars2}></div>
        <div className={classes.stars3}></div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          src={imgProfile}
          alt="profile photo"
          className="absolute object-cover w-96 h-96 xl:w-auto xl:h-auto bottom-0 right-0"
        />

        <div className="relative flex flex-col items-center justify-content-center min-h-screen pt-12 lg:pt-64 px-8">
          <TypeIt
            className="text-6x text-gray-100 font-bold cursive leading none lg:leading snug home-name"
            getBeforeInit={(instance) => {
              instance
                .pause(1500)
                .type('"Hello World". ')
                .type("<br>")
                .pause(200)
                .type("I'm Max!");

              // Remember to return it!
              return instance;
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.5 }}
            className={classes.scrollDiv}
          >
            <svg
              className={classes.scroll}
              width="40"
              height="77"
              viewBox="0 0 40 77"
              style={{ transform: "translate(0px, 0px)", opacity: 1 }}
            >
              <g id="scroll" transform="translate(-253 -787)">
                <g
                  id="Rectangle_12"
                  data-name="Rectangle 12"
                  transform="translate(253 787)"
                  fill="rgba(0,0,0,0.4)"
                  stroke="#fff"
                  stroke-width="4"
                >
                  <rect width="40" height="77" rx="20" stroke="none"></rect>
                  <rect
                    x="2"
                    y="2"
                    width="36"
                    height="73"
                    rx="18"
                    fill="none"
                  ></rect>
                </g>
                <circle
                  class="circle"
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  cx="11"
                  cy="11"
                  r="11"
                  transform="translate(262 798)"
                  fill="#fff"
                >
                  <animateTransform
                    id="letter-a"
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="2s"
                    values="262,798;262,832;262,798"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </svg>
          </motion.div>
        </div>

        {/* <div class="sticky bottom-0 -mt-15 sm:-mt-24 md:-mt-28 lg:-mt-36 xl:-mt-96"> */}
        {/* <div class="relative -mt-15 sm:-mt-24 md:-mt-28 lg:-mt-36 xl:-mt-96"> */}
        <div class="absolute bottom-0 w-full">
          <svg viewBox="0 0 1428 174" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#860c35"
                fill-rule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.200000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.300000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.400000003"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill="#011761"
                opacity="1"
                fill-rule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div>
      </section>
      {/* <section className="relative h-screen bg-color1 z-30"> */}
      <section class="relative z-30 bg-color1 py-8">
        <div class="container max-w-5xl mx-auto m-8">
          <h1 class="w-full my-2 text-3xl lg:text-5xl font-bold leading-tight text-center text-gray-200">
            Full Stack Web & Mobile Developer
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto bg-gray-200 w-64 opacity-50 my-0 py-0 rounded-t"></div>
          </div>
          <FadeInWhenVisible>
            <div class="flex flex-wrap">
              <div class="w-5/6 sm:w-1/2 p-6">
                <h3 class="text-2xl lg:text-3xl text-gray-200 font-bold leading-none mb-3 mt-12">
                  Frontend & Backend Technologies
                </h3>
                <p class="text-gray-300">
                  <ul>
                    <li>Good taste on UI & UX affairs</li>
                    <li>JS frameworks (Angular, React)</li>
                    <li>Headless CMS, JAM Stack.</li>
                    <li>API design and development of RESTful Services.</li>
                    <li>Django, Node JS, and PHP.</li>
                  </ul>
                  <br />
                  <br />
                </p>
              </div>
              <div class="w-full sm:w-1/2 p-6">
                <img
                  src={svgWeb}
                  className="w-5/6 sm:h-64 mx-auto"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.5}>
            <div class="flex flex-wrap flex-col-reverse sm:flex-row">
              <div class="w-full sm:w-1/2 p-6 lg:mt-6">
                <img src={svgMobile} className="w-5/6 sm:h-64 mx-auto" alt="" />
              </div>
              <div class="w-full sm:w-1/2 p-6 lg:mt-6">
                <div class="align-middle">
                  <h3 class="text-2xl lg:text-3xl text-gray-200 font-bold leading-none mb-3 mt-12 lg:mt-0">
                    Mobile Development
                  </h3>
                  <p class="text-gray-300">
                    <ul>
                      <li>Native Android experience.</li>
                      <li>
                        Mobile hybrid Development (Ionic, React Native,
                        Flutter).
                      </li>
                      <li>
                        SOLID principles, mobile design patterns (MVVM, BLoC).
                      </li>
                    </ul>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.5}>
            <div class="flex flex-wrap">
              <div class="w-5/6 sm:w-1/2 p-6 lg:mt-6">
                <h3 class="text-2xl lg:text-3xl text-gray-200 font-bold leading-none mb-3 mt-12 lg:mt-0">
                  Agile methodologies
                </h3>
                <p class="text-gray-300">
                  <ul>
                    <li>SCRUM</li>
                    <li>Kanban</li>
                    <li>Jira</li>
                    <li>PROficient Git user</li>
                  </ul>
                  <br />
                  <br />
                </p>
              </div>
              <div class="w-full sm:w-1/2 p-6 lg:mt-6">
                <img src={svgScrumBoard} alt="" srcset="" />
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <section class="relative z-30 bg-color1 py-8">
        <div class="container mx-auto flex flex-wrap lg:flex-nowrap pt-4 pb-12 px-8 xl:px-32">
          {/* <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-200">
            Title
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto bg-indigo-50 w-64 opacity-50 my-0 py-0 rounded-t"></div>
          </div> */}
          <div class="w-full md:w-1/3 p-6 flex bg-neo-color1 flex-col flex-grow flex-shrink">
            <div class="flex-1 no-outline rounded-t rounded-b-none overflow-hidden">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <div class="w-full heading font-bold text-xl text-gray-200 px-6 pt-6">
                  Personal Blogs.
                </div>
                <p class="text-gray-200 text-base px-6 mb-5">
                  Here I post some articles about the tech Industry.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto  rounded-b rounded-t-none overflow-hidden p-6">
              <div class="flex items-center justify-center lg:justify-start">
                <Link to={`/post/`}>
                  <button class="mx-auto lg:mx-0 hover:underline gradient-neo text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    See more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex bg-neo-color1 flex-col flex-grow flex-shrink my-10 md:my-0 md:ml-10 lg:mx-10">
            <div class="flex-1 rounded-t rounded-b-none overflow-hidden">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <div class="w-full heading font-bold text-xl text-gray-200 px-6 pt-6">
                  Projects.
                </div>
                <p class="text-gray-200 text-base px-6 mb-5">
                  Here you can see my personal portfolio.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto rounded-b rounded-t-none overflow-hidden p-6">
              <div class="flex items-center justify-center">
                <Link to={`/project/`}>
                  <button class="mx-auto lg:mx-0 hover:underline gradient-neo text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    See more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex bg-neo-color1 flex-col flex-grow flex-shrink md:mt-10 lg:mt-0">
            <div class="flex-1 rounded-t rounded-b-none overflow-hidden">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <div class="w-full heading font-bold text-xl text-gray-200 px-6 pt-6">
                  About me.
                </div>
                <p class="text-gray-200 text-base px-6 mb-5">
                  If you want to know a bit more about me and get in touch.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto rounded-b rounded-t-none overflow-hidden p-6">
              <div class="flex items-center justify-center lg:justify-end">
                <Link to={`/about/`}>
                  <button class="mx-auto lg:mx-0 hover:underline gradient-neo text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    See more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="gradient">
        <svg class="wave-top" viewBox="0 0 1439 147" version="1.1">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
              <g class="wave" fill="#011761">
                <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
              </g>
              <g transform="translate(1.000000, 15.000000)" fill="#860c35">
                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.300000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.400000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    opacity="0.500000003"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <section ref={contactForm} class="container mx-auto text-center py-6">
          {/* <h1 class="w-full my-2 text-4xl lg:text-5xl font-bold leading-tight text-center text-white">
            Contact Form
          </h1>

          <div class="w-full mb-4">
            <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div> */}

          <ContactForm />

          {/* <h3 class="my-4 text-3xl text-white leading-tight">
            Main Hero Message to sell yourself!
          </h3> */}
        </section>
        <div className="flex align-middle justify-center">
          <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon
              url="https://github.com/giulianopicco"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 45, width: 45 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/max-giuliano-picco-432572171/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 45, width: 45 }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
