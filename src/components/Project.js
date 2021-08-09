import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

import { motion } from "framer-motion";

import LoadingLogo from "./LoadingLogo";

const Project = ({setShowModal, loadModal}) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(null);

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          backgroundImage{
            asset->{
              _id,
              url
            }
          },
          date,
          place,
          "images":imagesGallery[].asset->{_id, url},
          description,
          projectType,
          link,
          tags,
        }`
      )
      .then((data) => {
        setLoading(false);
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="bg-color1 min-h-screen p-4 lg:p-12 mt-14 lg:mt-28">
      <section className="container mx-auto">
        <h1 className="text-3xl lg:text-5xl text-gray-200 flex justify-center cursive">
          {" "}
          My Projects
        </h1>
        <h2 className="text-lg text-white flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        {loading ? (
          <LoadingLogo />
        ) : (

          <section className="grid md:grid-cols-1">
            {projects &&
              projects.map((project, index) => (
                <div class="wrapper mb-8 lg:px-16">
                  <div className="grid grid-rows-5 md:grid-rows-1 md:grid-cols-5">
                    {/* <motion.img
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src={`https://source.unsplash.com/collection/190727/${
                        350 + index
                      }x${350 + index}`}
                      alt=" random imgee"
                      class="w-full h-52 md:h-80  object-cover object-center rounded-lg shadow-md row-start-1 row-end-4 col-start-1 col-end-2 md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-2"
                    /> */}
                    {project.backgroundImage?.asset?.url?.length > 0 ?
                    <div
                     className="w-full transform transition hover:scale-101 cursor-pointer rounded-lg shadow-md row-start-1 row-end-4 col-start-1 col-end-2 md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-2">
                    <motion.img
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src={project.backgroundImage.asset.url}
                      alt={project.title}
                      className="w-full object-cover object-center rounded-lg"
                      style={{ height: "400px" }}
                      onClick={(() => loadModal(project.images))}
                    />
                    </div> :
                    <div class="h-full w-full shadow-md row-start-1 row-end-4 col-start-1 col-end-2 md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-2 rounded-xl bg-gray-200" ></div>
                    }

                    {/* <div class="relative px-4 -mt-16"> */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      class="px-4 row-start-3 row-end-6 col-start-1 col-end-2 md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-2 md:self-center"
                    >
                      <div class="bg-glass-white-strong p-6 rounded-lg shadow-lg">
                        
                        {project.tags && <div class="flex flex-wrap items-baseline">
                          
                              {project.tags.map(tag => (
                                <div class="mr-2 mb-2 bg-gray-500 p-1 px-2 rounded text-white uppercase text-xs font-semibold tracking-wider">
                                  {tag}
                                </div>
                              ))} 
                        </div>}

                        <h4 class="mt-1 text-xl text-pink-700 font-semibold uppercase leading-tight truncate">
                          {project.title}
                        </h4>

                        <div class="mt-1">
                          Company:
                          <span class="text-gray-600 text-sm">
                            {" "}
                            {project.place}
                          </span>
                        </div>
                        {project.date && (
                          <div class="mt-1">
                            Finish on:
                            <span class="text-gray-600 text-sm">
                              {" "}
                              {new Date(project.date).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                        <div class="mt-1">
                          Type:
                          <span class="text-gray-600 text-sm">
                            {" "}
                            {project.projectType}
                          </span>
                        </div>
                        <div class="mt-1 font-bold">{project.description}</div>
                        {project.link && <div class="mt-4">
                          <a href={project.link} target="blank" class="text-teal-600 text-pink-700 underline text-md font-semibold">
                            Check it out
                          </a>
                        </div>}
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
          </section>
        )}
      </section>
    </main>
  );
};

export default Project;
